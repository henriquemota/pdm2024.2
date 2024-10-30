import asyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { Alert, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const Home = () => {
	const [user, setUser] = useState(null)

	useEffect(() => {
		asyncStorage.getItem('usuario').then((data) => {
			setUser(JSON.parse(data))
			asyncStorage.removeItem('usuario')
		})
	}, [])

	return (
		<View style={{ padding: 4 }}>
			<TextInput label='Informe o valor' />
			<Text>{user?.nome}</Text>
			<Text>{user?.perfil}</Text>
			<Text>{JSON.stringify(user)}</Text>
			<Button
				mode='elevated'
				onPress={async () => {
					await asyncStorage.setItem('usuario', JSON.stringify(user))
					Alert.alert('Atenção', 'Dados gravados com sucesso')
				}}
			>
				Informacao
			</Button>
		</View>
	)
}

export default Home
