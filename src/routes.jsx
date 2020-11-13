 
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Champions from './pages/Champions';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing}/>
      <Route path="/Champions" exact component={Champions}/>
    </BrowserRouter>
  );
}

export default Routes;