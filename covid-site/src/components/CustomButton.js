import React from 'react';
import { Box, Text } from 'grommet';

export default ({ text, size = "large", icon, primary, secondary, inverted, updateAccept, updateDecline, ...props}) => {
  let background, textColor, textWeight;
  const pad = size === "large" ? "22px" : "15px";

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
  else if (updateAccept) {
    background = "#3D138D";
    textColor = "#F8F8F8";
    textWeight = "bold";
  }
  else if (updateDecline) {
    background = "#f1ecf6";
    textColor = "#5337B9";
    textWeight = "bold";
  }

  return (
    <Box
      hoverIndicator
      focusIndicator={false}
      background={background}
      pad={pad}
      align="center"
      justify="center"
      round="small"
      direction="row"
      gap="small"
      {...props}
    >
      {icon}
      <Text color={textColor} size={size} weight={textWeight}>{text}</Text>
    </Box>
  );
}