const points = [40, 100, 1, 5, 25, 10];
var max =-Infinity;
var min =Infinity;
for(i=0;i<points.length;i++)
{
    if(points[i]>max)
    {
        max = points[i];
    }
    else if (points[i]<min)
    {
        min = points[i];
    }
}
console.log(max);
console.log(min);
