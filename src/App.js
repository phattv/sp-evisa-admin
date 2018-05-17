import React from 'react';
import { Admin, Delete, jsonServerRestClient, Resource } from 'admin-on-rest';
import CountryIcon from 'material-ui/svg-icons/action/language';
import UserIcon from 'material-ui/svg-icons/action/account-box';
import FeedbackIcon from 'material-ui/svg-icons/action/feedback';
import OrderIcon from 'material-ui/svg-icons/action/receipt';

import { CountryList } from './countries';
import { FeeList, FeeShow, FeeEdit, FeeCreate } from './fees';
import { UserList } from './users';
import { FeedbackList } from './feedback';
import { OrderList, OrderEdit } from './orders'

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
    <Resource name="users" list={UserList} icon={UserIcon} />
    <Resource name="feedback" list={FeedbackList} icon={FeedbackIcon} />
    <Resource name="orders" list={OrderList} edit={OrderEdit} icon={OrderIcon} />
  </Admin>
);

export default App;
