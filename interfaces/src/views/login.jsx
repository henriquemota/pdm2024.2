import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import guest from '../../assets/guest.png'

function Login({ onLogin }) {
	const { width, height } = Dimensions.get('screen')
	const estilos = StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
		},
		imagem: {
			height: 180,
			width: 180,
			borderRadius: 90,
			borderWidth: 8,
			borderColor: 'black',
		},
		text: {
			width: width - 16,
			fontSize: 16,
			marginTop: 4,
		},
		input: {
			borderWidth: 1,
			borderRadius: 4,
			padding: 8,
			margin: 8,
			width: width - 16,
		},
		button: {
			borderWidth: 1,
			backgroundColor: 'rgba(0,0,0,0.2)',
			borderRadius: 4,
			flexDirection: 'row',
			justifyContent: 'space-evenly',
			alignItems: 'center',
			padding: 16,
			gap: 32,
		},
	})

	return (
		<SafeAreaView style={estilos.container}>
			<Image source={guest} style={estilos.imagem} />
			<Text style={estilos.text}>Login</Text>
			<TextInput style={estilos.input} />
			<Text style={estilos.text}>Senha</Text>
			<TextInput style={estilos.input} />
			<TouchableOpacity style={estilos.button} onPress={() => onLogin(true)}>
				<Text>Login</Text>
				<AntDesign name='login' size={24} color='black' />
			</TouchableOpacity>
		</SafeAreaView>
	)
}

export default Login
