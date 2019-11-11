import React from 'react';
import PropTypes from 'prop-types';
import {Card, Avatar, Button } from 'antd';
import Link from 'next/link';

const dummy = {
    nickname : 'anjoy',
}

const MiniProfile = () => {
    return (
        <div >
            <Link href="/profile">
                <a>
                    <Card >
                        <Card.Meta
                            avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
                            title={<div>{dummy.nickname}님 환영합니다.</div>}
                        />
                    </Card>
                </a>
            </Link>
            <a><Button style={{width:'100%', backgroundColor:'#ff9999', color:'white', fontWeight:'bold'}}>로그아웃</Button></a>
        </div>
    );
};

MiniProfile.propTypes = {
    
};

export default MiniProfile;