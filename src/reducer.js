const ideaReducer = (state = { ideas: [] }, action) => {
  switch(action.type) {
    case 'ADD_IDEA':
      const currentIdeas = [action.data, ...state.ideas]
      return {
        ...state,
        ideas: currentIdeas
      }

    case 'DESTROY_IDEA':
      let stateIdeas = state.ideas.filter(( idea, index ) => {
        return index !== action.id
      })
      return {
        ...state,
        ideas: stateIdeas
      }
    default:
      return state
  }
}

export default ideaReducer
