function duplicatedEmailError(){
    return{
        name: "DuplicatedEmailError",
        message: "This email is already in use"
    }
}

function incorrectFieldsError(errors){
    return{
        name: "IncorrectFieldsError",
        message: errors
    }
}

function invalidCredentialsError(){
    return{
        name: "InvalidCredentialsError",
        message: "Invalid acess credentials"
    }
}


export default {
    duplicatedEmailError,
    incorrectFieldsError, 
    invalidCredentialsError
}