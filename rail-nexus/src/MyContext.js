// MyContext.js
import { createContext, useContext } from 'react';

const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);

export default MyContext;
