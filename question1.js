const points = [40, 100, 1, 5, 25, 10];
var count_zero=0;
var count_even=0;
var count_odd=0;
for(i=0;i<points.length;i++)
{
    if(points[i]==0)
    {
        count_zero++;
    }
    else if(points[i]%2==0)
    {
        count_even++;
    }
    else
    {
        count_odd++;
    }

}
console.log("Zero :"+count_zero);
console.log("Even :"+count_even);
console.log("Odd :"+count_odd);