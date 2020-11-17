import {Link} from 'react-router-dom';
import '../styles/pages/landing.css';

const Landing = () => {
    return (
        <div>
            <Link className="to-page" to={"/champions"}>Campeões</Link>
            <Link className="to-page" to={"/icons"}>Ícones</Link>
        </div>
    )
}

export default Landing;