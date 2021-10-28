import React, {useEffect, useState} from 'react'
import { HOME_ROUTE } from '../../routes/constants'
import { Redirect } from 'react-router-dom'
import 'antd/dist/antd.css';
import { Menu, Button, Card, Row,Table, TablePaginationConfig, Col, Dropdown, message, Input } from 'antd'
import './Passengers.scss'

type Props = {}

function handleMenuClick(e: any) {
    message.info('Click on menu item.');
    console.log('click', e);
}



const passenger = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">
            In progress
        </Menu.Item>
        <Menu.Item key="2">
            Collected
        </Menu.Item>
    </Menu>
);

const status = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">
            In progress        </Menu.Item>
        <Menu.Item key="2">
            Completed        </Menu.Item>

    </Menu>
);

const cols = [
    {
        title: 'Passenger ID',
        dataIndex: 'passengerid',
        sorter: true,
        //render: name => {`${name.first} ${name.last}`},
        width: '20%',
    },
    {
        title: 'Trip ID',
        dataIndex: 'tripid',
        sorter: true,
        width: '20%',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        filters: [
            { text: 'In Progress', value: 'inprogress' },
            { text: 'Completed', value: 'completed' },
        ],
    },
    {
        title: 'Payment',
        dataIndex: 'payment',
        filters: [
            { text: 'In Progress', value: 'inprogress' },
            { text: 'Collected', value: 'collected' },
        ],
    },
    {
        title: 'Alert Send',
        dataIndex: 'alert',
        
    },
];

export default function Passengers(props: Props): JSX.Element {

    const [pages, SetPages] = useState<TablePaginationConfig>( {
        current: 1,
        pageSize: 10,
    });
    
    return (
        <>

            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <div id="components-dropdow-dropdown-button">

                </div>
                <Row gutter={16}>
                <Col className="gutter-row" span={4}>
                        <div id="style"><Input placeholder="Passenger ID"></Input></div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div id="style"><Input placeholder="Trip ID"></Input></div>
                    </Col>
                   
                    <Col className="gutter-row" span={2.5}>
                        <div id="style"><Dropdown.Button overlay={passenger} >
                            Passengers
                        </Dropdown.Button></div>
                    </Col>
                    <Col className="gutter-row" span={2.5}>
                        <div id="style"><Dropdown.Button overlay={status}>
                            Status
                        </Dropdown.Button></div>
                    </Col>
                    <Col className="gutter-row" span={5}>
                        <div id="style"><Button type="primary">Search</Button></div>
                    </Col>

                </Row>
                <Row>
                    <Col span={24}>
                        <Card title="Map" bordered={false}>
                        <Table
                    columns={cols}
                    pagination={pages}
                    rowKey={record => record.login.uuid}
                
                     />                        </Card>
                    </Col>
                   

                </Row>
            </div></>
    )
}
