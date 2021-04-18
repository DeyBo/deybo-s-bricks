class CollisionService {
    handleLimitCollisions(x: number, y: number, directions: {xDir: number, yDir: number}, characterSize: number) {
        const level = document.getElementById('level');
        const levelWidth = level ? Number(level.getAttribute('width')) : 0;
        const levelHeight = level ? Number(level.getAttribute('height')) : 0;

        if (x === 0 && directions.xDir < 0)
            directions.xDir++;
        if (x === levelWidth - characterSize && directions.xDir > 0)
            directions.xDir--;
        if (y === 0 && directions.yDir < 0)
            directions.yDir++;
        if (y === levelHeight - characterSize && directions.yDir > 0)
            directions.yDir--;
    }
}

export default CollisionService;
