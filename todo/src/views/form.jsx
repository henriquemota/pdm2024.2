import { Button, Stack, TextInput } from '@react-native-material/core'
import React, { useState } from 'react'
import {} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import useTarefas from '../hooks/tarefas'

const Form = () => {
	const [data, setData] = useState({ titulo: '', tarefa: '' })

	const { saveData } = useTarefas()

	return (
		<SafeAreaView>
			<Stack spacing={2} style={{ margin: 16 }}>
				<TextInput label='Título' onChangeText={(text) => setData({ ...data, titulo: text })} />
				<TextInput label='Tarefa' onChangeText={(text) => setData({ ...data, tarefa: text })} />
				<Button title='Salvar' onPress={() => saveData(data)} />
			</Stack>
		</SafeAreaView>
	)
}

export default Form
