import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }
