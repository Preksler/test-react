import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Logo, LogoLink, LinkNav } from "./App.styled";

export const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <Logo>
                    <LogoLink to="/">Logo</LogoLink>
                </Logo>
                <nav>
                    <LinkNav to="/">Home</LinkNav>
                    <LinkNav to="/products">Products</LinkNav>
                    <LinkNav to="/about">About</LinkNav>
                </nav>
            </Header>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </Container>
    )
}