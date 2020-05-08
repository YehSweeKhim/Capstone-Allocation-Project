import React from 'react';
import { Switch, Route } from 'react-router-dom';
import studentLogin from './login/student_login';
import studentAddAccount from './login/student_addaccount';
import adminLogin from './login/admin_login';
import adminAddAccount from './login/admin_addaccount';
import adminResetPassword from './login/admin_resetpassword';
import Form from './form/form';
import changePassword from './form/change_password';
import map from './map_admin/App';
import studentMap from './map_student/App';

const Main = () => {
  
  return (
    <Switch>
      <Route exact path='/' component={studentLogin}></Route>
      <Route exact path='/studentAddAccount' component={studentAddAccount}></Route>
      <Route exact path='/adminLogin' component={adminLogin}></Route>
      <Route exact path='/adminAddAccount' component={adminAddAccount}></Route>
      <Route exact path='/adminResetPassword' component={adminResetPassword}></Route>
      <Route exact path='/form' component={Form}></Route>
      <Route exact path='/changePassword' component={changePassword}></Route>
      <Route exact path='/map' component={map}></Route>
      <Route exact path='/studentMap' component={studentMap}></Route>
    </Switch>
  );
}

export default Main;
