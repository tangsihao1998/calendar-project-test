import Loadable from 'react-loadable';

const CalendarPageLoadableComponent = Loadable({
  loader: () => import(/* webpackChunkName: "Calendar Page" */ './../../pages/CalendarPage/index.js'),
  loading: () => null
});

const NotFoundPageLoadableComponent = Loadable({
  loader: () => import(/* webpackChunkName: "Not Found Page" */ './../../pages/NotFoundPage/index.js'),
  loading: () => null
});

const routes = [
  {
    path: '/',
    component: CalendarPageLoadableComponent,
    exact: true,
    auth: false,
    pageTitle: 'Calendar Page'
  },
  {
    component: NotFoundPageLoadableComponent,
    pageTitle: 'Lỗi 404'
  }
];

export default routes;