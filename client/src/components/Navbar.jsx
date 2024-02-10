import React, { useState } from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Upload from "./Upload";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  justify-content: flex-end;
  position: relative;
`;

const Search = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: ${({ theme }) => theme.text};

  @media (max-width: 993px) {
    width: 30%;
    left: 0;
  }
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`

const Navbar = ({ darkmode }) => {
  const { currentUser } = useSelector(state => state.user);
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Wrapper>
          <Search>
            <Input placeholder="Search" onChange={(e)=>setQ(e.target.value)}></Input>
            <SearchOutlinedIcon onClick={()=>navigate(`/search?q=${q}`)} style={{ color: darkmode ? 'white' : 'black' }} />
          </Search>
          {currentUser ? (
            <User>
              <VideoCallOutlinedIcon onClick={() => setOpen(true)} style={{ fontSize: "25px", cursor: "pointer" }} />

              <Avatar src={currentUser.img}></Avatar>
              {currentUser.username}
            </User>
          ) : <Link to="signIn" style={{ textDecoration: "none", color: "inherit" }}>
            <Button>
              <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>SIGN IN
            </Button>
          </Link>}
        </Wrapper>
      </Container>

      {open && <Upload setOpen={setOpen} />}
    </>
  );
};

export default Navbar;
