import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="description" content="community managment system" />
          {/* <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      
      </html>
    );
  }
}
