import React, { useState } from 'react';
import './index.css';
import { Footer, RadioButtonGroup, FormField, TextInput, Box, Text } from 'grommet';
import { useTranslation } from 'react-i18next';
import withSiteLayout from '../../components/withSiteLayout';
import CustomButton from '../../components/CustomButton';

const Enrich = () => {
  const { t } = useTranslation();

  const [value, setValue] = useState('I don\'t have Covid');
  const [input, setInput] = useState(false);
  const radioOptions = ['I don\'t have Covid', 'I may have Covid', 'I have Covid since', 'I prefer not to say'];

  const privacyStyle = {color: 'grey', marginTop: 30, textAlign: 'center', fontSize: 14, display: 'block'};

  const onChangeRadioButtonHandler = event => {
    setValue(event.target.value);
    event.target.value === 'I may have Covid' || event.target.value === 'I have Covid since' ? setInput(true) : setInput(false);
  }

  return (
    <>
      <Box pad="large" style={{backgroundColor: '#e8e7e7'}}>
        <div style={{backgroundColor: 'white', borderRadius: 10}}>
          <div style={{backgroundColor: '#865ED6', padding: '30px 20px', textAlign: 'center', borderRadius: '10px 10px 0px 0px'}}>
            <Text color="white">For the first time people from all the world are in the same cause. We can all help to save lives</Text>
          </div>
          <div style={{padding: 20}}>
            <Text style={{marginBottom: 15, fontSize: 14, display: 'block'}}>Please select your status to enrich location map to others can get accurate info.</Text>
            <RadioButtonGroup
              className="RadioIsCovidGroup"
              name="CovidStatus"
              options={radioOptions}
              value={value}
              onChange={onChangeRadioButtonHandler}
            />
          </div>

          {input && 
            <FormField style={{padding: 10}} className="LabelTimeSinceCovid" label="Since when you think you have Covid?">
              <TextInput type="date"  />
            </FormField>
          }

        </div>
        <Text style={privacyStyle}>This will be protected by privacy & terms of use</Text>
      </Box>
      <Footer pad="medium" style={{display: 'block'}}>
        <CustomButton send style={{marginBottom: 10}} text={t("Send")} />
        <CustomButton skip text={t("Skip")} />
      </Footer>
    </>
  );
};

export default withSiteLayout(Enrich);