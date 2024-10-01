import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../services/firebase'

const useAuth = () => {
	const signin = async ({ email, password }) => {
		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password)
			console.log(userCredential)
		} catch (error) {
			console.log(error)
		}
	}

	return {
		signin,
	}
}

export default useAuth
