import React from 'react';
import {
  ChipField,
  Datagrid,
  DateField,
  DateInput,
  Edit,
  EditButton,
  Filter,
  FunctionField,
  List,
  NumberField,
  ReferenceField,
  SelectInput,
  SimpleForm,
  TextField,
} from 'admin-on-rest';
import { datetimeLocale } from './constants';

const typeOptions = [
  { id: 'one_month_single', name: '1MS' },
  { id: 'one_month_multiple', name: '1MM' },
  { id: 'three_month_single', name: '3MS' },
  { id: 'three_month_multiple', name: '3MM' },
  { id: 'six_month_multiple', name: '5MM' },
  { id: 'one_year_multiple', name: '1MY' },
];

const OrderFilter = props => (
  <Filter {...props}>
    <SelectInput
      alwaysOn
      source="status"
      choices={[
        { id: null, name: 'none' },
        { id: 'unpaid', name: 'unpaid' },
        { id: 'paid', name: 'paid' },
        { id: 'ignore', name: 'ignore' },
      ]}
    />
    <SelectInput source="type" choices={typeOptions} />
    <SelectInput
      source="purpose"
      choices={[
        { id: 'tourist', name: 'tourist' },
        { id: 'business', name: 'business' },
      ]}
    />
    <DateInput source="created_at" />
  </Filter>
);

const OrderList = props => (
  <List {...props} filters={<OrderFilter />}>
    <Datagrid>
      <NumberField source="id" />
      <NumberField source="price" />
      <ChipField source="status" />
      <DateField source="created_at" showTime {...datetimeLocale} />
      <ReferenceField label="Country" source="country_id" reference="countries">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="quantity" />
      <CustomTypeTextField source="type" />
      <ChipField source="purpose" />
      <ChipField source="processing_time" />
      <FunctionField
        label="Contact"
        render={record =>
          record &&
          record.contact &&
          `Name: ${record.contact.name}\nEmail: ${
            record.contact.email
          }\nPhone: ${record.contact.phone}`
        }
        style={{
          whiteSpace: 'pre-line',
        }}
      />
      <EditButton />
    </Datagrid>
  </List>
);

const OrderEdit = props => (
  <Edit title={'Edit'} {...props}>
    <SimpleForm>
      <TextField source="id" />
      <TextField source="price" />
      <SelectInput
        source="status"
        choices={[
          { id: 'unpaid', name: 'unpaid' },
          { id: 'paid', name: 'paid' },
          { id: 'ignore', name: 'ignore' },
        ]}
      />
      <DateField source="created_at" showTime {...datetimeLocale} />
      <DateField source="updated_at" showTime {...datetimeLocale} />
      <ReferenceField label="Country" source="country_id" reference="countries">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="quantity" />
      <TextField source="type" />
      <ChipField source="purpose" />
      <ChipField source="processing_time" />
      <FunctionField
        label="Contact"
        render={record =>
          record &&
          record.contact &&
          `Name: ${record.contact.name}\nEmail: ${
            record.contact.email
          }\nPhone: ${record.contact.phone}`
        }
        style={{
          whiteSpace: 'pre-line',
        }}
      />
      <FunctionField
        label="Applicants"
        render={record => {
          const applicants = record.applicants;
          let contactString = '';
          if (applicants) {
            Object.keys(applicants).forEach(key => {
              contactString += `APPLICANT ${parseInt(key, 10) + 1}: Name: ${
                applicants[key].name
              } - Gender: ${applicants[key].gender} - Birthday: ${
                applicants[key].birthday
              } - Passport: ${applicants[key].passport} - Passport expiry: ${
                applicants[key].passport_expiry
              } - Country id: ${applicants[key].country_id}`;
              if (key < Object.keys(applicants).length - 1) {
                contactString += '\n\n';
              }
            });
            return contactString;
          }
        }}
        style={{
          whiteSpace: 'pre-line',
        }}
      />
      <TextField source="airport" />
      <DateField source="arrival_date" {...datetimeLocale} />
      <DateField source="departure_date" {...datetimeLocale} />
      <TextField source="airport_fast_track" />
      <TextField source="car_pick_up" />
      <TextField source="private_visa_letter" />
      <TextField source="flight_number" />
    </SimpleForm>
  </Edit>
);

const CustomTypeTextField = params => {
  const { record, source } = params;
  const type = typeOptions.find(option => option.id === record[source]);
  return <span>{type.name}</span>;
};

export { OrderList, OrderEdit };
