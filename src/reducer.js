const ideaReducer = (state = { ideas: [] }, action) => {
  switch(action.type) {
    case 'GET_IDEAS':
      const storageIdeas = Object.keys(localStorage).map(id => {
                            return JSON.parse(localStorage.getItem(id))
                           })
       return {
         ...state,
         ideas: storageIdeas.reverse()
       }

    case 'ADD_IDEA':
      localStorage.setItem(action.data.id, JSON.stringify(action.data))
      const currentIdeas = [action.data, ...state.ideas]
      return {
        ...state,
        ideas: currentIdeas
      }

    case 'DESTROY_IDEA':
      localStorage.removeItem(action.id)
      let stateIdeas = state.ideas.filter( idea => {
        return idea.id !== action.id
      })
      return {
        ...state,
        ideas: stateIdeas
      }

    case 'UPDATE_IDEA':
      localStorage.clear()
      let updatedIdeas = state.ideas.map(idea => {
        if (idea.id === action.data.id) {
          localStorage.setItem(idea.id, JSON.stringify(action.data))
          return action.data
        }
        else {
          localStorage.setItem(idea.id, JSON.stringify(idea))
          return idea
        }
      })
      return {
        ...state,
        ideas: updatedIdeas
      }
    default:
      return state
  }
}

export default ideaReducer
