import { AntDesign } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Dimensions, Image, Text, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Login = ({ setLogged }) => {
	const [login, setLogin] = useState('')
	const [senha, setSenha] = useState('')
	const { height, width } = Dimensions.get('screen')

	return (
		<SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Image
				source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/t2/439863-icone-de-usuarios-de-gratis-vetor.jpg' }}
				style={{
					height: 160,
					width: 160,
					// borderRadius: 80,
					// borderWidth: 1,
					// borderColor: '#000',
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
				onChangeText={setLogin}
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
				onPress={() => {
					if (login === 'admin' && senha === 'senha') setLogged(true)
					else setLogged(false)
				}}
			>
				<Text>Login</Text>
				<AntDesign name='login' size={24} color='black' />
			</TouchableOpacity>
		</SafeAreaView>
	)
}

export default Login
export { Login }
