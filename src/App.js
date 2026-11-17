import './styles/style.css';
import './i18n';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  const { i18n } = useTranslation();

  // Меняем <html lang="..."> при смене языка
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="App">
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
