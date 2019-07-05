import { useDispatch } from 'react-redux';
import { setEntry } from '../actions/entry';
const Container = ({ children }) => {
    const dispatch = useDispatch();
    dispatch(setEntry)  
    return children;
}

export default Container;