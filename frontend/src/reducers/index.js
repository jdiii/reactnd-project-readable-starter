import {combineReducers} from 'redux'
import {
	ADD_POST,
	EDIT_POST,
	DELETE_POST,
	UPVOTE_POST,
	DOWNVOTE_POST,
	ADD_COMMENT,
	EDIT_COMMENT,
	DELETE_COMMENT,
	UPVOTE_COMMENT,
	DOWNVOTE_COMMENT
} from '../actions'

function post(state = {}, action){
	const {id, title, body, author, category, timestamp, score} = action
	switch(action.type){
		case ADD_POST:
			return {
				...state,
				[id]: {
					title, body, author, category, timestamp
				}
			}
		case DELETE_POST:
			let newState = {...state};
			delete newState.id;
			return newState;
		case EDIT_POST:
			if(state[id]){
				let editedPost = {
					...state[id],
					title: title,
					body: body,
					author: author,
					score: score
				}
				return {
					...state,
					[id]: editedPost
				};
			} else {
				return state;
			}
		case UPVOTE_POST:
			if(state[id]){
				let editedPost = {
					...state[id],
					score: state[id].score + 1
				}
				return {
					...state,
					editedPost
				}
			} else {
				return state;
			}
		case DOWNVOTE_POST:
			if(state[id]){
				let editedPost = {
					...state[id],
					score: state[id].score - 1
				}
				return {
					...state,
					editedPost
				}
			} else {
				return state;
			}
		default:
			return state;
	}
}

function comment(state = {}, action){
	const {id, postId, comment, author, timestamp, score} = action
	switch(action.type){
		case ADD_COMMENT:
			return {
				...state,
				[id]: {
					postId,
					comment,
					author,
					timestamp,
					score
				}
			}
		case DELETE_COMMENT:
			let newState = {
				...state
			}
			delete newState[id];
			return newState;
		case EDIT_COMMENT:
			if(state[id]){
				let editedComment = {
					...state[id],
					comment,
					author
				};
				return {
					...state,
					[id]: editedComment
				}
			} else {
				return state
			}

		case UPVOTE_COMMENT:

			if(state[id]){
				let editedComment = {
					...state[id],
					score: state[id].score + 1
				}
				return {
					...state,
					[id]: editedComment
				}
			} else {
				return state
			}
		case DOWNVOTE_COMMENT:
			if(state[id]){
				let editedComment = {
					...state[id],
					score: state[id].score - 1
				}
				return {
					...state,
					[id]: editedComment
				}
			} else {
				return state
			}
		default:
			return state;
	}
}

export default combineReducers({
	post,
	comment
})
