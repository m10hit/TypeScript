var EyeColor;
(function (EyeColor) {
    EyeColor[EyeColor["Brown"] = 1] = "Brown";
    EyeColor[EyeColor["Black"] = 2] = "Black";
    EyeColor[EyeColor["Blue"] = 10] = "Blue";
})(EyeColor || (EyeColor = {}));
var myEyeColor = EyeColor.Black;
console.log(myEyeColor);
console.log(EyeColor[myEyeColor]);
