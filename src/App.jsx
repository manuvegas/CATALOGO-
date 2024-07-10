import "./App.css";
import Whatsapp from "./components/Whatsapp/Whatsapp";
import RouterApp from "./Router/AppRouter";


function App() {
  return (
    <>
      <main>
        <RouterApp />
        <Whatsapp />
      </main>
    </>
  );
}

export default App;
