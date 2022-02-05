import Home from './routes/Home';
import Detail from './routes/Detail';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movie/:id' element={<Detail />} />
    </Routes>
  )
};

export default App;
