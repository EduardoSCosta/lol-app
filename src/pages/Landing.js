import {Link} from 'react-router-dom';
import '../styles/pages/landing.css';

const Landing = () => {
    return (
        <div>
            <Link className="to-champions-page" to={"/champions"}>Campeões</Link>
        </div>
    )
}

export default Landing;