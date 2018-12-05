function getData() {
    return (dispatch, getState) => {
        const url = 'https://api.hh.ru/vacancies';
        fetch(url, {
            method: 'GET',
        }).then(responce => {
            return responce.json();
        }).then(data => {
            console.log(data);
            dispatch({type: 'DATA', payload: data});
        });
    }
}

export default function mapDispatchToProps(dispatch) {
    return {
        getData: () => {dispatch( getData() )}
    };
}