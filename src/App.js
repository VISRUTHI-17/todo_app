
import Loginpage from './components/LoginPage';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import TodoWrapper from './components/TodoWrapper';

function App() {
  



  return (

    <BrowserRouter>
      <Routes>
        <Route path="/TodoWrapper" element={<TodoWrapper />} />
        <Route path="/" element={<Loginpage />} />
      </Routes>
    </BrowserRouter>



  );
}

export default App;
