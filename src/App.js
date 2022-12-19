import { ToDoList } from './components/ToDoList';
import { ToDoDescription } from './components/ToDoItem';
import { BaseButton } from './components/Button';
import { useRef } from 'react';

// Sử dụng bình thường
function App() {
    // const [state, dispatch] = useStore(StoreContext)
    return (
        <div className="app">
            <BaseButton
                onHanlerClick={() => {
                    console.log('OKE');
                }}
            >
                {' '}
                Button 001{' '}
            </BaseButton>
            <BaseButton> Button 002</BaseButton>
            <BaseButton> Button 003 </BaseButton>
        </div>
        // <div className="app">
        //     <h1 className="app__title">Todo APP</h1>
        //     <div className="app__content">
        //         <ToDoList type="TODO" title="Công việc" />
        //         <ToDoDescription title="Mô tả" />
        //     </div>
        // </div>
    );
}

export default App;
