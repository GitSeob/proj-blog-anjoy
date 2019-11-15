import React from 'react';
import PropTypes from 'prop-types';



const TestCard = ({ post }) => {
    return (
        <div
            key={+post.createdAt} 
            style={{
            width:'calc(33.333% - 1.75rem)', 
            display:'flex', 
            flexDirection: 'column', 
            position:'relative', 
            borderRadius:'10px', 
            boxShadow:'0 0 4px #999', 
            boxSizing:'inherit',
            margin: '1.5rem 0.875rem',
            boxShadow:'0 0 4px #999',
            backgroundColor:'#FFFFFF',
        }}>
            {post.image && 
                <a style={{
                position:'relative',
                display:'block',
                width:'100%', 
                height: '100%', 
                top:0, bottom:0, 
                backgroundColor:'white', 
                boxSizing:'inherit',
                paddingTop: '52.36%',
                backgroundColor:'#999',
                borderRadius:'10px 10px 0 0'
                }}>
                    <img 
                    src={post.image}
                    alt="example"
                    style={{
                        display:'block',
                        width:'100%',
                        height:'100%',
                        top:0,bottom:0,
                        position:'absolute',
                        objectFit: 'cover',
                        borderRadius: '10px 10px 0 0',
                        display:'block',
                        boxSizing:'inherit'
                    }}/>
                </a>
            }

            <div style={{
                position:'relative', 
                padding:'2rem 1rem', 
                display:'flex', 
                flexDirection:'column', 
                flex:'1 1'
            }}>
                <a style={{
                    backgroundColor:'white',
                    display:'flex',
                    position:'absolute', 
                    width:'3.5rem', 
                    height:'3.5rem', 
                    top:0, 
                    right:'1rem', 
                    backgroundColor:'white', 
                    transform: 'translateY(-50%)',
                    alignItems: 'center',
                    justifyContent: 'center', 
                    borderRadius: '50%'}}>
                    <img 
                        src={post.User.profileImage}
                        style={{
                            display:'block',
                            width: '2.5rem',
                            height: '2.5rem',
                            objectFit:'cover',
                            borderRadius:'50%',
                        }}/>
                </a>
                <div style={{
                    borderBottom: '1px solid #e9ecef'
                }}>
                    <p style={{color:'#666699', marginBottom:'5px'}}><a style={{textDecoration:'none', color:'inherit'}}>{post.User.nickname}</a></p>
                    <h3><a style={{
                        textDecoration:'none',
                        color: 'inherit',
                    }}>{post.postTitle}</a></h3>
                    <p style={{color:'#CCCCFF'}}>9999년9월9일</p>
                </div>
                <div style={{
                    marginTop:'1.5rem',
                    lineHeight:'1.5rem',
                    height: post.image ? '4.5rem':'15rem',
                    overflowY:'hidden',
                    wordBreak:'break-all',
                    color: '#4c657d',
                    overflow:'hidden',
                    textOverflow:'ellipsis'
                }}>
                    {post.postContent}
                </div>
            </div>
        </div>
    );
};

TestCard.propTypes = {
    
};

export default TestCard;