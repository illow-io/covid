import React from "react";
import { Box, Grid, Heading, Text, Button } from "grommet";
import { useTranslation } from "react-i18next";
import withSiteLayout from "../../components/withSiteLayout";
import CustomButton from "../../components/CustomButton";

const Upload = () => {
  const { t } = useTranslation();

  return (
    <Grid rows={["flex", "auto"]}>
      <Grid
        gap="medium"
        style={{ backgroundColor: "#f5f7f6" }}
        pad="large"
      >
        <Box
          round="small"
          justify="center"
          align="center"
          background="#fff"
          pad="large"
        >
          <Text
            textAlign="center"
            size="16px"
            weight="bold"
            color="dark-3"
            margin={{ bottom: "40px" }}
          >
            {t("FILE_SELECTED")}
          </Text>
          <img
            src="/file-logo.png"
            alt="file logo"
            style={{
              margin: "auto",
              marginBottom: "10px",
              width: "45pt",
              height: "auto"
            }}
          />
          <Heading
            level={5}
            margin={{ top: "xsmall", bottom: "10px" }}
            textAlign="center"
            color="dark-1"
          >
            {t("GEOLOCATION_DATA")}
          </Heading>

          <Text textAlign="center" size="12px" color="dark-1">
            35MB
          </Text>
        </Box>

        <Text textAlign="center" size="14px" color="dark-5" margin="none">{t('FOOTER_NOTE')}</Text>
      </Grid>
      <Box
        background="#fff"
        gap="xsmall"
        pad={{ horizontal: "large", vertical: "medium" }}
      >
        <CustomButton
          primary
          text={t("ACCEPT")}
          onClick={() => {}}
        />
        <CustomButton
          tertiary
          text={t("DECLINE")}
          margin={{ top: "5px" }}
          onClick={() => {}}
        />
      </Box>
    </Grid>
  );
};

export default withSiteLayout(Upload);
