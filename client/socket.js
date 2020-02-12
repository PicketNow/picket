import io from 'socket.io-client'
import store from './store/index'
import eventsReducer, {addNewComment} from './store/event'

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!')
})

socket.on('new-message', message => {
  store.dispatch(addNewComment(message))
})

export default socket
