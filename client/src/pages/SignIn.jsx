import React, { useState } from "react";
import styled from "styled-components";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color:  ${({ theme }) => theme.text};
  border-radius: 5px;
  background-color: transparent;
  padding: 10px;
  width: 95%;
`;

const PasswordContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Eye = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
`

const Button = styled.button`
  border-radius: 5px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 500;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
`;

const More = styled.div`
  display: flex;
  font-size: 12px;
  margin-top: 10px;
  color:  ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-left: 50px;
  display: flex;
`;

const Link = styled.div`
  margin-left: 30px;
`;

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);
  const [showPasswordRegister, setShowPasswordRegister] = useState(false);
  const dispatch = useDispatch();

  const handleTogglePasswordLogin = () => {
    setShowPasswordLogin(!showPasswordLogin)
  }

  const handleTogglePasswordRegister = () => {
    setShowPasswordRegister(!showPasswordRegister)
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart())

    try {
      const res = await axios.post("auth/signin", { username: name, email, password });
      // console.log(res.data);
      dispatch(loginSuccess(res.data))
    } catch (error) {
      dispatch(loginFailure())
    }
  };

  const handleSignInWithGoogle = async () => {
    dispatch(loginStart())
    signInWithPopup(auth, provider)
      .then(result => {
        axios.post('/auth/google', {
          username: result.user.displayName,
          email: result.user.email,
          img: result.user.photoURL
        })
          .then(res => {
            dispatch(loginSuccess(res.data))
          })
      })
      .catch(error => {
        loginFailure()
      })
  }

  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>to continue to MeowTube</SubTitle>
        <Input placeholder="Username" onChange={e => setName(e.target.value)}></Input>
        <PasswordContainer>
          <Input type={showPasswordLogin ? "text" : "password"} placeholder="Password" onChange={e => setPassword(e.target.value)}></Input>
          <Eye onClick={handleTogglePasswordLogin}> {showPasswordLogin ? <VisibilityOffIcon /> : <VisibilityIcon />}</Eye>
        </PasswordContainer>
        <Button onClick={handleLogin}>Sign In</Button>
        <Title>Or</Title>
        <Button onClick={handleSignInWithGoogle}>Sign In With Google</Button>
        <Title>Or</Title>
        <Input placeholder="Username" onChange={e => setName(e.target.value)}></Input>
        <Input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}></Input>
        <PasswordContainer>
          <Input type={showPasswordRegister ? "text" : "password"} placeholder="Password" onChange={e => setPassword(e.target.value)}></Input>
          <Eye onClick={handleTogglePasswordRegister}> {showPasswordRegister ? <VisibilityOffIcon /> : <VisibilityIcon />}</Eye>
        </PasswordContainer>
        <Button>Sign Up</Button>
      </Wrapper>
      <More>
        Bangla(BD)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;
