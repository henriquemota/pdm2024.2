import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { Alert, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const Home = () => {
	const [user, setUser] = useState(null)

	useEffect(() => {
		AsyncStorage.getItem('user').then((data) => setUser(JSON.parse(data)))
	}, [])

	return (
		<View style={{ padding: 4 }}>
			<TextInput value={user?.login} />
			<Button
				onPress={async () => {
					await AsyncStorage.setItem('user', JSON.stringify(user))
					Alert.alert('Mensagem', 'Dados gravados com sucesso')
				}}
			>
				Valor
			</Button>
			<Text>{user && JSON.stringify(user)}</Text>
		</View>
	)
}

export default Home
