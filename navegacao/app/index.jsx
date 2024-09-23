import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Index = () => {
	return (
		<SafeAreaView style={{ flex: 1, paddingHorizontal: 4 }}>
			<View>
				<Text>Bem vindo ao React Native</Text>
				<Link href={{ pathname: '/lista' }} style={{ padding: 16, borderWidth: 1, borderRadius: 4 }}>
					Vai para lista
				</Link>
			</View>
		</SafeAreaView>
	)
}

export default Index
