exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      video: Video
    }
    type Video {
      publicURL: String
    }
  `;
  createTypes(typeDefs);
};