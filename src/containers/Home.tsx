import React from 'react';
import Products from '../components/Products';
import Seo from '../components/Seo';

function Home() {
  return (
    <>
      <Seo>
        <title>Platzi Conf Merch - Productos</title>
        <meta
          name="keywords"
          content="E-commerce,HTML, CSS, JavaScript, React"
        />
        <meta
          name="description"
          content="Todos los productos en un solo lugar"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lenxnos" />
        <meta name="twitter:creator" content="@lenxnos" />
        <meta name="twitter:title" content="Platzi Conf Store" />
        <meta name="twitter:description" content="Platzi Conf Store" />
        {/* <meta
          name="twitter:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        /> */}
        <meta property="og:title" content="Platzi Conf Store" />
        <meta property="og:description" content="Platzi Conf Store" />
        {/* <meta
          property="og:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        /> */}
        <meta property="og:url" content="platzistore.xyz" />
        <meta property="og:site_name" content="Platzi Conf Store" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        {/* <meta property="fb:app_id" content="ID_APP_FACEBOOK" /> */}
      </Seo>
      <Products />
    </>
  );
}

export default Home;
