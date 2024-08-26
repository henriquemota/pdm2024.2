import { Feather } from '@expo/vector-icons'
import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
	const { width, height } = Dimensions.get('screen')
	const styles = StyleSheet.create({
		container: {
			backgroundColor: '#c3c3c3',
			height: height,
			width,
		},
		containerHorizontal: {
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			gap: 8,
		},
		bolas: {
			height: 80,
			width: 80,
			borderRadius: 40,
		},
		verde: {
			backgroundColor: 'green',
		},
		azul: {
			backgroundColor: 'blue',
		},
		vermelho: {
			backgroundColor: 'red',
		},
	})

	const data = []
	for (let i = 0; i < 100; i++)
		data.push(`${i + 1} Aluno ${i + 1} - matrícula: ${String(Math.random() * (i + 1)).replace('.', '')}}`)

	return (
		<SafeAreaView>
			<View style={styles.container}>
				<View style={[styles.containerHorizontal, { marginVertical: 16 }]}>
					<ScrollView horizontal>
						<ActionButton label='Alunos' icon='user' />
						<ActionButton label='Vídeos' icon='airplay' />
						<ActionButton label='Disciplinas' icon='tablet' />
						<ActionButton label='Mensagens' icon='message-circle' />
						<ActionButton label='Aulas virtuais' icon='video' />
					</ScrollView>
				</View>

				<Text style={{ margin: 8, fontWeight: 'bold' }}>Lista</Text>
				<ScrollView>
					{data.map((el, ix) => (
						<Text style={{ margin: 8 }} key={ix}>
							{el}
						</Text>
					))}
				</ScrollView>
			</View>
		</SafeAreaView>
	)
}

function ActionButton({ label, icon }) {
	const { width, height } = Dimensions.get('screen')
	const styles = StyleSheet.create({
		container: {
			backgroundColor: '#c3c3c3',
			height: height,
			width,
		},
		containerHorizontal: {
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			gap: 8,
		},
		bolas: {
			height: 80,
			width: 80,
			borderRadius: 40,
		},
		verde: {
			backgroundColor: 'green',
		},
		azul: {
			backgroundColor: 'blue',
		},
		vermelho: {
			backgroundColor: 'red',
		},
	})
	return (
		<TouchableOpacity style={[styles.containerHorizontal, { margin: 16 }]}>
			<Feather name={icon} size={24} color='black' />
			<Text>{label}</Text>
		</TouchableOpacity>
	)
}
