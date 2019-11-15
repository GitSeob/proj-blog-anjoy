import React from 'react';
import PropTypes from 'prop-types';
import {Card, Avatar, Button } from 'antd';
import Link from 'next/link';

const dummy = {
    nickname : 'anjoy',
    profileImage : 'https://cafeptthumb-phinf.pstatic.net/MjAxODEwMTdfMTEy/MDAxNTM5Nzc5MDQyNDgz.1c9fV0imO8toanzl4DG-9fb4-MLMbodpjdpApsBIbEAg.hgaKF2X2cmiO-hYT7T98uqXoNUenEshBmCdkoSLc7Zog.JPEG.ajjj12345/IMG_20181017_204128.jpg?type=w740',
}

const MiniProfile = () => {
    return (
        <div style={{
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{
                display:'flex',
                flexDirection:'row',
                padding:'1rem',
                alignItems:'center',
                justifyContent:'left'
            }}>
                <div style={{
                    margin:'1rem'
                }}>
                    <img src={dummy.profileImage}
                    style={{
                        display:'block',
                        objectFit:'cover',
                        borderRadius:'50%',
                        width:'3rem',
                        height:'3rem'
                    }} />
                </div>
                <h2>{dummy.nickname}</h2><h4>님 환영합니다.</h4>
            </div>
            <Link href="/profile">
                <a>
                    <Button style={{width:'50%'}}> 정보 수정</Button>
                </a>
            </Link>
            <Link href="/blog">
                <a>
                    <Button style={{width:'50%'}}> 내 블로그로 이동하기</Button>
                </a>
            </Link>
            <a><Button style={{width:'100%', backgroundColor:'#ff9999', color:'white', fontWeight:'bold'}}>로그아웃</Button></a>
        </div>
    );
};

MiniProfile.propTypes = {
    
};

export default MiniProfile;