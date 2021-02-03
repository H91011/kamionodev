import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { userLogin, changeForm } from "../actions/actions"

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

    const {
        user, loginFail, isLogin, show
    } = useSelector((state) => (state))

    console.log(user, loginFail, isLogin);

    const dispatch = useDispatch();

    const onFinish = (values) => {
        console.log("sdglksdg");
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const phoneReg = new RegExp(/\d+/, 'g');

    return (
        <Row justify="space-around" align="middle">
            <Col
                span={6}
                style={{ marginTop: "10%" }}
            >
                <br />
                <Card>
                    <>
                        <Form
                            name="basic"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                        >

                            <Form.Item
                                label={"KullanıcıAdı"}
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your user name!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label={"Şifre"}

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

                            <Form.Item
                                label={"Email"}

                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                    },
                                ]}
                            >

                                <Input />
                            </Form.Item>

                            <Form.Item
                                label={"Telefon"}

                                name="phone"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                    },
                                ]}
                            >

                                <Input />
                            </Form.Item>

                            <Form.Item
                                label={"Ad"}

                                name="first_name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your first name!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label={"Soyad"}

                                name="last_name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your last name!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item {...tailLayout}
                                style={{ textAlign: "end" }}
                            >
                                <a
                                    style={{ fontSize: "10px", paddingRight: "10px" }}
                                    onClick={() => {
                                        console.log("geldi", !show.login);
                                        dispatch(changeForm(!show.login))
                                    }}
                                >
                                    login
                    </a>

                                <Button
                                    type="primary"
                                    htmlType="submit"
                                >
                                    Register
                    </Button>
                            </Form.Item>
                            {
                                !isLogin && !!loginFail.data
                                    ? (<p style={{ color: "red" }}>{loginFail.data.message}</p>)
                                    : null
                            }
                        </Form>
                    </>
                </Card>

            </Col>


        </Row >

    )
}