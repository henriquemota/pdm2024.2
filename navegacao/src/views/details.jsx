import { ActivityIndicator, Button, Text } from '@react-native-material/core'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import usePeople from '../hooks/people'

const Details = ({ route: { params = {} } }) => {
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState(null)
	const { goBack } = useNavigation()
	const { id = null } = params
	const { getPerson } = usePeople()

	useEffect(() => {
		if (id) {
			setLoading(true)
			getPerson(id)
				.then((e) => setData(e))
				.catch((e) => {
					setData(null)
					Alert.alert('Erro', e)
				})
				.finally(() => setLoading(false))
		}
	}, [id])

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ActivityIndicator animating={loading} />
			<Text>Details</Text>
			{/* <Text>{JSON.stringify(data)}</Text> */}
			<Text>Name: {data?.name}</Text>
			<Button title='Voltar' onPress={() => goBack()} />
		</SafeAreaView>
	)
}

export default Details
