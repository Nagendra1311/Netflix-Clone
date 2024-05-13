import Header from "./components/Header";
import Router from "./routes/Router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div >
      <Header />
      <Router />
      <ToastContainer />

    </div>
  );
}

export default App;
