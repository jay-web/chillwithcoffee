import '../styles/globals.css'
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>

function MyApp({ Component, pageProps }) {
  return (
    <div>
  <Component {...pageProps} />
   
  </div>
  )
}

export default MyApp
