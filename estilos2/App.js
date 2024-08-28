import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { Dimensions, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
	const { height, width } = Dimensions.get('screen')
	const estilos = StyleSheet.create({
		container: {
			height: height,
			backgroundColor: '#c3c3c3',
			alignItems: 'center',
			gap: 16,
		},
		vermelho: {
			backgroundColor: 'red',
		},
		branco: {
			backgroundColor: 'white',
		},
		azul: {
			backgroundColor: 'blue',
		},
	})

	const data = []
	for (let i = 0; i < 50; i++) data.push(`ALUNO - MATRICULA ${String(Math.random() * (i + 1)).replace('.', '')}`)

	const buttons = [
		{ bgColor: estilos.vermelho, icon: 'user', iconColor: 'white' },
		{ bgColor: estilos.branco, icon: 'star', iconColor: 'blue' },
		{ bgColor: estilos.azul, icon: 'film', iconColor: 'white' },
		{ bgColor: estilos.vermelho, icon: 'user', iconColor: 'white' },
		{ bgColor: estilos.branco, icon: 'star', iconColor: 'blue' },
	]

	return (
		<SafeAreaView style={estilos.container}>
			{/* Menu Principal */}
			<View style={{ height: 80 }}>
				<ScrollView horizontal>
					{buttons.map((el, ix) => (
						<ActionButton key={ix} bgColor={el.bgColor} icon={el.icon} iconColor={el.iconColor} />
					))}
				</ScrollView>
			</View>
			{/* Dados gerais */}
			<FlatList
				style={{ width: width }}
				data={data}
				renderItem={({ item }) => <ItemList nome={item} />}
				keyExtractor={(item) => item}
			/>
			{/* 
			<ScrollView style={{ width: width }}>
				{data.map((el, ix) => (
					<ItemList key={ix} nome={el} />
				))}
			</ScrollView> 
			*/}
		</SafeAreaView>
	)
}

function ItemList({ nome }) {
	const estilos = StyleSheet.create({
		button: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: 8,
			borderBottomWidth: 1,
			backgroundColor: 'rgba(255,123,50,0.6)',
			marginVertical: 4,
		},
	})
	return (
		<TouchableOpacity style={estilos.button}>
			<Text>{nome}</Text>
			<FontAwesome name='bars' size={40} color='black' />
		</TouchableOpacity>
	)
}

function ActionButton({ bgColor, icon, iconColor }) {
	const estilos = StyleSheet.create({
		box: {
			height: 80,
			width: 80,
			borderRadius: 4,
			marginHorizontal: 2,
			justifyContent: 'center',
			alignItems: 'center',
		},
	})
	return (
		<TouchableOpacity style={[estilos.box, bgColor]}>
			<FontAwesome name={icon} size={40} color={iconColor} />
		</TouchableOpacity>
	)
}
