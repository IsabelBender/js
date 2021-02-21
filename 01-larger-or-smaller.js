function integer(x, y) {

    let isInteger = number.isInteger(x) && number.isInteger(y);

    if(isInteger && x === y)
        document.write("The numbers are equal!");

    else if(isInteger)
        document.write("The larger number is " + Math.max(x,y));

    else
        document.write("Please add an integer!");

}
