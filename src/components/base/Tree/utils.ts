import { isEmpty, isUndefined, omit, isArray, isFunction } from 'lodash';

export const fillFieldNames = (fieldNames: any) => {
  const { title = 'title', _title, key = 'key', children = 'children' } = fieldNames || {};
  return {
    title,
    _title: _title || [title],
    key,
    children,
  };
};

export const getPosition = (level: string | number, index: number) => `${level}-${index}`;

export const getKey = (key: string, pos: string) => {
  if (key !== null && key !== undefined) {
    return key;
  }
  return pos;
};

const getNodeLevel = (node: any) => (node === null ? 0 : getNodeLevel(node.parent) + 1);

export const flattenTreeData = (
  treeNodeList: any,
  expandedKeys = [] as any,
  fieldNames: any,
  nodeSort: any,
  checkLeafNode: any
) => {
  const {
    _title: fieldTitles,
    key: fieldKey,
    children: fieldChildren,
  } = fillFieldNames(fieldNames);

  if (nodeSort !== undefined) {
    treeNodeList.sort(nodeSort);
  }

  const expandedKeySet = new Set(expandedKeys === true ? [] : expandedKeys); // 已展开的节点
  const flattenList = [];

  const dig = (list, parent = null) =>
    list.map((treeNode, index) => {
      // 遍历子节点列表
      const pos = getPosition(parent ? parent.pos : '0', index);
      const mergedKey = getKey(treeNode[fieldKey], pos);
      let mergedTitle;
      for (let i = 0; i < fieldTitles.length; i += 1) {
        const fieldTitle = fieldTitles[i];
        if (treeNode[fieldTitle] !== undefined) {
          mergedTitle = treeNode[fieldTitle];
          break;
        }
      }

      const flattenNode = {
        ...omit(treeNode, [...fieldTitles, fieldKey, fieldChildren]),
        title: mergedTitle,
        key: mergedKey,
        parent,
        pos,
        children: [],
        data: treeNode,
        isEnd: [...(parent ? parent.isEnd : []), index === list.length - 1],
        isLeaf: isFunction(checkLeafNode)
          ? checkLeafNode(treeNode)
          : isUndefined(treeNode?.children) || isEmpty(treeNode?.children),
        level: getNodeLevel(parent),
        show: [...(parent ? parent.show : []), true],
        is_last_node: false,
        expanded: false,
      };

      if (!flattenNode.isLeaf) {
        flattenNode.expanded = expandedKeys === true || expandedKeys.includes(mergedKey);
      }
      if (index === list?.length - 1 && list?.length > 0) {
        flattenNode.is_last_node = true;
      }

      flattenList.push(flattenNode);
      if (expandedKeys === true || expandedKeySet.has(treeNode[fieldNames.key])) {
        const childList = treeNode[fieldChildren] || [];
        if (nodeSort !== undefined) {
          childList.sort(nodeSort);
        }
        flattenNode.children = dig(childList, flattenNode);
      }
      if (nodeSort !== undefined) {
        flattenNode.children.sort(nodeSort);
      }

      return flattenNode;
    });

  dig(treeNodeList);
  return flattenList;
};

// Array转树形结构对象
export const arrayToTreeObject = (
  data: any[],
  param: any = { key: 'target_id', parent: 'parent_id' },
  filter: any
) => {
  const treeData: any = {};
  const rootData = [];
  if (!isArray(data)) {
    return;
  }
  // step1.把数字转换成对象
  data.forEach((item) => {
    treeData[item[param.key]] = {
      ...item,
      key: item[param.key],
      parent: item[param.parent],
    };
  });

  for (let i = 0; i < data.length; i++) {
    const itemKey = data[i][param.key];
    const item = treeData[itemKey];

    const parent = treeData[item.parent];
    if (parent === undefined) {
      // parent未定义说明被放在了根节点下
      if (isFunction(filter)) {
        filter(item) && rootData.push(item);
      } else {
        rootData.push(item);
      }
    } else {
      if (parent.children === undefined) {
        parent.children = [];
      }
      parent.children.push(item);
    }
  }
  return rootData;
};
