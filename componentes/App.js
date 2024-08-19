import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
// importacao da imagem
import logo from './assets/logo.jpg'

export default function App() {
	const img = {
		uri: 'https://i.pinimg.com/originals/be/b7/59/beb7593d7a55a49804b75a36a841c0b9.jpg',
		width: 50,
		height: 50,
	}
	const style = StyleSheet.create({
		container: { flex: 1, justifyContent: 'center', gap: 4, padding: 8 },
		image: { height: 100, width: 100, alignSelf: 'center' },
		text: { alignSelf: 'center' },
		textInput: { borderWidth: 1, padding: 4 },
	})

	function _handleText(text) {
		console.log(text)
	}

	const data = []
	for (let index = 0; index < 100; index++)
		data.push(
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, laudantium fugit autem deleniti voluptate nihil quibusdam cum earum quidem? Quo obcaecati labore velit qui, aperiam voluptas eos itaque aut est.'
		)

	return (
		<View style={style.container}>
			<Image source={img} style={style.image} />
			<Text style={style.text}>Menesagem encontrada na Internet</Text>
			<Image source={logo} style={style.image} />
			<Text style={style.text}>Menesagem encontrada nos assets</Text>
			<TextInput style={style.textInput} keyboardType='email-address' onChangeText={_handleText} />
			<View style={{ flex: 1 }}>
				<ScrollView>
					{data.map(function (el, ix) {
						return (
							<Text key={ix}>
								{ix + 1}. {el}
							</Text>
						)
					})}
				</ScrollView>
			</View>
		</View>
	)
}
