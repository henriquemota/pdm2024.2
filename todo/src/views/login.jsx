import { Button, Input } from 'native-base'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import useAuth from '../hooks/auth'

const Login = () => {
	const [data, setData] = useState({ email: '', password: '' })
	const { signin } = useAuth()

	return (
		<SafeAreaView style={{ flex: 1, justifyContent: 'center', gap: 12, padding: 8 }}>
			<Input
				placeholder='informe seu email'
				autoCapitalize='none'
				onChangeText={(text) => setData({ ...data, email: text })}
			/>
			<Input
				placeholder='informe sua senha'
				secureTextEntry={true}
				onChangeText={(text) => setData({ ...data, password: text })}
			/>
			<Button onPress={() => signin(data)}>Login</Button>
		</SafeAreaView>
	)
}

export default Login
