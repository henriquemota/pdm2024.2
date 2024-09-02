import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import guest from './assets/guest.png'

export default function App() {
	return <Login />
}

function Login() {
	const { width, height } = Dimensions.get('screen')
	const estilos = StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
		},
		imagem: {
			height: 180,
			width: 180,
			borderRadius: 90,
			borderWidth: 8,
			borderColor: 'black',
		},
		text: {
			width: width - 16,
			fontSize: 16,
			marginTop: 4,
		},
		input: {
			borderWidth: 1,
			borderRadius: 4,
			padding: 8,
			margin: 8,
			width: width - 16,
		},
		button: {
			borderWidth: 1,
			backgroundColor: 'rgba(0,0,0,0.2)',
			borderRadius: 4,
			flexDirection: 'row',
			justifyContent: 'space-evenly',
			alignItems: 'center',
			padding: 16,
			gap: 32,
		},
	})

	return (
		<SafeAreaView style={estilos.container}>
			<Image source={guest} style={estilos.imagem} />
			<Text style={estilos.text}>Login</Text>
			<TextInput style={estilos.input} />
			<Text style={estilos.text}>Senha</Text>
			<TextInput style={estilos.input} />
			<TouchableOpacity style={estilos.button}>
				<Text>Login</Text>
				<AntDesign name='login' size={24} color='black' />
			</TouchableOpacity>
		</SafeAreaView>
	)
}

function Home() {
	const { width, height } = Dimensions.get('screen')
	const estilos = StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
		},
		button: {
			width: 80,
			height: 80,
			justifyContent: 'center',
			alignItems: 'center',
			gap: 8,
			borderRadius: 8,
			borderWidth: 1,
			marginHorizontal: 2,
			backgroundColor: 'rgba(0,0,0,0.2)',
		},
		inputContainer: {
			flexDirection: 'row',
		},
		input: {
			borderWidth: 1,
			borderRadius: 4,
			padding: 8,
			margin: 8,
			flex: 1,
		},
		inputButton: {
			justifyContent: 'center',
			alignItems: 'center',
			marginRight: 8,
		},
		itensContainer: {
			flexDirection: 'row',
			gap: 8,
			margin: 8,
		},
		imagem: {
			height: 80,
			width: 160,
		},
	})
	return (
		<SafeAreaView style={estilos.container}>
			<View style={{ height: 100, justifyContent: 'center', padding: 4, width: width }}>
				<ScrollView horizontal>
					<TouchableOpacity style={estilos.button}>
						<AntDesign name='logout' size={24} color='black' />
						<Text>Sair</Text>
					</TouchableOpacity>
					<TouchableOpacity style={estilos.button}>
						<AntDesign name='logout' size={24} color='black' />
						<Text>Sair</Text>
					</TouchableOpacity>
					<TouchableOpacity style={estilos.button}>
						<AntDesign name='logout' size={24} color='black' />
						<Text>Sair</Text>
					</TouchableOpacity>
					<TouchableOpacity style={estilos.button}>
						<AntDesign name='logout' size={24} color='black' />
						<Text>Sair</Text>
					</TouchableOpacity>
					<TouchableOpacity style={estilos.button}>
						<AntDesign name='logout' size={24} color='black' />
						<Text>Sair</Text>
					</TouchableOpacity>
					<TouchableOpacity style={estilos.button}>
						<AntDesign name='logout' size={24} color='black' />
						<Text>Sair</Text>
					</TouchableOpacity>
				</ScrollView>
			</View>
			<View style={estilos.container}>
				<View style={estilos.inputContainer}>
					<TextInput style={estilos.input} />
					<TouchableOpacity style={estilos.inputButton}>
						<AntDesign name='search1' size={24} color='black' />
					</TouchableOpacity>
				</View>
				<ScrollView>
					{data.map((el, ix) => (
						<View style={estilos.itensContainer} key={ix}>
							<Image source={el.imagem} style={estilos.imagem} />
							<View>
								<Text>{el.nome}</Text>
								<Text>{el.valor}</Text>
							</View>
						</View>
					))}
				</ScrollView>
			</View>
		</SafeAreaView>
	)
}

