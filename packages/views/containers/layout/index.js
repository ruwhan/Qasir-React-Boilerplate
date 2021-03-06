import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Route } from 'react-router-dom';
import loadable from '@loadable/component';

import routes from '@qasir/routes/list';

const Header = loadable(() => import('@qasir/views/containers/header'));
const Aside = loadable(() => import('@qasir/views/containers/aside'));
const Footer = loadable(() => import('@qasir/views/containers/footer'));

const loadableRoutes = routes;

class Layout extends Component {

  render() {
    const { headHTML } = this.props;
    return (
      <>
        <Helmet title={headHTML.title} />
        <Header />
        <section id="app-body">
          <Aside />
          <main>
            {Object
            .keys(loadableRoutes)
            .map(path => {
                const {
                    exact,
                    ...props
                } = loadableRoutes[path]
                props.exact = exact === void 0 || exact || true
                return <Route key={path} path={path} {...props} />
            })}
          </main>
        </section>
        <Footer />
      </>
    );
  }

}

Layout.propTypes = {};
Layout.defaultProps = {};

export default Layout;
