import * as actions from './actions'

export default function reducer(state = [{
    id: 1,
    description: '1st bug',
    resolved: false
}], action) {
    let lastId = 1
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
        return state.filter(bug => action.payload.id !== bug.id);
    }
    else if (action.type === actions.BUG_RESOLVED) {
        return state.map(bug => bug.id !== action.payload.id ? bug : { ...bug, resolved: true })
    }
}