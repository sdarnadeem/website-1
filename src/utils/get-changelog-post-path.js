const { CHANGELOG_BASE_PATH } = require('../constants/changelog');

function getChangelogPostSlugWithoutDate(slug) {
  return slug.slice(11);
}

// We are using ES modules here in order to be able to import variables from this file in gatsby-node.js
module.exports = function getChangelogPostPath(slug) {
  return `${CHANGELOG_BASE_PATH}${getChangelogPostSlugWithoutDate(slug)}`;
};
