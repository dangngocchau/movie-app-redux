import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetails/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header></Header>
        <div className='container'>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/movie/:imdbID'>
              <MovieDetail />
            </Route>
            <Route path='*'>
              <PageNotFound />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
