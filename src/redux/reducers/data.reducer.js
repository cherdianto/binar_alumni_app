const initState = {
    data: 0
}

const dataReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_DATA':
            // console.log('get data');
            return {
                ...state
            }
        case 'ADD_DATA':
            // console.log('add data');
            return {
                ...state,
                data: state.data + action.payload
            }
        case 'DELETE_DATA':
            // console.log('delete data');
            return {
                ...state,
                data: 0
            }
        default:
            return state;
    }
}

export default dataReducer