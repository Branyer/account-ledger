

import {User} from "firebase/auth"
import {auth} from "../firebaseconfig"

import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions/auth"

const useAuth = () => {

    const dispatch = useDispatch()

    auth.onAuthStateChanged((user : User | null) => {
        if (user) {
          console.log('user is logged', user);
          dispatch(setUser(user))
        }
    });


}

export default useAuth