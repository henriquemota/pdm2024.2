import React, { useState } from 'react'
import Home from './src/views/Home'
import Login from './src/views/Login'

export default function App() {
	const [logged, setLogged] = useState(false)
	return logged ? <Home setLogged={setLogged} /> : <Login setLogged={setLogged} />
}
