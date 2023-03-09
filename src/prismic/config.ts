import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'

import sm from '../../sm.json'

export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint)

const routes: prismic.ClientConfig['routes'] = [
  {
    type: 'home',
    path: '/'
  },
  {
    type: 'projectPage',
    path: '/projects/:uid'
  }
]

export const createClient = (config: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, {
    routes,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    ...config
  })

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req
  })

  return client
}
