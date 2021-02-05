import { Button, Popover } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import AddForm from "./addForm";

import { useDispatch, useSelector } from "react-redux";
import { showPopoverForm } from "../../actions/actions";

export default function({ mouseEnter, mouseLeave }) {
  const visible = useSelector(state => state.show.addPopover);
  const dispatch = useDispatch();
  const handleVisibleChange = visible => {
    dispatch(showPopoverForm({ addPopover: visible }));
  };

  return (
    <Popover
      content={<AddForm />}
      title="Kamioncu ekle"
      trigger="click"
      visible={visible}
      placement="bottomRight"
      onVisibleChange={handleVisibleChange}
    >
      <Button
        id={"add"}
        style={{ width: "60px" }}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        icon={<UserAddOutlined className={"iconSize"} />}
      />
    </Popover>
  );
}
