import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Box, Grid, Text } from "grommet";
import { useTranslation } from "react-i18next";
import withSiteLayout from "../../components/withSiteLayout";
import CustomButton from "../../components/CustomButton";
import api from '../../services/api';

const Upload = () => {
  const { t } = useTranslation();
  const fileInputRef = React.createRef();
  const history = useHistory();
  const [selectedFile, setSelectedFile] = useState(null);

  const onFileUploadHandler = () => {
    let fileUploaded = fileInputRef.current.files[0];
    fileUploaded && setSelectedFile(fileUploaded);
  };

  const onSendFileHandler = () => {
    api.post("/upload-data", selectedFile)
     .then(res => res)
     .catch(err => err);
  };
  
  const onDeclineHandler = () => history.push("/");

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
          <input type="file" name="file" ref={fileInputRef} onChange={onFileUploadHandler} />
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
          onClick={onSendFileHandler}
        />
        <CustomButton
          tertiary
          text={t("DECLINE")}
          margin={{ top: "5px" }}
          onClick={onDeclineHandler}
        />
      </Box>
    </Grid>
  );
};

export default withSiteLayout(Upload);
