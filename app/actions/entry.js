import firebase from '../firebase/firebase';

// ADD_ENTRY
export const addCompany = ( company ) => ({
    type: 'ADD_COMPANY',
    company
})

export const startAddCompany = ( company ) => {
    return dispatch => {
        firebase.ref('/company').push({company}).then((ref) => {
            dispatch(addCompany({
                id: ref.key,
                company
            }))
        })
    }  
}

export const setEntry = (entry) => ({
    type: 'SET_ENTRY',
    entry
})

export const startSetEntry = () => {
    return dispatch => {
        return firebase.ref('/company').once('value').then((snapshot) => {
            const entry = [];
            snapshot.forEach((childSnapshot) => {
                entry.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            return dispatch(setEntry(entry))
        })
    }
}