import "./App.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import { router } from "./router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
