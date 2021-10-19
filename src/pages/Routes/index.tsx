import React from 'react'
import { HOME_ROUTE } from '../../routes/constants'
import { Redirect } from 'react-router-dom'
import 'antd/dist/antd.css';
import { Menu, Button, Card, Row, Col, Dropdown, message, Input } from 'antd'
import './Routes.scss'

type Props = {}

function handleMenuClick(e: any) {
    message.info('Click on menu item.');
    console.log('click', e);
}

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">
            1st menu item
        </Menu.Item>
        <Menu.Item key="2">
            2nd menu item
        </Menu.Item>
        <Menu.Item key="3">
            3rd item
        </Menu.Item>
    </Menu>
);

export default function Routes(props: Props): JSX.Element {
    return (
        <>

            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <div id="components-dropdow-dropdown-button">



                </div>
                <Row gutter={16}>
                    <Col className="gutter-row" span={2.5}>
                        <div id="style"><Dropdown.Button overlay={menu} >
                            Province
                        </Dropdown.Button></div>
                    </Col>
                    <Col className="gutter-row" span={2.5}>
                        <div id="style"><Dropdown.Button overlay={menu}>
                            District
                        </Dropdown.Button></div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div id="style"><Input placeholder="Vehicle Number"></Input></div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div id="style"><Input placeholder="Route ID"></Input></div>
                    </Col>
                    <Col className="gutter-row" span={5}>
                        <div id="style"><Button type="primary">Search</Button></div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={16}>
                        <Card title="Map" bordered={false}>
                            Map 
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Grid" bordered={false}>
                            Card content
                        </Card>
                        
                    </Col>
                    
                </Row>
            </div></>
    )
}
