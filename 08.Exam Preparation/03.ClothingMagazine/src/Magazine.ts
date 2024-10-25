import { Cloth } from "./Cloth";

export class Magazine {
    type: string;
    capacity: number;
    clothes: Cloth[] = [];

    constructor(type: string, capacity: number) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }

    addCloth(cloth: Cloth) {
        if (this.capacity > this.clothes.length) {
            this.clothes.push(cloth);
        }
    }

    removeCloth(color: string): boolean {
        let index = this.clothes.findIndex(el => el.color === color)
        if (index > -1) {
            this.clothes.splice(index, 1)
            return true;
        }
        return false;
    }

    getSortedBySize() {
        return this.clothes.sort((a, b) => a.size - b.size);
    }

    getSmallestCloth(): Cloth {
        if (this.clothes?.length === 0) {
            return {} as Cloth;
        }

        if (this.clothes?.length === 1) {
            return this.clothes[0];
        }

        const sorted = this.getSortedBySize();
        return sorted[0];
    }

    getCloth(color: string): Cloth {
        let result = this.clothes.find(el => el.color === color);
        return result;
    }

    getClothCount(): number {
        return this.clothes.length;
    }

    report(): string {
        const ordered = this.getSortedBySize();
        const report = ordered.map((el) => el.toString()).join("\n");

        return `${this.type} magazine contains:\n${report}`;
    }
}