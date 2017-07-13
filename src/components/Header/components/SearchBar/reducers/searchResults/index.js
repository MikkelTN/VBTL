import { updateSearch } from '../../actions/index'

const searchResults = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH':
      return action.results
    default:
      return state
  }
}

export default searchResults
