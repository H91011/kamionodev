import React from "react"
import { Row, Col, Form, Input, Button, Card } from 'antd';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 8,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
        float: "left"
    },
};

export default function () {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Row justify="space-around" align="middle">
            <Col
                span={6}
                style={{ marginTop: "15%" }}
            >
                <Card>
                    <br />
                    <Form
                        align="middle"
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout}
                            style={{ textAlign: "end" }}
                        >
                            <a style={{ fontSize: "10px", paddingRight: "10px" }}>
                                register
                            </a>

                            <Button
                                type="primary"
                                htmlType="submit"
                            >
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>

            </Col>


        </Row>

    )
}