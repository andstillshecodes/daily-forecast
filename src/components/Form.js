import React, { useContext, useState } from 'react'
import { WeatherContext } from '../contexts/WeatherContext'
import { toTitleCase } from '../utils'

export const Form = () => {
	const { getWeatherData } = useContext(WeatherContext)
	const [requestedLocation, setRequestedLocation] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		getWeatherData(requestedLocation)
		setRequestedLocation('')
	}

	return (
		<aside>
			<form className='location-form' onSubmit={handleSubmit}>
				<label>
					Get Forcast for
					<input
						type='text'
						placeholder='New York'
						value={requestedLocation}
						onChange={(e) => setRequestedLocation(toTitleCase(e.target.value))}
						required
					/>
					<input type='submit' value='>' />
				</label>
			</form>
		</aside>
	)
}
