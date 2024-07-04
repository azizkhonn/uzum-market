import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './i18n';
import { CartProvider } from './components/context/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>  
  <BrowserRouter>
      <App />
  </BrowserRouter>,
    </CartProvider>
)
