import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Box, Heading, Text, Grid } from "grommet";
import { useTranslation } from "react-i18next";
import calculateCenter from '@turf/center';
import withSiteLayout from "../../components/withSiteLayout";
import CustomButton from "../../components/CustomButton";
import ShareLinks from "../../components/Share";
import Map from "../../components/Map";
import "./circle.css";
import api from "../../services/api";

const Score = () => {
  const score = undefined;
  const { t } = useTranslation();
  const history = useHistory();

  const defaultLayerData = { type: "FeatureCollection", features: [] };
  const [mapCenter, setMapCenter] = useState([
    -58.51662295, -34.5468697
  ]);
  const [mapData, setMapData] = useState(defaultLayerData);
  const [userLocationHistory, setUserLocationHistory] = useState(defaultLayerData);

  useEffect(() => {
    async function fetchHotSpots() {
      const { data } = await api.get("/data/hot-spots");
      setMapData(data);
    }
    fetchHotSpots();
  }, []);

  useEffect(() => {
    async function fetchLocationHistory() {
      const { data } = await api.get("/users/me/location-history")
      setUserLocationHistory(data);
      const { geometry: { coordinates } } = calculateCenter(data);
      setMapCenter(coordinates);
    }
    fetchLocationHistory();
  }, [])

  return (
    <Grid rows={["flex", "auto"]}>
      <Box overflow='auto' margin={{ vertical: "medium" }}>
        <Heading level={3} margin='none' size='small' textAlign='center'>
          {t("YOUR_RESULT")}
        </Heading>
        <Box
          elevation='small'
          background='#fbfbfb'
          margin='10px'
          pad='large'
          round='small'>
          {score && (
            <Box className='circle' margin={{ bottom: "large" }}>
              <Text size='50px' color='#24ff54' weight='bold'>
                {score}%
              </Text>
              <Text size='25px' color='black' weight='bold'>
                {t("COVID-19")}
              </Text>
              <Text size='15px' color='black' weight='bold'>
                {t("RISK_SCORE")}
              </Text>
            </Box>
          )}
          <Text textAlign='center' size='17px' color='black'>
            {t(score ? "SCORE_THANKS" : "SCORE_WE_NEED_MORE")}
          </Text>
        </Box>
        <Box pad='medium' align='center'>
          <Map center={mapCenter} layers={[{
            data: mapData,
            config: {
              id: "covid_risk-hot-spots-layer",
              type: "circle",
              paint: {
                "circle-radius": 8,
                "circle-color": "#233064"
              }
            }
          }, {
            data: userLocationHistory,
            config: {
              id: "covid_risk-user-location-linestring-layer",
              type: "line",
              filter: ["==", ["geometry-type"], "LineString"],
              paint: {
                "line-color": "#eef8fc",
                "line-width": 6
              }
            }
          }, {
            data: userLocationHistory,
            config: {
              id: "covid_risk-user-location-point-layer",
              type: "circle",
              filter: ["==", ["geometry-type"], "Point"],
              paint: {
                "circle-radius": 4,
                "circle-color": "#3fecbd"
              }
            }
          }]} />
        </Box>

        {/* <Box background="#c6f3cf" pad="medium" round="small" margin="medium">
          <Text textAlign="center" size="14px" color="#55ba59">{t('SCORE_REMEMBER')}</Text>
        </Box> */}
      </Box>
      <Box pad='medium' gap='medium'>
        <Heading level={3} textAlign='center' margin='none'>
          {t("SHARE_ALT")}
        </Heading>
        <ShareLinks />
        <CustomButton
          margin={{ top: "medium" }}
          tertiary
          text={t("GO_BACK_HOME")}
          onClick={() => history.push("/home")}
        />
      </Box>
    </Grid>
  );
};

export default withSiteLayout(Score);
