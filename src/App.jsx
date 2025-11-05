// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Pronadiet } from "./pages/Pronadiet";
import { Codigo } from "./pages/Codigo";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pronadiet />} />
      </Routes>
    </BrowserRouter>
  );
}
