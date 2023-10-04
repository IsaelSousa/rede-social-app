import { HeadLinksComponent } from '@/components/shared/HeadLinksComponent/HeadLinksComponent';
import React from 'react';
import { AsideMenu } from '@/components/AsideMenu/AsideMenu';
import router from 'next/router';
import axios from 'axios';
import Cookies from 'js-cookie';
import { CookiesEnum } from '@/models/types';
import { AsideContent, Content, LogoutButton, MainButton, NavContainer, NavDivA, NavDivB, NavDivC, NavDivD } from './styles';

export default function DefaultLayout() {

    const handleHomePage = () => {
        if (router.asPath != "/homepage") {
          router.push('/homepage'); 
        }
      }

      const handleLogout = () => {
        router.push('/');
        axios.defaults.headers.common['Authorization'] = undefined;
        Cookies.remove(CookiesEnum.Auth);
      }

    return (
        <main>
            <HeadLinksComponent title='HomePage' />
            <NavContainer>
                <NavDivA>
                    <MainButton
                        onClick={handleHomePage}>
                        Social Network
                    </MainButton>
                </NavDivA>
                <NavDivB></NavDivB>
                <NavDivC></NavDivC>
                <NavDivD>
                    <LogoutButton
                        onClick={handleLogout}>
                        Logout
                    </LogoutButton>
                </NavDivD>
            </NavContainer>

            <Content>
                <AsideContent>
                    <AsideMenu />
                </AsideContent>
            </Content>
        </main>
    );
}