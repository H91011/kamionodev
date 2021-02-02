import { saveUser } from './actions'

let initialState = {
    user: {},
    kamioncuList: [],
    isLogin: false,
    show: {
        login: true,
    }
}

export default function (state = initialState, action) {
    switch (action) {
        case saveUser:
            return {
                ...state,
                ...action.user
            }

        default: return { ...state }
    }
}