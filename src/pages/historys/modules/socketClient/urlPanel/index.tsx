import { SocketServiceCollection } from '#types/collection/socketService';
import { Button, Input, Select, Space } from 'antd';
import React from 'react';
import { urlPanelWrapper } from './style';
import { useSelector } from 'react-redux';
import { SocketClientHistory } from '#types/history';

type Props = {
  value: SocketClientHistory;
  onChange: (newVal: SocketClientHistory) => void;
};
const UrlPanel: React.FC<Props> = (props) => {
  const { value } = props;
  const serviceValue = useSelector<any, SocketServiceCollection>(
    (store) => store?.apis?.datas?.base_datas?.[value?.parent_id]
  );

  return (
    <div className={urlPanelWrapper}>
      <Space.Compact className="url-inputs">
        <Select value="socket" options={[{ value: 'socket', label: 'socket' }]} disabled></Select>
        <Input placeholder="Socket服务IP" value={serviceValue?.data?.request?.url} disabled />
        <Input
          value={serviceValue?.data?.request?.port}
          spellCheck={false}
          className="txt-port"
          placeholder="端口号"
          disabled
        />
      </Space.Compact>
      <Button type="primary">发送</Button>
      <Button>保存</Button>
    </div>
  );
};

export default UrlPanel;
