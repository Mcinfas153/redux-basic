import store from "./store";
import { bugAdded, bugRemoved } from './dispatchActions'

store.dispatch(bugAdded('Bug Added'))

store.dispatch(bugRemoved(1))

console.log(store.getState())