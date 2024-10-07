import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: process.env.EXPO_PUBLIC_apiKey,
	authDomain: process.env.EXPO_PUBLIC_authDomain,
	databaseURL: process.env.EXPO_PUBLIC_databaseURL,
	projectId: process.env.EXPO_PUBLIC_projectId,
	storageBucket: process.env.EXPO_PUBLIC_storageBucket,
	messagingSenderId: process.env.EXPO_PUBLIC_messagingSenderId,
	appId: process.env.EXPO_PUBLIC_appId,
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
