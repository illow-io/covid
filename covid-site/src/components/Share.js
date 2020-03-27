import React from 'react';
import {
    FacebookShareButton,
    WhatsappShareButton,
    TwitterShareButton,
    TwitterIcon,
    WhatsappIcon,
    FacebookIcon
} from "react-share";
import { Box } from 'grommet';

const Share = props => {
    const twitterSpanishText = 'Al virus lo frenamos entre todos. Además de quedarte en casa, sumate a @MyCovidRisk y sé parte de la solución! - ';
    const facebookSpanishText = 'Al virus lo frenamos entre todos. Además de quedarte en casa, sumate a #MyCovidRisk y sé parte de la solución! \nhttps://www.mycovidrisk.org \n\n#SoyParteDeLaSolucion #MyCovidRisk #MiRiesgoCovid';
    const whatsappSpanishText = 'Al virus lo frenamos entre todos. Además de quedarte en casa, sumate a #MyCovidRisk y sé parte de la solución! \nSubí tu historial de geolocalización, obtené tu Riesgo de tener Covid y ayudá a tu comunidad.\n#SoyParteDeLaSolucion  #MyCovidRisk #MiRiesgoCovid\n';
   
    return (
        <Box style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <FacebookShareButton quote={facebookSpanishText} hashtag="#MyCovidRisk" url="https://www.mycovidrisk.org"><FacebookIcon size={50} round={true} /></FacebookShareButton>
            <TwitterShareButton title={twitterSpanishText} hashtags={['SoyParteDeLaSolucion', 'MyCovidRisk', 'MiRiesgoCovid']} url="https://www.mycovidrisk.org"><TwitterIcon size={50} round={true} /></TwitterShareButton>
            <WhatsappShareButton title={whatsappSpanishText} url="https://www.mycovidrisk.org"><WhatsappIcon size={50} round={true} /></WhatsappShareButton> 
        </Box>
    )
};

export default Share;