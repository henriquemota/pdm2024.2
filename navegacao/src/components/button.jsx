import React from 'react'
import { Pressable, Text } from 'react-native'
import styles from '../styles'

const Button = ({ onPress = null, text = '' }) => {
	return (
		<Pressable style={styles.button} onPress={onPress}>
			<Text>{text}</Text>
		</Pressable>
	)
}

export default Button
