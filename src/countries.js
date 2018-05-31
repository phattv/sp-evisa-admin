import React from 'react';
import {
  Datagrid,
  Edit,
  EditButton,
  List,
  NumberField,
  SimpleForm,
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
      <NumberField source="id" />
      <TextField source="iso" />
      <TextField source="name" />
      <NumberField source="phonecode" />
      <EditButton label="View"  />
    </Datagrid>
  </List>
);

const CountryEdit = props => (
  <Edit title={'Country (view only)'} {...props} disabled>
    <SimpleForm>
      <TextField source="id" />
      <TextField source="iso" />
      <TextField source="name" />
      <TextField source="phonecode" />
    </SimpleForm>
  </Edit>
);

export { CountryList, CountryEdit };
