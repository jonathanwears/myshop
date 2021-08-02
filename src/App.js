import NavBar from "./components/NavBar";
import Products from "./components/ProductArea/Products";
import { ChakraProvider } from '@chakra-ui/react';

function App() {

  return (
  <ChakraProvider>
    <div>
        <NavBar />
        <Products />
    </div>
  </ChakraProvider>
   
  )

};

export default App;