import axios from 'axios'
import settings from '../settings'

const usePeople = () => {
	const { STARWARS_API } = settings

	const getPeople = async () => {
		try {
			const { data } = await axios.get(STARWARS_API + '/people')
			return data
		} catch (error) {
			throw new Error('Erro ao retornar a lista de personagens')
		}
	}

	const getPerson = async (id) => {
		try {
			const { data } = await axios.get(STARWARS_API + '/people/' + id)
			return data
		} catch (error) {
			throw new Error('Erro ao retornar o personagem')
		}
	}

	return {
		getPeople,
		getPerson,
	}
}

export default usePeople
