import './App.css';
import Header from './components/Header'
import Homepage from './pages/Homepage'
import DemoPage from './pages/DemoPage';
import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/demo' element={<DemoPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
