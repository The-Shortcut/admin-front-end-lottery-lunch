import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Main from "./Main.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./App.css";

const App = () => {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    console.log("auth", auth);
  }, [auth]);

  return (
    <div className="App">
      {!auth ? <Login auth={auth} setAuth={setAuth} /> : <Main />}
    </div>
  );
};

export default App;
