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

    case 'UPDATE_IDEA':
      let updatedIdeas = state.ideas.map((idea, index) => {
        if (action.data.id === index) return action.data
        if (action.data.id !== index) return idea
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
