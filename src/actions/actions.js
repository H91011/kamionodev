import {
  saveUser,
  loginFail,
  formSwitch,
  showToolTip,
  editKamioncu,
  addKamioncu,
  listKamioncu,
  getList
} from "./type";
import axios from "axios";

const baseUri = "https://kamion-interview.herokuapp.com";
const apiCall = {
  login: "/api/shipper/login",
  register: "/api/shipper/register",
  add: "/api/shipper/carrier",
  list: "/api/shipper/carrier",
  edit: "/api/shipper/update-carrier/{carrierId}"
};

const userLogin = userData => dispatch => {
  axios
    .post(baseUri + apiCall.login, userData)
    .then(function(response) {
      console.log(response);
      dispatch({
        type: saveUser,
        user: { ...response.data.data }
      });
    })
    .catch(function(error) {
      dispatch({
        type: loginFail,
        loginFail: { ...error.response }
      });
    });
};

const changeForm = show => dispatch => {
  dispatch({
    type: formSwitch,
    show
  });
};

const showToolTipLabel = values => dispatch => {
  const regex = new RegExp(/\w+\d/, "g");
  const res = regex.exec(values.label);
  if (res) {
    const { label } = values;
    values.label = label.slice(0, label.length - 1);
  }
  dispatch({ type: showToolTip, ...values });
};

const addKamioncuUser = values => dispatch => {
  dispatch({ type: addKamioncu, ...values });
};

const listKamioncuUser = token => dispatch => {
  axios
    .get(baseUri + apiCall.list, {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    .then(function(response) {
      console.log(response);
      dispatch({
        type: listKamioncu,
        kamioncuList: response.data.data.slice()
      });
    });
};

const getListKamioncu = value => dispatch => {
  dispatch({
    type: getList,
    getList: value
  });
};

const editKamioncuUser = values => dispatch => {
  dispatch({ type: editKamioncu, ...values });
};

export {
  userLogin,
  changeForm,
  showToolTipLabel,
  editKamioncuUser,
  addKamioncuUser,
  listKamioncuUser,
  getListKamioncu
};
