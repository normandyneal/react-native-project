import {createAction} from 'redux-actions';

export const TEST_ACTION = 'TEST_ACTION';
export const SET_TEXT = 'SET_TEXT';
export const SET_TITLE = 'SET_TITLE';
export const SET_ZIPCODE = 'SET_ZIPCODE';
export const SET_GIGARRAY = 'SET_GIGARRAY';
export const SET_CATEGORY = 'SET_CATEGORY';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const ADD_NOTE = 'ADD_NOTE';

export const setGigArray = createAction(SET_GIGARRAY);
export const setCategory = createAction(SET_CATEGORY);

// export const setGigArray = (payload) => ({
//  type: 'update',
//  id: '2',
//  payload: payload});






export const setText = createAction(SET_TEXT);
export const changeLanguage = createAction(CHANGE_LANGUAGE);
export const setZipCode = createAction(SET_ZIPCODE);
export const setTitle = createAction(SET_TITLE);
export const addNote = createAction(ADD_NOTE);
/* This is equivalent to
export const setTitle = (payload) => {
  return {
    type: SET_TITLE,
    payload: payload
  };
};
*/
