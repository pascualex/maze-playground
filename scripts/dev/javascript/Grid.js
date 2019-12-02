"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GridModel_1 = require("./GridModel");
var GridView_1 = require("./GridView");
var TileType_1 = require("./TileType");
var Grid = /** @class */ (function () {
    function Grid(htmlCanvas, tileSize) {
        var gridHeight = Math.floor((htmlCanvas.width - 1) / (tileSize + 1));
        var gridWidth = Math.floor((htmlCanvas.height - 1) / (tileSize + 1));
        this.gridModel = new GridModel_1.GridModel(gridHeight, gridWidth);
        this.gridView = new GridView_1.GridView(htmlCanvas, tileSize, this.gridModel);
        this.currentTileType = TileType_1.TileType.Floor;
        this.setupEvents();
        this.gridView.paint();
    }
    Grid.prototype.setupEvents = function () {
        var _this = this;
        this.gridView.ontiletypeselect = function (x, y) {
            _this.manageOnTileTypeSelectEvent(x, y);
        };
        this.gridView.ontileclick = function (x, y) {
            _this.manageOnTileClickEvent(x, y);
        };
    };
    Grid.prototype.manageOnTileTypeSelectEvent = function (x, y) {
        var newTileType = this.gridModel.getTileAt(x, y);
        if (newTileType != null) {
            if (newTileType == TileType_1.TileType.Floor) {
                this.currentTileType = TileType_1.TileType.Wall;
            }
            else {
                this.currentTileType = TileType_1.TileType.Floor;
            }
        }
    };
    Grid.prototype.manageOnTileClickEvent = function (x, y) {
        var tileType = this.gridModel.getTileAt(x, y);
        if (tileType != null && tileType != this.currentTileType) {
            this.gridModel.setTileAt(x, y, this.currentTileType);
            this.gridView.paintTileAndNeighbours(x, y);
        }
    };
    return Grid;
}());
exports.Grid = Grid;
