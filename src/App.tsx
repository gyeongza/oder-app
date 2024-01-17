import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Order from './pages/Order';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/order" Component={Order} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
