import React from 'react';
import reactDom from 'react-dom';
import Header from './Header';
import Card from './Card';


class App extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <Card />
            </div>
        )
    }
}


export default App;