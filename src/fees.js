import React from 'react';
import {
  Create,
  Datagrid,
  DisabledInput,
  Edit,
  EditButton,
  List,
  NumberField,
  NumberInput,
  ReferenceField,
  ReferenceInput,
  required,
  SelectInput,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  Filter,
} from 'admin-on-rest';
import { constants } from './constants';

const FeeFilter = props => (
  <Filter {...props}>
    <SelectInput
      alwaysOn
      source="type"
      choices={[
        { id: 'tourist', name: 'tourist' },
        { id: 'business', name: 'business' },
      ]}
    />
  </Filter>
);

// TODO: <List perPage> not working
const FeeList = props => (
  <div>
    Legend:
    <p>1MS: 1 Month Single - 1MM: 1 Month Multiple</p>
    <p>3MS: 3 Month Single - 3MM: 3 Month Multiple</p>
    <p>6MM: 6 Month Multiple - 1YM: 1 Year Multiple</p>
    <List {...props} filters={<FeeFilter />} perPage={constants.pageSize}>
      <Datagrid>
        <NumberField source="type" />
        <ReferenceField
          label="Country"
          source="country_id"
          reference="countries"
        >
          <TextField source="name" />
        </ReferenceField>
        <NumberField source="type" />
        <NumberField source="one_month_single" label="1MS" />
        <NumberField source="one_month_multiple" label="1MM" />
        <NumberField source="three_month_single" label="3MS" />
        <NumberField source="three_month_multiple" label="3MM" />
        <NumberField source="six_month_multiple" label="6MM" />
        <NumberField source="one_year_multiple" label="1YM" />
        <EditButton />
      </Datagrid>
    </List>
  </div>
);

const FeeShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="type" />
    </SimpleShowLayout>
  </Show>
);

const FeeEdit = props => (
  <Edit title={'Edit'} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <ReferenceInput
        label="ISO"
        source="country_id"
        reference="countries"
        validate={required}
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <SelectInput
        source="type"
        choices={[
          { id: 'tourist', name: 'Tourist' },
          { id: 'business', name: 'Business' },
        ]}
      />
      <NumberInput source="one_month_single" />
      <NumberInput source="one_month_multiple" />
      <NumberInput source="three_month_single" />
      <NumberInput source="three_month_multiple" />
      <NumberInput source="six_month_multiple" />
      <NumberInput source="one_year_multiple" />
    </SimpleForm>
  </Edit>
);

const FeeCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput
        label="ISO"
        source="country_id"
        reference="countries"
        validate={required}
        allowEmpty
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <SelectInput
        source="type"
        choices={[
          { id: 'tourist', name: 'Tourist' },
          { id: 'business', name: 'Business' },
        ]}
      />
      <NumberInput source="one_month_single" />
      <NumberInput source="one_month_multiple" />
      <NumberInput source="three_month_single" />
      <NumberInput source="three_month_multiple" />
      <NumberInput source="six_month_multiple" />
      <NumberInput source="one_year_multiple" />
    </SimpleForm>
  </Create>
);

export { FeeList, FeeShow, FeeEdit, FeeCreate };
