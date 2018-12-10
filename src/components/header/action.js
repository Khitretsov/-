
function getData(keyWord) {
    return ( dispatch ) => {
        const url = `https://api.hh.ru/vacancies?text=${keyWord}`;
        fetch(url, {
            method: 'GET',
        }).then(responce => {
            return responce.json();
        }).then(data => {
            console.log('header action', data);
            dispatch({type: 'DATA', payload: data});
        });
    }
}

export default function mapDispatchToProps( dispatch ) {
    return {
        getData: ( keyWord ) => { dispatch(getData(keyWord)) }
    }
}
