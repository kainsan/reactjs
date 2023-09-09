import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails';
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  exact element={<Home />}/>
      <Route path="/product/:id" element={<ProductDetails />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;