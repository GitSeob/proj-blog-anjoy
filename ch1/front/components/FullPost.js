import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import NameCard from './NameCard';
import Comments from './Comments';
import { ADD_TEST_COMMENT, ADD_COMMENT_REQUEST } from '../reducers/post';


const FullPost = ({ post }) => {
    const [commentFormOpened, setCommentFormOpened] = useState(false)
    // const { userBlog } = useSelector(state=>state.post)
    const { me } = useSelector(state=>state.user);
    const [ commentText, setCommentText ] = useState('');
    const { commentAdded, isAddingComment, addCommentErrorReason } = useSelector(state=>state.post);
    const dispatch = useDispatch();

    useEffect(()=>{
        setCommentText('');
    }, [commentAdded == true])

    const onToggleComment = useCallback(() => {
        setCommentFormOpened(prev => !prev)
    });

    const onSubmitComment = useCallback((e)=>{
        e.preventDefault();
        if(!me){
            return alert('댓글을 달려면 로그인을 하십시오.')
        };
        
        dispatch({
            type: ADD_COMMENT_REQUEST,
            data: {
                content: commentText,
                postId: post.id,
            }
        })
    }, [me && me.id, commentText]);

    const onChangeCommentText = useCallback((e)=>{
        setCommentText(e.target.value);
    }, [])


    return (
        <div 
            key={+post.createdAt}
            style={{
                borderRadius:'5px', 
                backgroundColor:'white', 
                margin: '1.5rem 0', 
                boxShadow: '0 0 4px #999',
                display:'flex', 
                flexDirection:'column', 
                alignContent:'center',
                justifyContent:'center'
            }}
        >
            <div style={{
                display:'flex', 
                flexDirection:'column',
                borderBottom:'1px solid #e9ecef', 
                margin:'0 1rem 1rem 1rem'}}
            >
                <p style={{marginTop:'1rem',fontSize:'14px', color:'#e9ecef'}}>{post.createdAt}</p>
                <h1 style={{}}>{post.postTitle}</h1>
            </div>
            <NameCard user={post} />
            <p style={{margin:'1rem', borderBottom:'1px solid #e9ecef', paddingBottom:'1rem'}}>{post.postContent}</p>
            <a onClick={onToggleComment} style={{margin:'0 1rem'}}>
                <p style={{right:0}}>댓글 0개</p>
            </a>
            {commentFormOpened && 
                <div>
                <div style={{position:'relative', margin:'0 1rem'}}>
                    {post.comments.map((c)=> {
                        return (
                            <Comments comm={c}/>
                        );
                    })}
                </div>
                    <form onSubmit={onSubmitComment}>
                        <input type="text" value={commentText} onChange={onChangeCommentText}/>
                        <br/>
                        <input type="submit" value="작성"/>
                    </form>
                </div>
            }
        </div>
    );
};

FullPost.propTypes = {
    
};

export default FullPost;