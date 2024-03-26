import React from 'react'
import ReactDOM from 'react-dom/client'
import { Hola } from './components/Hola';

const h1 = React.createElement('h1', null, Hola);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hola user='Si' id={2}  />
  </React.StrictMode>
)
