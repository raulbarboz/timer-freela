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

export const startSetTasks = () => {
    return dispatch => {
        return firebase.ref('/company/').once('value').then((snapshot) => {
            const tasks = [];
            snapshot.forEach((childSnapshot) => {
                childSnapshot.forEach((childChildSnapshot) => {
                    if(childChildSnapshot.key === "company"){
                    }else{
                        tasks.push({
                            company_id: childSnapshot.key,
                            ...childChildSnapshot.val()
                        })
                    }
                })
            })
            return dispatch(setTasks(tasks))
        })
    }
}
  