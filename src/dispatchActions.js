import * as actions from './actions'

export function bugAdded(descrition) {
    return {
        type: actions.BUG_ADDED,
        payload: {
            description: descrition
        }
    }
}

export function bugRemoved(id) {
    return {
        type: actions.BUG_REMOVED,
        payload: {
            id: id
        }
    }
}

export function bugResolved(id) {
    return {
        type: actions.BUG_RESOLVED,
        payload: {
            id: id
        }
    }
}