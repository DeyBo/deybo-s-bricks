import React, {Component} from "react";
import './Game.css';
import Character from "../Character/Character";
import KeyboardEventService from "../../services/KeyboardEventService";

class Game extends Component {

    protected speed = 32;
    state = {
        characterPosition: {x: 0, y: 0}
    };

    constructor(private keyboardEventService: KeyboardEventService) {
        super(keyboardEventService);
        this.keyboardEventService = new KeyboardEventService();
    }

    componentDidMount() {
        this.initCharacterMovement();
    }

    initCharacterMovement() {
        document.addEventListener('keydown', event => {
            let {x, y} = this.state.characterPosition;
            const {xDir, yDir} = this.keyboardEventService.getMovingDirection(event.key);
            this.keyboardEventService.saveHeldKey(event.key);
            this.setState({
                characterPosition: {
                    x: x + this.speed * xDir,
                    y: y + this.speed * yDir
                }
            });
        });
        document.addEventListener('keyup', event => {
            this.keyboardEventService.removeHeldKey(event.key);
        });
    }

    render() {
        return (
            <div id={'game'}>
                <Character
                    x={this.state.characterPosition.x}
                    y={this.state.characterPosition.y}
                />
            </div>
        );
    }
}

export default Game;
