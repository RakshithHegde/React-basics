import React from 'react' ;
import ReactDOM  from 'react-dom';
//import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor(props) {
        super(props);
        //this is only time we assign a value
        this.state = {lat: null,long: null};


        window.navigator.geolocation.getCurrentPosition(
            position => {
                //to update state object  we called setState
                this.setState({lat: position.coords.latitude,long: position.coords.longitude});

                //this is wrong => this.state.lat = position.coords.latitude

            },
            error => console.log(error)
        );
    }

    //render should be defined
    render() {
  
        return <div style={{backgroundColor:'maroon'}}>
            Latitude: {this.state.lat} <br /> 
            Longitude: {this.state.long}

        </div>;
    }
};


if(module.hot) {
    module.hot.accept();
}

ReactDOM.render(
    <App />,
    document.querySelector("#root"));