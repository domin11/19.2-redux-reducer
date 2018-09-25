import {ADD_COMMENT} from './actions';
import {REMOVE_COMMENT} from './actions';
import {EDIT_COMMENT} from './actions';
import {THUMB_UP_COMMENT} from './actions';
import {THUMB_DOWN_COMMENT} from './actions';

function reducer(state = [], action) {
  switch(action.type) {
    case ADD_COMMENT:
      return [{
          id: action.id,
          text: action.text,
          like: 0,
          dislike: 0
        }
        , ...state.comments];

    case REMOVE_COMMENT:
      return state.comments.filter(comment => comment.id !== action.id)

    case EDIT_COMMENT:
      return state.comments.map(comment => {
        if(comment.id === action.id) {
          return {...comment, text: action.text}
        }
        return comment;
      });

    case THUMB_UP_COMMENT:
      return state.comments.map(comment => {
        if(comment.id === action.id) {
          return {...comment, like: ++comment.like}
        }
        return comment;
      });

      case THUMB_DOWN_COMMENT:
        return state.comments.map(comment => {
          if(comment.id === action.id) {
            return {...comment, dislike: ++comment.dislike}
          }
          return comment;
        });
        
      default:
        return state;
  }
}

export default comments;
