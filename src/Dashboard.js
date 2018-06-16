import React from 'react';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import { ViewTitle } from 'admin-on-rest/lib/mui';

import DollarIcon from 'material-ui/svg-icons/editor/attach-money';

import { colors, spaces } from './constants';

export default () => (
  <div>
    <Card>
      <ViewTitle title="Dashboard" />
      <CardHeader title="Admin Panel for evisa-vn.com" />\
      <CardText>
        Legend:
        <p>1MS: 1 Month Single - 1MM: 1 Month Multiple</p>
        <p>3MS: 3 Month Single - 3MM: 3 Month Multiple</p>
        <p>6MM: 6 Month Multiple</p>
        <p>1YM: 1 Year Multiple</p>
      </CardText>
    </Card>

    <div
      style={{
        marginTop: spaces.m,
      }}
    >
      <Card
        style={{
          borderLeft: `solid ${spaces.xs}px ${colors.cyan}`,
          flex: 1,
        }}
      >
        <DollarIcon
          style={{
            float: 'left',
            width: spaces.xl,
            height: spaces.xl,
            padding: spaces.m,
            color: colors.cyan,
          }}
        />
        <CardTitle title={'Orders'} subtitle={123} />
      </Card>
    </div>
  </div>
);
