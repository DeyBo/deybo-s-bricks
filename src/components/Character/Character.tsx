import './Character.css';

function Character(props: {x: number, y: number}) {
    return(
        <svg width={32} height={32} x={props.x} y={props.y}>
            <rect width={8} height={8} x={0} y={0}/>
            <rect width={8} height={8} x={24} y={0}/>
            <rect width={8} height={8} x={0} y={24}/>
            <rect width={8} height={8} x={24} y={24}/>
            <rect width={8} height={8} x={12} y={12}/>
        </svg>
    )
}

export default Character;
