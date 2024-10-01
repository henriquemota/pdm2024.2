import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import Details from './src/views/details'
import Home from './src/views/home'
import Login from './src/views/login'

const { Navigator, Screen } = createNativeStackNavigator()
const { Navigator: BottomNavigator, Screen: BottomScreen } = createBottomTabNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Navigator screenOptions={{ headerShown: false }}>
				<Screen name='login' component={Login} />
				<Screen name='bottomTab' component={BottonTabs} />
			</Navigator>
		</NavigationContainer>
	)
}

const BottonTabs = () => {
	return (
		<BottomNavigator screenOptions={{ headerShown: false }}>
			<BottomScreen name='home' component={Home} />
			<BottomScreen name='details' component={Details} />
		</BottomNavigator>
	)
}

export default App
