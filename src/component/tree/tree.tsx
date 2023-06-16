type TreeComponentPropsType = {
  text: string;
};

const TreeComponent = ({ text, ...props }: TreeComponentPropsType) => {
  return <div {...props}>{text}</div>;
};

export { TreeComponent };
