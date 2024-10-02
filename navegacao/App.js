import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import Details from './src/views/details'
import Home from './src/views/home'
import Login from './src/views/login'

const { Navigator, Screen } = createNativeStackNavigator()
const { Navigator: TabNavigator, Screen: TabScreen } = createBottomTabNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Navigator screenOptions={{ headerShown: false }}>
				<Screen name='login' component={Login} />
				<Screen name='tab' component={Tab} />
			</Navigator>
		</NavigationContainer>
	)
}

const Tab = () => {
	return (
		<TabNavigator screenOptions={{ headerShown: false }}>
			<TabScreen name='home' component={Home} />
			<TabScreen name='details' component={Details} />
		</TabNavigator>
	)
}

export default App
