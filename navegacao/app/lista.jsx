import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Lista = () => {
	return (
		<SafeAreaView style={{ flex: 1, paddingHorizontal: 4 }}>
			<View>
				<Text>Minha Lista</Text>
			</View>
		</SafeAreaView>
	)
}

export default Lista
