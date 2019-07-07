import { useDispatch } from 'react-redux';
import { startSetEntry } from '../actions/entry';

const Container = ({ children }) => {
    const dispatch = useDispatch();
    dispatch(startSetEntry())
    return children;
}

export default Container;