import { useState } from 'react';
import downArrow from 'images/arrow/arrow3/down.svg';
import rightArrow from 'images/arrow/arrow3/right.svg';
import menuVertical from 'images/basic/menu/vertical.svg';
import './tree.css';
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
};

const TreeComponent = ({ TreeItemProps }: TreeComponentPropsType) => {
  return (
    <ul className="treeUl">
      {TreeItemProps.map((e: TreeItemPropsType, index) => (
        <TreeItem {...e} key={e.text + index} />
      ))}
    </ul>
  );
};

const TreeItem = ({ text, icon, TreeItemProps, ...props }: TreeItemPropsType) => {
  const [isClick, setClick] = useState(false);
  return (
    <li>
      <div onClick={() => setClick(!isClick)} className="treeLiItem">
        {TreeItemProps && (isClick ? <img src={downArrow} alt="close" /> : <img src={rightArrow} alt="open" />)}
        {icon && <span>{icon}</span>}
        <span className="treeLiItemText" {...props}>
          {text}
        </span>
        <img src={menuVertical} alt="메뉴" />
      </div>
      이것은 한글
      {isClick && (
        <ul>
          {TreeItemProps?.map((e: TreeItemPropsType) => (
            <TreeItem {...e} />
          ))}
        </ul>
      )}
    </li>
  );
};

export { TreeComponent };
