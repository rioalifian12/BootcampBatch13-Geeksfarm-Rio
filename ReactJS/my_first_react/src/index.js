import React from "react";
import ReactDOM from "react-dom/client";

// import komponen utama aplikasi dari file App
import App from "./App";

// cari element dengan id 'root' dari file index.html
const rootElement = document.getElementById("root");

// buat root React untuk aplikasi menggunakan React 18 createRoot API
const root = ReactDOM.createRoot(rootElement);

// buat komponen JSX

// render aplikasi ke dalam root yang sudah dibuat
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