const data = [
	{
		nome: 'Teclado sem fio Logitech MX Keys Mini com Iluminação Inteligente, Conexão USB ou Bluetooth Easy-Switch para até 3 dispositivos e Bateria Recarregável - Grafite',
		valor: 660.0,
		imagem: require('./assets/teclado.jpg'),
	},
	{
		nome: 'Mouse sem fio Logitech MX Master 3S com Sensor Darkfield para Uso em Qualquer Superfície, Design Ergonômico, Clique Silencioso, Conexão USB ou Bluetooth - Grafite',
		valor: 587.02,
		imagem: require('./assets/mouse.jpg'),
	},
	{
		nome: 'Apple notebook MacBook Air de 13 polegadas: Chip M2 da Apple com CPU de oito núcleos e GPU de oito núcleos, de 256 GB SSD - Cinza espacial',
		valor: 7699.99,
		imagem: require('./assets/macbook.jpg'),
	},
	{
		nome: 'Multifuncional Epson EcoTank L5590 - Tanque de Tinta Colorida, Wi-Fi Direct, Ethernet, Fax, ADF, Bivolt, Preta',
		valor: 1619.1,
		imagem: require('./assets/impressora.jpg'),
	},
	{
		nome: 'Teclado sem fio Logitech MX Keys Mini com Iluminação Inteligente, Conexão USB ou Bluetooth Easy-Switch para até 3 dispositivos e Bateria Recarregável - Grafite',
		valor: 660.0,
		imagem: require('./assets/teclado.jpg'),
	},
	{
		nome: 'Mouse sem fio Logitech MX Master 3S com Sensor Darkfield para Uso em Qualquer Superfície, Design Ergonômico, Clique Silencioso, Conexão USB ou Bluetooth - Grafite',
		valor: 587.02,
		imagem: require('./assets/mouse.jpg'),
	},
	{
		nome: 'Apple notebook MacBook Air de 13 polegadas: Chip M2 da Apple com CPU de oito núcleos e GPU de oito núcleos, de 256 GB SSD - Cinza espacial',
		valor: 7699.99,
		imagem: require('./assets/macbook.jpg'),
	},
	{
		nome: 'Multifuncional Epson EcoTank L5590 - Tanque de Tinta Colorida, Wi-Fi Direct, Ethernet, Fax, ADF, Bivolt, Preta',
		valor: 1619.1,
		imagem: require('./assets/impressora.jpg'),
	},
	{
		nome: 'Teclado sem fio Logitech MX Keys Mini com Iluminação Inteligente, Conexão USB ou Bluetooth Easy-Switch para até 3 dispositivos e Bateria Recarregável - Grafite',
		valor: 660.0,
		imagem: require('./assets/teclado.jpg'),
	},
	{
		nome: 'Mouse sem fio Logitech MX Master 3S com Sensor Darkfield para Uso em Qualquer Superfície, Design Ergonômico, Clique Silencioso, Conexão USB ou Bluetooth - Grafite',
		valor: 587.02,
		imagem: require('./assets/mouse.jpg'),
	},
	{
		nome: 'Apple notebook MacBook Air de 13 polegadas: Chip M2 da Apple com CPU de oito núcleos e GPU de oito núcleos, de 256 GB SSD - Cinza espacial',
		valor: 7699.99,
		imagem: require('./assets/macbook.jpg'),
	},
	{
		nome: 'Multifuncional Epson EcoTank L5590 - Tanque de Tinta Colorida, Wi-Fi Direct, Ethernet, Fax, ADF, Bivolt, Preta',
		valor: 1619.1,
		imagem: require('./assets/impressora.jpg'),
	},
	{
		nome: 'Teclado sem fio Logitech MX Keys Mini com Iluminação Inteligente, Conexão USB ou Bluetooth Easy-Switch para até 3 dispositivos e Bateria Recarregável - Grafite',
		valor: 660.0,
		imagem: require('./assets/teclado.jpg'),
	},
	{
		nome: 'Mouse sem fio Logitech MX Master 3S com Sensor Darkfield para Uso em Qualquer Superfície, Design Ergonômico, Clique Silencioso, Conexão USB ou Bluetooth - Grafite',
		valor: 587.02,
		imagem: require('./assets/mouse.jpg'),
	},
	{
		nome: 'Apple notebook MacBook Air de 13 polegadas: Chip M2 da Apple com CPU de oito núcleos e GPU de oito núcleos, de 256 GB SSD - Cinza espacial',
		valor: 7699.99,
		imagem: require('./assets/macbook.jpg'),
	},
	{
		nome: 'Multifuncional Epson EcoTank L5590 - Tanque de Tinta Colorida, Wi-Fi Direct, Ethernet, Fax, ADF, Bivolt, Preta',
		valor: 1619.1,
		imagem: require('./assets/impressora.jpg'),
	},
	{
		nome: 'Teclado sem fio Logitech MX Keys Mini com Iluminação Inteligente, Conexão USB ou Bluetooth Easy-Switch para até 3 dispositivos e Bateria Recarregável - Grafite',
		valor: 660.0,
		imagem: require('./assets/teclado.jpg'),
	},
	{
		nome: 'Mouse sem fio Logitech MX Master 3S com Sensor Darkfield para Uso em Qualquer Superfície, Design Ergonômico, Clique Silencioso, Conexão USB ou Bluetooth - Grafite',
		valor: 587.02,
		imagem: require('./assets/mouse.jpg'),
	},
	{
		nome: 'Apple notebook MacBook Air de 13 polegadas: Chip M2 da Apple com CPU de oito núcleos e GPU de oito núcleos, de 256 GB SSD - Cinza espacial',
		valor: 7699.99,
		imagem: require('./assets/macbook.jpg'),
	},
	{
		nome: 'Multifuncional Epson EcoTank L5590 - Tanque de Tinta Colorida, Wi-Fi Direct, Ethernet, Fax, ADF, Bivolt, Preta',
		valor: 1619.1,
		imagem: require('./assets/impressora.jpg'),
	},
	{
		nome: 'Teclado sem fio Logitech MX Keys Mini com Iluminação Inteligente, Conexão USB ou Bluetooth Easy-Switch para até 3 dispositivos e Bateria Recarregável - Grafite',
		valor: 660.0,
		imagem: require('./assets/teclado.jpg'),
	},
	{
		nome: 'Mouse sem fio Logitech MX Master 3S com Sensor Darkfield para Uso em Qualquer Superfície, Design Ergonômico, Clique Silencioso, Conexão USB ou Bluetooth - Grafite',
		valor: 587.02,
		imagem: require('./assets/mouse.jpg'),
	},
	{
		nome: 'Apple notebook MacBook Air de 13 polegadas: Chip M2 da Apple com CPU de oito núcleos e GPU de oito núcleos, de 256 GB SSD - Cinza espacial',
		valor: 7699.99,
		imagem: require('./assets/macbook.jpg'),
	},
	{
		nome: 'Multifuncional Epson EcoTank L5590 - Tanque de Tinta Colorida, Wi-Fi Direct, Ethernet, Fax, ADF, Bivolt, Preta',
		valor: 1619.1,
		imagem: require('./assets/impressora.jpg'),
	},
]
