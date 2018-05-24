// src/routes.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'react-router-redux';
import { Provider, connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import store, { history } from '../../../bandolim-tea-store/src/storesConfig';
import PreCashier from './pre-cashier/PreCashier';
import Cashier from './cashier/Cashier';
import TopBar from '../components/TopBar';

const Routes = props => (
  <div className="h-100">
    <TopBar/>
    <Router history={history} {...props}>
      <Switch>
        <Route path="/" exact>
          <PreCashier />
        </Route>
        <Route path="/shop" exact>
          <Cashier />
        </Route>
      </Switch>
    </Router>
  </div>
);

Routes.propTypes = {
};

const mapStateToProps = ({ session, response }) => ({
  // ...session.toJS(),
  // response: response.toJS(),
});

const ConnectedComponent = connect(mapStateToProps)(Routes);

export default function Root(props) {
  return <Provider store={store}><ConnectedComponent {...props} /></Provider>;
}
