// Entry Reducers
const entryReducerDefaultState = []
export default(state = entryReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_COMPANY':
        return [...state, action.company]
    case 'SET_ENTRY':
        return action.entry
    default:
      return state;
  }
};