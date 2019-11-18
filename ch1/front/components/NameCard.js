import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';


const NameCard = ({ user , size='3rem' }) => {


    const imageContainer = {
        margin:'0 0 1rem 1.2rem',
        display:'flex', 
        flexDirection:'row', 
        alignItems:'center',
        // justifyContent:'center'
    }
    
    const imageStyle = {
        display:'block',
        marginLeft: '.5rem',
        borderRadius: '50%',
        width: size,
        height: size,
        objectFit: 'cover'
    }

    const nameStyle = {
        fontSize:'1rem', color: 'black', marginLeft:'.5rem', marginBottom:0,
    }


    return (
        <div>
            <Link href="/">
                <a>
                    <div style={imageContainer}>
                        { user.profileImage ? 
                            <img style={imageStyle} src={user.profileImage}  />
                        : <div style={{
                            display:'block',
                            marginLeft: '.5rem',
                            borderRadius: '50%',
                            width: size,
                            height: size,
                            objectFit: 'cover',
                            display:'flex',
                            backgroundColor:'glay',
                            justifyContent:'center',
                            alignItems: 'center',
                            backgroundColor:'gray'
                            }}>
                                <i class="material-icons" style={{color:'#FFF', fontSize:'calc({size}-1rem)'}}>
                                person
                                </i>
                            </div>}
                        <p style={nameStyle}>
                            {user.nickname}
                        </p>
                    </div>
                </a>
            </Link>
        </div>
    );
};

NameCard.propTypes = {
    
};

export default NameCard;