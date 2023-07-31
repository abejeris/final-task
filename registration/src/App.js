import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddPerson from './components/AddPerson';
import People from './components/person/People';
import PersonDetails from './components/person/PersonDetails';

function App() {
	return (
		<>
			<header>
				<Header />
			</header>
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/add" element={<AddPerson />} />
					<Route path="/people" element={<People />} />
					<Route path="/people/:id" element={<PersonDetails />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
