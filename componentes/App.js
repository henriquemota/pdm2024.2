import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
// importacao da imagem
import logo from './assets/logo.jpg'

export default function App() {
	const img = {
		uri: 'https://i.pinimg.com/originals/be/b7/59/beb7593d7a55a49804b75a36a841c0b9.jpg',
		width: 50,
		height: 50,
	}
	const style = StyleSheet.create({
		container: { flex: 1, justifyContent: 'center', gap: 4 },
		image: { height: 100, width: 100, alignSelf: 'center' },
		text: { alignSelf: 'center' },
	})

	return (
		<View style={style.container}>
			<Image source={img} style={style.image} />
			<Text style={style.text}>Menesagem encontrada na Internet</Text>
			<Image source={logo} style={style.image} />
			<Text style={style.text}>Menesagem encontrada nos assets</Text>
		</View>
	)
}
