import React from 'react';
import reactDom from 'react-dom';
import Header from './Header';
import Card from './Card';
import Projects from './Projects';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {
    return(
        <Router>
            <div>
                <Header />
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Card />
                        </Route>
                        <Route exact path="/projects">
                            <Projects />
                        </Route>
                        <Route exact path="/contact">
                            <Contact />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}


export default App;