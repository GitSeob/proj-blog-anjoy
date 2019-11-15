import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const dummyComments = {
    content: [{
        id: 1,
        nickname: 'anjoy',
        comment: '오우야',
    },{
        id: 1,
        nickname: 'anjoy',
        comment: '오우야',
    },{
        id: 1,
        nickname: 'anjoy',
        comment: '오우야',
    },{
        id: 1,
        nickname: 'anjoy',
        comment: '오우야',
    },]
}

const FullPost = ({ post }) => {
    const [commentFormOpened, setCommentFormOpened] = useState(false)

    const onToggleComment = useCallback(() => {
        setCommentFormOpened(prev => !prev)
    });

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
                margin:'0 1rem'}}
            >
              <div style={{display:'flex', flexDirection:'row', marginTop:'1rem', alignItems:'center'}}>
                    <img src={post.profileImage}
                        style={{
                            display:'block',
                            marginLeft: '.5rem',
                            borderRadius: '50%',
                            width: '3rem',
                            height: '3rem',
                            objectFit: 'cover'
                        }}
                    />
                    <p style={{fontSize:'1.2rem', color:'#999', marginLeft:'.5rem'}}>{post.nickname}</p>
                </div>



                <p style={{marginTop:'1rem',fontSize:'14px', color:'#e9ecef'}}>{post.createAt}</p>
                <h1 style={{}}>{post.postTitle}</h1>
            </div>
            <p style={{margin:'1rem', borderBottom:'1px solid #e9ecef', paddingBottom:'1rem'}}>{post.postContent}</p>
            <a onClick={onToggleComment} style={{margin:'0 1rem'}}>
                <p style={{right:0}}>댓글 0개</p>
            </a>
            {commentFormOpened && 
                <div>
                <div style={{position:'relative', margin:'0 1rem'}}>
                    {dummyComments.content.map((c)=> {
                        return (
                            <div>
                                <p>{c.nickname}</p>
                                <br/>
                                <p>{c.comment}</p>
                            </div>
                        );
                    })}
                </div>
                    <div>
                    대충 댓글 입력창 들어갈 곳
                    </div>
                </div>
            }
        </div>
    );
};

FullPost.propTypes = {
    
};

export default FullPost;