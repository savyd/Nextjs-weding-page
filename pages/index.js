import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Sections";
import Footer from "../components/Footer";
import StyleGlobal from "../components/StyleGlobal";

function Heads() {
  return (
    <Head>
      <title>Zoe & Alex</title>
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="https://orange.codeberryschool.com/content/images/project-assets/wedding-landing-favicon.png"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Great+Vibes%7CMuli:400,700%7CLibre+Baskerville:300,400,700"
        rel="stylesheet"
      />
    </Head>
  );
}

export default function index() {
  return (
    <React.Fragment>
      <Heads />
      <Header />
      <Main />
      <Footer />
      <StyleGlobal />
    </React.Fragment>
  );
}
