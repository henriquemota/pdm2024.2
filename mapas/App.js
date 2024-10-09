import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, TextInput } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
	const [loading, setLoading] = useState(false)
	const [coordenada, setCoordenada] = useState({})
	const [coordenadas, setCoordenadas] = useState([])
	const [cep, setCEP] = useState('')
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
			.then((e) => setCoordenadas(e))
			.finally(() => console.log('finalizou'))
	}, [])

	useEffect(() => {
		if (cep.length === 8) {
			setLoading(true)
			axios
				.get('https://cep.awesomeapi.com.br/json/' + cep)
				.then(({ data }) =>
					setCoordenada({
						endereco: data.address,
						latitude: Number(data.lat),
						longitude: Number(data.lng),
					})
				)
				.catch((err) => setCoordenada({}))
				.finally(() => setLoading(false))
		}
	}, [cep])

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ActivityIndicator animating={loading} />
			<TextInput
				style={{ borderWidth: 1, padding: 8, borderRadius: 4, margin: 8 }}
				placeholder='informe o cep desejado'
				keyboardType='number-pad'
				maxLength={8}
				onChangeText={setCEP}
			/>
			<MapView
				style={{ flex: 1 }}
				initialRegion={initialRegion}
				region={
					'latitude' in coordenada
						? {
								...initialRegion,
								latitude: coordenada.latitude,
								longitude: coordenada.longitude,
						  }
						: initialRegion
				}
			>
				{coordenadas.length &&
					coordenadas.map((e, i) => <Marker key={i} coordinate={{ latitude: e.latitude, longitude: e.longitude }} />)}
			</MapView>
		</SafeAreaView>
	)
}
