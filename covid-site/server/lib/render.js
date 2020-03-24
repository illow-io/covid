import { readFileSync } from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';

import { files } from '../config';

const html = readFileSync(files.index).toString();

export const render = (Tree, path) => {
  const sheets = new ServerStyleSheet();

  const markup = renderToString(
    sheets.collectStyles(
      <StaticRouter location={path}>
        <Tree />
      </StaticRouter>
    ),
  );

  return html
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
    .replace('</head>', `${sheets.getStyleTags()}</head>`);
}