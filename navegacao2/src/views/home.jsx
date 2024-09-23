import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

const Home = () => {
	const navigation = useNavigation()

	return (
		<View>
			<Text>Home</Text>
			<Pressable style={{ padding: 8 }} onPress={() => navigation.navigate('details')}>
				<Text>Vai para detalhes</Text>
			</Pressable>
		</View>
	)
}

export default Home
