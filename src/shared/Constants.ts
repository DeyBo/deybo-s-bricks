class Constants {
    static DIRECTIONS = {
        UP: 'up',
        LEFT: 'left',
        DOWN: 'down',
        RIGHT: 'right'
    }

    static KEYS: any = {
        'z': Constants.DIRECTIONS.UP,
        'ArrowUp': Constants.DIRECTIONS.UP,
        'q': Constants.DIRECTIONS.LEFT,
        'ArrowLeft': Constants.DIRECTIONS.LEFT,
        's': Constants.DIRECTIONS.DOWN,
        'ArrowDown': Constants.DIRECTIONS.DOWN,
        'd': Constants.DIRECTIONS.RIGHT,
        'ArrowRight': Constants.DIRECTIONS.RIGHT
    }
}

export default Constants;
