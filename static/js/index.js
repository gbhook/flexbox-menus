'use strict' ;

var MasterGrid = function() {

    this.gridData = {
        track01:'Track One',
        track02:'Track Two',
        track03:'Track Three',
        track04:'Track Four',
        track05:'Flamethrower',
        track06:'Little Fuzzy Bunnies'

    }  ;

    this.subData = {
        track01:'Sub Nobody Got Time For That',
        track02:'Sub Over Your Mind',
        track03:'Sub Like Darth Vader',
        track04:'Sub Feels So Good',
        track05:'Sub thrower',
        track06:'Sub Fuzzy Bunnies'
    }

} ;

MasterGrid.prototype.init = function() {


    this.buildColumn(document.getElementById('column1')) ;
    this.buildColumn(document.getElementById('column2')) ;
    this.buildColumn(document.getElementById('column3')) ;
    this.buildColumn(document.getElementById('column4')) ;

} ;

MasterGrid.prototype.buildColumn = function(div) {

    for(var key in this.gridData) {

        var gridItem = this.buildDivElements(key);
        div.appendChild(gridItem) ;
        gridItem.addEventListener('click', this.buildSubMenu.bind(this));
    }

} ;

MasterGrid.prototype.buildSubMenu = function (e) {

    console.log(e.currentTarget) ;

    var targetDiv = e.currentTarget ;

    for(var key in this.subData) {

        var gridItem = this.buildDivElements(key);
        targetDiv.appendChild(gridItem) ;
    }

} ;

MasterGrid.prototype.buildDivElements = function (key) {
    var gridItem = document.createElement('div') ;
    var gridContainer = document.createElement('div') ;
    var anchor = document.createElement('a');
    var span = document.createElement('span');
    anchor.href = '#' ;
    gridContainer.appendChild(span) ;
    anchor.appendChild(gridContainer) ;
    gridItem.appendChild(anchor) ;

    gridContainer.className = 'grid-content';
    gridItem.className = 'grid-item';
    span.innerHTML = this.gridData[key] ;
    return gridItem ;
}
;

window.masterGrid = new MasterGrid();
window.masterGrid.init();