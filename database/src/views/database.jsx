import * as SQLite from 'expo-sqlite'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

const Database = () => {
	const [data, setData] = useState({ nome: '', telefone: '' })

	useEffect(() => {
		createDatabase()
	}, [])

	const createDatabase = async () => {
		try {
			const db = await SQLite.openDatabaseAsync('mydb.db')
			await db.execAsync(`
        CREATE TABLE IF NOT EXISTS contatos (
          id INTEGER PRIMARY KEY NOT NULL, 
          nome TEXT NOT NULL,
          telefone TEXT NOT NULL
        );`)
			console.log('Database criado com sucesso.')
		} catch (error) {
			console.log(error)
		}
	}

	const insertData = async () => {
		try {
			const db = await SQLite.openDatabaseAsync('mydb.db')
			await db.runAsync('INSERT INTO contatos (nome, telefone) VALUES (?,?)', data.nome, data.telefone)
			setData({ nome: '', telefone: '' })
			console.log('Dados registrados com sucesso')
		} catch (error) {
			console.log(error)
		}
	}

	const readOne = async () => {
		try {
			const db = await SQLite.openDatabaseAsync('mydb.db')
			const firstRow = await db.getFirstAsync('SELECT * FROM contatos;')
			console.log(firstRow.id, firstRow.nome, firstRow.telefone)
		} catch (error) {
			console.log(error)
		}
	}

	const readData = async () => {
		try {
			const db = await SQLite.openDatabaseAsync('mydb.db')
			const allRows = await db.getAllAsync('SELECT * FROM contatos;')
			for (const row of allRows) {
				console.log(row.id, row.nome, row.telefone)
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<View>
			<View style={{ flexDirection: 'row', alignItems: 'center', padding: 8, gap: 8 }}>
				<TextInput
					onChangeText={(text) => setData({ ...data, nome: text })}
					value={data.nome}
					mode='outlined'
					style={{ flex: 1 }}
					label='nome'
				/>
				<TextInput
					onChangeText={(text) => setData({ ...data, telefone: text })}
					value={data.telefone}
					mode='outlined'
					style={{ flex: 1 }}
					label='telefone'
				/>
				<Button mode='outlined' onPress={insertData}>
					Inserir
				</Button>
			</View>
			<Button mode='outlined' style={{ marginVertical: 4 }} onPress={readOne}>
				Ler primeiro
			</Button>
			<Button mode='outlined' style={{ marginVertical: 4 }} onPress={readData}>
				Ler todos
			</Button>
		</View>
	)
}

export default Database
