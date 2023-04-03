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

function invalidDoctorId(){
    return{
        name:"InvalidDoctorId",
        message:"The medical id provided is invalid"
    }
}
function appointmentUnavailable(){
    return{
        name: "AppointmentUnavailable",
        message: "Time and date unavailable"
    }
}


export default {
    duplicatedEmailError,
    incorrectFieldsError, 
    invalidCredentialsError,
    invalidDoctorId,
    appointmentUnavailable
}