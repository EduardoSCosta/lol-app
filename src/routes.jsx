 
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Champions from './pages/Champions';
import Icons from './pages/Icons';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing}/>
      <Route path="/Champions" exact component={Champions}/>
      <Route path="/Icons" exact component={Icons}/>
    </BrowserRouter>
  );
}

export default Routes;