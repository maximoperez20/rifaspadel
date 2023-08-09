import logo from './logo.svg';
import './App.css';
import NumberGrid from './src/NumberGrid';

import Header from './src/Layout/Header/Header';
import Footer from './src/Layout/Footer/Footer';
import Content from './src/Layout/Content/Content';

// Bootstrap Import
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
<>
<Header />
<Content />
<Footer />
</>
  );
}

export default App;
