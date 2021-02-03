import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff"
    }}
  />
);

const onSearch = value => console.log(value);

export default function() {
  return (
    <Search
      span={16}
      placeholder="input search text"
      onSearch={onSearch}
      style={{ width: "100%" }}
    />
  );
}
