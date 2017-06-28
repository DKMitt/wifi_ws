import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import History from './History';
import Forcast from './Forcast';
import Location from './Location';
import NotFound from './App';

const Routes = (props) => (
 <Router {...props}>
   <Route path="/" component={App}>
       <Route path="/history" component={History} />
       <Route path="/forcast" component={Forcast} />
       <Route path="/location" component={Location} />
       <Route path="*" component={App} />
   </Route>
 </Router>
);
export default Routes;