// export default function testAction() {
function selectItem(data, isAdded) {
    if (isAdded) {
        return (dispatch) => {
            dispatch({type: 'DESELECTED', payload: data.id})
        }
    }
    return (dispatch, getState) => {
        return dispatch({type: 'SELECTED', payload: data})
    }
}

export default function mapDispatchToProps(dispatch) {
    return {
        selectItem: (data, isAdded) => {dispatch( selectItem(data, isAdded) )},
    }
}