import React from 'react' ;
import ReactDOM  from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import './index.css'

class App extends React.Component {
   /* constructor(props) {
        super(props);
        //this is only time we assign a value directly
        this.state = {lat: null,errorMessage:""}; 
    } */
    state = {lat: null,errorMessage: ''};
    componentDidMount() {
       // console.log("My component is rendered to the screen");
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude})
                //to update state object  we called setState
                //this is wrong => this.state.lat = position.coords.latitude
            ,
            error => this.setState({errorMessage: error.message})
        );
    }
    renderContent() {  //helper method
        if(this.state.errorMessage && !this.state.lat){
            return <h3 style={{backgroundColor:'maroon'}}>Error❎:  {this.state.errorMessage}</h3>
        }
        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/> 
        }
        return <Spinner message={'Please accept location request'} />;
    }
    //render should be defined
    render() {
        return (
            <div className="border">
                {this.renderContent()}
            </div>
        )
    }
};

//for autoreloading when the file is saved
if(module.hot) {
    module.hot.accept();
}

ReactDOM.render(
    <App />,
    document.querySelector("#root"));