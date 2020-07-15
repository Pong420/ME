import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

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

  const htmlAttributes = { lang };
  const defaultTitle = siteMetadata.title;
  const metaDescription = description || siteMetadata.description;
  const mergedMeta = [
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
      content: siteMetadata.domain + '/socialmediashare.png',
      property: `og:image`
    },
    {
      content: `website`,
      property: `og:type`
    },
    {
      content: keywords.join(`, `),
      name: `keywords`
    }
  ].concat(meta);

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
