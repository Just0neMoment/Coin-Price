import React, { useEffect, useState } from "react";

import axios from "axios";

import "./App.css";

import Header from "./components/header/Header.js";
import Main from "./components/main/Main.js";
import Footer from "./components/footer/Footer.js";
import Loading from "./components/modals/Loading.js";

function App() {

  let [loadingModal, setLoadingModal] = useState(false);

  return (
    <div className="App">
      {loadingModal === true ? <Loading /> : null}

      <Header />
      <Main setLoadingModal={setLoadingModal} />
      <Footer />
    </div>
  );
}

export default App;
