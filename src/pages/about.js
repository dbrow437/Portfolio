import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1>This is the about page</h1>
    <Link to="/">Home</Link> | <Link to="/about">About me</Link>
    <p>
      Lorem ipsum dolor amet mustache artisan blog +1 ugh normcore. Flannel
      sartorial synth tousled letterpress aesthetic. Hammock venmo sustainable
      crucifix, woke artisan chillwave etsy pickled pabst.
    </p>
  </Layout>
)
