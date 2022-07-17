import HomeView from './views/Home/HomeView';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
