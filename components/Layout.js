import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#00459c" />
        <meta
          name="Description"
          content="Create your online presence today! Supercharge it with impressive branding, custom design, SEO optimization,  and your own progressive web app!"
        />
        <link rel="manifest" href="../manifest.json" />
        <link rel="shortcut icon" href="../favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="../static/public/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../static/public/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../static/public/favicon-16x16.png"
        />
        <link rel="manifest" href="../static/public/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#00459c" />
        <title>{title}</title>
      </Head>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
