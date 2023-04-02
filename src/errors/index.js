function duplicatedEmailError(){
    return{
        name: "DuplicatedEmailError",
        message: "This email is already in use"
    }
}

function incorrectFieldsError(errors){
    return{
        name: "incorrectFieldsError",
        message: errors
    }
}


export default {
    duplicatedEmailError,
    incorrectFieldsError
}