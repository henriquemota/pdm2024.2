import { Avatar, Button, Stack, TextInput } from '@react-native-material/core'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const Login = () => {
	const { navigate } = useNavigation()

	return (
		<Stack spacing={8} fill style={{ margin: 16, justifyContent: 'center' }}>
			<Avatar label='Star Wars' style={{ alignSelf: 'center', marginBottom: 32 }} />
			<TextInput label='Informe seu login' />
			<TextInput label='Informe sua senha' />
			<Button title='Login' onPress={() => navigate('home')} />
		</Stack>
	)
}

export default Login
