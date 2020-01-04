/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require("react")

exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script src="https://apps.elfsight.com/p/platform.js" defer></script>,
    <script src="https://widget.seated.com/app.js"></script>,
  ])
}
