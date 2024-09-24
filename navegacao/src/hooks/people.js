import axios from 'axios'
import config from '../config'

const usePeople = () => {
	const { API_URL } = config

	const getPeople = async () => {
		try {
			const { data } = await axios.get(API_URL + '/people')
			return data
		} catch (error) {
			throw new Error('Erro ao recuperar os dados da API.')
		}
	}
	const getPerson = async (id) => {
		try {
			const { data } = await axios.get(API_URL + '/people/' + id)
			return data
		} catch (error) {
			throw new Error('Erro ao recuperar os dados da API.')
		}
	}

	return {
		getPeople,
		getPerson,
	}
}

export default usePeople
