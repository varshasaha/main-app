import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import subAppConfig from 'sub-app-vanilla';

import createStore from './store';

import Father from './components/Father';
import createBridge from './Bridge';

const store = createStore(subAppConfig.reducers);

const MainApp = () =>
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Father}>
        {subAppConfig.routes.map(route =>
          <Route
            key={`${route.path}`}
            path={route.path}
            component={
              subAppConfig.isReactApp
                ? route.component
                : createBridge(route.component, store)
            }
          />,
        )}
      </Route>
    </Router>
  </Provider>;

render(<MainApp />, document.getElementById('root'));
