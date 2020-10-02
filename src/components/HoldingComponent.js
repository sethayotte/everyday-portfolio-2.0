import React from 'react';
import { Table, Badge, Menu, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item>Action 1</Menu.Item>
    <Menu.Item>Action 2</Menu.Item>
  </Menu>
);

function Holdings() {
  const expandedRowRender = () => {
    const columns = [
        { title: 'Symbol', dataIndex: 'name', key: 'name' },
      { title: 'Date Added', dataIndex: 'date', key: 'date' },
      
      {
        title: 'Status',
        key: 'state',
        render: () => (
          <span>
            <Badge status="success" />
            Settled
          </span>
        ),
      },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <Space size="middle">
            <a>Edit</a>
            <a>Delete</a>
            <Dropdown overlay={menu}>
              <a>
                More <DownOutlined />
              </a>
            </Dropdown>
          </Space>
        ),
      },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: '[Stock]',
        upgradeNum: 'Upgraded: 56',
      });
    }
    return <Table columns={columns} dataSource={data} />;
  };

  const columns = [
    { title: 'Symbol', dataIndex: 'name', key: 'name' },
    { title: '# of Shares', dataIndex: 'platform', key: 'platform' },
    { title: 'Edit', key: 'operation', render: () => <a>Edit</a> },
  ];

  const data = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i,
      name: '[Stock]',
      platform: '[x]',
      version: '10.3.4.5654',
      upgradeNum: 500,
      creator: 'Jack',
      createdAt: '2014-12-24 23:12:00',
    });
  }

  return (
    <Table
      className="holdings-table"
      columns={columns}
      expandable={{ expandedRowRender }}
      dataSource={data}
      title={() => 'Stocks'}
    />
  );
}

export default Holdings;