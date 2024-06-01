import '@styles/global.css';
import Nav from '@components/Nav';
import Footer from '@components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name="author" content="Abdel-Samade Bouderga" />
        <meta name="robots" content="index, follow" />
        <title>Alarme et sécurité</title>
        <meta name="description" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <link rel="shortcut icon" href="" type="image/x-icon" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta property="og:title" content="Alarme et sécurité" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
      </head>

      <body>
        <Nav />
        {children}
        <Footer />
      </body>

    </html>

  )
}
