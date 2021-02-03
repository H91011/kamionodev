
import { saveUser, loginFail, formSwitch } from '../actions/type'

let initialState = {
    user: {},
    kamioncuList: [],
    isLogin: false,
    loginFail: {},
    show: {
        login: true,
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case saveUser:
            console.log("action: saveUser", {
                ...state,
                isLogin: true,
                user: { ...action.user }
            });

            return {
                ...state,
                isLogin: true,
                user: { ...action.user }
            }

        case loginFail:
            console.log("action: loginfail");

            return {
                ...state,
                isLogin: false,
                loginFail: { ...action.loginFail }
            }

        case formSwitch:
            console.log("action: formswitch");
            return {
                ...state,
                show: { login: action.show }

            }

        default: return { ...state }
    }
}