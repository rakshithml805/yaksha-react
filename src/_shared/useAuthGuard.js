
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleLoggedInUserData } from '../_store/reducer/loggedInUserDetails';

const useAuthGuard = () => {
    const localUserDetails = JSON.parse(localStorage.getItem("loggedInUserDetails"));
    const loggedInUserDetailsStore = useSelector((state) => state.loggedInUserDetails);
    const dispatch = useDispatch()
    useEffect(() => {
        if (localUserDetails && !loggedInUserDetailsStore.data) {
            dispatch(handleLoggedInUserData(localUserDetails));
        }
    }, []);
    return loggedInUserDetailsStore;
}

export default useAuthGuard;