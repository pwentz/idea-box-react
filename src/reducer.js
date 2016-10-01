const ideaReducer = (state = { ideas: [] }, action) => {
  let currentIdeas;
  switch(action.type) {
    case 'GET_IDEAS':
      currentIdeas = Object.keys(localStorage).map(id => {
                            return JSON.parse(localStorage.getItem(id))
                           })
       return {
         ...state,
         ideas: currentIdeas.reverse()
       }

    case 'ADD_IDEA':
      localStorage.setItem(action.data.id, JSON.stringify(action.data))
      currentIdeas = [action.data, ...state.ideas]
      return {
        ...state,
        ideas: currentIdeas
      }

    case 'DESTROY_IDEA':
      localStorage.removeItem(action.id)
      currentIdeas = state.ideas.filter( idea => {
        return idea.id !== action.id
      })
      return {
        ...state,
        ideas: currentIdeas
      }

    case 'UPDATE_TITLE':
      currentIdeas = [...state.ideas]
      let idea = currentIdeas.find(i => i.id === action.id)
      idea.title = action.data
      localStorage.setItem(idea.id, JSON.stringify(idea))
      return {
        ...state,
        ideas: currentIdeas
      }

    case 'UPDATE_BODY':
      currentIdeas = [...state.ideas]
      idea = currentIdeas.find(i => i.id === action.id)
      idea.body = action.data
      localStorage.setItem(idea.id, JSON.stringify(idea))
      return {
        ...state,
        ideas: currentIdeas
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
