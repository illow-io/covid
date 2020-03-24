import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Heading, Paragraph } from 'grommet';
import { FormPreviousLink } from 'grommet-icons';
import AppHeader from '../../components/AppHeader';

const Privacy = props => {

    const privacyTexts = [
        {id: 1, heading: 'How will we use your personal data?', description: 'We will only use your personal data in accordance with Data Protection Legislation and the Data Protection Principles. Most commonly, we will use your personal data to model the spread of the virus based on the contact with other people at risk and the time spent in highly infected areas.'},
        {id: 2, heading: 'What data will we collect?', description: 'We only collect the data that you share with us. In this case, only geolocation data linked to your Google account (so you can log-in to the Service and make possible your data deletion if requested) that will be used for the specific purposes described before.'},
        {id: 3, heading: 'Data owner right of access', description: 'The data owner will always have the right to request or claim the right of access in order to rectify, update or delete their personal data. If we need to use your personal data for an unrelated purpose, we will notify you and ask you for your explicit consent to do so. We are using Wibson technology to give users their rights of data ownership.'},
        {id: 4, heading: 'Data retention', description: 'How long will you use my personal data for? We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. The data owner will always have the right to request or claim the right of access in order to rectify, update or delete their personal data.'},
        {id: 5, heading: 'Contacting us', description: 'We are responsible for your personal data. If you have any questions about this privacy notice, please contact us at: <a href="mailto:info@mycovidrisk.org">info@mycovidrisk.org</a>'},
    ];

    const termsTexts = [
        {id: 1, heading: 'Description of the Service', description: 'MyCovidRisk mission is to collaborate with the battle that the world is fighting against COVID-19 virus. When you register to use our Service and share your geolocation data you are allowing us to use your personal data to model the spread of the virus based on the contact with other people at risk and the time spent in highly infected areas.'},
        {id: 2, heading: 'General', description: 'These Terms of Service (“TOS”), is an agreement between MyCovidRisk and every person accessing and/or using MyCovidRisk’s Service. By registering to our Services, you represent that you have read, understood, accepted and agreed to be bound by these Terms. If you do not agree to these Terms, or to any part thereof, you should cease all use of the Services.'},
        {id: 3, heading: 'Account Information', description: 'In order to use our Services, you would be required to first create an account by signing in via your Google account . After registration you will be asked to download and share your location data.'},
        {id: 4, heading: 'Intellectual Property Ownership', description: 'MyCovidRisk and/or its affiliates own all right, title, and interest, including copyrights and other intellectual property rights, in and to all the Services’ Materials. You hereby acknowledge that you do not acquire any ownership rights by using the Service or by accessing any of the Services’ Materials, or rights to any derivative works thereof.'},
        {id: 5, heading: 'Links, Search Engines', description: 'The Service may contain links to other websites or resources ("Linked Sites"). The Linked Sites are not under the control of MyCovidRisk and MyCovidRisk is not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site.<br/> For any questions about these Terms or any other issue please send us an email to <a href="mailto:info@mycovidrisk.org">info@mycovidrisk.org</a>'},
    ];

    const privacyParagraphs = privacyTexts.map(privacy => (
        <Paragraph key={privacy.id}><b>{privacy.heading}</b><br/><div dangerouslySetInnerHTML={{__html: privacy.description}}></div></Paragraph>
    ));

    const termsParagraphs = termsTexts.map(terms => (
        <Paragraph key={terms.id}><b>{terms.heading}</b><br/><div dangerouslySetInnerHTML={{__html: terms.description}}></div></Paragraph>
    ));
    
    return (
        <>
            <AppHeader />
            <Box pad="large">
                <NavLink to="/sign-in"><FormPreviousLink color="#000"/></NavLink>
                <Heading>Privacy Policy</Heading>
                {privacyParagraphs}
                <Heading>Terms of Service</Heading>
                {termsParagraphs}
            </Box>
        </>
    )
};

export default Privacy;