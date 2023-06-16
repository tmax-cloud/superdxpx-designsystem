import { TreeComponent } from 'component/tree/tree';

export default function App() {
  return (
    <div>
      <div>
        <TreeComponent text="hello" onClick={() => console.log('hi')} />
      </div>
    </div>
  );
}
