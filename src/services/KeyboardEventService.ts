import Constants from "../shared/Constants";

class KeyboardEventService {
    protected heldKeys: string[] = [];

    saveHeldKey(key: string) {
        const dir = Constants.KEYS[key];
        if (dir && this.heldKeys.indexOf(dir) === -1) {
            this.heldKeys.unshift(dir);
        }
    }

    removeHeldKey(key: string) {
        const dir = Constants.KEYS[key];
        const index = this.heldKeys.indexOf(dir);
        if (dir && index > -1) {
            this.heldKeys.splice(index, 1);
        }
    }

    getMovingDirection(key: string) {
        const directions = {xDir: 0, yDir: 0};
        const dir = Constants.KEYS[key];
        if (dir && this.heldKeys.indexOf(dir) > -1)
            return directions;
        switch (Constants.KEYS[key]) {
            case Constants.DIRECTIONS.UP:
                directions.yDir = -1;
                break;
            case Constants.DIRECTIONS.LEFT:
                directions.xDir = -1;
                break;
            case Constants.DIRECTIONS.DOWN:
                directions.yDir = 1;
                break;
            case Constants.DIRECTIONS.RIGHT:
                directions.xDir = 1;
                break;
        }
        return directions;
    }

}

export default KeyboardEventService;
