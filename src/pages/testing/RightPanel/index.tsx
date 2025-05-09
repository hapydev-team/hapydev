import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TabsHeader from './TabsHeader';
import { RightPanelWrapper } from './style';
import TabsBody from './TabsBody';
import StatusBar from '@components/bus/StatusBar';
import { Panel, PanelGroup } from 'react-resizable-panels';
import Terminal from '@components/bus/Terminal';
import ResizeBar from '@components/bus/ResizeBar';
import { theme } from 'antd';
import { useGlobalSubject } from '@hooks/useSubject';
import useProjectInfo from '@hooks/useProjectInfo';
import useTempData from '../hooks/useTempData';
import RunInfo from '../modules/runInfo';
import { useMemoizedFn } from 'ahooks';
import { hideTestingModal } from '@reducers/tempDatas/testing';

const RightPanel = (props) => {
  const dispatch = useDispatch();

  const { token } = theme.useToken();
  const tabsList = useSelector((store: any) => store?.testing?.tabs?.list);
  const activeId = useSelector((store: any) => store?.testing?.tabs?.active_id);

  const tempData = useTempData(activeId);
  const projectInfo = useProjectInfo();

  const terminalRef = React.useRef(null);

  const handleToggleShowTerminal = () => {
    if (terminalRef?.current?.isCollapsed() === true) {
      terminalRef.current?.resize(50);
      return;
    }
    terminalRef.current?.collapse();
  };

  const handleCloseTerminal = () => {
    if (terminalRef?.current?.isCollapsed() !== true) {
      terminalRef.current?.collapse();
    }
  };

  const handleCloseRunPanel = useMemoizedFn(() => {
    dispatch(hideTestingModal(activeId));
  });

  useGlobalSubject('TERMINAL/toggleShow', handleToggleShowTerminal, []);
  useGlobalSubject('TERMINAL/close', handleCloseTerminal, []);

  return (
    <RightPanelWrapper token={token}>
      <RunInfo
        open={tempData?.foreground === 1}
        onClose={handleCloseRunPanel}
        tempData={tempData}
      />
      <PanelGroup className="resize-container" direction="vertical">
        <Panel>
          <div className="request-container">
            <TabsHeader
              tabsList={tabsList}
              activeId={activeId}
              isReadOnly={projectInfo?.role !== 6}
            />
            <TabsBody activeId={activeId} />
          </div>
        </Panel>
        <ResizeBar direction="vertical" />
        <Panel ref={terminalRef} minSize={10} collapsible defaultSize={0}>
          <Terminal className="console-container" onClose={() => void 0} />
        </Panel>
      </PanelGroup>
      <StatusBar />
    </RightPanelWrapper>
  );
};

export default RightPanel;
