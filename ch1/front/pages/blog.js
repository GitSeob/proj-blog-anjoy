import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import FullPost from '../components/FullPost';
import NameCard from '../components/NameCard';

const Blog = () => {
    const { userBlog, userPosts } = useSelector(state=>state.post);
    return (
        <div style={{ display:'flex', flexDirection:'column', padding: '0 1.75rem'}}>
            
            <div style={{
                borderRadius:'5px',
                backgroundColor: 'white',
                marginTop: '1.5rem',
                boxShadow: '0 0 4px #999',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <h1 style ={{margin:'1rem 2rem 0 2rem', height:'3rem', fontSize:'25px', borderBottom: '1px solid #BBB', marginBottom: '1rem'}}>{userBlog.blogTitle}</h1>
                <NameCard user={userBlog.User}/>
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
            {userPosts.map((c)=>{
                return (<FullPost key={+new Date(c.createdAt)} post={c}/>);
            })}
            </div>
        </div>       
    );
};

Blog.propTypes = {
    
};

export default Blog;