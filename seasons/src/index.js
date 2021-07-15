import React from 'react' ;
import ReactDOM  from 'react-dom';
//import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor(props) {
        super(props);
        //this is only time we assign a value directly
        this.state = {lat: null,errorMessage:""};


        window.navigator.geolocation.getCurrentPosition(
            position => {
                //to update state object  we called setState
                this.setState({lat: position.coords.latitude});

                //this is wrong => this.state.lat = position.coords.latitude

            },
            error => {
                this.setState({errorMessage: error.message})
            }
        );
    }

    //render should be defined
    render() {
        if(this.state.errorMessage && !this.state.lat){
            return <div style={{backgroundColor:'maroon'}}>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat){
            return <div style={{backgroundColor:'orange'}}>Latitude: {this.state.lat}</div>
        }
        return <div>Loading!</div>;
    }
};

//for autoreloading when the file is saved
if(module.hot) {
    module.hot.accept();
}

ReactDOM.render(
    <App />,
    document.querySelector("#root"));