import * as actions from './actions'

export default function reducer(state = [], action) {
    let lastId = 0
    if (action.type === actions.BUG_ADDED) {
        return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
        ]
    } else if (action.type === actions.BUG_REMOVED) {
        return state.filter(des => action.payload.id !== 2);
    }
}