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
          rel="stylesheet preload"
          as="style"
          crossOrigin=""
          href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.6/variable/pretendardvariable-dynamic-subset.css"
        />
        <link rel="apple-touch-icon" href="/app_icon.png" />
        <link rel="shortcut icon" href="/app_icon.png" />
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>{`<iframe src=“https://www.googletagmanager.com/ns.html?id=GTM-5K2JHDQ”
height=“0" width=“0” style=“display:none;visibility:hidden”></iframe>`}</noscript>
        {/* End Google Tag Manager (noscript) */}
        <Main />
        <NextScript />
        <script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js"
          crossOrigin=""
        ></script>
      </body>
    </Html>
  );
}
