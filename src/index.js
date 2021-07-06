import React from 'react';
import ReactDom from 'react-dom';



class App extends React.Component {
    render() {
        return(
            <div>
                <h1>Salome Ranson</h1>
            </div>
        )
    }
}

ReactDom.render(<App />, document.querySelector('#root'));