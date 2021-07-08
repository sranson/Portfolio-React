import React from 'react';
import NavBar from './NavBar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {
    return(
        <Router>
            <div>
                <NavBar />
                <div>
                    <Switch>
                        <Route exact path="/">
                            <About />
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