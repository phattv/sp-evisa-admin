import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { ViewTitle } from 'admin-on-rest/lib/mui';

export default () => (
  <Card style={{ margin: '2em' }}>
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
);
