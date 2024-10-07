import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

// importta as telas
import Form from './src/views/form'
import Lista from './src/views/lista'

const { Navigator, Screen } = createBottomTabNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Navigator>
				<Screen name='lista' component={Lista} />
				<Screen name='form' component={Form} />
			</Navigator>
		</NavigationContainer>
	)
}
