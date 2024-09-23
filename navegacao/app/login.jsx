import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const Login = () => {
	return (
		<View>
			<Text>Login</Text>
			<Link href={'/'}>Vai para home</Link>
		</View>
	)
}

export default Login
