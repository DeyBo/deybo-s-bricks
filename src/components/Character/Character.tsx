import './Character.css';

function Character(props: {x: number, y: number}) {
    const characterElement = document.getElementById('character');
    if (characterElement) {
        characterElement.style.top = props.y + 'px';
        characterElement.style.left = props.x + 'px';
    }

    return (
        <svg id={'character'} width={32} height={32}>
            <rect width={32} height={32}/>
        </svg>
    )
}

export default Character;
