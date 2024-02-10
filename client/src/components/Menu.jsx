import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import Home from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
  height: 100vh;
`;

const Wrapper = styled.div`
  padding: 17px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Image = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 5px 0;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 10px 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
  color: #aaaaaa;
  text-transform: uppercase;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  const { currentUser } = useSelector(state => state.user)

  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Image src={logo}></Image>
            MeowTube
          </Logo>
        </Link>
        <Link to='/' style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <Home></Home>
            Home
          </Item>
        </Link>
        <Link to='trends' style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <ExploreOutlinedIcon></ExploreOutlinedIcon>
            Explore
          </Item>
        </Link>
        <Link to='subscriptions' style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <SubscriptionsOutlinedIcon></SubscriptionsOutlinedIcon>
            Subscriptions
          </Item>
        </Link>
        <Hr></Hr>
        <Item>
          <VideoLibraryOutlinedIcon></VideoLibraryOutlinedIcon>
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon></HistoryOutlinedIcon>
          History
        </Item>
        <Hr></Hr>
        {!currentUser && <>
          <Login>
            Sign in to like videos, comment and subscribe
            <Link to='signIn' style={{ textDecoration: "none", color: "inherit" }}>
              <Button>
                <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>SIGN IN
              </Button>
            </Link>
          </Login>
          <Hr></Hr>
        </>}
        <Title>Worst of MeowTube</Title>
        <Item>
          <LibraryMusicOutlinedIcon></LibraryMusicOutlinedIcon>
          Music
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon></SportsEsportsOutlinedIcon>
          Sports
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon></SportsBasketballOutlinedIcon>
          Gaming
        </Item>
        <Item>
          <MovieOutlinedIcon></MovieOutlinedIcon>
          Movies
        </Item>
        <Item>
          <ArticleOutlinedIcon></ArticleOutlinedIcon>
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon></LiveTvOutlinedIcon>
          Live
        </Item>
        <Hr></Hr>
        <Item>
          <SettingsOutlinedIcon></SettingsOutlinedIcon>
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon></FlagOutlinedIcon>
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon></HelpOutlineOutlinedIcon>
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon></SettingsBrightnessOutlinedIcon>
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container >
  );
};

export default Menu;
