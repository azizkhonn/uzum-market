import { Routes, Route } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';
import Portfolio from './components/portfolio-page/Portfolio';
import Skills from './components/skills/Skills';
import Blog from './components/blog/Blogs';
import HomePage from './components/homepage/HomePage';
import SearchResults from './components/nav/SearchResults';
import { CartProvider } from './components/context/ProductContext';

function App() {
  return (
    <div>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
