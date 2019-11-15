import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import PostContainer from '../components/PostContainer';
import { helloPost, HELLO_POST } from "../reducers/post";

// const dummy = {
//     imagePaths: [],
//     mainPosts: [{
//         User: {
//             id:1,
//             nickname: 'anjoy'
//         },
//         postTitle: '첫 게시글',
//         img: '../postImg.jpeg'
//     }],
// };

const Home = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        // dispatch({
        //     type: HELLO_POST
        // })
    }, [])

    return (
        <div style={{display:'flex', flexDirection:'column', backgroundColor: '#EFEFEF', padding: '0 1.75rem', width:'80%'}}>
            <h1 style={{margin:'10px 30px'}}>어쩌구저쩌구</h1>
            <hr style={{margin:'10px', }}/>
            <PostContainer/>
        </div>
    );
};

export default Home;