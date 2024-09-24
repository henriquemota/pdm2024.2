import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../components/button'
import styles from '../styles'

const Details = () => {
	const { popToTop, goBack } = useNavigation()
	return (
		<SafeAreaView style={styles.container}>
			<Text>Details</Text>
			<Button text='Vai para login' onPress={() => popToTop()} />
			<Button text='Voltar para home' onPress={() => goBack()} />
		</SafeAreaView>
	)
}

export default Details
