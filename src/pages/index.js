import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1>This is the index page</h1>
    <div>
      <Link to="/">Home</Link> | <Link to="/about">About me</Link>
    </div>
    <p>
      Lorem ipsum dolor amet mustache artisan blog +1 ugh normcore. Flannel
      sartorial synth tousled letterpress aesthetic. Hammock venmo sustainable
      crucifix, woke artisan chillwave etsy pickled pabst.
    </p>
  </Layout>
)
