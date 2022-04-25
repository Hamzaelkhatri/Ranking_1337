import { List, Card } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { useEffect, useState } from 'react';
import axios from 'axios';
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

export default function Lists() {
    const [datas, setData] = useState<any>([]);


    useEffect(
        () => {
            axios.get("",
            {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("access_token")
                }
            })
            .then(res => {
            })
                .then(res => {
                    console.log(res);
                }
                )
        }, []
    )
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
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <Card title={
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                textAlign: "center"
                            }}
                        >
                            {
                                item.title
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
                                icon="user"
                            />
                        }
                    >Card content</Card>
                </List.Item>
            )}
        />);
}
