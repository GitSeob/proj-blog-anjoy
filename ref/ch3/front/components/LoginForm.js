import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd'
import Link from 'next/link'
import { useInput }from '../pages/signup'
import { useDispatch } from 'react-redux'
import { loginAction } from '../reducers/user';

const LoginForm = () => {
    const [id, onChangeId] = useInput('')
    const [password, onChangePassword] = useInput('');
    const { isLoggedIn } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const onSubmitForm = useCallback((e) => {
        e.preventDefault()
        console.log('sub')
        dispatch(loginAction);
    }, [id, password])

    return (
        <Form onSubmit={onSubmitForm} style={{ padding: '10px'}}>
            <div style={{marginBottom: '10px'}}>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div style={{marginBottom: '10px'}}>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
            </div>
            <div style={{marginBottom: '10px'}}>
                <Button type="primary" htmlType="submit" loading={false} style={{marginRight: '20px'}}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </div> 
        </Form>
    );
};

export default LoginForm;