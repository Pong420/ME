import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

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
}

export function SEO({ title, description, lang = 'en', meta = [], keywords = [] }: SEOProps) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data: SEOQuery) => {
        const defaultTitle = data.site.siteMetadata.title;
        const metaDescription = description || data.site.siteMetadata.description;
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={defaultTitle}
            titleTemplate={title ? `%s | ${title}` : `%s`}
            meta={[
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
                content: `website`,
                property: `og:type`
              },
              {
                content: `summary`,
                name: `twitter:card`
              },
              {
                content: data.site.siteMetadata.author,
                name: `twitter:creator`
              },
              {
                content: defaultTitle,
                name: `twitter:title`
              },
              {
                content: metaDescription,
                name: `twitter:description`
              }
            ]
              .concat(
                keywords.length > 0
                  ? {
                      content: keywords.join(`, `),
                      name: `keywords`
                    }
                  : []
              )
              .concat(meta)}
          />
        );
      }}
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
      }
    }
  }
`;
