import './styles.css';
import logo from '../assets/logo.svg';
import Counter from '../Counter/Counter';

const App = () => {
	return (
		<div>
			<img src={logo} alt='Logo' width='720' />

			<p>NODE_ENV = {process.env.NODE_ENV}</p>
			<p>Config name = {process.env.name}</p>

			<Counter />
		</div>
	);
};

export default App;
