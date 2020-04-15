import * as _ from 'lodash';
import * as React from 'react';
import { Table, Input, Button, Icon } from 'antd';

export function ImageSelectorComponent({ images, loading, selected, onSelect, renderTagSelector, ...rest }) {
  const [searchText, setSearchText] = React.useState({ searchText: '' });

  const searchInput = React.useRef<any>();
  const keys = React.useMemo(() => _.map(selected, 'id'), [selected]);

  const handleSearch = (selectedKeys, confirm) => {
    confirm();
    setSearchText({ searchText: selectedKeys[0] });
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText({ searchText: '' });
  };

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
            </Button>
        <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
            </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record = {}) =>
      _.get(record, dataIndex, '')
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),

    onFilterDropdownVisibleChange: visible => {
      if (visible && searchInput && searchInput.current) {
        setTimeout(() => searchInput.current.select());
      }
    },
    render: text => text,
  });

  const columns = React.useMemo(() => ([
    {
      title: 'Image',
      dataIndex: 'attributes.name',
      ...getColumnSearchProps('attributes.name'),
    },
    {
      title: 'Version',
      render: record =>
        renderTagSelector(record, { selected: _.includes(selected, record.id) }), // ToDo: create component version selector
    },
  ]), []);

  return (
    <Table
      {...rest}
      rowKey="id"
      columns={columns}
      loading={loading}
      dataSource={images}
      rowSelection={{
        onSelect,
        selectedRowKeys: keys,
      }}
    />
  );
}
