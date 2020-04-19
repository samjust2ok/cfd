import moment from 'moment';

//test for Empty String
export const isES = (string)=>string.length <=0;
export const isNull = (value) => value === null;

const validPhoneNumber = (phoneNumber)=>{
    const reg = /^[0]\d{10}$/;
    return reg.test(phoneNumber)
}

const normalTextField = (string)=>{
    const reg = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    return reg.test(string.trim())
}

const emailValidator = (string)=>{
    const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return reg.test(string)
}


export const validators = {
    emailValidator,
    textValidator: normalTextField,
    phoneNumberValidator: validPhoneNumber
}

export const getDateArrayInFormat = ()=>{
    let yearStart = moment().year(2020).month(1).date(1);
    let now =moment();
    let parsedDate = []
    while(yearStart.isBefore(now,'day') || yearStart.isSame(now,'day')){
        parsedDate.push(yearStart.format("YYYY-MM-DD"))
        yearStart = yearStart.add(1,'d')
    }
    return parsedDate;
}