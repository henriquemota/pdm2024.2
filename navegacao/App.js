import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import Details from './src/views/details'
import Home from './src/views/home'
import Login from './src/views/login'

const { Navigator, Screen } = createNativeStackNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Navigator screenOptions={{ headerShown: false }}>
				<Screen name='login' component={Login} />
				<Screen name='home' component={Home} />
				<Screen name='details' component={Details} />
			</Navigator>
		</NavigationContainer>
	)
}

export default App
