import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import data from '../data/data'

function Home({ onLogout }) {
	const { width, height } = Dimensions.get('screen')
	const estilos = StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
		},
		button: {
			width: 80,
			height: 80,
			justifyContent: 'center',
			alignItems: 'center',
			gap: 8,
			borderRadius: 8,
			borderWidth: 1,
			marginHorizontal: 2,
			backgroundColor: 'rgba(0,0,0,0.2)',
		},
		inputContainer: {
			flexDirection: 'row',
		},
		input: {
			borderWidth: 1,
			borderRadius: 4,
			padding: 8,
			margin: 8,
			flex: 1,
		},
		inputButton: {
			justifyContent: 'center',
			alignItems: 'center',
			marginRight: 8,
		},
		itensContainer: {
			flexDirection: 'row',
			gap: 8,
			margin: 8,
		},
		imagem: {
			height: 80,
			width: 160,
		},
	})
	return (
		<SafeAreaView style={estilos.container}>
			<View style={{ height: 100, justifyContent: 'center', padding: 4, width: width }}>
				<ScrollView horizontal>
					<TouchableOpacity style={estilos.button} onPress={() => onLogout(false)}>
						<AntDesign name='logout' size={24} color='black' />
						<Text>Sair</Text>
					</TouchableOpacity>
				</ScrollView>
			</View>
			<View style={estilos.container}>
				<View style={estilos.inputContainer}>
					<TextInput style={estilos.input} />
					<TouchableOpacity style={estilos.inputButton}>
						<AntDesign name='search1' size={24} color='black' />
					</TouchableOpacity>
				</View>
				<ScrollView>
					{data.map((el, ix) => (
						<View style={estilos.itensContainer} key={ix}>
							<Image source={el.imagem} style={estilos.imagem} />
							<View>
								<Text>{el.nome}</Text>
								<Text>{el.valor}</Text>
							</View>
						</View>
					))}
				</ScrollView>
			</View>
		</SafeAreaView>
	)
}

export default Home
