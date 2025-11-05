import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'




import Cabecalio from "./componentes/cabecalio";
import Sobre from './componentes/sobre';

import ExemploEstado from './componentes/ExemploEstado';


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Cabecalio/>
    
  <Sobre/> 
  
  
<ExemploEstado/>















   </StrictMode>,
)
