import { Row } from "antd";
import List from "./list";

export default function() {
  return (
    <div>
      <Row span={24}>
        <List />
      </Row>
    </div>
  );
}
