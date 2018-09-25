import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

// Dodawanie komentarza
function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
  }
}

const boundAddComment = text => dispatch(addComment(text));

// Usuwanie komentarza
function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id: id
  }
}

const boundRemoveComment = id => dispatch(removeComment(id));

// Edytowanie komentarza
function editComment(text, id) {
  return {
    type: EDIT_COMMENT,
    text: 'Nowy tekst',
    id: id
  }
}

const boundEditComment = text, id => dispatch(editComment(text, id));

// Łapka w górę
function thumbUpComment(id, like) {
  return {
    type: THUMB_UP_COMMENT,
    id: id,
    like: ++like
  }
}

const boundThumbUpComment = id, like => dispatch(thumbUpComment(id, like));

// Łapka w dół
function thumbDowmComment(id, dislike) {
  return {
    type: THUMB_DOWN_COMMENT,
    id: id,
    dislike: ++dislike
  }
}

const boundThumbDownComment = id, dislike => dispatch(thumbDownComment(id, dislike));
