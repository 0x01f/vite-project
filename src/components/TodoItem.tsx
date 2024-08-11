interface TodoItemProps {
    task: string;
    onComplete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, onComplete }) => {
    return (
        <div>
            <span>{task}</span>
            <button onClick={onComplete}></button>
        </div>
    );
};

export default TodoItem;