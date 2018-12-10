const initialState = {
    selectedData: []
}

export default function header(store = initialState, action) {
    switch (action.type) {
    case 'SELECTED':
        return {...store, selectedData: store.selectedData.concat(action.payload)};
    default:
        return store;
    }
}