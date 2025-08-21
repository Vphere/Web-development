// Q1 :
let mos = {
    harry : 10,
    karry : 20,
    sherry : 30
} ;

for(let mrks in mos)
{
    console.log(mos[mrks]);
}


// Q4 :
function findMean(n1,n2,n3,n4,n5)
{
    return ( n1 + n2 + n3 + n4 + n5 ) / 5;
}

console.log("Mean = " + findMean(5,6,7,10,12));