import React, {useState} from 'react';
import { Menu, Input } from 'antd';
import PropTypes from 'prop-types';
import Link from 'next/link';
import LoginForm from './LoginForm';
import MiniProfile from './MiniProfile';
import { useSelector } from 'react-redux';


const AppLayout = ({ children }) => {

    const menuStyle ={
        padding: '.75rem 0 .75rem 0rem',
        fontSize: '1.25rem',
        display:'flex',
        textDecoration:'none',
        alignItems:'center',
        color:'inherit'
    }

    const text = {
        marginLeft:'1rem'
    }

    const searchContainer = {
        width: '13rem',
        height: '3rem',
        borderRadius: '10px',
        backgroundColor:'#FFF',
        margin:'1rem',
        boxShadow: '0 2px 8px #65a1ac',
        display: 'flex',
        flexDirection: 'row',
        color:'#000',
        alignItems:'center',
    }

    const {SubMenu} = Menu;

    const { isLoggedIn } = useSelector(state => state.user)
    
    return (
        <>
        <div style={{width:'100%', height:'100%',display:'flex', backgroundColor: '#e9ecef', flexDirection:'row', outlineStyle:'none'}}>
            <aside style={{
                backgroundImage:'linear-gradient(#b8e3dc, #96dfce, #85cfd2)',
                width:'15rem',
                height:'100%',
                position:'fixed',
                top:0, left:0,
                display:'flex',
                flexDirection:'column',
                color:'#FFF'
            }}>
                <a href="/" style={{
                    padding: '0 1rem',
                    margin: '1.75rem 0',
                    fontSize:'2rem',
                    lineHeight:'2rem',
                    display:'block',
                    position:'relative',
                    color: 'inherit',
                    fontFamily: 'Inconsolata'
                }}>anjoy</a>
                <div style={searchContainer}>
                    <div>
                        <i class="material-icons" style={{color:'#85cfd2', marginLeft:'1rem'}}>
                            search
                        </i>
                    </div>
                    <input type="text" placeholder="search" style={{border:0, marginLeft:'.5rem', color:'85cfd2'}}/>
                </div>
                <ul style={{color: 'inherit'}}>
                    <Link href="/"><a style={menuStyle}>
                        <i class="material-icons">
                        thumb_up_alt
                        </i>
                        <div style={text}>hot</div>
                    </a></Link>
                    <Link href="/blog"><a style={menuStyle}>
                        <i class="material-icons">
                        thumb_up_alt
                        </i>
                        <div style={text}>blog</div>
                    </a></Link>
                    <Link href="/hashtags"><a style={menuStyle}>
                        <i class="material-icons">
                        thumb_up_alt
                        </i>
                        <div style={text}>tags</div>
                    </a></Link>
                    <Link href="/profile"><a style={menuStyle}>
                    <i class="material-icons">
                        thumb_up_alt
                        </i>
                        <div style={text}>
                        login or profile</div>
                    </a></Link>
                </ul>
            </aside>
            
            <div style={{marginLeft:'15rem', position:'absolute', width:'calc(100% - 15rem)', height:'auto'}}>
                {children}
            </div>
        </div>
        { isLoggedIn && 
            <div style={{
                display:'flex',
                position:'fixed', 
                marginBottom:'2rem', 
                marginRight:'2rem', 
                bottom:0, 
                right:0, 
                borderRadius:'100%', 
                width:'4rem', 
                height:'4rem', 
                backgroundImage: 'linear-gradient(#b8e3dc, #96dfce, #85cfd2)',
                boxShadow: '0 2px 8px #e9ecef', 
                zIndex:999,
                alignItems:'center',
                justifyContent:'center'}}>
                <Link href='/posting'>
                    <a>
                    <i class="material-icons" style={{fontSize:'3rem', color:'white'}}>
                    post_add
                    </i>
                    </a>
                </Link>
            </div>
        }
        </>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node,
}

export default AppLayout;