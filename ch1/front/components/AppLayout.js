import React, {useState} from 'react';
import { Menu, Input, Button } from 'antd';
import Link from 'next/link';

const AppLayout = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
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
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <Link href="/">
                        <a>ANJOY</a>
                    </Link>
                </Menu.Item>

                <Menu.Item key="mail">
                    <Input.Search enterButton style={{
                        verticalAlign: 'middle'
                    }}/>
                </Menu.Item>

                {isLoggedIn ?
                <Menu.Item key="profile">
                    <Link href="/profile">
                        <a><Button onClick={onLoggedIn}>PROFILE</Button></a>
                    </Link>
                </Menu.Item>
                :
                <SubMenu title="LOGIN">
                    <Menu.Item key="notThing"> 로그인 컴포넌트 자리</Menu.Item>
                    <Menu.Item key="login" >
                        <Link href="/login">
                            <a><Button onClick={onLoggedIn}>LOG IN</Button></a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="signup" >
                        <Link href="/signup">
                            <a><Button onClick={onLoggedIn}>SIGN UP</Button></a>
                        </Link>
                    </Menu.Item>
                </SubMenu>
                }
            </Menu>
            {children}
        </div>
    );
};

export default AppLayout;