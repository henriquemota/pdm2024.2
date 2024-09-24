import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../components/button'
import styles from '../styles'

const Home = () => {
	const { navigate } = useNavigation()
	return (
		<SafeAreaView style={styles.container}>
			<Text>Home</Text>
			<Button text='Vai para details' onPress={() => navigate('details')} />
		</SafeAreaView>
	)
}

export default Home
