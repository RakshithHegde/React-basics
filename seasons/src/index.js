import React from 'react' ;
import ReactDOM  from 'react-dom';
//import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {lat: null};
    }

    //render should be defined
    render() {
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            error => console.log(error)
        );
        return <div style={{backgroundColor:'crimson'}}>Latitude:</div>;
    }
};


if(module.hot) {
    module.hot.accept();
}

ReactDOM.render(
    <App />,
    document.querySelector("#root"));