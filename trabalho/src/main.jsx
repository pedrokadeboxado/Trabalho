import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'




import Cabecalio from "./componentes/cabecalio";
import Tigre from './componentes/tigrinho';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Cabecalio/>
    <Tigre/>
  </StrictMode>,
)
