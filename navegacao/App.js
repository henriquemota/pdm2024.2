import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Details from './src/views/details'
import Home from './src/views/home'
import Login from './src/views/login'

const { Navigator, Screen } = createNativeStackNavigator()
// const { Navigator, Screen } = createBottomTabNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Navigator>
				<Screen name='login' component={Login} />
				<Screen name='home' component={Home} />
				<Screen name='details' component={Details} />
			</Navigator>
		</NavigationContainer>
	)
}

export default App
