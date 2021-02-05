import { Row } from "antd";
import List from "./list";

import { useDispatch, useSelector } from "react-redux";
import { listKamioncuUser, getListKamioncu } from "../../actions/actions";

export default function() {
  const dispatch = useDispatch();
  const { token, getList } = useSelector(state => ({
    token: state.user.token,
    getList: state.getList
  }));
  if (getList) {
    dispatch(getListKamioncu(false));
    dispatch(listKamioncuUser(token));
  }

  return (
    <div>
      <Row span={24}>
        <List />
      </Row>
    </div>
  );
}
