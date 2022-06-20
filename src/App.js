import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Header from './components/header'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
