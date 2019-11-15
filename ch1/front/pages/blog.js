import React from 'react';
import PropTypes from 'prop-types';
import PostCard from '../components/PostCard';
import PostContainer from '../components/PostContainer';
import FullPost from '../components/FullPost';

const dummy = {
    nickname : 'anjoy',
    mainPosts: [{
        User: {
            id: 1,
            nickname: 'anjoy',
            profileImage: 'https://scontent-icn1-1.cdninstagram.com/vp/06ab590808a2fc97b9af6954a2184cbf/5E422203/t51.2885-15/e35/s1080x1080/71769003_1489276104560125_4113686250027133555_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com&_nc_cat=101',
        },
        postTitle: '공부해라 웅희야',
        postContent: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        image: 'https://cafeptthumb-phinf.pstatic.net/MjAxODEwMTdfMTEy/MDAxNTM5Nzc5MDQyNDgz.1c9fV0imO8toanzl4DG-9fb4-MLMbodpjdpApsBIbEAg.hgaKF2X2cmiO-hYT7T98uqXoNUenEshBmCdkoSLc7Zog.JPEG.ajjj12345/IMG_20181017_204128.jpg?type=w740',
        k: 1,   
    },
    {
        User: {
            id: 1,
            nickname: 'anjoy',
            profileImage: 'https://scontent-icn1-1.cdninstagram.com/vp/06ab590808a2fc97b9af6954a2184cbf/5E422203/t51.2885-15/e35/s1080x1080/71769003_1489276104560125_4113686250027133555_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com&_nc_cat=101',
        },
        postTitle: '공부해라 웅희야',
        postContent: '뿡 to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        image: 'https://cafeptthumb-phinf.pstatic.net/MjAxODEwMTdfMTEy/MDAxNTM5Nzc5MDQyNDgz.1c9fV0imO8toanzl4DG-9fb4-MLMbodpjdpApsBIbEAg.hgaKF2X2cmiO-hYT7T98uqXoNUenEshBmCdkoSLc7Zog.JPEG.ajjj12345/IMG_20181017_204128.jpg?type=w740',
        k: 1,   
    }],
    hashtag: ['#짜증', '#극혐', '#홀리쉿'],
}

const Blog = () => {
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
                <h1 style ={{margin:'1rem 2rem', height:'3rem', fontSize:'25px', borderBottom: '1px solid #BBB', marginBottom: '1rem'}}>Blog Title</h1>
                <div style={{display:'flex', flexDirection:'row', alignContent:'center'}}>
                    <img src='https://cafeptthumb-phinf.pstatic.net/MjAxODEwMTdfMTEy/MDAxNTM5Nzc5MDQyNDgz.1c9fV0imO8toanzl4DG-9fb4-MLMbodpjdpApsBIbEAg.hgaKF2X2cmiO-hYT7T98uqXoNUenEshBmCdkoSLc7Zog.JPEG.ajjj12345/IMG_20181017_204128.jpg?type=w740'
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
                    <p style={{fontSize:'1.2rem', color:'#999', margin:'0 0 1rem 0rem'}}>anjoy</p>
                </div>
                <div style={{marginLeft:'1.5rem'}}> 이 블로그는 즐겁지않습니다.</div>
                <div style={{marginLeft: '1.5rem',display:'flex', flexWrap:'wrap'}}>
                {dummy.hashtag.map((c)=>{
                    return (
                        <div style={{margin:'2px 5px', padding:'1px', borderRadius:'5px', boxShadow:'0 0 2px #999'}}>
                            {c}
                        </div>
                    );
                })}
                </div>
            </div>
            <div>
            {dummy.mainPosts.map((c)=>{
                return (<FullPost key={c} post={c}/>);
            })}
            </div>
        </div>       
    );
};

Blog.propTypes = {
    
};

export default Blog;