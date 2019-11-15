import React, {useState} from 'react';
import { Menu, Input } from 'antd';
import PropTypes from 'prop-types';
import Link from 'next/link';
import LoginForm from './LoginForm';
import MiniProfile from './MiniProfile';
import { useSelector } from 'react-redux';


const AppLayout = ({ children }) => {

    const {SubMenu} = Menu;

    const { isLoggedIn } = useSelector(state => state.user)
    
    return (
        <>
        <div style={{display:'flex', flexDirection:''}}>
            <Menu mode="vertical" style={{height:'100vh', width:'30%'}}>
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
                <Menu.Item key="recent">
                    <Link href="/">
                        <a>최신 게시물</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="hashtag">
                    <Link href="/hashtags">
                        <a>태그 보기</a>
                    </Link>
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
        { isLoggedIn && 
            <div style={{
                display:'flex',
                position:'fixed', 
                marginBottom:'2rem', 
                marginRight:'2rem', 
                bottom:0, 
                right:0, 
                borderRadius:'100%', 
                width:'4rem', 
                height:'4rem', 
                backgroundImage: 'linear-gradient(#9999CC, #CCCCFF)',
                boxShadow: '0 2px 8px #e9ecef', 
                zIndex:999,
                alignItems:'center',
                justifyContent:'center'}}>
                <Link href='/posting'>
                    <a>
                    <i class="material-icons" style={{fontSize:'3rem', color:'white'}}>
                    post_add
                    </i>
                    </a>
                </Link>
            </div>
        }
        </>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node,
}

export default AppLayout;