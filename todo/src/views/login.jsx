import { Button, TextInput } from '@react-native-material/core'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import useAuth from '../hooks/auth'

const Login = () => {
	const [data, setData] = useState({ email: '', password: '' })
	const { signin } = useAuth()

	return (
		<SafeAreaView style={{ flex: 1, justifyContent: 'center', gap: 12, padding: 8 }}>
			<TextInput
				label='Informe seu login'
				autoCapitalize='none'
				onChangeText={(text) => setData({ ...data, email: text })}
			/>
			<TextInput
				label='Informe sua senha'
				secureTextEntry={true}
				onChangeText={(text) => setData({ ...data, password: text })}
			/>
			<Button title='Login' onPress={() => signin(data)} />
		</SafeAreaView>
	)
}

export default Login
