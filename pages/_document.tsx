import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"}/>
        <link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Baloo+Chettan+2:wght@400;500;600;700;800&display=swap"
              rel="stylesheet"/>
        {/*font-family: 'Audiowide', cursive;*/}
        {/*font-family: 'Baloo Chettan 2', cursive;*/}
        <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
