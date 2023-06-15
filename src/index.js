import React from 'react';
import ReactDOM from 'react-dom/client';
import './styling/index.css';
import App from './App';

import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Router>
    <Auth0Provider
    domain="dev-1dehcywdcu8cohff.us.auth0.com"
    clientId="N7FOvlqigrPw3g1Z4JXFNYfc4oXl4nAX"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </Auth0Provider>
  </Router>
);

