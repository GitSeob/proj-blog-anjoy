import React, {useState} from 'react';
import { Menu, Input } from 'antd';
import PropTypes from 'prop-types';
import Link from 'next/link';
import LoginForm from './LoginForm';
import MiniProfile from './MiniProfile';


const AppLayout = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true); 
    const {SubMenu} = Menu;

    const onLoggedIn = (e) => {
        if(e.target.value == false){
            setIsLoggedIn(true);
        }
        else {
            setIsLoggedIn(false);
        }
    }
    
    return (
        <div style={{display:'flex', flexDirection:'row'}}>
            <Menu mode="vertical" style={{height:'100vh', width:'5000px'}}>
                <Menu.Item key="home">
                    <Link href="/">
                        <a>ANJOY</a>
                    </Link>
                </Menu.Item>

                <Menu.Item key="mail" >
                    <Input.Search enterButton style={{
                        verticalAlign: 'middle',
                        margin:'0',
                        padding:'0'
                    }}/>
                </Menu.Item>

                {isLoggedIn ?
                <SubMenu title="PROFILE">
                    <MiniProfile/>
                </SubMenu>
                :
                <SubMenu title="LOGIN">
                    <LoginForm/>
                </SubMenu>
                }
            </Menu>
            {children}
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node,
}

export default AppLayout;