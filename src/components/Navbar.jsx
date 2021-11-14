import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import { tablet } from "../responsive";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
  ${tablet({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
  ${tablet({ padding: "10px 10px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
  ${tablet({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
  ${tablet({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center", flex: 2 })}
`;

const NavLink = styled(Link)`
  text-decoration: none;
  &:link {
    color: black;
  }
  &:visited {
    color: black;
  }
  &:hover {
    color: black;
  }
  &:active {
    color: black;
  }
`;

const CartLink = styled(Link)`
  text-decoration: none;
  &:link {
    color: black;
  }
  &:visited {
    color: black;
  }
  &:hover {
    color: black;
  }
  &:active {
    color: black;
  }
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search' />
            <SearchIcon style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <NavLink to='/'>SHOP.</NavLink>
          </Logo>
        </Center>
        <Right>
          <MenuItem>
            <NavLink to='/register'>Register</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to='/login'>Login</NavLink>
          </MenuItem>
          <MenuItem>
            <CartLink to="/cart">
              <Badge badgeContent={4} color='primary'>
                <ShoppingCartOutlinedIcon />
              </Badge>
            </CartLink>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
