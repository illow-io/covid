import React from "react";
import { WorldMap } from "grommet";

export default () => (
  <WorldMap
    color="neutral-1"
    continents={[
      {
        name: 'Europe',
        color: 'red',
      },
    ]}
    style={{ maxHeight: "200px" }}
  />
);