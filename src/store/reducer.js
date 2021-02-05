import {
  saveUser,
  loginFail,
  formSwitch,
  showToolTip,
  listKamioncu,
  getList
} from "../actions/type";

let initialState = {
  user: {},
  kamioncuList: [],
  getList: true,
  isLogin: false,
  loginFail: {},
  show: {
    login: true,
    toolTip: false
  }
};

export default function(state = initialState, action) {
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
      };

    case loginFail:
      console.log("action: loginfail");

      return {
        ...state,
        isLogin: false,
        loginFail: { ...action.loginFail }
      };

    case formSwitch:
      console.log("action: formswitch");
      return {
        ...state,
        show: { ...state.show, login: action.show }
      };

    case showToolTip:
      console.log("action: showToolTip", action);
      return {
        ...state,
        show: { ...state.show, toolTip: action.toolTip, label: action.label }
      };

    case listKamioncu:
      return {
        ...state,
        kamioncuList: action.kamioncuList
      };

    case getList:
      return {
        ...state,
        getList: action.getList
      };

    default:
      return { ...state };
  }
}
