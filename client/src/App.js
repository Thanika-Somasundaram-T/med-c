import { useDataLayerValue } from './dataLayer';
import './App.css';



function App() {
	const [ state ] = useDataLayerValue();
	return (
		<div className="App">
			<h1>Book appointment</h1>
			<h1>add hospital</h1>
			<h1>{ state.test }</h1>
		</div>
	);
}

export default App;
