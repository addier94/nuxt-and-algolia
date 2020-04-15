import algoliasearch from 'algoliasearch/lite'
import { createInstantSearch } from 'vue-instantsearch'
import { history } from 'instantsearch.js/es/lib/routers'
import { simple } from 'instantsearch.js/es/lib/stateMappings'

export default ({ app }, inject) => {
  const searchClient = algoliasearch(
    'latency',
    '6be0576ff61c053d5f9a3225e2a90f76'
  )

  const { instantsearch } = createInstantSearch({
    searchClient,
    routing: {
      router: history(),
      stateMapping: simple()
    },
    indexName: 'instant_search'
  })

  inject('instantsearch', instantsearch)
}