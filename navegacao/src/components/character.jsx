import { Divider, Stack, Text } from '@react-native-material/core'
import React from 'react'
import { Pressable } from 'react-native'

const Character = ({ data, onPress = null }) => {
	const { name, height, mass, birth_year, gender } = data

	return (
		<Stack m={4} spacing={4} style={{ margin: 16 }}>
			<Pressable onPress={onPress}>
				<Text>Name: {name}</Text>
				<Divider />
				<Text>height: {height}</Text>
				<Divider />
				<Text>Mass: {mass}</Text>
				<Divider />
				<Text>Birth Year: {birth_year}</Text>
				<Divider />
				<Text>Gender: {gender}</Text>
			</Pressable>
		</Stack>
	)
}

export default Character
