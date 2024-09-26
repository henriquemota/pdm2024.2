import { ActivityIndicator, Text } from '@react-native-material/core'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Alert, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Character from '../components/character'
import usePeople from '../hooks/people'

const Home = () => {
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState({ count: 0, next: '', results: [] })
	const { getPeople } = usePeople()
	const { navigate } = useNavigation()

	useEffect(() => {
		setLoading(true)
		getPeople()
			.then((e) => setData(e))
			.catch((e) => Alert.alert('Erro', e))
			.finally(() => setLoading(false))
	}, [])

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ActivityIndicator animating={loading} />
			<Text>Home</Text>
			<FlatList
				data={data.results}
				renderItem={({ item }) => (
					<Character
						data={item}
						onPress={() => {
							const parts = item.url.split('/')
							const id = parts[parts.length - 2]
							navigate('details', { id: id })
						}}
					/>
				)}
				keyExtractor={(item) => item.name}
			/>
		</SafeAreaView>
	)
}

export default Home
