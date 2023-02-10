import React, { FC } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css";
import { Outlet } from "react-router-dom";
import { Divider } from "antd";

interface ILayoutProps {}

const Layout: FC<ILayoutProps> = ({}) => (
    <>
        <Header
            tabs={[
                { title: "Главная", link: "/" },
                { title: "Каталог", link: "/catalogue" },
            ]}
        />
        <Divider className="divider" />
        <div className="layout-container">
            <Outlet />
        </div>
        <Footer
            tabs={[
                {
                    tab: [
                        { text: "Главная", link: "/" },
                        { text: "1", link: "/" },
                        { text: "a", link: "/" },
                        { text: "а", link: "/" },
                    ]
                },
                {
                    tab: [
                        { text: "Каталог", link: "/catalogue" },
                        { text: "2", link: "/" },
                        { text: "b", link: "/" },
                        { text: "б", link: "/" },
                    ]
                },
                {
                    tab: [
                        { text: "Акции", link: "/" },
                        { text: "3", link: "/" },
                        { text: "c", link: "/" },
                        { text: "в", link: "/" },
                    ]
                },
                {
                    tab: [
                        { text: "Новинки", link: "/" },
                        { text: "4", link: "/" },
                        { text: "d", link: "/" },
                        { text: "г", link: "/" },
                    ]
                },
            ]}
        />
    </>
);

export default Layout;
