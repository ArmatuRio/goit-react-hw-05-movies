import { Switch, Route, Redirect } from 'react-router';
import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation/Navigation';
import PageLoader from './components/Loader/Loader';

const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);
// const NotFoundPage = lazy(() =>
//   import('./pages/NotFoundPage' /* webpackChunkName: "not-found-page" */),
// );

export default function App() {
  return (
    <div>
      <Navigation />

      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Redirect to="/" />

          {/* <Route>
            <NotFoundPage />
          </Route> */}
        </Switch>
      </Suspense>
    </div>
  );
}
