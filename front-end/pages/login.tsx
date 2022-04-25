import React from "react";
import { Layout, Menu, Breadcrumb, Button, Space } from "antd";
import 'antd/dist/antd.css';
import { useRouter } from "next/router";

export default function login() {
    const Router = useRouter();
    return (
        <div style={
            {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                textAlign: "center"
            }
        }>
            <Space direction="vertical">
                <h1>Login</h1>
                <Button type="primary" shape="round" size="large" onClick={
                    () => {
                        Router.push('http://localhost:3000/login/42')
                    }
                }
                >Login with 42</Button>
            </Space>
        </div >
    );
}