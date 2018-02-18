class TestScene extends Phaser.Scene {
	constructor() {
    super({
			key: 'TestScene'
		});
	}
	
	preload() {
		this.load.tilemapTiledJSON('map', '/assets/tilemaps/desert.json');
		this.load.image('Desert', '/assets/tilemaps/tmw_desert_spacing.png');
	}

	create() {
		var map:Phaser.Tilemaps.Tilemap = this.make.tilemap({ key: 'map' });
		var tileset:Phaser.Tilemaps.Tileset = map.addTilesetImage('Desert');
		var layer:Phaser.Tilemaps.StaticTilemapLayer = map.createStaticLayer(0, tileset, 0, 0);
	}

	update(time: number, delta:number) {
	}
}

export default TestScene;