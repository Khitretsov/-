// export default function testAction() {
function selectItem(data) {
    return (dispatch, getState) => {
        console.log('selectedItem', data);
        return dispatch({type: 'SELECTED', payload: data})
    }
}

export default function mapDispatchToProps(dispatch) {
    return {
        selectItem: (data) => {dispatch( selectItem(data) )},
    }
}