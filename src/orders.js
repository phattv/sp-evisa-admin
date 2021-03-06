import React from 'react';
import {
  BooleanField,
  ChipField,
  Datagrid,
  DateInput,
  Edit,
  EditButton,
  Filter,
  FunctionField,
  List,
  NumberField,
  ReferenceField,
  Responsive,
  SelectInput,
  SimpleForm,
  SimpleList,
  TextField,
} from 'admin-on-rest';
import { CustomDateField, CustomDateTimeField, Divider } from './components';
import {
  pageSize,
  processingTimeOptions,
  purposeOptions,
  statusOptions,
  typeOptions,
} from './constants';

// Remove timezone: https://marmelab.com/admin-on-rest/Inputs.html#dateinput
const _tz_offset = new Date().getTimezoneOffset() / 60;
const dateParser = v => {
  const regexp = /(\d{4})-(\d{2})-(\d{2})/;
  let match = regexp.exec(v);
  if (match === null) return;

  let year = match[1];
  let month = match[2];
  let day = match[3];

  if (_tz_offset < 0) {
    // negative offset means our picked UTC date got converted to previous day
    let date = new Date(v);
    date.setDate(date.getDate() + 1);
    match = regexp.exec(date.toISOString());
    year = match[1];
    month = match[2];
    day = match[3];
  }
  const d = [year, month, day].join('-');
  return d;
};

const OrderFilter = props => {
  const nullOption = [
    {
      id: null,
      name: 'none',
    },
  ];
  const typeOptionsWithNull = nullOption.concat(statusOptions);

  return (
    <Filter {...props}>
      <SelectInput alwaysOn source="status" choices={typeOptionsWithNull} />
      <SelectInput source="type" choices={typeOptions} />
      <SelectInput source="purpose" choices={purposeOptions} />
      <SelectInput source="processing_time" choices={processingTimeOptions} />
      <DateInput parse={dateParser} source="created_at" />
    </Filter>
  );
};

const OrderList = props => (
  <List
    {...props}
    filters={<OrderFilter />}
    sort={{ field: 'created_at', order: 'DESC' }}
    perPage={pageSize}
  >
    <Responsive
      small={
        <SimpleList
          primaryText={record => (
            <NumberField
              record={record}
              source="price"
              style={{
                fontWeight: 'bold',
              }}
              options={{
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
              }}
            />
          )}
          secondaryText={record => (
            <span
              style={{
                whiteSpace: 'pre-line',
              }}
            >
              {parseContactObject(record.contact)}
            </span>
          )}
          tertiaryText={record => (
            <CustomDateField record={record} source="created_at" />
          )}
        />
      }
      medium={
        <Datagrid>
          <NumberField source="id" />
          <NumberField
            source="price"
            style={{
              fontWeight: 'bold',
            }}
            options={{
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0,
            }}
          />
          <ChipField source="status" />
          <CustomDateTimeField source="created_at" hideLabel />
          <ReferenceField
            label="Country"
            source="country_id"
            reference="countries"
            sortable={false}
          >
            <TextField source="name" />
          </ReferenceField>
          <NumberField source="quantity" label="QTY" />
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
      }
    />
  </List>
);

const OrderEdit = props => (
  <Edit title={'Edit Order (status only)'} {...props}>
    <SimpleForm>
      <Divider label="Basic info" />
      <TextField source="id" />
      <TextField source="price" />
      <SelectInput source="status" choices={statusOptions} />
      <ReferenceField label="Country" source="country_id" reference="countries">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="quantity" />
      <TextField source="type" />
      <ChipField source="purpose" />
      <ChipField source="processing_time" />
      <CustomDateTimeField source="created_at" />
      <CustomDateTimeField source="updated_at" />

      <Divider label="Contact info" />
      <FunctionField
        label="Contact"
        render={record =>
          record && record.contact && parseContactObject(record.contact)
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

      <Divider label="Flight info" />
      <TextField source="airport" />
      <TextField source="flight_number" />
      <CustomDateField source="arrival_date" />
      <CustomDateField source="departure_date" />

      <Divider label="Services" />
      <TextField source="airport_fast_track" />
      <TextField source="car_pick_up" />
      <BooleanField source="private_visa_letter" />
    </SimpleForm>
  </Edit>
);

const CustomTypeTextField = params => {
  const { record, source } = params;
  const type = typeOptions.find(option => option.id === record[source]);
  return <span>{type && type.name}</span>;
};

const parseContactObject = contact =>
  `Name: ${contact.name}\nEmail: ${contact.email}\nPhone: ${contact.phone}`;

export { OrderList, OrderEdit };
