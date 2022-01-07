//return obj

function getObj1()  //ES 5
{
    return { a: 1 , b: 2, c:3 };
}

const getObj2 = () => ({ a: 1 , b: 2, c:3 });  // ES 6


console.log(getObj1());
console.log(getObj2());


