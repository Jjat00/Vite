import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./pages/Counter";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
