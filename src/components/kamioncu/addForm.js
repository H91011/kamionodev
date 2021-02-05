import {
  Input,
  Button,
  Upload,
  Modal,
  Col,
  Row,
  Space,
  Form,
  Checkbox
} from "antd";
import { PlusOutlined, CheckOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showPopoverForm, addKamioncuUser } from "../../actions/actions";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export default function() {
  const dispatch = useDispatch();

  const [fileList, setFileList] = useState([]);
  const [prev, setPrev] = useState({
    previewImage: false,
    previewVisible: false,
    previewTitle: ""
  });

  const { previewImage, previewVisible, previewTitle } = prev;
  const { user } = useSelector(state => state);

  const handleChange = ({ fileList }) => setFileList(fileList);
  const onFinish = values => {
    console.log(values);
    values.photo = values.photo.file;
    dispatch(addKamioncuUser(user.token, values));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 }
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <Space direction={"vertical"} style={{ width: "250px" }}>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="first_name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Ad" />
        </Form.Item>

        <Form.Item
          name="last_name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Soyad" />
        </Form.Item>

        <Form.Item
          wrapperCol={{ offset: 7, span: 24 }}
          name="photo"
          valuePropName="checked"
        >
          <Upload
            listType="picture-card"
            fileList={fileList}
            onChange={handleChange}
          >
            {fileList.length >= 1 ? null : uploadButton}
          </Upload>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 10, span: 24 }} align={"center"}>
          <Button
            loading={false}
            size={"large"}
            htmlType="submit"
            shape={"circle"}
            icon={<CheckOutlined />}
            onClick={onFinish}
          />
        </Form.Item>
      </Form>
    </Space>
  );
}
