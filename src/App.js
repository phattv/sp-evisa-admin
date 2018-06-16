import React from 'react';
import { Admin, Delete, jsonServerRestClient, Resource } from 'admin-on-rest';

import { CountryList, CountryEdit } from './countries';
import { FeeList, FeeShow, FeeEdit, FeeCreate } from './fees';
import { UserList } from './users';
import { FeedbackList } from './feedback';
import { OrderList, OrderEdit } from './orders';

import Dashboard from './Dashboard';
import authClient from './authClient';
import { restClient } from './constants';

import LanguageIcon from 'material-ui/svg-icons/action/language';
import PersonIcon from 'material-ui/svg-icons/social/person';
import FeedbackIcon from 'material-ui/svg-icons/action/feedback';
import DollarIcon from 'material-ui/svg-icons/editor/attach-money';

const App = () => (
  <Admin
    authClient={authClient}
    dashboard={Dashboard}
    restClient={jsonServerRestClient(restClient)}
  >
    <Resource
      name="orders"
      list={OrderList}
      edit={OrderEdit}
      icon={DollarIcon}
    />
    <Resource
      name="fees"
      list={FeeList}
      edit={FeeEdit}
      show={FeeShow}
      create={FeeCreate}
      remove={Delete}
    />
    <Resource
      name="countries"
      list={CountryList}
      edit={CountryEdit}
      icon={LanguageIcon}
    />
    <Resource name="users" list={UserList} icon={PersonIcon} />
    <Resource name="feedback" list={FeedbackList} icon={FeedbackIcon} />
  </Admin>
);

export default App;
