const ideaReducer = (state = { ideas: [] }, action) => {
  switch(action.type) {
    case 'ADD_IDEA':
      const currentIdeas = [action.data, ...state.ideas]
      return {
        ...state,
        ideas: currentIdeas
      }
    default:
      return state
  }
}

export default ideaReducer
