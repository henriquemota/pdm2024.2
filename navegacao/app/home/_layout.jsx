import { Slot } from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const _layout = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Slot />
		</SafeAreaView>
	)
}

export default _layout
