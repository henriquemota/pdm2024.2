import { AntDesign } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Dimensions, Image, Text, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import user from '../../assets/user.png'

const Login = ({ setLogged }) => {
	const [usuario, setUsuario] = useState('')
	const [senha, setSenha] = useState('')
	const { height, width } = Dimensions.get('screen')

	const auth = () => {
		if (usuario === 'admin' && senha === 'senha') {
			setLogged(true)
		} else {
			setLogged(false)
		}
	}

	return (
		<SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Image
				source={user}
				style={{
					height: 160,
					width: 160,
					borderRadius: 80,
					borderWidth: 1,
					borderColor: '#000',
				}}
			/>
			<TextInput
				style={{
					borderWidth: 1,
					borderRadius: 4,
					backgroundColor: 'rgba(0,0,0,0.1)',
					width: width - 16,
					padding: 8,
					margin: 8,
				}}
				placeholder='Informe seu login'
				keyboardType='email-address'
				onChangeText={setUsuario}
			/>
			<TextInput
				style={{
					borderWidth: 1,
					borderRadius: 4,
					backgroundColor: 'rgba(0,0,0,0.1)',
					width: width - 16,
					padding: 8,
					margin: 8,
				}}
				placeholder='Informe sua senha'
				secureTextEntry={true}
				onChangeText={setSenha}
			/>
			<TouchableOpacity
				style={{ flexDirection: 'row', gap: 8, padding: 12, borderWidth: 1, borderRadius: 8 }}
				onPress={auth}
			>
				<Text>Login</Text>
				<AntDesign name='login' size={24} color='black' />
			</TouchableOpacity>
		</SafeAreaView>
	)
}

export default Login
