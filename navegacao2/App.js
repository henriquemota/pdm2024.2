import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Details from './src/views/details'
import Home from './src/views/home'

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='home' component={Home} />
				<Stack.Screen name='details' component={Details} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
