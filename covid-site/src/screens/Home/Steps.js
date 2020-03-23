import React from 'react';
import { useHistory } from "react-router-dom";
import { Heading, Grid } from 'grommet';
import { useTranslation } from 'react-i18next';
import { CloudUpload, BarChart, ShareOption } from 'grommet-icons';
import Badge from '../../components/Badge';
import CustomButton from '../../components/CustomButton';

const Steps = () => {
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <Grid pad="large" gap="medium">
      <Heading level={3} margin={{ horizontal: "xlarge", vertical: "none" }} size="medium" textAlign="center">{t('HOME_STEPS_TITLE')}</Heading>
      <Grid columns={{ count: 3, size: "auto" }} gap="xsmall">
        <Badge icon={<CloudUpload size="32px" />} text={t("UPLOAD_STEP")} />
        <Badge icon={<BarChart size="32px" />} text={t("SCORE_STEP")} />
        <Badge icon={<ShareOption size="32px" />} text={t("SHARE_STEP")} />
      </Grid>
      <CustomButton secondary text={t("DISCOVER_SCORE")} onClick={() => history.push("/sign-in")} />
    </Grid>
  );
};

export default Steps;