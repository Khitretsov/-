const initialState = {
    data: null
}

export default function list(state = initialState, action) {
    switch (action.type) {
    case 'DATA':
        return {...state, data: action.payload}
    default: 
        return state;
    }
} 