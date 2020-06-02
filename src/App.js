import React from 'react';

import {Cards,Chart, CountryPicker} from './components'
import styles from './App.module.css'
import {fetchData} from './api'
import coronaImage from './images/image.png';

class App extends React.Component {
	state={				
								// sending data from here to cards
		data:{},
		country:'',
	}
	async componentDidMount () {
		const fetchedData = await fetchData();
		this.setState({data: fetchedData})
	}
	// Chossing country
	handleCountryChange = async(country)=>{
		// fetch the data
		const fetchedData = await fetchData(country);
		// set the data
		this.setState({data:fetchedData, country: country})

	}
	render() {
		const {data,country}=this.state;
		return(
			<div className="{styles.container}">
				<img className={styles.image} src={coronaImage}alt= "Covid-19"/>
				<Cards data={data}/>	
				{/* PASSING DATA AS PROPS TO CARD */}
				<CountryPicker handleCountryChange={this.handleCountryChange}/>
				<Chart data={data} country={country}/>
			</div>
		)
	}
}
export default App;
