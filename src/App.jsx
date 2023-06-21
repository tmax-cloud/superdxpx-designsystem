import { TreeComponent } from 'component/tree/tree.tsx';

export default function App() {
  return (
    <div>
      <TreeComponent
        TreeItemProps={[
          { text: 'NumberOne', disabled: true },
          {
            text: 'NumberOne',
            disabled: false,
            TreeItemProps: [
              { text: 'NumberOne', disabled: true },
              { text: 'NumberOne', disabled: true },
            ],
          },
        ]}
      />
    </div>
  );
}
