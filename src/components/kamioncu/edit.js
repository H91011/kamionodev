import { Button } from "antd";
import { EditOutlined } from "@ant-design/icons";

export default function({ mouseEnter, mouseLeave }) {
  return (
    <Button
      id={"edit"}
      style={{ width: "60px" }}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      icon={<EditOutlined className={"iconSize"} />}
    />
  );
}
