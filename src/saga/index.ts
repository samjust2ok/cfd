import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { ReportActionTypes, Report, GetReportActionType, CreateReportActionType } from '../constants/types'
import { getReportRequest, getReportsRequest, createReportRequest } from '../services/reportsServices';
import { fetchReportsSuccess, fetchReportsFailure, createNewReportByCitySuccess, createNewReportByCityFailure, fetchSingleReportFailure, fetchSingleReportSuccess } from '../actions/actions'
import { CREATE_REPORT, GET_LIVE_CASES } from '../constants/actionTypes';
import { setAppState } from '../actions/appActions';
import { REPORT_CREATION_LOADING, SHOW_REPORT_CREATION_FAILURE, SHOW_REPORT_CREATION_SUCCESS } from '../constants/labels';
import { getUserId } from '../services/userServices';
import axios from 'axios';
import { storeLiveCases,storeCasesTimeStamp } from '../actions/apiActions';

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
  const res = yield axios.get('https://corona.lmao.ninja/v2/countries/Nigeria');
  yield put(storeLiveCases({
    data: res.data,
    place: res.data.country.toLowerCase()
  }))

  const resp = yield axios.get('https://corona.lmao.ninja/v2/all');
 
  yield put(storeLiveCases({
    data: resp.data,
    place: 'world'
  }))

  const response = yield axios.get("https://coviddata.github.io/coviddata/v1/countries/stats.json");
  yield put(storeCasesTimeStamp({
    data: response.data,
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

export default function* reportSaga(){
  yield all([
    fork(watchGetReport),
    fork(watchFetchReports),
    fork(watchCreateReport),
    fork(watchGetLiveCases)
  ]);
}