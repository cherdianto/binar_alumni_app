import '../../services/firebase' // harus import ini di paling atas
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth'

export const login = (email, password) => {
    return async (dispatch, getState) => {
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch({
                    type: 'LOGIN',
                    payload: user
                });
              })
              .catch((error) => {
                dispatch({
                    type: 'LOGIN_ERROR',
                    payload: {
                        errorCode: error.code,
                        errorMessage: error.message
                    }
                });
              });
            
       
    }
}

export const logout = () => {
    return async (dispatch, getState) => {
        const auth = getAuth();
        await signOut(auth)
        .then(()=> {
            dispatch({
                type: 'LOGOUT',
            })
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }
}

export const register = (email, password) => {
    return async (dispatch, getState) => {
            const auth = getAuth();
            await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch({
                    type: 'REGISTER',
                    payload: user
                });
              })
              .catch((error) => {
                dispatch({
                    type: 'REGISTER_ERROR',
                    payload: {
                        errorCode: error.code,
                        errorMessage: error.message
                    }
                });
              });
            
       
    }
}