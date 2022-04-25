import React from "react";
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Button, Space } from 'antd';
import { useRouter } from "next/router";

const { Header, Content, Footer } = Layout;

export default function LayoutComponent() {
    const Router = useRouter();
    return (
        <div>
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" />
                    {/* <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={
                          [
                          ]
                        }
                    /> */}
                    <Space>
                        <Button
                        type="primary"
                        shape="round"
                        size="large"
                        onClick={
                            () => {
                                Router.push('http://localhost:3000/login/42');
                            }
                        }
                        >Login with 42</Button>
                    </Space>
                </Header>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                        Content
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ranking 2022 create by Hamza Elkhatri</Footer>
            </Layout>
        </div>
    );
}