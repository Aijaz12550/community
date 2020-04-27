import Document, { Head, Main, NextScript } from "next/document";
import "../styles/sidebar/index.scss";
import "../styles/assets/css/dashboard.css";
export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="description" content="community managment system" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
            rel="stylesheet"
          ></link>
          <link href="../styles/sidebar/index.scss" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
