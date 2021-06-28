import React from 'react'
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/global.css"
import Seo from "../components/seo"


const Layout = ({ children }) => {
  return (
    <>
      <Seo title="Digay" />
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout

