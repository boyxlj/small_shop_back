import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
} from "@ant-design/icons";
import MenuList from "../../components/layout/MenuList";
import style from "./style/index.module.scss";
import { Layout, Dropdown, Menu, message, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useRoutes, useNavigate } from "react-router-dom";
import routes from "../../router/index";
import PubSub from "pubsub-js"
const { Header, Sider, Content } = Layout;
export default function LayOut() {
  const element = useRoutes(routes);
  const [collapsed, setCollapsed] = useState(false);
  const [status, setStatus] = useState("游客");
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  PubSub.subscribe("changeStatus",()=>{
    const authSecret = sessionStorage.getItem("secret")
    if(authSecret){
      setStatus("超级管理员")
    }else{
      setStatus("游客")
    }
  })

  //退出登录
  const cancelLogin = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("secret");
    navigate("/login");
  };
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <div onClick={() => message.warning("敬请期待")}>个人中心</div>
          ),
        },
        {
          key: "3",
          danger: true,
          label: <div onClick={cancelLogin}>退出登录</div>,
        },
      ]}
    />
  );

  return (
    <>
      {path == "/login" && <>{element}</>}
      {path != "/login" && (
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            {!collapsed && (
              <div className={style.tops}>
                <div className={style.titles}>微商城后台管理系统</div>
              </div>
            )}
            <div className="logo" />
            <MenuList collapsed={collapsed} />
          </Sider>
          <Layout className="site-layout">
            <Header
              className="site-layout-background"
              style={{
                padding: 0,
                background: "#fff",
                paddingLeft: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                position:"relative"
              }}
            >
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: () => setCollapsed(!collapsed),
                }
               
                )}
                  <div className={style.welcomes} ></div>
              <div className={style.cancelLogin}>
                <Dropdown overlay={menu}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                    欢迎回来  {status}
                      
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </div>
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
                background: "#fff",
                overflowY: "auto",
              }}
            >
              {element}
            </Content>
          </Layout>
        </Layout>
      )}
    </>
  );
}
