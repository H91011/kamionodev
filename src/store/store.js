import { saveUser } from './actions'

let initialState = {
    user: {},
    kamioncuList: [],
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