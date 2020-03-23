import React from "react";
import { Box, Grid, Heading, Text, Button } from "grommet";
import { useTranslation } from "react-i18next";
import withSiteLayout from "../../components/withSiteLayout";
import CustomButton from "../../components/CustomButton";

const Upload = () => {
  const { t } = useTranslation();

  return (
    <Box overflow="auto">
      <Grid
        gap="small"
        pad="large"
        style={{ backgroundColor: "#f5f7f6" }}
      >
        <Grid gap="small" justify="center">
          <Box
            round="small"
            justify="center"
            aling="center"
            width="full"
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
        </Grid>

        <Grid pad="large">
          <Text
            textAlign="center"
            pad="xlarge"
            size="12px"
            weight="bold"
            color="status-disabled"
            margin={{ bottom: "40px" }}
          >
            {t("APP_GOALD")}
          </Text>
        </Grid>
      </Grid>
      <Grid>
      <Box
        justify="center"
        aling="center"
        background="#fff"
        pad={{top: "20px", bottom: "50px", horizontal: "30px" }}
      >
        <CustomButton
          primary
          text={t("ACCEPT")}
          style={{ paddingTop: "10px", paddingBottom: "10px" }}
          onClick={() => {}}
        />
        <CustomButton
          tertiary
          text={t("DECLINE")}
          margin={{ top: "5px" }}
          style={{
            paddingTop: "10px",
            paddingBottom: "10px",
            borderRadius: "2px",
            borderColor:"#a8c4e8"
          }}
          onClick={() => {}}
        />
      </Box>
      </Grid>
    </Box>
  );
};

export default withSiteLayout(Upload);
