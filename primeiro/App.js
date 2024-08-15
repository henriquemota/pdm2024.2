import React from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'

export default function App() {
	const estilos = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: 'white',
			justifyContent: 'center',
			alignItems: 'center',
		},
		label: {
			fontSize: 32,
			marginBottom: 32,
		},
	})

	function sortear() {
		const numeros = []
		for (let i = 0; i < 20; i++) numeros.push(i)
		const indice = Math.floor(Math.random() * numeros.length)
		Alert.alert('Atenção', 'O número sorteado foi  ' + numeros[indice])
	}

	return (
		<View style={estilos.container}>
			<Text style={estilos.label}>Bem vindo ao React native</Text>
			<Button title='Clique aqui para sortear' onPress={sortear} />
		</View>
	)
}
