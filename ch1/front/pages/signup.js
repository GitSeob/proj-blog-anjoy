import React, {useState, useCallback} from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { signUpAction } from '../../../ref/ch4/front/reducers/user';

export const useInput = (initValue = null) => {
    const [value, setter] = useState(initValue);
    const handler = (e) => {
        setter(e.target.value);
    }
    return [value, handler]
}; // 커스텀 훅

const Signup = () => {

    const dispatch = useDispatch();

    const [id, onChangeId] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [email, onChangeEmail] = useInput('');
    const [name, onChangeName] = useInput('');

    const [passwordChk, setPasswordChk] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(true);

    const onChangePasswordChk = (e) => {
        setPasswordError(e.target.value !== password);
        setPasswordChk(e.target.value);
    }

    const onChangeTerm = (e) => {
        setTermError(false);
        setTerm(e.target.checked);
    }

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        if(password !== passwordChk) {
            return setPasswordChk(true);
        }
        if(!term){
            setTermError(true);
        }
        console.log({
            id, name, nickname, password, passwordChk, email, term
        });

        dispatch(signUpAction({
            id, password, name, nickname, email
        }));
    }, [id, nickname, name, email, password, passwordChk, term]);


    return (
            <div style={{width:'80%'}}>
                <Form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="user-id">ID</label>
                        <br />
                        <Input name="user-id" value={id} required onChange={onChangeId} />
                    </div>    
                    <div>
                        <label htmlFor="user-password">PASSWORD</label>
                        <br />
                        <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
                    </div>
                    <div>
                        <label htmlFor="user-password-chk">PASSWORD CHECK</label>
                        <br />
                        <Input name="user-password-chk" type="password" value={passwordChk} required onChange={onChangePasswordChk} />
                        {passwordError && <div style={{color:'red'}}> 비밀번호가 일치하지 않습니다. </div>}
                    </div>
                    <div>
                        <label htmlFor="user-name">NAME</label>
                        <br />
                        <Input name="user-name" value={name} required onChange={onChangeName} />
                    </div>
                    <div>
                        <label htmlFor="user-nickname">NICK NAME</label>
                        <br />
                        <Input name="user-nickname" value={nickname} required onChange={onChangeNickname} />
                    </div>
                    <div>
                        <label htmlFor="user-id">E-mail</label>
                        <br />
                        <Input name="user-email" value={email} required onChange={onChangeEmail} />
                    </div>
                    <div>
                        <Checkbox name="user-term" value={term} onChange={onChangeTerm}>아무튼 약관에 동의합니덩.</Checkbox>
                        {termError && <div style={{color: 'red'}}> 약관에 동의해야 합니덩. </div>}
                    </div>
                    <div style={{marginTop: 20}}>
                        <Button type="primary" htmlType="submit">가입하기</Button>
                    </div>
                </Form>    
                </div>
    );
};

export default Signup;