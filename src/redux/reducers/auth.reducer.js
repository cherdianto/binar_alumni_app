const initState = {
    user: '', 
    errorCode: '',
    errorMessage: ''
}
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN':
            // console.log(action.payload)
            return {
                ...state,
                user: action.payload,
                errorCode: '',
                errorMessage: ''
            }
        case 'LOGIN_ERROR':
            // console.log(action.payload)
            return {
                ...state,
                user: null,
                errorCode: action.payload.errorCode,
                errorMessage: action.payload.errorMessage
            }
        case 'LOGOUT':
            // console.log(action.payload)
            return {
                ...state,
                user: null
            }
        case 'REGISTER':
            // console.log(action.payload)
            return {
                ...state,
                user: action.payload
            }
        case 'REGISTER_ERROR':
            // console.log(action.payload)
            return {
                ...state,
                user: null,
                errorCode: action.payload.errorCode,
                errorMessage: action.payload.errorMessage
            }
        case 'CLEAN_ERROR_CODE':
            // console.log(action.payload)
            return {
                ...state,
                errorCode: null,
                errorMessage: null
            }
        default:
            return state;
    }
}

export default authReducer