import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Home from '../home/Home';
import About from '../about/About';
import Blog from '../blog/Blog';
import Tags from '../tags/Tags';
import Work from '../work/Work';
import MakeTen from '../make-ten/MakeTen';

import NotFoundComponent from './NotFoundComponent';
import ScrollToTop from './ScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop>
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
            </ScrollToTop>
        </Router>
    );
}

export default App;
