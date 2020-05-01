import { createAction } from 'redux-actions';
import { GET_LIVE_CASES,STORE_HEAT_MAP_DATA,STORE_LIVE_CASES,STORE_CASES_TIME_STAMP, GET_HEAT_MAP__DATA } from '../constants/actionTypes';

//
export const getLiveCases = createAction(GET_LIVE_CASES);
export const getHeatMapData = createAction(GET_HEAT_MAP__DATA);
export const storeLiveCases = createAction(STORE_LIVE_CASES);
export const storeCasesTimeStamp = createAction(STORE_CASES_TIME_STAMP);
export const storeHeatMapData = createAction(STORE_HEAT_MAP_DATA);