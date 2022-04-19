import '../styles/globals.css'
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>

import {StoreProvider} from "../hooks/context";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <StoreProvider>
      <Component {...pageProps} />
      </StoreProvider>
 
   
  </div>
  )
}

export default MyApp
