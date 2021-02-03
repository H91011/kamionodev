import Login from "./login"
import Register from "./register"

import { useSelector, useDispatch } from "react-redux"

export default function () {

    const { isLogin, show } = useSelector((state) => ({ isLogin: state.isLogin, show: state.show }))

    return (
        <div>
            { isLogin ? <p>User Page</p> : show.login ? <Login /> : <Register />}
        </div>
    )
}