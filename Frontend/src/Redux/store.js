import {createStore} from 'redux'
import reducer from './reducer'
// import Rootreducer from './combinedReducer'

const store=createStore(reducer)

export default store
