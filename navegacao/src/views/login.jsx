import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../components/button'
import styles from '../styles'

const Login = () => {
	const { navigate } = useNavigation()

	return (
		<SafeAreaView style={[{ justifyContent: 'center' }, styles.container]}>
			<Text>Informe seu login</Text>
			<TextInput style={styles.textInput} />
			<Text>Informe sua senha</Text>
			<TextInput style={styles.textInput} />
			<Button onPress={() => navigate('home')} text='Login' />
		</SafeAreaView>
	)
}

export default Login
