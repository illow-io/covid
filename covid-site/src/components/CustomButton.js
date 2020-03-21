import React from 'react';
import { Box, Text } from 'grommet';

export default ({ text, size = "large", primary, secondary, inverted, onClick}) => {
  let background, textColor, textWeight;

  if (primary) {
    background = "linear-gradient(270deg, #3b219e, #a54792)";
    textColor = "white";
    textWeight = "bold";
  } else if (secondary) {
    background = "#d8d2ec";
    textColor = "#3b219e";
    textWeight = "normal";
  } else if (inverted) {
    background = "white";
    textColor = "#484848";
    textWeight = "bold";
  }

  return (
    <Box onClick={onClick} background={background} pad="22px" align="center" justify="center" round="small">
      <Text color={textColor} size={size} weight={textWeight}>{text}</Text>
    </Box>
  );
}