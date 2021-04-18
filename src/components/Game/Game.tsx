import React, {Component} from "react";
import './Game.css';
import Character from "../Character/Character";
import KeyboardEventService from "../../services/KeyboardEventService";
import CollisionService from "../../services/CollisionService";

class Game extends Component {

    state = {
        characterPosition: {x: 96, y: 320}
    };
    protected caseSize = 32;

    constructor(props: any,
                private keyboardEventService: KeyboardEventService,
                private collisionService: CollisionService) {
        super(props);
        this.keyboardEventService = new KeyboardEventService();
        this.collisionService = new CollisionService();
    }

    componentDidMount() {
        this.initCharacterMovement();
    }

    initCharacterMovement() {
        document.addEventListener('keydown', event => {
            let {x, y} = this.state.characterPosition;
            let directions = this.keyboardEventService.getMovingDirection(event.key);

            this.collisionService.handleLimitCollisions(x, y, directions, this.caseSize);
            this.keyboardEventService.saveHeldKey(event.key);

            this.moveCharacter(x + this.caseSize * directions.xDir, y + this.caseSize * directions.yDir);
        });

        document.addEventListener('keyup', event => {
            this.keyboardEventService.removeHeldKey(event.key);
        });
    }

    moveCharacter(x: number, y: number) {
        this.setState({
            characterPosition: {x, y}
        });
    }

    render() {
        return (
            <div id={'game'}>
                <svg id={'level'} width={this.caseSize * 20} height={this.caseSize * 20}>
                    <Character
                        x={this.state.characterPosition.x}
                        y={this.state.characterPosition.y}
                    />
                </svg>
            </div>
        );
    }
}

export default Game;
