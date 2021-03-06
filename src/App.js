import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Switch } from "react-router";
import ProductList from "./components/ProductList";

function App() {
  return (
    <Router>
      <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Routes>
          <Route exact path="/" element={<ProductList />} />
        
          </Routes>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
