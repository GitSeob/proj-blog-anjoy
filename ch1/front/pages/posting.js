import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input,Button } from 'antd';
import {useDispatch} from 'react-redux';

import { ADD_DUMMY, addDummy } from '../reducers/post'

const Posting = props => {
    const [text, setText] = useState('');

    const dispatch = useDispatch();

    const onSubmitForm = useCallback((e)=>{
        e.preventDefault( )
        console.log(text)
        if(!text || !text.trim()){
            return alert('게시글을 작성하세요.')
        }
        dispatch(addDummy)
    }, [text])

    const onChangeText = useCallback((e)=>{
        setText(e.target.value)
    }, [])


    return (
        <div style={{ width:'80%'}}>
            <div style={{ margin:'5rem 1rem 0 1rem'}}>
                <Form onSubmit={onSubmitForm}>
                    <Input.TextArea value={text} maxLength={500} onChange={onChangeText} placeholder="글 쓰는 곳"/>
                    <Button type="primary" style={{float:'right'}} htmlType="submit">작성</Button>
                </Form>
            </div>
        </div>
    );
};

Posting.propTypes = {
    
};

export default Posting;