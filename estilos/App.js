import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
	const { width, height } = Dimensions.get('screen')
	const styles = StyleSheet.create({
		container: {
			backgroundColor: '#c3c3c3',
			height: height,
			width,
		},
		containerHorizontal: {
			flexDirection: 'row',
		},
		bolas: {
			height: 80,
			width: 80,
			borderRadius: 40,
		},
		verde: {
			backgroundColor: 'green',
		},
		azul: {
			backgroundColor: 'blue',
		},
		vermelho: {
			backgroundColor: 'red',
		},
	})

	const data = []
	for (let i = 0; i < 20; i++) data.push(`valor de i = ${i + 1}`)

	return (
		<SafeAreaView>
			<View style={styles.container}>
				<View style={styles.containerHorizontal}>
					<ScrollView horizontal>
						<View style={[styles.bolas, styles.azul]}></View>
						<View style={[styles.bolas, styles.verde]}></View>
						<View style={[styles.bolas, styles.vermelho]}></View>
						<View style={[styles.bolas, styles.azul]}></View>
						<View style={[styles.bolas, styles.verde]}></View>
						<View style={[styles.bolas, styles.vermelho]}></View>
						<View style={[styles.bolas, styles.azul]}></View>
						<View style={[styles.bolas, styles.verde]}></View>
						<View style={[styles.bolas, styles.vermelho]}></View>
					</ScrollView>
				</View>

				<ScrollView>
					{data.map((el, ix) => (
						<Text key={ix}>{el}</Text>
					))}
				</ScrollView>
			</View>
		</SafeAreaView>
	)
}
