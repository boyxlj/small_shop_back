import {
  PartitionOutlined,
  UserOutlined,
  VideoCameraOutlined,
  BarsOutlined,
  SmileOutlined,
  SlidersOutlined,
  BulbOutlined,
} from '@ant-design/icons';

export default [
  {
    key: '/welcome',
    icon:  <SmileOutlined />,
    label: '商城数据',
  },
  {
    key: '/shop',
    icon:   <BarsOutlined />,
    label: '商品列表',
  },
  {
    key: '/editor',
    icon: <VideoCameraOutlined />,
    label: '添加商品',
  },
  {
    key: '/category',
    icon: <PartitionOutlined />,
    label: '商品分类',
  },
  {
    key: '/order',
    icon: <SlidersOutlined />,
    label: '商品订单',
  },
  {
    key: '/swiper',
    icon: <BulbOutlined />,
    label: '首页轮播',
  },
  {
    key: '/user',
    icon: <UserOutlined />,
    label: '用户列表',
  },
]