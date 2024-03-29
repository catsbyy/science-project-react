import { BrowserRouter } from 'react-router-dom';
import { AuthWrapper } from './auth/AuthWrapper';
import "./styles/main.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthWrapper />
      </BrowserRouter>      
    </div>
  );
}

export default App;

