import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { Alert, Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
	const { width, height } = Dimensions.get('screen')

	const estilos = StyleSheet.create({
		container: {
			flex: 1,
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

	const data = []
	for (let i = 0; i < 100; i++) data.push(`Aluno - Matrícula ${String(Math.random()).replace('.', '')}`)

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Menu />
			<View style={estilos.container}>
				<ScrollView>
					{data.map((el, ix) => (
						<TouchableOpacity key={ix}>
							<Text>{el}</Text>
							<FontAwesome name='bars' size={24} color='black' />
						</TouchableOpacity>
					))}
				</ScrollView>
			</View>
		</SafeAreaView>
	)
}

function Menu() {
	return (
		<View>
			<ScrollView horizontal>
				<ActionButton icon='user-o' label='Alunos' onPress={() => Alert.alert('Atenção', 'Estou funcionando')} />
				<ActionButton icon='file-movie-o' label='Aulas' />
				<ActionButton icon='file-pdf-o' label='Arquivos' />
				<ActionButton icon='user-o' label='Alunos' />
				<ActionButton icon='file-movie-o' label='Aulas' />
				<ActionButton icon='file-pdf-o' label='Arquivos' />
				<ActionButton icon='user-o' label='Alunos' />
			</ScrollView>
		</View>
	)
}

function ActionButton({ icon, label, onPress }) {
	const estilos = StyleSheet.create({
		box: {
			margin: 4,
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
		<TouchableOpacity style={[estilos.box]} onPress={onPress}>
			<Text>{label}</Text>
			<FontAwesome name={icon} size={24} color='black' />
		</TouchableOpacity>
	)
}
