import { Button, Row, Col, List, Space } from "antd";
import { EditOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import { showToolTipLabel } from "../../actions/actions";

import Add from "./add";
import Edit from "./edit";
import Search from "./search.js";

export default function() {
  const tooptipArr = {
    add: "Kamioncu eklemek için tıklayınız.",
    edit: "Tıkladıktan sonra listeden seçerek düzenleyebilirsiniz",
    search: "Ad veya numara arayabilirsiniz.",
    kamioncu: "Kamioncu detayını görmek tıklayınız."
  };

  const { toolTip, label, kamioncuList } = useSelector(state => ({
    toolTip: state.show.toolTip,
    label: state.show.label,
    kamioncuList: state.kamioncu.list
  }));
  const data = kamioncuList.map(item => {
    const { first_name, last_name } = item;
    return `${first_name} ${last_name}`;
  });

  const dispatch = useDispatch();

  const mouseEnter = event => {
    let id = event.target.id;
    dispatch(showToolTipLabel({ toolTip: true, label: id }));
  };

  const mouseLeave = event => {
    dispatch(showToolTipLabel({ toolTip: false }));
  };

  return (
    <List
      grid={{ gutter: 16, column: 1 }}
      header={
        <Row>
          <Col span={12} style={{ height: "32px" }}>
            <Space direction="horizontal" span={24}>
              {toolTip ? (
                <p
                  style={{
                    marginTop: "5px",
                    marginLeft: "5px",
                    fontStyle: "italic"
                  }}
                >
                  {tooptipArr[label]}
                </p>
              ) : null}
            </Space>
          </Col>
          <Col span={12} style={{ textAlign: "end" }}>
            <Space direction="horizontal">
              <Search mouseEnter={mouseEnter} mouseLeave={mouseEnter} />
              <Add mouseEnter={mouseEnter} mouseLeave={mouseEnter} />
              <Edit mouseEnter={mouseEnter} mouseLeave={mouseEnter} />
            </Space>
          </Col>
        </Row>
      }
      bordered
      dataSource={data}
      renderItem={(item, index) => {
        return (
          <List.Item span={24}>
            <Button
              id={`kamioncu${index}`}
              onMouseEnter={mouseEnter}
              style={{ width: "100%" }}
            >
              {item}
            </Button>
          </List.Item>
        );
      }}
    />
  );
}
