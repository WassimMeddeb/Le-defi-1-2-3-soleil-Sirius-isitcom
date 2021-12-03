import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To 123 soleil',
  description: 'we sell the best products with cheapest price ',
  keywords: 'T-shirt,Homme,Femme,Enfant,cloths',
}

export default Meta
