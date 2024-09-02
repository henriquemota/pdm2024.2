import React, { useState } from 'react'

import Home from './src/views/home'
import Login from './src/views/login'

export default function App() {
	const [logado, setLogado] = useState(false)

	if (logado) return <Home onLogout={setLogado} />
	return <Login onLogin={setLogado} />
}
