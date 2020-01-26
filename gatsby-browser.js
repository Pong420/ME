const React = require('react');
const { Layout } = require('./src/components/layout');

require('typeface-roboto');
require('typeface-raleway');
require('typeface-open-sans');

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
