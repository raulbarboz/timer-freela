const tasks = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return [state, ...action.task]
      case 'SET_TASKS':
        return action.tasks
      default:
        return state
    }
  }
export default tasks