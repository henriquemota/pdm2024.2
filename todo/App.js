import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NativeBaseProvider } from 'native-base'
import React from 'react'

// importt as telas
import Form from './src/views/form'
import Lista from './src/views/lista'
import Login from './src/views/login'

const { Navigator, Screen } = createBottomTabNavigator()
const { Navigator: NavigatorStack, Screen: ScreenStack } = createNativeStackNavigator()

const App = () => {
	return (
		<NativeBaseProvider>
			<NavigationContainer>
				<NavigatorStack>
					<ScreenStack name='login' component={Login} />
					<ScreenStack name='main' component={Menu} />
				</NavigatorStack>
			</NavigationContainer>
		</NativeBaseProvider>
	)
}

const Menu = () => {
	return (
		<Navigator>
			<Screen name='lista' component={Lista} />
			<Screen name='form' component={Form} />
		</Navigator>
	)
}
export default App
