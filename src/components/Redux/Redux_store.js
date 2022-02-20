import { combineReducers, createStore } from 'redux'


let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser
})

let store = createStore(redusers)



export default store