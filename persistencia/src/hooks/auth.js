import { useNavigation } from '@react-navigation/native'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../services/firbase'

const useAuth = () => {
	const { navigate } = useNavigation()
	const signin = async ({ email, password }) => {
		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password)
			navigate('main', { user: userCredential.user })
		} catch (error) {
			throw new Error('Erro ao tentar autenticar.')
		}
	}

	return {
		signin,
	}
}

export default useAuth
