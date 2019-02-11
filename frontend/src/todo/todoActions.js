import axios from 'axios'

const ApiUrl = 'http://localhost:8090/api/todos'


export const changeDescription = event => (
    {
        type: 'DESCRIPTION_CHANGE',
        payload: event.target.value
    }
)

export const search = () => {

    return (dispatch, getState) => 
    {
        const description = getState().todo.description;
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${ApiUrl}?sort=-createdAt${search}`)
            .then(resp => dispatch({ type: 'TODO_SEARCHED', payload: resp.data}))
    }
}

export const add = description => 
{
    return dispatch => 
    {
        axios.post(ApiUrl, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export const markAsDone = todo =>
{
    return dispatch => 
    {
        axios.put(`${ApiUrl}/${todo._id}`, {...todo, done: true})
            .then(resp => dispatch(search()))            
    }
}

export const markAsPending = todo =>
{
    return dispatch => 
    {
        axios.put(`${ApiUrl}/${todo._id}`, {...todo, done: false})
            .then(resp => dispatch(search()))            
    }
}

export const remove = todo =>
{
    return dispatch => 
    {
        axios.delete(`${ApiUrl}/${todo._id}`)
            .then(resp => dispatch(search()))            
    }
}

export const clear = () =>
{
    return [{ type: 'TODO_CLEAR' }, search()]
}