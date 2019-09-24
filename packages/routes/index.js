import React from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

import componentGateway from '@qasir/component-gateway';
import ListRoute from './list';

const Layout = loadable(() => import('@qasir/views/containers'));
const Login = loadable(() => import('@qasir/views/pages/login'));
const Page404 = loadable(() => import('@qasir/views/pages/Page404'));
const Page500 = loadable(() => import('@qasir/views/pages/Page500'));
const Welcome = loadable(() => import('@qasir/views/pages/welcome'));

import imgNotFound from '@qasir/assets/img/not-found.svg';

const loadableRoutes = ListRoute;
class Routes extends React.Component {
    render() {
        return (
          <Switch>
              <Route exact path="/welcome" name="Welcome Page" render={props => <Welcome {...props}/>} />
              <Route exact key="/" path="/" component={componentGateway} />
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              {Object
                .keys(loadableRoutes)
                .map(path => {
                  const {
                    exact,
                    ...props
                  } = loadableRoutes[path]
                  props.exact = exact === void 0 || exact || true
                  return <Route key={null} path={path} render={props => <Layout {...props}/>}/>
              })}
                <Route
                  render={() => (
                    <div style={{
                      backgroundColor: '#282c34',
                      minHeight: '100vh',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                    <img src={imgNotFound} alt="not found" style={{ width: '32%' }}/>
                  </div>
                    )}
                  />
            </Switch>
        )
    }
}
export { loadableRoutes };
export default Routes;
