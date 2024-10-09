import { Text, View } from 'native-base'
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
			<FlatList
				data={data}
				renderItem={({ item }) => <Item titulo={item.titulo} tarefa={item.tarefa} />}
				keyExtractor={(item) => item.id}
				refreshing={loading}
				onRefresh={() => {
					setLoading(true)
					getData()
						.then((retorno) => setData(retorno))
						.catch((err) => Alert.alert('Erro', err.message))
						.finally(() => setLoading(false))
				}}
			/>
		</SafeAreaView>
	)
}

const Item = ({ titulo, tarefa }) => {
	return (
		<React.Fragment>
			<View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
				<Text textAlign='left' m='1'>
					{titulo}
				</Text>
				<Text textAlign='left' m='1'>
					{tarefa}
				</Text>
			</View>
		</React.Fragment>
	)
}

export default Lista
