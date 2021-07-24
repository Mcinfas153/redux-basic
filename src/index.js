import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from './dispatchActions'

store.dispatch(bugAdded('2nd Bug Added'))

//store.dispatch(bugRemoved(2))

store.dispatch(bugResolved(2))

console.log(store.getState())