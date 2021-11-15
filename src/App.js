import { Home } from './components';
import NotFound from './components/NotFound';
import Header from './components/styled-components/Header';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <div className="content">
          <Routes>         
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div> 
    </Router>
  );
}

export default App;
