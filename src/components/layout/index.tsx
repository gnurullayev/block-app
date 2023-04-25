import React from 'react'
import { LayoutProps } from './layout.props'
import Header from "./header/Header"
import Footer from "./footer/Footer"

const Layout = ({children}: LayoutProps): JSX.Element => {
  return (
    <>
        <Header/>
        {children}
        <Footer />
    </>
  )
}

export default Layout