import React from 'react';
import { Admin, Delete, jsonServerRestClient, Resource } from 'admin-on-rest';
import CountryIcon from 'material-ui/svg-icons/action/language';

import { CountryList } from './countries';
import { FeeList, FeeShow, FeeEdit, FeeCreate } from './fees';

import Dashboard from './Dashboard';
import authClient from './authClient';

const restClient =
  process.env.NODE_ENV === 'production'
    ? 'http://api.evisa-vn.com'
    : 'http://localhost:8001';
const App = () => (
  <Admin
    authClient={authClient}
    dashboard={Dashboard}
    restClient={jsonServerRestClient(restClient)}
  >
    <Resource
      name="fees"
      list={FeeList}
      edit={FeeEdit}
      show={FeeShow}
      create={FeeCreate}
      remove={Delete}
    />
    <Resource name="countries" list={CountryList} icon={CountryIcon} />
  </Admin>
);

export default App;
