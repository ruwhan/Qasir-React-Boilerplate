import Loadable from 'react-loadable';
import {} from '@qasir/views/errors/400';
import {} from '@qasir/views/errors/500';
import {} from '@qasir/views/login';
import {} from '@qasir/views/dashboard';
import {} from '@qasir/views/userManagement';
import {} from '@qasir/views/welcome';

const loadable = (loader) => {
   return Loadable({
        loader,
        delay: false,
        loading: () => null
    })
}

const routes = {
    '/404': {
        component: loadable(() => import('@qasir/views/errors/400'))
    },
    '/500': {
      component: loadable(() => import('@qasir/views/errors/500'))
    },
    '/login': {
      component: loadable(() => import('@qasir/views/login'))
    },
    '/dashboard': {
      component: loadable(() => import('@qasir/views/dashboard'))
    },
    '/user-management': {
      component: loadable(() => import('@qasir/views/user-management'))
    },
    '/welcome': {
      component: loadable(() => import('@qasir/views/welcome'))
  },
}

export default routes;
