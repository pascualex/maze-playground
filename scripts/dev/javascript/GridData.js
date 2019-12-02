"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TileType_1 = require("./TileType");
var GridData = /** @class */ (function () {
    function GridData(width, height) {
        this.width = width;
        this.height = height;
        this.tiles = new Array(height);
        for (var i = 0; i < height; i++) {
            this.tiles[i] = new Array(width);
            for (var j = 0; j < width; j++) {
                this.tiles[i][j] = TileType_1.TileType.Floor;
            }
        }
    }
    GridData.prototype.getTileAt = function (x, y) {
        if (x < 0 || x >= this.width)
            return null;
        if (y < 0 || y >= this.height)
            return null;
        return this.tiles[y][x];
    };
    GridData.prototype.setTileAt = function (x, y, tileType) {
        if (x < 0 || x >= this.width)
            return;
        if (y < 0 || y >= this.height)
            return;
        this.tiles[y][x] = tileType;
    };
    GridData.prototype.getWidth = function () {
        return this.width;
    };
    GridData.prototype.getHeight = function () {
        return this.height;
    };
    return GridData;
}());
exports.GridData = GridData;