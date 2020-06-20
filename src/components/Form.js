import React, {Component} from 'react';

class Form extends Component {
    render(){
        return (
            <form onSubmit={this.props.weatherInfo}>
                <input type="text" name="country" placeholder="Enter Country"/>
                <input type="text" name="city" placeholder="Enter City"/>
                <button>Get Weather</button>
            </form>
        );
    }
}

export default Form;
