import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./home'));
const Payment = lazy(() => import('./payment'));

const AppRoute = () => {
  return (
    <Suspense fallback={""}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/payment' component={Payment} />
      </Switch>
    </Suspense>
  );
};

export default AppRoute;
