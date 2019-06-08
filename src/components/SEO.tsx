import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import socialmediashare from '../assets/socialmediashare.png';
import Helmet from 'react-helmet';

export interface SEOProps {
  title?: string;
  description?: string;
  lang?: string;
  meta?: [];
  keywords?: [];
}

export interface SEOQuery {
  site: {
    siteMetadata: SiteMetadata;
  };
}

export interface SiteMetadata {
  title: string;
  description: string;
  author: string;
  domain: string;
}

export function SEO({
  title,
  description,
  lang = 'en',
  meta = [],
  keywords = []
}: SEOProps) {
  const {
    site: { siteMetadata }
  } = useStaticQuery<SEOQuery>(detailsQuery);

  const htmlAttributes = useMemo(() => ({ lang }), [lang]);
  const { title: defaultTitle, domain } = siteMetadata;
  const metaDescription = description || siteMetadata.description;
  const mergedMeta = useMemo(
    () =>
      [
        {
          content: metaDescription,
          name: 'description'
        },
        {
          content: defaultTitle,
          property: `og:title`
        },
        {
          content: metaDescription,
          property: `og:description`
        },
        {
          content: `${domain}${socialmediashare}`,
          property: `og:image`
        },
        {
          content: `website`,
          property: `og:type`
        },
        {
          content: `summary`,
          name: `twitter:card`
        },
        {
          content: siteMetadata.author,
          name: `twitter:creator`
        },
        {
          content: defaultTitle,
          name: `twitter:title`
        },
        {
          content: metaDescription,
          name: `twitter:description`
        },
        {
          content: keywords.join(`, `),
          name: `keywords`
        }
      ].concat(meta),
    [defaultTitle, metaDescription, siteMetadata.author]
  );

  return (
    <Helmet
      htmlAttributes={htmlAttributes}
      title={defaultTitle}
      titleTemplate={title ? `%s | ${title}` : `%s`}
      meta={mergedMeta}
    />
  );
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        domain
      }
    }
  }
`;
