import React from 'react';
import PropTypes from 'prop-types';
import PostCard from '../components/PostCard';
import PostContainer from '../components/PostContainer';

const dummy = {
    nickname : 'anjoy',
    Post: [{
        User: {
            id: 1,
            nickname: 'anjoy',
        },
        postTitle: '1번',
        img: ''
    },
    {
        User: {
            id: 1,
            nickname: 'anjoy',
        },
        postTitle: '2번',
        img: ''
    }],
}

const Profile = () => {
    return (
        <div style={{display:'flex', flexDirection:'column', backgroundColor: '#EEEEEE', padding: '0 1.75rem'}}>
            <h1 style ={{margin:'10px 30px', height:'50px', fontSize:'25px'}}>{dummy.nickname} 님의 블로그입니다.</h1>
            <hr style={{margin: '10px', width:'100vh'}}/>
            <div style={{display:'flex', flexWrap:'wrap'}}>
                <PostContainer />
            </div>
        </div>       
    );
};

Profile.propTypes = {
    
};

export default Profile;