import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../services/firebase'

const useAuth = () => {
	const signin = async ({ email, password }) => {
		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password)
			const user = userCredential.user
			return user
		} catch (error) {
			const errorCode = error.code
			const errorMessage = error.message
			throw new Error('Usuário não localizado ou sena inválida.')
		}
	}

	return {
		signin,
	}
}

export default useAuth
