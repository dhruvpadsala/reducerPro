import {STATE_NAME, CITY_NAME} from '../Constants';

import { getRequestApi} from '../Service/SerivecManager';

export function stateAction (url){
  console.log("===========state-action-======",url);
  return(dispatch)=> getRequestApi({
    url,
    dispatch,
    actionType:STATE_NAME,
  });
}

export function cityAction(url) {
  console.log('===========city-action-======', url);
  return dispatch =>
    getRequestApi({
      url,
      dispatch,
      actionType: CITY_NAME,
    });
}