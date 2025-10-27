/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react"

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script src="https://apps.elfsight.com/p/platform.js" defer></script>,
    <script src="https://widget.seated.com/app.js"></script>,
  ])
}
