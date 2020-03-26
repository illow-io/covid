import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Heading, Paragraph } from 'grommet';
import { FormPreviousLink } from 'grommet-icons';
import AppHeader from '../../components/AppHeader';

const Privacy = props => {
    const history = useHistory();
    const [switchLanguage, setSwitchLanguage] = useState(false);

    const privacyTextsSpanish = [
        { id: 1, heading: '¿Cómo usaremos tus datos personales?', description: 'Solo utilizaremos sus datos personales de acuerdo con la legislación de protección de datos y los principios de protección de datos. Mayormente, utilizaremos sus datos personales para modelar la propagación del virus en función del contacto con otras personas en riesgo y el tiempo que pasó en áreas altamente infectadas.' },
        { id: 2, heading: '¿Qué datos vamos a almacenar?', description: 'Solo recopilamos los datos que comparte con nosotros. En este caso, solo los datos de geolocalización vinculados a su cuenta de Google (para que pueda iniciar sesión en el Servicio y hacer posible la eliminación de sus datos si así lo solicita) que se utilizarán para los fines específicos descritos anteriormente.' },
        { id: 3, heading: 'Derecho de acceso del dueño de los datos', description: 'El propietario de los datos siempre tendrá derecho a solicitar o reclamar el derecho de acceso para rectificar, actualizar o eliminar sus datos personales. Si necesitamos usar sus datos personales para un propósito no relacionado, le notificaremos y le pediremos su consentimiento explícito para hacerlo. Estamos utilizando la tecnología Wibson para otorgar a los usuarios sus derechos de propiedad de datos.' },
        { id: 4, heading: 'Retención de datos', description: '¿Durante cuánto tiempo utilizarán mis datos personales? Solo retendremos sus datos personales durante el tiempo que sea necesario para cumplir con los fines para los que los recopilamos, incluso para satisfacer cualquier requisito legal, contable o de informes. El propietario de los datos siempre tendrá derecho a solicitar o reclamar el derecho de acceso para rectificar, actualizar o eliminar sus datos personales.' },
        { id: 5, heading: 'Contáctenos', description: 'Somos los responsables de sus datos personales. Si tiene alguna pregunta sobre este aviso de privacidad, contáctenos en: <a href="mailto:info@mycovidrisk.org">info@mycovidrisk.org</a>' },
    ];

    const privacyTextsEnglish = [
        { id: 1, heading: 'How will we use your personal data?', description: 'We will only use your personal data in accordance with Data Protection Legislation and the Data Protection Principles. Most commonly, we will use your personal data to model the spread of the virus based on the contact with other people at risk and the time spent in highly infected areas.' },
        { id: 2, heading: 'What data will we collect?', description: 'We only collect the data that you share with us. In this case, only geolocation data linked to your Google account (so you can log-in to the Service and make possible your data deletion if requested) that will be used for the specific purposes described before.' },
        { id: 3, heading: 'Data owner right of access', description: 'The data owner will always have the right to request or claim the right of access in order to rectify, update or delete their personal data. If we need to use your personal data for an unrelated purpose, we will notify you and ask you for your explicit consent to do so. We are using Wibson technology to give users their rights of data ownership.' },
        { id: 4, heading: 'Data retention', description: 'How long will you use my personal data for? We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. The data owner will always have the right to request or claim the right of access in order to rectify, update or delete their personal data.' },
        { id: 5, heading: 'Contacting us', description: 'We are responsible for your personal data. If you have any questions about this privacy notice, please contact us at: <a href="mailto:info@mycovidrisk.org">info@mycovidrisk.org</a>' },
    ];

    const termsTextsSpanish = [
        { id: 1, heading: 'Descripción del Servicio', description: 'La misión de MyCovidRisk es colaborar con la batalla que el mundo está luchando contra el virus COVID-19. Cuando se registra para usar nuestro Servicio y comparte sus datos de geolocalización, nos permite usar sus datos personales para modelar la propagación del virus en función del contacto con otras personas en riesgo y el tiempo que pasa en áreas altamente infectadas.' },
        { id: 2, heading: 'General', description: 'Estos Términos de servicio ("TDS") son un acuerdo entre MyCovidRisk y todas las personas que acceden y/o usan el Servicio MyCovidRisk. Al registrarse en nuestros Servicios, usted declara que ha leído, entendido y aceptado estar sujeto a estos Términos. Si no está de acuerdo con estos Términos, o con alguna parte de los mismos, debe dejar de usar los Servicios.' },
        { id: 3, heading: 'Información de Cuenta', description: 'Para utilizar nuestros Servicios, primero deberá crear una cuenta iniciando sesión a través de su cuenta de Google. Después del registro, se le pedirá que descargue y comparta sus datos de ubicación.' },
        { id: 4, heading: 'Propiedad Intelectual', description: 'MyCovidRisk y/o sus filiales poseen todos los derechos, títulos e intereses, incluidos los derechos de autor y otros derechos de propiedad intelectual, en y para todos los Materiales de los Servicios. Por la presente, reconoce que no adquiere ningún derecho de propiedad al usar el Servicio o al acceder a cualquiera de los Materiales de los Servicios, o los derechos a cualquier trabajo derivado del mismo.' },
        { id: 5, heading: 'Links, Search Engines', description: 'El Servicio puede contener enlaces a otros sitios web o recursos ("Sitios vinculados"). Los Sitios vinculados no están bajo el control de MyCovidRisk y MyCovidRisk no es responsable del contenido de ningún Sitio vinculado, incluidos, entre otros, los enlaces contenidos en un Sitio vinculado, ni los cambios o actualizaciones a un Sitio vinculado.<br/> Para cualquier pregunta sobre estos Términos o cualquier otro problema, contáctenos en: <a href="mailto:info@mycovidrisk.org">info@mycovidrisk.org</a>' },
    ];

    const termsTextsEnglish = [
        { id: 1, heading: 'Description of the Service', description: 'MyCovidRisk mission is to collaborate with the battle that the world is fighting against COVID-19 virus. When you register to use our Service and share your geolocation data you are allowing us to use your personal data to model the spread of the virus based on the contact with other people at risk and the time spent in highly infected areas.' },
        { id: 2, heading: 'General', description: 'These Terms of Service (“TOS”), is an agreement between MyCovidRisk and every person accessing and/or using MyCovidRisk’s Service. By registering to our Services, you represent that you have read, understood, accepted and agreed to be bound by these Terms. If you do not agree to these Terms, or to any part thereof, you should cease all use of the Services.' },
        { id: 3, heading: 'Account Information', description: 'In order to use our Services, you would be required to first create an account by signing in via your Google account . After registration you will be asked to download and share your location data.' },
        { id: 4, heading: 'Intellectual Property Ownership', description: 'MyCovidRisk and/or its affiliates own all right, title, and interest, including copyrights and other intellectual property rights, in and to all the Services’ Materials. You hereby acknowledge that you do not acquire any ownership rights by using the Service or by accessing any of the Services’ Materials, or rights to any derivative works thereof.' },
        { id: 5, heading: 'Links, Search Engines', description: 'The Service may contain links to other websites or resources ("Linked Sites"). The Linked Sites are not under the control of MyCovidRisk and MyCovidRisk is not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site.<br/> For any questions about these Terms or any other issue please send us an email to <a href="mailto:info@mycovidrisk.org">info@mycovidrisk.org</a>' },
    ];

    const privacyParagraphsSpanish = privacyTextsSpanish.map(privacy => (
        <Paragraph key={privacy.id}><b>{privacy.heading}</b><br /><div dangerouslySetInnerHTML={{ __html: privacy.description }}></div></Paragraph>
    ));

    const termsParagraphsSpanish = termsTextsSpanish.map(terms => (
        <Paragraph key={terms.id}><b>{terms.heading}</b><br /><div dangerouslySetInnerHTML={{ __html: terms.description }}></div></Paragraph>
    ));

    const privacyParagraphsEnglish = privacyTextsEnglish.map(privacy => (
        <Paragraph key={privacy.id}><b>{privacy.heading}</b><br /><div dangerouslySetInnerHTML={{ __html: privacy.description }}></div></Paragraph>
    ));

    const termsParagraphsEnglish = termsTextsEnglish.map(terms => (
        <Paragraph key={terms.id}><b>{terms.heading}</b><br /><div dangerouslySetInnerHTML={{ __html: terms.description }}></div></Paragraph>
    ));

    return (
        <>
            <AppHeader />
            <Box pad="large">
                <FormPreviousLink color="#000" onClick={() => history.goBack()} />

                <Heading level={5} color="#3b219e" margin={{ horizontal: "none", top: "medium", bottom: "small" }} onClick={() => setSwitchLanguage(!switchLanguage)}>
                    {switchLanguage ? `Español` : `English`}
                </Heading>

                {switchLanguage ?
                    <>
                        <Heading margin={{ horizontal: "none", vertical: "small" }}>Privacy Policy</Heading>
                        {privacyParagraphsEnglish}
                        <Heading>Terms of Service</Heading>
                        {termsParagraphsEnglish}
                    </>
                    :
                    <>
                        <Heading margin={{ horizontal: "none", vertical: "small" }}>Política de Privacidad</Heading>
                        {privacyParagraphsSpanish}
                        <Heading>Términos de Servicio</Heading>
                        {termsParagraphsSpanish}
                    </>
                }

            </Box>
        </>
    )
};

export default Privacy;
