import React from 'react';
import {
  Datagrid,
  List,
  NumberField,
  TextField,
  TextInput,
  Filter,
} from 'admin-on-rest';
import { constants } from './constants';

const CountryFilter = props => (
  <Filter {...props}>
    <TextInput label="Country Name" source="query" alwaysOn />
  </Filter>
);

const CountryList = props => (
  <List {...props} filters={<CountryFilter />} perPage={constants.pageSize}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="iso" />
      <TextField source="name" />
      <NumberField source="phonecode" />
    </Datagrid>
  </List>
);

export { CountryList }