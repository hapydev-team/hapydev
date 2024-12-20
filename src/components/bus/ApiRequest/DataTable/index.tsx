import React, { useMemo } from 'react';
import { isArray, isEmpty } from 'lodash';
import SortTable from '@components/bus/SortTable';
import { DEFAULT_DATA_ITEM } from '@constants/dataItem';
import produce from 'immer';
import { TABLE_COLUMNS } from './constant';
import { DataItem } from '#types/dataItem';
import { useMemoizedFn } from 'ahooks';
import { tableWrapper } from './style';
import useProjectInfo from '@hooks/useProjectInfo';

type Props = {
  value: DataItem[];
  onChange: (newVal: DataItem[]) => void;
};

const Header: React.FC<Props> = (props) => {
  const { value, onChange } = props;

  const projectInfo = useProjectInfo();

  const handleChangeData = useMemoizedFn((rowData: any, rowIndex: number) => {
    if (projectInfo?.role !== 6) {
      return;
    }
    const result = produce(value, (draft) => {
      draft[rowIndex] = rowData;
      // key不能为空,允许添加新行
      if (rowData?.name?.length > 0) {
        delete draft[rowIndex].is_empty_row;
      }
    });
    onChange(result);
  });

  const handleDeleteRow = useMemoizedFn((delIndex) => {
    const result = produce(value, (draft) => {
      draft.splice(delIndex, 1);
    });
    onChange(result);
  });

  const computedDataList = useMemo(() => {
    if (!isArray(value)) {
      return [{ ...DEFAULT_DATA_ITEM }];
    }
    const hasStatic = value?.some((item) => item?.is_empty_row === true);
    if (!hasStatic) {
      return [...value, DEFAULT_DATA_ITEM];
    }
    return value;
  }, [value]);

  const handleSortEnd = useMemoizedFn((params) => {
    const oldList = isArray(value) ? value : [];
    const { oldIndex, newIndex } = params;
    // 长度不大于1进行排序没有意义
    if (oldList.length <= 1) {
      return;
    }
    if (oldIndex >= oldList.length || newIndex >= oldList.length) {
      return;
    }
    const dragItem = oldList[oldIndex];
    const newData = produce(value, (draft) => {
      draft.splice(oldIndex, 1);
      draft.splice(newIndex, 0, dragItem);
    });
    onChange(newData);
  });

  const handleCheckAll = useMemoizedFn((ckdStatus: boolean) => {
    const newData = produce(value, (draft) => {
      for (let i = 0; i < draft.length; i++) {
        draft[i].is_used = ckdStatus === true ? 1 : -1;
      }
    });
    onChange(newData);
  });

  const isCheckedAll = value?.every((item) => item?.is_used === 1);

  return (
    <SortTable
      showBorder
      columns={TABLE_COLUMNS}
      data={computedDataList}
      onSortEnd={handleSortEnd}
      onFiledChange={handleChangeData}
      onDeleteRow={handleDeleteRow}
      className={tableWrapper}
    />
  );
};

export default React.memo(Header);
