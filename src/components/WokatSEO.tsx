import Head from 'next/head';

interface WokatSEOProps {
  title?: string;
  description?: string;
  url?: string;
  imageURL?: string;
}

function WokatSEO(props: WokatSEOProps) {
  const { title, description, url, imageURL } = props;

  return (
    <Head>
      <title>{title || 'WOKAT'}</title>
      <meta
        name="description"
        content={description || '일과 함께 워캣으로 떠나요!'}
      />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || 'WOKAT'} />
      <meta
        property="og:description"
        content={description || '일과 함께 워캣으로 떠나요!'}
      />
      <meta property="og:url" content={url || process.env.NEXT_PUBLIC_DOMAIN} />
      <meta property="og:image" content={imageURL || '/og_thumbnail.webp'} />
      <meta property="og:site_name" content="WOKAT" />
      <meta property="og:locale" content="ko_KR" />
    </Head>
  );
}

export default WokatSEO;
