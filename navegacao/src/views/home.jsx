import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Alert, FlatList, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Item from '../components/item'
import usePeople from '../hooks/people'
import styles from '../styles'

const Home = () => {
	const [data, setData] = useState({ count: 0, results: [], next: '' })
	const { navigate } = useNavigation()
	const { getPeople } = usePeople()

	useEffect(() => {
		getPeople()
			.then((res) => setData(res))
			.catch((e) => Alert.alert('Erro', e))
	}, [])

	return (
		<SafeAreaView style={styles.container}>
			<Text>Home</Text>
			<FlatList
				data={data.results}
				renderItem={({ item }) => <Item data={item} onPress={() => navigate('details')} />}
				keyExtractor={(item) => item.name}
				onEndReached={() => console.log('aqui')} // Chama quando chegar ao fim da lista
				onEndReachedThreshold={0.1} // Define quão próximo do final antes de disparar o carregamento (10%)
			/>
		</SafeAreaView>
	)
}

export default Home
