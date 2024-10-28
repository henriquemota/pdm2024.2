import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { Alert, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

const Home = () => {
	const [nome, setNome] = useState('')

	const saveData = async () => {
		try {
			await AsyncStorage.setItem('dados_usuario', nome)
			Alert.alert('Sucesso', 'Dados gravados com sucesso.')
		} catch (e) {
			Alert.alert('Erro', 'Erro ao gravar os dados.')
		}
	}

	const clearData = async (value) => {
		try {
			await AsyncStorage.removeItem(value)
		} catch (e) {
			Alert.alert('Erro', 'Erro ao remover os dados.')
		}
	}

	const clearAllData = async () => {
		try {
			await AsyncStorage.clear()
		} catch (e) {
			Alert.alert('Erro', 'Erro ao remover os dados.')
		}
	}

	const getData = async () => {
		try {
			const data = await AsyncStorage.getItem('dados_usuario')
			setNome(data)
		} catch (e) {
			console.log(e)
			Alert.alert('Erro', 'Erro ao recuperar os dados.')
		}
	}

	return (
		<View>
			<TextInput onChangeText={setNome} value={nome} />
			<View style={{ flexDirection: 'row', justifyContent: 'center', gap: 4, margin: 8 }}>
				<Button mode='outlined' onPress={saveData}>
					Gravar
				</Button>
				<Button mode='outlined' onPress={getData}>
					Recuperar dados
				</Button>
			</View>
			{/* <Text>{userSerialized}</Text> */}
		</View>
	)
}

export default Home
