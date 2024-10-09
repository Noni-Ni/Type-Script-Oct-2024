function cats(arr) {
    var Cat = /** @class */ (function () {
        function Cat(name, age) {
            this.name = name,
                this.age = age;
        }
        Cat.prototype.meow = function () {
            console.log("".concat(this.name, ", age ").concat(this.age, " says Meow"));
        };
        return Cat;
    }());
    for (var index = 0; index < arr.length; index++) {
        var element = arr[index];
        var arrEl = element.split(' ');
        var cat1 = new Cat(arrEl[0], Number(arrEl[1]));
        cat1.meow();
    }
}
cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);
