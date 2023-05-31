import logo from './logo.svg';
import Aboutus from './Components/Aboutus';
import Boiweb from './Components/Boiweb';
import Investor from './Components/Investor';
import Forex from './Components/Forex';
import {Route,Routes} from 'react-router-dom';
import Bankofindianavbar from './Bankofindianavbar';
function App() {

  return (
 
    
    <>   
  <Bankofindianavbar/>
    <Routes>
      <Route exact path="/about" element={<Aboutus/>}></Route>
      <Route exact path="/boiweb" element={<Boiweb/>}></Route>
      <Route exact path="/investcorner" element={<Investor/>}></Route>
      <Route exact path="/forexcardrate" element={<Forex />}></Route>
    </Routes>
 </>
  );
}

export default App;
