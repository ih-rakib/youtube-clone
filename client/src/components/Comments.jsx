import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Comment from './Comment';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Container = styled.div`
    
`

const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`
const Input = styled.input`
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.soft};
    background-color: transparent;
    padding: 5px;
    color: ${({ theme }) => theme.text};
`

const Comments = ({ videoId }) => {
    const [comments, setComments] = useState([]);
    const {currentUser} = useSelector((state)=> state.user)

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await axios.get(`/comments/${videoId}`);
                setComments(res.data)
            } catch (error) {
                //
            }
        }

        fetchComments();
    }, [videoId])

    return (
        <Container>
            <NewComment>
                <Avatar src={currentUser.img}></Avatar>
                <Input placeholder='Add a comment'></Input>
            </NewComment>

            {
                comments.map(comment => (
                    <Comment key={comment._id} comment={comment}></Comment>
                ))
            }
        </Container>
    );
};

export default Comments;