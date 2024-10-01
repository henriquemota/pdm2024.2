import { Avatar, Button, Stack, TextInput } from '@react-native-material/core'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import useAuth from '../hooks/auth'

const Login = () => {
	const [data, setData] = useState({ email: '', password: '' })
	const { navigate } = useNavigation()
	const { signin } = useAuth()

	return (
		<Stack spacing={8} fill style={{ margin: 16, justifyContent: 'center' }}>
			<Avatar label='Star Wars' style={{ alignSelf: 'center', marginBottom: 32 }} />
			<TextInput label='Informe seu login' onChangeText={(text) => setData({ ...data, email: text })} />
			<TextInput label='Informe sua senha' onChangeText={(text) => setData({ ...data, password: text })} />
			{/* <Button title='Login' onPress={() => navigate('bottomTab')} /> */}
			<Button title='Login' onPress={() => signin(data)} />
		</Stack>
	)
}

export default Login
