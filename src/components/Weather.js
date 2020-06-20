import React, {Component} from 'react';

class Weather extends Component {
    render(){
        return (
            <div className="info">
                {this.props.data.city && <p className="info-key"> city: <span className="info-value">{this.props.data.city} </span> </p> }
                {this.props.data.country && <p className="info-key"> Country: <span className="info-value">{this.props.data.country} </span> </p> }
                {this.props.data.tempreture && <p className="info-key"> Tempreture: <span className="info-value">{this.props.data.tempreture} </span> </p> }
                {this.props.data.humidity && <p className="info-key"> Humidity: <span className="info-value">{this.props.data.humidity} </span> </p> }
                {this.props.data.description && <p className="info-key"> Description: <span className="info-value">{this.props.data.description} </span> </p> }
                {this.props.data.error && <p className="info-key"> Error Message: <span className="info-value">{this.props.data.error} </span> </p> }
            </div>
        );
    }
}

export default Weather;
