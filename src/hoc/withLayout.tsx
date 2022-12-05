import React from 'react'
import Layout from "../components/Layout/Layout.component";

const withLayout = (Component: React.FC<any>) => (props: any) => {
  return (
    <Layout>
      <Component {...props}/>
    </Layout>
  )
}

export default withLayout;