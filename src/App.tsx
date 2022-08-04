import './styles.css'
import logo from './img/logo.svg'

const App = () => {
    return (
        <div>
            <img src={logo} alt=""/>
            App.tsx. FINALLY! <br/> <br/>
            {process.env.NODE_ENV} <br/>
            {process.env.name}
        </div>
    );
};

export default App