import React, {Component} from "react";
import './Game.css';

class Game extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <svg id="game" width={32*10} height={32*10}>
                <rect x={0} y={0} width={32} height={32}/>
            </svg>
        );
    }
}

export default Game;
