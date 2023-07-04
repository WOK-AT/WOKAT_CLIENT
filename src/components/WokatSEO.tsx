import Head from 'next/head';

interface WokatSEOProps {
  title?: string;
  description?: string;
  url?: string;
}

function WokatSEO(props: WokatSEOProps) {
  const { title, description, url } = props;

  return (
    <Head>
      <title>{title || 'WOKAT'}</title>
      <meta
        name="description"
        content={description || '일과 함께 워캣으로 떠나요!'}
      ></meta>
      <meta name="keywords" content=""></meta>

      <meta property="og:title" content="WOKAT" />
      <meta property="og:description" content="일과 함께 워캣으로 떠나요!" />
      <meta property="og:image" content="/og_thumbnail.webp" />
    </Head>
  );
}

export default WokatSEO;
