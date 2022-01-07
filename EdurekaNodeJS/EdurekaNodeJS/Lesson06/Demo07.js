//return function with parameter

function calCircleArea1(radius)  //ES 5
{
    return Math.PI * radius * radius;
}

const calCircleArea2 = (radius) => (Math.PI * radius * radius);  // ES 6


console.log(calCircleArea1(5));
console.log(calCircleArea2(5));


