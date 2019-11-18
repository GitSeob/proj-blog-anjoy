import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import NameCard from '../components/NameCard';

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
    width: '15rem'
}

const Profile = () => {
    const { me } = useSelector(state=>state.user);

    return (
        <div style={{}}>
            {/* <NameCard user={me}/> */}
            <div style={{
                margin:'5rem 1rem 0 1rem',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor:'white',
                borderRadius:'10px',
                boxShadow: '0 0 4px #85cfd2'
            }}>
            <form style={{position:"relative"}}>
                <div style={{
                    position:'absolute',
                    borderRadius: '100%',
                    boxShadow:'0 4px 8px #e9ecef',
                    top: 0,
                    right: 0,
                    margin: '3rem 3rem',
                    backgroundColor: 'white',
                    width:'7rem',
                    height: '7rem',
                    backgroundColor:'gray',
                    alignItems:'center',
                    display:'flex',
                    flexDirection:'column',
                }}> 
                    <img src="https://scontent-icn1-1.cdninstagram.com/vp/559b8a8ece4f07cf6e7a457f600968b4/5E4BC5CB/t51.2885-15/e35/s1080x1080/72695011_515793855687177_6497185184176620114_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com&_nc_cat=1" 
                        style={{display:'block', width:'7rem', height:'7rem', borderRadius:'100%'}}/>
                    <p style={{fontSize:'.7rem', marginTop:'.5rem'}}>프로필사진 변경하기</p>
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
                    <input style={inputStyle} placeholder="원래닉네임"/>
                    <Button type="primary">중복확인</Button>
                </div>
                <div style={editStyle}>
                    <div style={formName}> 이메일 </div>
                    <input style={inputStyle} placeholder="원래이메일"/>
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