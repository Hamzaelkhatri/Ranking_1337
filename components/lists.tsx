import { List, Card, Space } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import { route } from 'next/dist/server/router';
const data = [
    {
        title: 'Title 1',
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
    },
    {
        title: 'Title 5',
    },
    {
        title: 'Title 6',
    },
];

//create interface for used data
interface IList {
    img: string;
    name: string;
    rank: number;
    level: number;
}

export default function Lists() {
    const [datas, setData] = useState<any>([]);
    const [usedData, setUsedData] = useState<IList[]>([]);


    useEffect(
        () => {
            if (datas.length === 0) {
                axios.get("https://backend-13.herokuapp.com/leaderboard")
                    .then(res => {
                        // console.log(res);
                        setData(res.data);
                    })
                    .then(res => {
                    }
                    )
                    .catch(err => {
                        // localStorage.removeItem("token");
                        // Router.push("https://backend-13.herokuapp.com/login/42");
                    })
            }
            else {
                //sort datas by level
            }
        }, [datas]
    )

    useEffect(() => {
        setData(datas.sort((a: any, b: any) => {
            if (a.level < b.level) {
                return 1;
            }
            if (a.level > b.level) {
                return -1;
            }
            return 0;
        }));
        let count = 1;
        if (datas.length > 0 && usedData.length === 0) {
            datas.forEach((element: any) => {
                usedData.push(
                    {
                        img: element.user.image_url,
                        name: element.user.displayname,
                        level: element.level,
                        rank: count
                    }
                );
                count++;
            }
            );
            console.log(usedData);
        }


    }, [datas]);
    return (
        <List
            grid={
                {
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    xxl: 3,
                }
            }
            dataSource={usedData}
            loading={usedData.length === 0}
            renderItem={item => (
                <List.Item>
                    <Card
                        title={
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    textAlign: "center"
                                }}
                            >
                                {
                                    item.rank?.toString()
                                }
                            </div>
                        }
                        cover={
                            <Avatar
                                shape="square"
                                size={100}
                                style={{
                                    backgroundColor: 'red',
                                    flex: 1,
                                    margin: 'auto',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',

                                }}
                                src={item.img}
                            />
                        }
                    >
                        <Space direction="vertical">
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    textAlign: "center"
                                }}
                            >
                                {
                                    item.name
                                }
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    textAlign: "center"
                                }}
                            >
                                {
                                    item.level
                                }
                            </div>
                        </Space>
                    </Card>
                </List.Item>
            )}
        />);
}
