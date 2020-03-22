import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './index.css';
import { Footer, RadioButtonGroup, FormField, TextInput, Box, Text } from 'grommet';
import { useTranslation } from 'react-i18next';
import withSiteLayout from '../../components/withSiteLayout';
import CustomButton from '../../components/CustomButton';
import LearnMore from '../../components/LearnMore';
import axios from '../../axiosConfig';

const Enrich = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const [value, setValue] = useState('dontHave');
  const [input, setInput] = useState(false);
  const [dateSince, setDateSince] = useState('');
  const radioOptions = [{
      "disabled": false,
      "id": "dontHave",
      "name": "dontHave",
      "value": "dontHave",
      "label": "I don\'t have Covid"
    },
    {
      "disabled": false,
      "id": "mayHave",
      "name": "mayHave",
      "value": "mayHave",
      "label": "I may have Covid"
    },
    {
      "disabled": false,
      "id": "Have",
      "name": "Have",
      "value": "Have",
      "label": "I have Covid since"
    },
    {
      "disabled": false,
      "id": "N/A",
      "name": "N/A",
      "value": "N/A",
      "label": "I prefer not to say"
    }
  ];

  const privacyStyle = {color: 'grey', marginTop: 30, textAlign: 'center', fontSize: 14, display: 'block'};

  const onChangeRadioButtonHandler = event => {
    setValue(event.target.value);
    event.target.value === 'mayHave' || event.target.value === 'Have' ? setInput(true) : setInput(false);
  }

  const onChangeDateHandler = event => setDateSince(event.target.value);

  const onSendCovidStatusHandler = () => {
    const data = {'status': value, 'since': dateSince};
    axios.post('/enrich-data', data)
      .then(res => res);
    
    history.push("/score");
  }

  return (
    <>
      <Box pad="large" style={{backgroundColor: '#e8e7e7'}}>
        <div style={{backgroundColor: 'white', borderRadius: 10}}>
          <div className="CovidBanner" style={{padding: '30px 20px', textAlign: 'center', borderRadius: '10px 10px 0px 0px'}}>
            <Text color="white">{t('For the first time people from all the world are in the same cause. We can all help to save lives')}</Text>
          </div>
          <div style={{padding: 20}}>
            <Text style={{marginBottom: 15, fontSize: 14, display: 'block'}}>{t('Please select your status to enrich location map to others can get accurate info.')}</Text>
            <RadioButtonGroup
              className="RadioIsCovidGroup"
              name="CovidStatus"
              options={radioOptions}
              value={value}
              onChange={onChangeRadioButtonHandler}
            />
          </div>

          {input && 
            <FormField style={{padding: 10}} className="LabelTimeSinceCovid" label={t('Since when you think you have Covid?')}>
              <TextInput 
                type="date" 
                value={dateSince} 
                onChange={onChangeDateHandler} />
            </FormField>
          }

        </div>
        <Text style={privacyStyle}>{t('This will be protected by privacy & terms of use')}</Text>
        <LearnMore linkUrl="/enrich" />
      </Box>
      <Footer pad="medium" style={{display: 'block'}}>
        <CustomButton 
          send 
          style={{marginBottom: 10}} 
          text={t("Send")} 
          onClick={onSendCovidStatusHandler}
        />
        <CustomButton skip text={t("Skip")} onClick={() => history.push("/score")} />
      </Footer>
    </>
  );
};

export default withSiteLayout(Enrich);