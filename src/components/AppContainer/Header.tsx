import React from 'react'
import { Layout, Menu, message } from 'antd'
import { useHistory, useLocation } from 'react-router-dom'
import { HomeOutlined, UserOutlined, ProfileOutlined, LogoutOutlined } from '@ant-design/icons'
import Clock from '../../components/LiveClock'
import { HOME_ROUTE, USERS_ROUTE } from '../../routes/constants'
import useAuthReducer from '../../context/AuthContext/AuthReducer'

export default function Header() {
    const {
        state: AuthState,
        methods: { logout },
    } = useAuthReducer()
    const history = useHistory()
    const location = useLocation()

    return (
        <Layout.Header className={'header'}>
            <Menu mode="horizontal" selectedKeys={[location.pathname]} triggerSubMenuAction={'click'}>
                <Menu.Item key={'logo'} onClick={() => history.push(HOME_ROUTE)}>
                    <img src="https://digitalservices.lk/wp-content/uploads/2021/04/DIGI-LOGO-2.png" alt="logo" />
                </Menu.Item>
                <Menu.Item key={HOME_ROUTE} icon={<HomeOutlined />} onClick={() => history.push(HOME_ROUTE)}>
                    Home
                </Menu.Item>
                <Menu.Item key={USERS_ROUTE} icon={<ProfileOutlined />} onClick={() => history.push(USERS_ROUTE)}>
                    Users
                </Menu.Item>
                <Menu.Item style={{ marginLeft: 'auto', color: 'black !important' }}>
                    <Clock format={'h:mm:ss a'} />
                </Menu.Item>
                {AuthState.token && (
                    <Menu.SubMenu key={'profile'} title={AuthState.user.name}>
                        <Menu.Item key={1} onClick={() => message.info('Profile')} icon={<UserOutlined />}>
                            Profile
                        </Menu.Item>
                        <Menu.Item key={2} onClick={logout} icon={<LogoutOutlined spin={AuthState.logoutLoading} />}>
                            Logout
                        </Menu.Item>
                    </Menu.SubMenu>
                )}
            </Menu>
        </Layout.Header>
    )
}