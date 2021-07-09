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
                        <Router exact path="/">
                            <About />
                        </Router>
                        <Router exact path="/projects">
                            <Projects />
                        </Router>
                        <Router exact path="/contact">
                            <Contact />
                        </Router>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}


export default App;