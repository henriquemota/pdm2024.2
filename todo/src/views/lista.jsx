import { ActivityIndicator, Stack, Text } from '@react-native-material/core'
import React, { useEffect, useState } from 'react'
import { Alert, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import useTarefas from '../hooks/tarefas'

const Lista = () => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
	const { getData } = useTarefas()

	useEffect(() => {
		setLoading(true)
		getData()
			.then((retorno) => setData(retorno))
			.catch((err) => Alert.alert('Erro', err.message))
			.finally(() => setLoading(false))
	}, [])

	return (
		<SafeAreaView>
			<ActivityIndicator animating={loading} />
			<FlatList data={data} renderItem={({ item }) => <Item title={item.titulo} />} keyExtractor={(item) => item.id} />
		</SafeAreaView>
	)
}

const Item = ({ title }) => {
	return (
		<Stack m={4} spacing={4}>
			<Text>{title}</Text>
		</Stack>
	)
}

export default Lista
