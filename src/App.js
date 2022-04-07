import {Suspense} from 'react';
import {Provider} from 'react-redux';
import { Home, Loading, NotFound } from './components';
import configureStore from './redux/configureStore';
import Header from './components/styled-components/Header';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 

function App() {
  const store = configureStore();
  return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <div className="content">
              <Suspense fallback={<Loading showSpinLoader />}>
                <Routes>         
                  <Route exact path="/my-blog" element={<Home />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </div>
          </div> 
        </Router>
      </Provider>
  );
}

export default App;
