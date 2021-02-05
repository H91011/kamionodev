import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";

const { Search } = Input;

const onSearch = value => console.log(value);

export default function({ mouseEnter, mouseLeave }) {
  return (
    <Search
      id={"search"}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      span={16}
      placeholder="input search text"
      onSearch={onSearch}
      style={{ width: "100%" }}
    />
  );
}
