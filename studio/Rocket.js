"use strict";
exports.__esModule = true;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    }
    //Methods:
    Rocket.prototype.sumMass = function (items) {
        var sumMass = 0;
        for (var i = 0; i < items.length; i++) {
            sumMass = sumMass + items[i].massKg;
        }
        return sumMass;
    };
    Rocket.prototype.currentMassKg = function () {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    };
    Rocket.prototype.canAdd = function (item) {
        if ((this.currentMassKg() + item.massKg) <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) { //  If true, adds cargo to this.cargoItems and returns true.
            this.cargoItems.push(cargo);
            return true; //  If false, returns false.
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) { //  If true, adds astronaut to this.astronauts and returns true.
            this.astronauts.push(astronaut);
            return true; //  If false, returns false.
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
