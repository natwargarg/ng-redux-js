/**
 * Redux basic example using only javascript - * Use-case - dispatch (increment and decrement ) actions to update application state
 * # Core Principles/Rules of Redux #
    1.  The entire state of the application will be represented by one JavaScript object. This is also referred to as the Javascript State Tree. [[ no mutation here! ]]
    
    2.  State tree is read only. This means we will never directly manipulate values of our state tree. State will be updated / changed by dispatched actions (we’ll discuss this soon).
    
    3.  The reducer function. Inside a redux app there is one particular function that takes the previous state and the action being dispatched, and returns the next state of the application.
 */

//create action (with event)
const INCREEMENT_ACTION = 'INCREEMENT_ACTION';
const DECREEMENT_ACTION = 'DECREEMENT_ACTION';
//create initial state

const initial_state = {counter:0}; 
function reducer(_state,_action) //create reducer function - return new state always
{
    if (typeof _state === 'undefined') {
        return initial_state;
      }
    let _new_satate = Object.assign(_state, {});
    switch (_action.type) {
        case INCREEMENT_ACTION: 
        _new_satate.counter = _new_satate.counter + 1; 
        break;
        case DECREEMENT_ACTION: 
        _new_satate.counter = _new_satate.counter - 1; 
        break;
    }
    return _new_satate;
}

function on_increement_btn_clicked(event) {
    store.dispatch({ type: INCREEMENT_ACTION }); //  Dispatch action to change app state. An action is a plain JS object that must have a 'type' key
}
function on_decreement_btn_clicked(event) {
    store.dispatch({ type: DECREEMENT_ACTION }); //  Dispatch action to change app state. An action is a plain JS object that must have a 'type' key
}
// const store = Redux.createStore(reducer); //   The reducer function should handle all possible actions and initialize the app state

/* eslint-disable no-underscore-dangle */
  const store = createStore(
   reducer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
/* eslint-enable */

const counterValueEl = document.getElementById('counterValue');

function render() {
    counterValueEl.innerHTML = store.getState().counter.toString();
}
store.subscribe(render);
