import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, Button, FlatList, Text, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
	const [loading, setLoading] = useState(false)
	const [task, setTask] = useState('')
	const [data, setData] = useState([])

	useEffect(() => {
		axios.get('https://pdm20242-default-rtdb.firebaseio.com/tarefas.json').then(({ data }) => {
			const temp = Object.entries(data).map(([id, values]) => ({ ...values, id: id }))
			setData(temp)
		})
	}, [, loading])

	const incluir = () => {
		setLoading(true)
		axios
			.post('https://pdm20242-default-rtdb.firebaseio.com/tarefas.json', { task: task })
			.then(() => {
				setTask('')
				Alert.alert('Atenção', 'Deu bom!')
			})
			.catch(() => Alert.alert('Atenção', 'Erros foram identificados.'))
			.finally(() => setLoading(false))
	}

	return (
		<SafeAreaView style={{ flex: 1, gap: 4, paddingHorizontal: 4 }}>
			<ActivityIndicator animating={loading} />
			<TextInput style={{ borderWidth: 1, borderRadius: 4, padding: 4 }} onChangeText={setTask} value={task} />
			<Button title='Incluir' onPress={incluir} />
			<FlatList data={data} renderItem={({ item }) => <Text>{item.task}</Text>} keyExtractor={(item) => item.id} />
		</SafeAreaView>
	)
}
