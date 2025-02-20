import "./styles.css";
import { createRoot } from 'react-dom/client';
import Navbar from "./Navbar.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import { Provider } from "./Context.js";

function App() {
  return (
    <Provider>
      <Navbar />
      <Main />
      <Footer />
    </Provider>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
