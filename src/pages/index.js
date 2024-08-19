// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Uilleann Piper's Association</p>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>
export default IndexPage