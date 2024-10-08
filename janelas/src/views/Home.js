import { AntDesign } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { Alert, Dimensions, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import data from '../data'

const Home = ({ setLogged }) => {
	const [database, setDatase] = useState([])
	const [search, setSearch] = useState('')
	const { height, width } = Dimensions.get('screen')

	useEffect(() => {
		setDatase(data)
	}, [])

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={{ margin: 4 }}>
				<ScrollView horizontal>
					<TouchableOpacity
						style={{
							gap: 4,
							width: 80,
							height: 80,
							borderWidth: 1,
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: 8,
							margin: 2,
						}}
						onPress={() => {
							Alert.alert('Atenção', 'Deseja realmente sair?', [
								{
									text: 'Não',
									style: 'cancel',
								},
								{ text: 'Sim', onPress: () => setLogged(false) },
							])
						}}
					>
						<AntDesign name='logout' size={24} color='black' />
						<Text>Sair</Text>
					</TouchableOpacity>
				</ScrollView>
			</View>
			<View style={{ flexDirection: 'row', marginBottom: 8 }}>
				<TextInput
					style={{
						borderWidth: 1,
						borderRadius: 4,
						backgroundColor: 'rgba(0,0,0,0.1)',
						flex: 1,
						padding: 8,
						margin: 8,
					}}
					placeholder='Filtre os dados'
					keyboardType='email-address'
					onChangeText={setSearch}
				/>
				<TouchableOpacity
					style={{ justifyContent: 'center', alignItems: 'center', margin: 8 }}
					onPress={() => {
						if (search !== '') setDatase(database.filter(({ description }) => description.includes(search)))
						else setDatase(data)
					}}
				>
					<AntDesign name='search1' size={24} color='black' />
				</TouchableOpacity>
			</View>
			<View style={{ flex: 1 }}>
				<ScrollView>
					{database.map((el, ix) => (
						<View key={ix} style={{ margin: 4, flexDirection: 'row' }}>
							<Image
								source={{ uri: el.img }}
								style={{
									height: 80,
									width: 80,
									objectFit: 'contain',
									borderWidth: 1,
									borderRadius: 8,
									borderColor: '#000',
								}}
							/>
							<View style={{ flex: 1, justifyContent: 'center', gap: 16, padding: 8 }}>
								<Text>{el.description}</Text>
								<Text>R$: {el.price}</Text>
							</View>
						</View>
					))}
				</ScrollView>
			</View>
		</SafeAreaView>
	)
}

export default Home
export { Home }
