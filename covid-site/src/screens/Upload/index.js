import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Box, Grid, Text, Heading } from "grommet";
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
    history.push("/enrich");
  };

  const changeFileHandler = () => setSelectedFile(null);

  const bytesToSize = bytes => {
    let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
  }
  
  const onDeclineHandler = () => history.push("/");

  const buttonChangeStyle = {
    padding: 10,
    background: 'rgb(59, 33, 158)',
    color: 'rgb(248, 248, 248)',
    position: 'absolute',
    bottom: 20,
    border: 'none',
    borderRadius: 5,
    fontSize: 10,
  };

  let fileStatus = (
    <>
      <Text
        textAlign="center"
        size="16px"
        weight="bold"
        color="dark-3"
        margin={{ bottom: "40px" }}
      >
        {t("SELECT_FILE")}
      </Text>
      <input type="file" name="file" ref={fileInputRef} onChange={onFileUploadHandler} />
    </>
  );
      
  if (selectedFile) {
    fileStatus = (
      <>
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
          {selectedFile.name}
        </Heading>
  
        <Text textAlign="center" size="12px" color="dark-1">
          {bytesToSize(selectedFile.size)}
        </Text>

        <button style={buttonChangeStyle} onClick={changeFileHandler}>{t('CHANGE_FILE_BUTTON')}</button>
      </>
    );
  }
    

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
          style={{position: 'relative'}}
        >
          {fileStatus}
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
