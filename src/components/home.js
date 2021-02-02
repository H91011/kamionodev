import Login from "./login"
import Register from "./register"

import { useSelector, useDispatch } from "react-redux"

export default function () {

    const { isLogin, show } = useSelector((state) => ({ isLogin: state.isLogin, show: state.show }))

    return (
        <div>

            { !isLogin && show.login ? <Login></Login> : null}

        </div>
    )
}