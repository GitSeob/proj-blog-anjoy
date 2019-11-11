import React from 'react';
import PropTypes from 'prop-types';
import {Card, Icon, Button, Avatar} from 'antd';

const PostCard = ({ post }) => {
    return (
        <Card 
            style={{display:'flex', flexDirection:'column', width:'250px', height:'500px', padding: '2rem 1rem', borderRadius:'5px', margin:'10px', boxShadow:'0 0 4px #999'}}
            key={+post.createdAt}
            cover={post.img && <img alt='example' src={post.img}/>}
            action = {[
                <Icon type="heart" key="heart" />
            ]}
            >
            <Card.Meta 
                avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                title={post.User.nickname}
                description={post.postTitle}
            />
        </Card>
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({
        User: PropTypes.object,
        postTitle: PropTypes.string,
        img: PropTypes.img,
        createdAt: PropTypes.object,
    })
};

export default PostCard;