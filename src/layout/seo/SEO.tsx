import React from 'react'
import { ISeoProps } from './seo.props'
import Head from 'next/head'
import { seoConfig } from 'src/config/seo.config'

const SEO = (props:ISeoProps) => {
  const {metaTitle= seoConfig.metaTitle,children,metaDescription=seoConfig.metaDescription,metaKeywords=seoConfig.metaKeywords,author=seoConfig.author} = props
  
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5" />
        <title>{metaTitle}</title>
        
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta name='author' content={author}/>
      </Head>

      {children}
    </>
  )
}

export default SEO