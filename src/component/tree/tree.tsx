import { useState } from 'react';
import downArrow from 'images/arrow/arrow3/down.svg';
import rightArrow from 'images/arrow/arrow3/right.svg';
import menuVertical from 'images/basic/menu/vertical.svg';
import './tree.css';
import classNames from 'classnames';
type TreeComponentPropsType = {
  TreeItemProps: TreeItemPropsType[];
};

type TreeItemPropsType = {
  /** 들어갈 텍스트 */
  text: string;
  /** 텍스트 앞의 아이콘 */
  icon?: React.ReactNode;
  /** 하위 Tree */
  TreeItemProps?: TreeItemPropsType[];
  /** 클릭 이벤트 */
  onClick?(e: HTMLDivElement): any;
};

const TreeComponent = ({ TreeItemProps }: TreeComponentPropsType) => {
  return (
    <ul className="treeUl rootUl">
      {TreeItemProps.map((e: TreeItemPropsType, index) => (
        <TreeItem {...e} key={e.text + index} />
      ))}
    </ul>
  );
};

const TreeItem = ({ text, icon, TreeItemProps, onClick, ...props }: TreeItemPropsType) => {
  const [isClick, setClick] = useState(false);
  const onClickEvent = e => {
    setClick(!isClick);
    onClick && onClick(e);
  };
  return (
    <li>
      <div onClick={onClickEvent} className={classNames('treeLiItem', { cursorPointer: TreeItemProps || onClick })}>
        <div className="treeItemArrowIcon">
          {TreeItemProps && (isClick ? <img src={downArrow} alt="close" /> : <img src={rightArrow} alt="open" />)}
        </div>
        {icon && <span className="treeItemIcon">{icon}</span>}
        <span className="treeLiItemText" {...props}>
          {text}
        </span>
        <img className="treeItemDropdownIcon" src={menuVertical} alt="메뉴" />
      </div>
      {isClick && (
        <ul className="treeUl">
          {TreeItemProps?.map((e: TreeItemPropsType, index) => (
            <TreeItem {...e} key={e.text + index} />
          ))}
        </ul>
      )}
    </li>
  );
};

export { TreeComponent };
