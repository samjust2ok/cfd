import { STORE_LIVE_CASES, STORE_CASES_TIME_STAMP, STORE_HEAT_MAP_DATA } from '../constants/actionTypes';
import { handleActions } from 'redux-actions'
import { produce } from 'immer';
import { getDateArrayInFormat } from '../utils/appUtils';
import { latlon } from '../constants/appConst';
import _ from 'lodash';

const google = window.google;


const initialState = {
    nigeria:{

    },
    world: {

    },
    nigeriaTimeStamp:{
        cumulativeDeath: [],
        dailyNewCases:[]
    },
    heatMap:[]
}



export default handleActions({
    [STORE_LIVE_CASES]: produce((state,action)=>{
        let {data,place} = action.payload
       state[place] = {
           ...state[place],
           ...data
       }
    }),
    [STORE_CASES_TIME_STAMP]: produce((state,action)=>{
        let {data} = action.payload;
        const country = data.find(country => country.country.name == "Nigeria");
        
       let queryArray = getDateArrayInFormat();
       let dataArrayNewCases = [];
       let dataArrayCumulativeDeath = [];

       for (let index = 0; index < queryArray.length; index++) {
           let date = queryArray[index];
           let retObjectNew = {
                date,
                data: country.dates[date] ? country.dates[date].new.cases : 0
           }

           let retObjectCumDeath = {
            date,
            data: country.dates[date] ? country.dates[date].cumulative.deaths : 0
            }
           dataArrayNewCases.push(retObjectNew)
           dataArrayCumulativeDeath.push(retObjectCumDeath)
       }

       state.nigeriaTimeStamp = {
            ...state.nigeriaTimeStamp,
            cumulativeDeath: dataArrayCumulativeDeath,
            dailyNewCases: dataArrayNewCases
       }
    }),
    [STORE_HEAT_MAP_DATA]: produce((state,action)=>{
        let  { data }  = action.payload;
        
        const loc = latlon;
    
        let retArr = [];
        data.map(dataPoint=>{
            let index;
            while((index = _.findIndex(loc, ['admin', dataPoint.States]))!== -1){
                let item = loc[index];
                retArr.push({
                    lat: parseFloat(item.lat),
                    lng: parseFloat(item.lng),
                    cases: dataPoint.No_of_cases
                })
                loc.splice(index,1)
            }
        })
        
        state.heatMap = retArr
    })
},
initialState
) 