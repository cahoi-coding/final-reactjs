import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content';
import Linhcom from './components/link/LinhCom';
import LableLinh from './components/link/LableLinh';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
      {/* <Linhcom/>
      <LableLinh/> */}
      
    </div>
  );
}

export default App;
