import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import BooksList from './components/BooksList';
import BorrowBooks from './components/BorrowBooks';
import PendingReturns from './components/PendingReturns';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/books" element={<BooksList />} />
          <Route path="/borrow" element={<BorrowBooks />} />
          <Route path="/pending" element={<PendingReturns />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;