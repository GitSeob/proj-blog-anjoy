import React from 'react';
import PropTypes from 'prop-types';
import PostCard from './PostCard';

const dummy = {
    nickname : 'anjoy',
    Post: [{
        User: {
            id: 1,
            nickname: 'anjoy',
        },
        content: '1번',
        img: ''
    },
    {
        User: {
            id: 1,
            nickname: 'anjoy',
        },
        content: '2번',
        img: ''
    }],
}

const UserProfile = () => {
    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <div>{dummy.nickname} 님의 블로그입니다.</div>
            <hr style={{width:'100%'}}/>
        </div>

    );
};

UserProfile.propTypes = {
    
};

export default UserProfile;