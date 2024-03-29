interface MetaPros {
  title?:string;
  description?:string;
  ogImage?:string;
  ogUrl?:string;
  siteName?:string;
  favicon?:string;
  twitterCard?:string;
  twitterSite?:string;
  
}

export default function Head(props:MetaPros) {


    return (
      <>

        <title>bizquiz｜SEOやマーケティングで使用される用語の4択のクイズゲーム！</title>
        <meta name="description" content="SEOやマーケティングで使用される用語の4択のクイズゲーム"/> 
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" /> 
        <meta name="theme-color" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:title" content="bizquiz"/>
        <meta property="og:type" content="application"/>
        <meta property="og:description" content="SEOやマーケティングで使用される用語の4択のクイズゲーム！"/>
        <meta property="og:url" content="https://www.bizquiz.app/"/>
        <meta property="og:site_name" content="bizquiz｜SEOやマーケティングで使用される用語の4択のクイズゲーム！"/>
        <meta property="og:image" content="https://www.bizquiz.app/bizquiz.jpg"/>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@u2_oww" />
        <meta name="twitter:player" content="@u2_oww" />

      </>
    )
  }