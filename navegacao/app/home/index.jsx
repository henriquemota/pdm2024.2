import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const index = () => {
	return (
		<View>
			<Text>Home</Text>
			<Link href={{ pathname: '/home/interna' }}> Vai para interna </Link>
		</View>
	)
}

export default index
