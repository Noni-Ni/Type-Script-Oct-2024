"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
class Magazine {
    type;
    capacity;
    clothes = [];
    constructor(type, capacity) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }
    addCloth(cloth) {
        if (this.capacity > this.clothes.length) {
            this.clothes.push(cloth);
        }
    }
    removeCloth(color) {
        let index = this.clothes.findIndex(el => el.color === color);
        if (index > -1) {
            this.clothes.splice(index, 1);
            return true;
        }
        return false;
    }
    getSortedBySize() {
        return this.clothes.sort((a, b) => a.size - b.size);
    }
    getSmallestCloth() {
        if (this.clothes?.length === 0) {
            return {};
        }
        if (this.clothes?.length === 1) {
            return this.clothes[0];
        }
        const sorted = this.getSortedBySize();
        return sorted[0];
    }
    getCloth(color) {
        let result = this.clothes.find(el => el.color === color);
        return result;
    }
    getClothCount() {
        return this.clothes.length;
    }
    report() {
        const ordered = this.getSortedBySize();
        const report = ordered.map((el) => el.toString()).join("\n");
        return `${this.type} magazine contains:\n${report}`;
    }
}
exports.Magazine = Magazine;
