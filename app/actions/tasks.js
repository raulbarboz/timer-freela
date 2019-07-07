import firebase from '../firebase/firebase';

// ADD_TASK
export const addTask = (task) => ({
    type: 'ADD_TASK',
    task
  })
  
export const startAddTask = (start, stop, id) => {
    return dispatch => {
       return firebase.ref(`/company/${id}/tasks/`).push({ start, stop }).then((ref) => {
            dispatch(addTask({
                id: ref.key,
                start,
                stop
            }))
       })
    }
  };

  export const setTasks = (tasks) => ({
    type: 'SET_TASKS',
    tasks
})

export const startSetTasks = (id) => {
    return dispatch => {
        return firebase.ref(`/company/${id}/tasks/`).once('value').then((snapshot) => {
            const tasks = [];
            snapshot.forEach((childSnapshot) => {
                tasks.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })  
            })
            return dispatch(setTasks(tasks))
        })
    }
}
  