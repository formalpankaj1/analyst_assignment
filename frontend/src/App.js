import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home/home";


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/profiles" element={<Home />} exact={true}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
