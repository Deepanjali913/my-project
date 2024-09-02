import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ReviewForm from './components/ReviewForm';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route/>
        <Route path="../HomePage"  element={<ReviewForm/>} />
      </Routes>
    </Router>
  );
};

export default App;
