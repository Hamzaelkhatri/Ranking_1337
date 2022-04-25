import React, { useEffect } from "react";
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Button, Space } from 'antd';
import { useRouter } from "next/router";
import Lists from '../components/lists';
const { Header, Content, Footer } = Layout;


export default function LeaderBoard() {
    const Router = useRouter();
    const [connect, setConnect] = React.useState(true);

    useEffect(() => {
        if(!Router.isReady) return;
        console.log("Router.query.access_token", Router);
        
        if (Router.query.access_token === undefined && localStorage.getItem("access_token") === null) {
            Router.push('/login');
        }
        else {
            setConnect(true);
            if(localStorage.getItem("access_token") === null) {
                localStorage.setItem("access_token", Router.query.access_token + "");
            }
        }
    }, [Router.isReady]);
    return (
        <div>
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" />
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
                        >{
                                connect === true ? "Disconnect" : "Login with 42"
                            }</Button>
                    </Space>
                </Header>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                        <Lists/>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ranking 2022 create by Hamza Elkhatri</Footer>
            </Layout>
        </div>
    );
}