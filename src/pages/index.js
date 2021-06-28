import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../layout/Layout"
import "../styles/home.css"
// components
import Hero from "../components/homeHero"
import Section1 from "../components/homeSection1"
import Section2 from "../components/homeSection2"
import Section3 from "../components/homeSection3"
import Section4 from "../components/homeSection4"
import Section5 from "../components/homeSection5"

const IndexPage = () => (
  <Layout>

    <Hero />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
  </Layout>
)

export default IndexPage
