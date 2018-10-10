import {SET_CATEGORY, SET_TEXT, SET_TITLE, SET_ZIPCODE, SET_GIGARRAY} from '../actions/index.actions';

const defaultState = {
  category: '',
  text: '',
  title: '',
  zipCode: '',
  gigArray: [{}]
};


const content = (state = defaultState, action) => {
  switch (action.type) {
  case SET_CATEGORY: {
    return {...state, category: action.payload};
  }
  case SET_TEXT: {
    return {...state, text: action.payload};
  }
  case SET_TITLE: {
    return {...state, title: action.payload};
  }
  case SET_ZIPCODE: {
    return {...state, zipCode: action.payload};
  }
  case SET_GIGARRAY: {
    console.log('From the setGigarray content reduer');

    state.gigArray.push(action.payload);
    postGig(action.payload);

    return state;
  }
  default:
    return state;
  }
};

let getGigs = () => {
  console.log('ran from getGigs');
  fetch('http://localhost:8080/gig/').
  then((results) => results.json()).
    then((json) => {
      console.log('json from a reducer');
      console.log(json);
      defaultState.gigArray = json;
    });

};

console.log('ran outsideOfGetGigs from the RIPPPPPPPPPPPPPPP');
getGigs();

let postGig = (payload) => {
  console.log('From postGIG!');

  fetch('http://localhost:8080/gig/', {
    method: 'post',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: `{"_id" : "9bb1c3a27083b7a212a09999", "category": "${payload.category}", "zipCode": "${payload.zipCode}", "text": "${payload.text}","title": "${payload.title}"}`
  }).then((results) => results.json()).then(function (jsonString) {
    console.log('Request success: ', jsonString);
  }).
    catch(function (error) {
      console.log('Request failure: ', error);
    });
};

export default content;
