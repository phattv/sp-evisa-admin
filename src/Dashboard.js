import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

export default () => (
  <Card style={{ margin: '2em' }}>
    <CardHeader title="Welcome to the administration" />
    <CardText>Admin Panel for evisa-vn.com</CardText>
  </Card>
);