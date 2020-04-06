import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';
import { RadioButtonGroup, FormField, TextInput, Box, Text } from 'grommet';
import { useTranslation } from 'react-i18next';
import withSiteLayout from '../../components/withSiteLayout';
import CustomButton from '../../components/CustomButton';
import SimpleLoader from '../../components/Loader/SimpleLoader/SimpleLoader';
import LearnMore from '../../components/LearnMore';
import api from '../../services/api';

const Enrich = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const [value, setValue] = useState('dontHave');
  const [input, setInput] = useState(false);
  const [dateSince, setDateSince] = useState('');
  const [loading, setLoading] = useState(false);
  const radioOptions = [
    {
      disabled: false,
      id: 'dontHave',
      name: 'dontHave',
      value: 'dontHave',
      label: t('DONT_HAVE_COVID')
    },
    {
      disabled: false,
      id: 'mayHave',
      name: 'mayHave',
      value: 'mayHave',
      label: t('MAY_HAVE_COVID')
    },
    {
      disabled: false,
      id: 'have',
      name: 'Have',
      value: 'have',
      label: t('HAVE_COVID')
    },
    {
      disabled: false,
      id: 'had',
      name: 'Had',
      value: 'had',
      label: t('HAD_COVID')
    },
    {
      disabled: false,
      id: 'N/A',
      name: 'N/A',
      value: 'N/A',
      label: t('NO_SAY')
    }
  ];

  const privacyStyle = {
    color: 'grey',
    marginTop: 30,
    textAlign: 'center',
    fontSize: 14,
    display: 'block'
  };

  const onChangeRadioButtonHandler = event => {
    setValue(event.target.value);
    event.target.value === 'had' || event.target.value === 'have'
      ? setInput(true)
      : setInput(false);
  };

  const onChangeDateHandler = event => setDateSince(event.target.value);

  const onSendCovidStatusHandler = async () => {
    setLoading(true);
    const date = new Date(dateSince);
    const since = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
    try {
      await api.post('/data/enrich', {}, { status: value, since });
      history.push('/score');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box rows={['flex', 'auto']}>
      <Box pad="large" style={{ backgroundColor: '#e8e7e7' }} overflow="auto">
        <div style={{ backgroundColor: 'white', borderRadius: 10 }}>
          <div
            className="CovidBanner"
            style={{
              padding: '30px 20px',
              textAlign: 'center',
              borderRadius: '10px 10px 0px 0px'
            }}>
            <Text color="white">{t('ENRICH_TITLE')}</Text>
          </div>
          <div style={{ padding: 20 }}>
            <Text style={{ marginBottom: 15, fontSize: 14, display: 'block' }}>
              {t('ENRICH_SUBTITLE')}
            </Text>
            <RadioButtonGroup
              className="RadioIsCovidGroup"
              name="CovidStatus"
              options={radioOptions}
              value={value}
              onChange={onChangeRadioButtonHandler}
            />
          </div>

          {input && (
            <FormField
              style={{ padding: 10 }}
              className="LabelTimeSinceCovid"
              label={t('ENRICH_QUESTION_DATE')}>
              <TextInput
                type="date"
                value={dateSince}
                onChange={onChangeDateHandler}
              />
            </FormField>
          )}
        </div>
        <Text style={privacyStyle}>{t('TERMS_AND_CONDITIONS')}</Text>
        <LearnMore linkUrl="/privacy" margin={{ vertical: 'small' }} />
      </Box>
      <Box pad="medium" gap="medium">
        {loading ? (
          <SimpleLoader />
        ) : (
          <CustomButton
            primary
            text={t('BUTTON_SEND_LABEL')}
            onClick={onSendCovidStatusHandler}
          />
        )}
        <CustomButton
          tertiary
          text={t('BUTTON_SKIP_LABEL')}
          onClick={() => history.push('/score')}
        />
      </Box>
    </Box>
  );
};

export default withSiteLayout(Enrich);
