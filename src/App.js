// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<div className='App'>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;
