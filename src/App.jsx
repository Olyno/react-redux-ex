import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import MoviesList from './components/Movies';
import AddMovie from './pages/AddMovie';

export default function App() {
    return (
        <div className="section">
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact>
                            <span>HOME</span>
                        </Route>
                        <Route path="/movies" exact>
                            <MoviesList />
                        </Route>
                        <Route path="/add-movies" exact>
                            <AddMovie />
                        </Route>
                        <Route>
                            <span>404 !</span>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}