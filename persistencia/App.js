import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { PaperProvider } from 'react-native-paper'

// importt as telas
import Home from './src/views/home'

const { Navigator, Screen } = createNativeStackNavigator()

const App = () => {
	return (
		<PaperProvider>
			<NavigationContainer>
				<Navigator>
					<Screen name='home' component={Home} />
				</Navigator>
			</NavigationContainer>
		</PaperProvider>
	)
}

export default App
