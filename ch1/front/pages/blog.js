import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import FullPost from '../components/FullPost';

const Blog = () => {
    const { userBlog } = useSelector(state=>state.post);

    return (
        <div style={{width:'80%', display:'flex', flexDirection:'column', backgroundColor: '#EEEEEE', padding: '0 1.75rem'}}>
            <div style={{
                borderRadius:'5px',
                backgroundColor: 'white',
                marginTop: '1.5rem',
                boxShadow: '0 0 4px #999',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <h1 style ={{margin:'1rem 2rem', height:'3rem', fontSize:'25px', borderBottom: '1px solid #BBB', marginBottom: '1rem'}}>{userBlog.blogTitle}</h1>
                <div style={{display:'flex', flexDirection:'row', alignContent:'center'}}>
                    <img src={userBlog.User.profileImage}
                        style={{
                            display:'block',
                            marginTop: '-.5rem',
                            marginLeft: '2rem',
                            borderRadius: '50%',
                            width: '2.5rem',
                            height: '2.5rem',
                            objectFit: 'cover'
                        }}
                    />
                    <p style={{fontSize:'1.2rem', color:'#999', margin:'0 0 1rem 0rem'}}>{userBlog.User.nickname}</p>
                </div>
                <div style={{marginLeft:'1.5rem'}}> {userBlog.introBlog}</div>
                <div style={{marginLeft: '1.5rem',display:'flex', flexWrap:'wrap'}}>
                {userBlog.hashtag.map((c)=>{
                    return (
                        <div style={{margin:'2px 5px', padding:'1px', borderRadius:'5px', boxShadow:'0 0 2px #999'}}>
                            {c}
                        </div>
                    );
                })}
                </div>
            </div>
            <div>
            {userBlog.posts.map((c)=>{
                return (<FullPost key={c} post={c}/>);
            })}
            </div>
        </div>       
    );
};

Blog.propTypes = {
    
};

export default Blog;