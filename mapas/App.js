import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
	const [loading, setLoading] = useState(false)
	const [coordenada, setCoordenada] = useState({})
	const [coordenadas, setCoordenadas] = useState([])
	const initialRegion = {
		latitude: -3.7617664,
		longitude: -38.4958464,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	}

	const getJobs = async () => {
		try {
			const url = 'https://jsearch.p.rapidapi.com/search?query=node.js+developer+in+fortelza'
			const options = {
				method: 'GET',
				params: {
					page: '1',
					num_pages: '1',
					date_posted: 'all',
				},
				headers: {
					'x-rapidapi-key': '0594679197msh4c91a223a18a1ccp1aad56jsn9c4ce2de4ffa', // Substitua pela sua chave da API
					'x-rapidapi-host': 'jsearch.p.rapidapi.com',
				},
			}
			const {
				data: { data },
			} = await axios.get(url, options)
			return data.map((e) => ({
				titulo: e.job_title,
				cidade: e.job_city,
				pais: e.job_country,
				latitude: e.job_latitude,
				longitude: e.job_longitude,
				link: e.job_apply_link,
			}))
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getJobs()
			.then((e) => e.forEach((e) => console.log(e.longitude, e.latitude)))
			.finally(() => console.log('finalizou'))
	}, [])

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ActivityIndicator animating={loading} />
			<MapView
				style={{ flex: 1 }}
				initialRegion={initialRegion}
				// region={
				// 	'latitude' in coordenada
				// 		? {
				// 				...initialRegion,
				// 				latitude: coordenada.latitude,
				// 				longitude: coordenada.longitude,
				// 		  }
				// 		: initialRegion
				// }
				region={initialRegion}
			>
				<Marker title='aqui' coordinate={{ latitude: -3.7327178, longitude: -38.526993 }} />
				{/* {coordenadas.map((e, i) => (
					<Marker key={i} title='aqui' coordinate={{ latitude: e.latitude, longitude: e.longitude }} />
				))} */}
			</MapView>
		</SafeAreaView>
	)
}
