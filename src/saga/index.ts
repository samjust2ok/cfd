import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { ReportActionTypes, Report, GetReportActionType, CreateReportActionType } from '../constants/types'
import { getReportRequest, getReportsRequest, createReportRequest } from '../services/reportsServices';
import { fetchReportsSuccess, fetchReportsFailure, createNewReportByCitySuccess, createNewReportByCityFailure, fetchSingleReportFailure, fetchSingleReportSuccess } from '../actions/actions'
import { CREATE_REPORT, GET_LIVE_CASES, GET_HEAT_MAP__DATA } from '../constants/actionTypes';
import { setAppState } from '../actions/appActions';
import { REPORT_CREATION_LOADING, SHOW_REPORT_CREATION_FAILURE, SHOW_REPORT_CREATION_SUCCESS } from '../constants/labels';
import { getUserId } from '../services/userServices';
import axios from 'axios';
import { storeLiveCases,storeCasesTimeStamp, storeHeatMapData} from '../actions/apiActions';


function* getReport(action: GetReportActionType){
  const id: string = action.payload.id;
  const res: { error: boolean, data?: Report, message?: string } = yield call(getReportRequest, id);
  if (res.error) {
    yield put(fetchSingleReportFailure(res.message as string))
  } else {
    yield put(fetchSingleReportSuccess(res.data as Report))
  }
}

function* fetchReports(){
  const res: {error: boolean, data?:Report[], message?: string} = yield call(getReportsRequest);
  if (res.error) {
    yield put(fetchReportsFailure(res.message as string))
  }else{
    yield put(fetchReportsSuccess(res.data as Report[]))
  }
}

function* createReport(action: CreateReportActionType){
  yield put(setAppState({
    appState: REPORT_CREATION_LOADING,
    value: true
  }))

  let fields = action.payload.report;

  let email = fields.personalInformation.email;

  const report: Report = {
    ...fields,
  };
  

  if(email){
    const res: { error: boolean, data?: string, message?: string } = yield call(createReportRequest, email, report);
    if (res.error) {
      yield put(setAppState({
        appState: SHOW_REPORT_CREATION_FAILURE,
        value: true
      }))
    } else {
      yield put(setAppState({
        appState: SHOW_REPORT_CREATION_SUCCESS,
        value: true
      }))
    }
    yield put(setAppState({
      appState: REPORT_CREATION_LOADING,
      value: false
    }))
  }else{
    yield put(setAppState({
      appState: SHOW_REPORT_CREATION_FAILURE,
      value: true
    }))
    yield put(setAppState({
      appState: REPORT_CREATION_LOADING,
      value: false
    }))
  }
}




function* getLiveCases(){
  const response = yield axios.get("https://coviddata.github.io/coviddata/v1/countries/stats.json");
  yield put(storeCasesTimeStamp({
    data: response.data,
  }))
  
}

function* getHeatMapData(){
  const response = yield axios.request({
    method: 'get',
    url: 'https://nigeria-covid-19.p.rapidapi.com/api/states',
    headers:{
        "x-rapidapi-host": "nigeria-covid-19.p.rapidapi.com",
      "x-rapidapi-key": "64c8bf67aamsh270dfcd54556557p19c7ddjsnf55abf93fcd1",
      "Access-Control-Allow-Origin":"https://www.kontagion.africa"
    },
    })

  yield put(storeHeatMapData({
    data: response.data
  }))
    
}



function* watchGetReport(){
  yield takeLatest(ReportActionTypes.GET_REPORTS_BY_CITY_REQUEST, getReport)
}
 
function* watchFetchReports(){
  yield takeLatest(ReportActionTypes.GET_REPORTS_BY_CITY_REQUEST, fetchReports);
}

function* watchCreateReport(){
  yield takeEvery(CREATE_REPORT, createReport)
}

function* watchGetLiveCases(){
  yield takeLatest(GET_LIVE_CASES, getLiveCases)
}

function* watchGetHeatMapData(){
  yield takeLatest(GET_HEAT_MAP__DATA, getHeatMapData)
}

export default function* reportSaga(){
  yield all([
    fork(watchGetReport),
    fork(watchFetchReports),
    fork(watchCreateReport),
    fork(watchGetLiveCases),
    fork(watchGetHeatMapData)
  ]);
}