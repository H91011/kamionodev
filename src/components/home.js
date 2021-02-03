/* eslint-disable import/no-anonymous-default-export */
import Login from "./login"
import Register from "./register"
import UserPage from "./user"

import { useSelector } from "react-redux"

export default function () {

    const { isLogin, show } = useSelector((state) => ({ isLogin: state.isLogin, show: state.show }))

    return (
        <div>
                     { isLogin ? <UserPage /> : show.login ? <Login /> : <Register />}
        </div>
    )
}