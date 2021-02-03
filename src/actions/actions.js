import { saveUser, loginFail, formSwitch } from "./type"
import axios from "axios"

const baseUri = "https://kamion-interview.herokuapp.com"

const userLogin = (userData) => (dispatch) => {
    axios.post(baseUri + '/api/shipper/login', userData)
        .then(function (response) {
            dispatch({
                type: saveUser,
                user: { ...response.data.data }
            })
        })
        .catch(function (error) {
            dispatch({
                type: loginFail,
                loginFail: { ...error.response }
            })
        });
}

const changeForm = (show) => (dispatch) => {
    dispatch({
        type: formSwitch,
        show
    })
}


export { userLogin, changeForm }