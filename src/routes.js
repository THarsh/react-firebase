import React from 'react';
import {Router,Router} from 'react-router';

import App from 'components/containers/app.js';
import ContactUs from 'components/pages/ContactUs/ContactUs';
import ContactUs from 'components/pages/ContactUs/ContactUs';


const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={App}>
        <Route path="*" component={NotFound}>
    </Router>
);
