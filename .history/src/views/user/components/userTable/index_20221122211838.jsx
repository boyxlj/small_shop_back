import React from 'react'
import { Button,Tag, Table, message, Popconfirm } from 'antd';
import style from "./style/index.module.scss"
import { getDate } from "../../../../utils/time"
import { deleteUser } from "../../../../api/request"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeIsShow } from '../../store';
export default function UserTable(props) {
  const { userData,pageOn,getPageOn, reLoad ,loading} = props
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const columns = [
    {
      title: '序号',
      dataIndex: 'userId',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '用于头像',
      dataIndex: 'avatar',
      render: (text) => (
        <img style={{width:'80px',height:'80px',objectFit:"cover"}} src={text} alt="" />
      ),
    },
    {
      title: '昵称',
      dataIndex: 'name',
    },
    {
      title: '账号',
      dataIndex: 'username',
    },
    {
      title: '密码',
      dataIndex: 'password',
    },
    {
      title: '注册时间',
      dataIndex: 'register_time',
      render: (value) => getDate(value)
    },
    {
      title: '操作',
      render: (_, record) => (
        <>
          {/* <Button type="text" onClick={() => detail(record.userId)} className={style.editor}>详情</Button> */}
          <Button type="text" onClick={() => editor(record.userId)} className={style.editor}>编辑</Button>
          <Popconfirm
            title="你确定将永久删除该分类吗?"
            onConfirm={() => deletes(record.userId)}
            okText="是的"
            cancelText="再想想"
          >
            <Button type="text"  className={style.delete}>删除</Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  //编辑按钮
  const editor = (userId) => {
    dispatch(changeIsShow({ isShow: true, userId }))
  }
  //删除按钮
  const deletes = async (userId) => {
    const { data: res } = await deleteUser(userId)
    if (res.code != 200) return message.error("删除失败")
    reLoad()
    message.success("删除成功")
  }
  // //跳转详情
  // const detail = (userId)=>{
  //   // navigate(`/details?detailId=${detailId}`)
  // }
  return (
    <Table pagination={
      {
        onChange:(value)=>{
          document.documentElement.scrollTop=0
          getPageOn(value)
        },
        current:pageOn,
        defaultCurrent:1,
        hideOnSinglePage:true
      }
    } columns={columns}  rowKey="userId" dataSource={userData} />
  )
}
