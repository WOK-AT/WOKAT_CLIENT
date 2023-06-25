import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Safari TabBar Color */}
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="viewport"
          content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width"
        />
        <link
          rel="stylesheet"
          as="style"
          href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.6/variable/pretendardvariable-dynamic-subset.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js"
          crossOrigin="anonymous"
        ></script>
      </body>
    </Html>
  );
}
