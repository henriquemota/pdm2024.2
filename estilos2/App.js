import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
	const { width, height } = Dimensions.get('screen')

	const estilos = StyleSheet.create({
		container: {
			width: width,
			height: height,
			justifyContent: 'center',
			alignItems: 'center',
			gap: 16,
		},
		box: {
			height: 80,
			width: 80,
			borderRadius: 8,
			borderWidth: 1,
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'space-around',
		},
	})

	return (
		<SafeAreaView>
			<View style={estilos.container}>
				<ActionButton icon='user-o' label='Alunos' />
				<ActionButton icon='file-movie-o' label='Aulas' />
				<ActionButton icon='file-pdf-o' label='Arquivos' />
			</View>
		</SafeAreaView>
	)
}

function ActionButton({ icon, label }) {
	const estilos = StyleSheet.create({
		box: {
			height: 80,
			width: 80,
			borderRadius: 8,
			borderWidth: 1,
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'space-around',
		},
	})
	return (
		<TouchableOpacity style={[estilos.box]}>
			<Text>{label}</Text>
			<FontAwesome name={icon} size={24} color='black' />
		</TouchableOpacity>
	)
}
