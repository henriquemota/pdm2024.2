import React from 'react'
import { Pressable, Text, View } from 'react-native'

const Item = ({ data, onPress = null }) => {
	const {
		name = '',
		height = '',
		mass = '',
		hair_color = '',
		skin_color = '',
		eye_color = '',
		birth_year = '',
		gender = '',
	} = data

	return (
		<Pressable style={{ gap: 2, borderWidth: 1, marginVertical: 4, borderRadius: 8, padding: 8 }} onPress={onPress}>
			<Text>Name: {name}</Text>
			<View style={{ flexDirection: 'row', gap: 8 }}>
				<Text>Height: {height}</Text>
				<Text>Mass: {mass}</Text>
				<Text>Hair color: {hair_color}</Text>
			</View>
			<View style={{ flexDirection: 'row', gap: 8 }}>
				<Text>Skin color: {skin_color}</Text>
				<Text>Eye color: {eye_color}</Text>
			</View>
			<View style={{ flexDirection: 'row', gap: 8 }}>
				<Text>Birth year: {birth_year}</Text>
				<Text>Gender: {gender}</Text>
			</View>
		</Pressable>
	)
}

export default Item
