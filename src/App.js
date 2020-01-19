import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Tags from './Tags';
import NotFoundComponent from './NotFoundComponent';
import Work from './Work';
import MakeTen from './MakeTen';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <div className="app-content">
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route path='/work'>
                            <Work />
                        </Route>
                        <Route exact path='/make-ten' component={MakeTen} />
                        <Route exact path='/about' component={About} />
                        <Route path='/blog' component={Blog} />
                        <Route path='/tags/:tag' component={Tags} />
                        <Route component={NotFoundComponent}></Route>
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
