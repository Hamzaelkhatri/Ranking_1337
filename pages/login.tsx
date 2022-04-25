import React from "react";
import { Layout, Menu, Breadcrumb, Button, Space } from "antd";
import 'antd/dist/antd.css';
import { useRouter } from "next/router";
// import '../styles/login.css';

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
                ,background:"black"
            }
        }>
            <Space direction="vertical">
                <img src="/1337.png" height={300} width={400} 
                    style={{
                        borderRadius: "50%",
                        padding: "0px",
                        margin: "0px"
                    }}
                />
                <h1
                    style={
                        {
                            color: "white"
                        }
                    }
                >Login</h1>
                <Button type="primary" shape="round" size="large" onClick={
                    () => {
                        Router.push('https://backend-13.herokuapp.com/login/42')
                    }
                }
                >Login with 42</Button>
            </Space>
        </div >
    );
}