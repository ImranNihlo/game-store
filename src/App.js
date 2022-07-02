import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import OrderPage from './pages/OrderPage'
import Header from './components/header'
import GamePage from './pages/GamePage'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:title" element={<GamePage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
