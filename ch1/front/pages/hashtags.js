import React from 'react';
import PropTypes from 'prop-types';

const dummy = {
    hashtag:[
        '우와', '짜증', '우웩', '우욱', '짜증', '우웩', '짜증개짜증나짜증', '우웩', '짜증', '우웩', '짜증', '우웩', '짜증', '우웩',, '짜증', '우웩',
    ]
}

const Hashtags = ( ) => {
    return (
        <div style={{width:'80%', marginTop:'5rem'}}>
            <div style={{margin:'1rem', color:'#868e96',fontWeight:400,fontSize:'1.25rem',display:'flex', flexDirection:'row'}}>
                <a style={{textDecoration:'none', color:'inherit'}}>
                    인기순
                </a>
                <a style={{textDecoration:'none', color:'inherit'}}>
                    이름순
                </a>
            </div>
            <div style={{display:'flex', flexWrap:'wrap'}}>
            {dummy.hashtag.map((c)=>{
                return (
                    <div style={{boxShadow:'0 0 4px #999',margin:'.5rem', backgroundColor:'white', borderRadius:'1rem'}}>
                        <p style={{margin:'.5rem 1rem'}}>#{c}</p>
                    </div>
                );
            })}
            </div>
        </div>
    );
};

Hashtags.propTypes = {
    
};

export default Hashtags;