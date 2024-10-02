import { Avatar, Button, Stack, TextInput } from '@react-native-material/core'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Alert } from 'react-native'
import useAuth from '../hooks/auth'

const Login = () => {
	const [data, setData] = useState([{ email: '', password: '' }])
	const { navigate } = useNavigation()
	const { signin } = useAuth()

	return (
		<Stack spacing={8} fill style={{ margin: 16, justifyContent: 'center' }}>
			<Avatar label='Star Wars' style={{ alignSelf: 'center', marginBottom: 32 }} />
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
			{/* <Button title='Login' onPress={() => navigate('tab')} /> */}
			<Button
				title='Login'
				onPress={async () => {
					try {
						const user = await signin({ ...data })
						if (user) navigate('tab')
					} catch (error) {
						Alert.alert('Erro', error.message)
					}
				}}
			/>
		</Stack>
	)
}

export default Login
