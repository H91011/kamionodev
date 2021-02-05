import { Button } from "antd";
import { UserAddOutlined } from "@ant-design/icons";

export default function({ mouseEnter, mouseLeave }) {
  return (
    <Button
      id={"add"}
      style={{ width: "60px" }}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      icon={<UserAddOutlined className={"iconSize"} />}
    />
  );
}
