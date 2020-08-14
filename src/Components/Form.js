import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

class Forms extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="City"/>
                <input type="text" name="country" placeholder="Country"/>
                <button>Get Weather</button>
            </form>
        );
    }
};

export default Forms;