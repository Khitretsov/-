const initialState = {
    selectedData: []
}

export default function header(store = initialState, action) {
    switch (action.type) {
    case 'SELECTED':
        return {...store, selectedData: store.selectedData.concat(action.payload)};
    case 'DESELECTED':
        const arr = store.selectedData.filter((item) => {
            if (item.id != action.payload) return item
        })
        return {...store, selectedData: arr}
    default:
        return store;
    }
}