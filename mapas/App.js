import axios from 'axios'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { ActivityIndicator, TextInput } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
	const [loading, setLoading] = useState(false)
	const [coordenada, setCoordenada] = useState({})

	const buscaEndereco = (cep) => {
		if (cep.length === 8) {
			setLoading(true)
			axios
				.get('https://cep.awesomeapi.com.br/json/' + cep)
				.then(({ data, status }) => {
					status === 200
						? setCoordenada({ latitude: Number(data.lat), longitude: Number(data.lng) })
						: setCoordenada({})
				})
				.catch(() => setCoordenada({}))
				.finally(() => setLoading(false))
		}
	}

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar style='auto' />
			<ActivityIndicator animating={loading} />
			<TextInput
				style={{ borderWidth: 1, borderRadius: 4, margin: 8, padding: 8 }}
				placeholder='informe seu cep aqui'
				keyboardType='numeric'
				onChangeText={buscaEndereco}
				maxLength={8}
			/>
			<MapView
				style={{ flex: 1 }}
				// liteMode
				showsUserLocation
				zoomEnabled
				zoomTapEnabled
				scrollEnabled
				initialRegion={{
					latitude: -3.7617664,
					longitude: -38.4958464,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0922,
				}}
			>
				{'latitude' in coordenada && <Marker coordinate={coordenada} title={''} description={''} />}
			</MapView>
		</SafeAreaView>
	)
}
