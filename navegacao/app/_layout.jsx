import { Tabs } from 'expo-router'
import React from 'react'

const _layout = () => {
	return (
		<Tabs>
			<Tabs.Screen name='index' options={{ tabBarIcon: '' }} />
			<Tabs.Screen name='login' />
			<Tabs.Screen name='home' />
		</Tabs>
	)
}

export default _layout
