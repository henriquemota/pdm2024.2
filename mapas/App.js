import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, TextInput } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
	const [loading, setLoading] = useState(false)
	const [coordenada, setCoordenada] = useState({})
	const [cep, setCEP] = useState('')
	const initialRegion = {
		latitude: -3.7617664,
		longitude: -38.4958464,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	}

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
				{'latitude' in coordenada && (
					<Marker
						title={coordenada.endereco}
						coordinate={{ latitude: coordenada.latitude, longitude: coordenada.longitude }}
					/>
				)}
			</MapView>
		</SafeAreaView>
	)
}
