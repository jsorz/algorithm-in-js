import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Layout, Button, Menu } from 'element-react';

import Sorting from './sorting';
import DataStructure from './data-structure';
import NotFound from './404';

// todo 子路径刷新，hash duplicated
import routes from './routes';

export default class Index extends React.Component {
  initialState() {
    return {};
  }

  renderMenu() {
    return (
      <Menu defaultActive="0">
        { routes.map((item, i) => (
          <Menu.Item index={ String(i) } key={ i }>
            <i className="el-icon-setting"></i>
            <Link to={ item.path }>{ item.label }</Link>
          </Menu.Item>
        )) }
      </Menu>
    );
  }

  renderRoutes() {
    return (
      <div>
      { routes.map((route, index) => (
        <Route
          key={ index }
          path={ route.path }
          exact={ route.exact }
          component={ route.component }
        />
      ))}
      </div>
    );
  }

  render() {

    return (
      <Router>
        <div className="page-container">
          <div className="aside">
            { this.renderMenu() }
          </div>
          <div className="main">
            { this.renderRoutes() }
            {/* <Switch>
              <Route path="/sorting" component={ Sorting } />
              <Route path="/data-structure" component={ DataStructure } />
              <Route path="*" component={ NotFound } />
            </Switch> */}
          </div>
        </div>
      </Router>
    );
  }
};
