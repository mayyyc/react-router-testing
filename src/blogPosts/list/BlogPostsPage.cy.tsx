import React from 'react'
import { BlogPostsPage } from './BlogPostsPage'

describe('<BlogPostsPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<BlogPostsPage />)
  })
})