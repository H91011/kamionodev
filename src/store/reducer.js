import {
  saveUser,
  loginFail,
  formSwitch,
  showToolTip,
  listKamioncu,
  getList,
  showPopover,
  addKamioncu
} from "../actions/type";

let initialState = {
  user: {},
  kamioncu: {
    list: [],
    add: false,
    edit: false
  },
  getList: true,
  isLogin: false,
  loginFail: {},
  show: {
    login: true,
    toolTip: false,
    addPopover: false,
    editPopover: false
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
      return {
        ...state,
        isLogin: false,
        loginFail: { ...action.loginFail }
      };

    case formSwitch:
      return {
        ...state,
        show: { ...state.show, login: action.show }
      };

    case showToolTip:
      return {
        ...state,
        show: { ...state.show, toolTip: action.toolTip, label: action.label }
      };

    case addKamioncu:
      return {
        ...state,
        kamioncu: {
          ...state.kamioncu,
          ...action.values
        }
      };

    case listKamioncu:
      return {
        ...state,
        kamioncu: {
          ...state.kamioncu,
          ...action.kamioncu
        }
      };

    case getList:
      return {
        ...state,
        getList: action.getList
      };

    case showPopover:
      return {
        ...state,
        show: {
          ...state.show,
          ...action.value
        }
      };

    default:
      return { ...state };
  }
}
