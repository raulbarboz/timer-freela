const tasks = (state = [], action) => {
    switch (action.type) {
      case 'SET_TASKS':
        return action.prices
      default:
        return state
    }
  }
  
  export default tasks