import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { PaperProvider } from 'react-native-paper'

const { Navigator, Screen } = createNativeStackNavigator()

// importacoes das telas
import Database from 'views/database'

const App = () => {
	return (
		<PaperProvider>
			<NavigationContainer>
				<Navigator>
					<Screen name='database' component={Database} />
				</Navigator>
			</NavigationContainer>
		</PaperProvider>
	)
}

export default App
