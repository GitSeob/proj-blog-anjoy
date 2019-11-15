import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

const editStyle = {
    display:'flex',
    flexDirection:'row',
    marginLeft: '1rem',
    marginBottom: '3rem'
}

const formName = {
    width: '5rem',
    borderRight: '1px solid #e9ecef',
    marginRight: '1rem',
}
const inputStyle = {
    width: 'inherit'*0.5
}

const Profile = () => {
    // const { }

    return (
        <div style={{width:'80%'}}>
            <div style={{
                margin:'5rem 1rem 0 1rem',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor:'white',
                borderRadius:'10px',
                boxShadow: '0 0 4px #999'
            }}>
            <form >
                <div style={{
                    position:'absolute',
                    borderRadius: '100%',
                    boxShadow:'0 4px 8px #e9ecef',
                    top: 0,
                    right: 0,
                    margin: '7rem 3rem',
                    backgroundColor: 'white',
                    width:'7rem',
                    height: '7rem',
                }}> 
                    <img src="" />
                </div>
                <h1 style={{margin:'1rem'}}>내정보</h1>
                <div style={editStyle}>
                    <div style={formName}> 아이디 </div>
                    <div>anjoy</div>
                </div>
                <div style={editStyle}>
                    <div style={formName}> 비밀번호 </div>
                    <input placeholder="비밀번호를 입력해주세요." style={inputStyle}/>
                </div>
                <div style={editStyle}>
                    <div style={formName}> 이름 </div>
                    <div>안 홍 섭 </div>
                </div>
                <div style={editStyle}>
                    <div style={formName}> 닉네임 </div>
                    <input placeholder="원래닉네임"/>
                    <Button type="primary">중복확인</Button>
                </div>
                <div style={editStyle}>
                    <div style={formName}> 이메일 </div>
                    <input placeholder="원래이메일"/>
                    <Button type="primary">이메일 확인</Button>
                </div>
                <Button type="primary" htmlType="submit">수정</Button>
            </form>
            </div>
        </div>
    );
};

Profile.propTypes = {
    
};

export default Profile;