import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  schema?: Record<string, any>;
}

export default function SEO({
  title,
  description,
  keywords = 'restaurant management software, food cost calculator, theft detection, restaurant forecasting, menu pricing',
  canonical,
  ogImage = 'https://ownerclone.com/og-image.png',
  ogType = 'website',
  author = 'Mateo Monti',
  publishedTime,
  modifiedTime,
  schema
}: SEOProps) {
  const siteName = 'OwnerClone';
  const fullTitle = title.includes('OwnerClone') ? title : `${title} | OwnerClone`;
  const url = canonical || 'https://ownerclone.com';

  // Base Organization Schema (used on every page)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'OwnerClone',
    url: 'https://ownerclone.com',
    logo: 'https://ownerclone.com/logo.png',
    description: 'AI-powered restaurant management software for independent restaurant owners',
    foundingDate: '2025',
    founder: {
      '@type': 'Person',
      name: 'Mateo Monti'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Atlanta',
      addressRegion: 'GA',
      addressCountry: 'US'
    },
    sameAs: [
      'https://twitter.com/ownerclone',
      'https://linkedin.com/company/ownerclone',
      'https://facebook.com/ownerclone'
    ]
  };

  // Breadcrumb Schema (for non-homepage pages)
  const breadcrumbSchema = canonical && canonical !== 'https://ownerclone.com' ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://ownerclone.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: title,
        item: canonical
      }
    ]
  } : null;

  // Combine all schemas
  const allSchemas = [
    organizationSchema,
    breadcrumbSchema,
    schema
  ].filter(Boolean);

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@ownerclone" />

      {/* Article specific */}
      {ogType === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {ogType === 'article' && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="US-GA" />
      <meta name="geo.placename" content="Atlanta" />
      <meta name="geo.position" content="33.7490;-84.3880" />
      <meta name="ICBM" content="33.7490, -84.3880" />

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(allSchemas.length === 1 ? allSchemas[0] : allSchemas)
        }}
      />
    </Head>
  );
}