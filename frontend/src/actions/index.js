import uuidv1 from 'uuid/v1'

export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPVOTE_POST = 'UPVOTE_POST';
export const DOWNVOTE_POST = 'DOWNVOTE_POST';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT';
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT';

export function addPost({title, body, author, category}){
	return {
		type: ADD_POST,
		title,
		body,
		author,
		category,
		timestamp: Date.now(),
		id: uuidv1(),
		score: 0
	}
}

export function upvotePost({id}){
	return {
		type: UPVOTE_POST,
		id
	}
}

export function downvotePost({id}){
	return {
		type: DOWNVOTE_POST,
		id
	}
}

export function editPost({id, title, body, author}){
	return {
		type: EDIT_POST,
		title,
		body,
		author,
		id
	}
}

export function addComment({postId, comment, author}){
	return {
		type: ADD_COMMENT,
		postId,
		comment,
		author,
		timestamp: Date.now(),
		id: uuidv1(),
		score: 0
	}
}

export function editComment({id, comment, author}){
	return {
		type: EDIT_COMMENT,
		comment,
		author,
		id
	}
}

export function deleteComment({id}){
	return {
		type: DELETE_COMMENT,
		id
	}
}

export function upvoteComment({id}){
	return {
		type: UPVOTE_COMMENT,
		id
	}
}

export function downvoteComment({id}){
	return {
		type: UPVOTE_COMMENT,
		id
	}
}
