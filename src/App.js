import "./styles.css";
import { Header } from "./components/Header";
import { MobileNav } from "./components/MobileNav";
import { Router } from "./components/Router";

export default function App() {
  return (
    <div className="App">
      <Header />
      <MobileNav />
      <Router />
    </div>
  );
}
