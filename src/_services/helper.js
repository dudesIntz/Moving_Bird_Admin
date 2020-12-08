function validateCreateAccount(data){

    let errObj = {};
    errObj["firstname"] = firstNameChecking(data);
    errObj["lastname"] = firstNameChecking(data);
    errObj["dob"] = dateChecking(data);
    errObj["gender"] = firstNameChecking(data);
    errObj["phone"] = phoneNumberChecking(data);
    errObj["email"] = emailChecking(data);
    errObj["username"] = userNameChecking(data);
    errObj["password"] = passwordChecking(data);

    return errObj;

}

function validateLogin(data){

    let errObj = {};
    errObj["username"] = firstNameChecking(data);
    errObj["password"] = passwordChecking(data);

    return errObj;

}

function firstNameChecking(fieldVal){
    if(EmptyChecking(fieldVal)){
        return msg;
    }
    else{
        return '';
    }
}

function dateChecking(fieldVal){
    if(EmptyChecking(fieldVal)){
        return msg;
    }
    else if(ValidateDate(fieldVal))
    {
        return msg;
    }
    else if(!ValidDob(fieldVal)){
        return msg;
    }
    else{
        return '';
    }
}

function phoneNumberChecking(fieldVal){
    if(EmptyChecking(fieldVal)){
        return msg;
    }
    else if(!ValidatePhoneNumber(fieldVal)){
        return msg;
    }
    else{
        return '';
    }
}

function emailChecking(fieldVal){
    if(EmptyChecking(fieldVal)){
        return msg;
    }
    else if(!validateEmail(fieldVal))
    {
        return msg;
    }
    else{
        return '';
    }
}

function userNameChecking(fieldVal){
    if(EmptyChecking(fieldVal)){
        return msg;
    }
    else{
        return '';
    }
}

function passwordChecking(fieldVal){
    if(EmptyChecking(fieldVal)){
        return msg;
    }
    else if(!ValidatePassword(fieldVal))
    {
        return msg;
    }
    else{
        return '';
    }
}

function EmptyChecking(fieldVal){
    if(fieldVal == "" || fieldVal == null)
    return true;
}
function ValidateDate(dob){
    var today = new Date();
    today.setHours(0,0,0,0);
    if(new Date(dob) > today)
    return true;
    else
    return false;
}
function ValidatePassword(password)
{
    const passre = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return passre.test(password);
}
function validateEmail(email)
{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function ValidatePhoneNumber(no){

    const phre = /^\+?\d*$/;
    return phre.test(no);

}

function ValidDob(date)
{
    const pattern =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
    return pattern.test(date);
}

export const helper = {
    validateCreateAccount,
    validateLogin
}