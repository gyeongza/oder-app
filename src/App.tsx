import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Order from './pages/Order';
import Complete from './pages/Complete';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/order" Component={Order} />
        <Route path="/complete" Component={Complete} />
        <Route path="/error" Component={Error} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
