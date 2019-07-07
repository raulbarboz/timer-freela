import { useDispatch } from 'react-redux';
import { startSetEntry } from '../actions/entry';
import { startSetTasks } from '../actions/tasks';
const Container = ({ children }) => {
    const dispatch = useDispatch();
    dispatch(startSetEntry())
    dispatch(startSetTasks())  
    return children;
}

export default Container;