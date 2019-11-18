import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import postSaga from '../sagas/post';
import NameCard from './NameCard';

const Comments = ({ comm }) => {

    return (
        <div 
            key={+comm.createAt}
            style={{
            padding: '1rem 1rem 0 1rem',
            margin: '1rem 0.25rem',
            borderRadius:'10px',
            boxShadow:'0 4px 8px #e9ecef',
            fontSize: '.8rem',
            // alignItems:'center',
            justifyContent: 'center',
            display:'flex',
            flexDirection: 'column',
        }}>
            <div style={{paddingLeft:'-1rem',position:'relative', borderBottom:'1px solid #e9ecef', display:'flex', flexDirection:'row', marginBottom:0, width:'100%'}}>
                <NameCard user={comm.User} size='2rem'/>
                {/* <p style={{fontWeight:800, marginTop:'1rem'}}>{comm.User.nickname}</p> */}
                {/* <p style={{color:'#65a1ac', right:0, bottom:'-.75rem', fontSize: '.5rem', position:'absolute'}}>{comm.createdAt}</p> */}
            </div>
            <p style={{marginTop:'1rem'}}>{comm.content}</p>
        </div>
    );
};

Comments.propTypes = {
    
};

export default Comments;