import { BrowserRouter } from 'react-router-dom';

import Controller from './AdminFlow';
import HomePage from './Pages/HomePage';

function App() {
  return (
   <>
   <BrowserRouter>
   <Controller></Controller>
   
   </BrowserRouter>
   
   </>
  );
}

export default App;
