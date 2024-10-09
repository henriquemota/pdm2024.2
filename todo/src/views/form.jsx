import { Button, Input } from 'native-base'
import React, { useState } from 'react'
import {} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import useTarefas from '../hooks/tarefas'

const Form = () => {
	const [data, setData] = useState({ titulo: '', tarefa: '' })

	const { saveData } = useTarefas()

	return (
		<SafeAreaView style={{ flex: 1, justifyContent: 'center', padding: 8, gap: 12 }}>
			<Input label='Título' placeholder='titulo' onChangeText={(text) => setData({ ...data, titulo: text })} />
			<Input label='Tarefa' placeholder='tarefa' onChangeText={(text) => setData({ ...data, tarefa: text })} />
			<Button title='Salvar' onPress={() => saveData(data)} />
		</SafeAreaView>
	)
}

export default Form
