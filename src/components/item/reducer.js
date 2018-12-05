const initialState = {
    elem: 'default data',
};

export default function item(state = initialState, action) {
    switch (action.type) {
    case 'TEST_ACTION':
        console.log('reducer', { ...state, testElem: action.payload });
        return { ...state, elem: action.payload };
    default:
        return state;
    };
};