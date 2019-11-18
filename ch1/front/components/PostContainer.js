import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import PostCard from './PostCard';
import TestCard from './TestCard';


const PostContainer = ( ) => {
    const dispatch = useDispatch();
    const { mainPosts } = useSelector(state=>state.post);
    
    return (
        <div style={{
            display:'flex', 
            flexWrap:'wrap',
            position:'relative',
        }}>
            {mainPosts.map((c)=>{
                return (
                    <TestCard key={+new Date(c.createdAt)} post={c} />
                )
            })}
        </div>
    );
};

PostContainer.propTypes = {
    
};

export default PostContainer;