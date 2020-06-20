import React, {Component} from 'react';
import Form from './components/Form';
import Weather from'./components/Weather';

class App extends Component {
    state = {
        city : '',
        country : '',
        tempreture : '',
        humidity : '',
        description : '',
        error : '',
    }
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const API_KEY = "594ec66ba073f4d9003c0a92341589a1";
        const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
        const data = await api.json();
        if(city && country ){
            this.setState({
                city : data.name,
                country : data.sys.country,
                tempreture : data.main.temp,
                humidity : data.main.humidity,
                description : data.weather[0].description,
                error : '',
             })
        }
        else{
            this.setState({
                city : '',
                country : '',
                tempreture : '',
                humidity : '',
                description : '',
                error : 'Please Enter Data',
            })  
        }
    }

    render(){
        return (
            <div className="wrapper">
                <div className="form-container">
                    <Form weatherInfo={this.getWeather}/>
                    <Weather data={this.state}/>
                </div>
            </div>
        );
    }
}

export default App;
