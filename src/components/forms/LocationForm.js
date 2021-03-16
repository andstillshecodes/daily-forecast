import React, { useContext, useState } from 'react'
import { WeatherContext } from '../../contexts/WeatherContext'
import { toTitleCase } from '../../utils'

export const LocationForm = () => {
	const { getWeatherData } = useContext(WeatherContext)
	const [requestedLocation, setRequestedLocation] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		getWeatherData(requestedLocation)
		setRequestedLocation('')
	}

	return (
		<form className='location-form' onSubmit={handleSubmit}>
			<label>
				Get forcast for
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
	)
}
