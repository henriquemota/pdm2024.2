import { collection, doc, getDocs, query, setDoc } from 'firebase/firestore'
import { db } from '../services/firbase'

const useTarefas = () => {
	const tarefasRef = collection(db, 'tarefas')

	const saveData = async (data) => {
		try {
			await setDoc(doc(tarefasRef), { ...data })
		} catch (error) {
			throw new Error('Erro ao gravar dados.')
		}
	}

	const getData = async () => {
		try {
			// const q = query(collection(db, 'tarefas'), where('capital', '==', true))
			const data = []
			const q = query(tarefasRef)
			const querySnapshot = await getDocs(q)
			querySnapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }))
			return data
		} catch (error) {
			throw new Error('Erro ao recuperar dados.')
		}
	}

	return {
		getData,
		saveData,
	}
}

export default useTarefas
