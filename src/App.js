import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Bankofindianavbar from './Bankofindianavbar';
function App() {

  return (
 
    
    <>   
  <Bankofindianavbar/>
    <Routes>
      <Route exact path="/"></Route>
      <Route exact path="/boiweb"></Route>
      <Route exact path="/investcorner"></Route>
      <Route exact path="/forexcardrate"></Route>
    </Routes>
 </>
  );
}

export default App;
