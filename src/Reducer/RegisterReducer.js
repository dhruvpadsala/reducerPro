import {STATE_NAME, CITY_NAME} from '../Constants';


const initialState={
    stateData:'',
    cityData:'',
}

const RegisterReducer=(state=initialState,action)=>{
    switch (action.type) {
      case 'STATE_NAME':
      response=action.payload
      console.log("====city-reducer=====",JSON.stringify(response));
      return{
          ...state,
          stateData:response.data.data
      }

      case 'CITY_NAME':
        response = action.payload;
        console.log('====city-reducer=====', JSON.stringify(response));
        return {
          ...state,
          cityData: response.data.data,
        };
        console.log("-----citydata-----",cityData)
    }
    return state;
}
export default RegisterReducer;
