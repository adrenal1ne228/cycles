let arr = ['a', 'b', 'c', 'd', 'e'];
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

for(let elem of arr){
    console.log(elem);
}

for(let i=arr.length-1; i>=0; i--){
    console.log(arr[i]);
}

for(let i=0; i<arr.length-1; i++){
    console.log(arr[i]);
}

for(let i=1; i<arr.length-1; i++){
    console.log(arr[i]);
}

let arr2 = [2, 5, 9, 15, 1, 4];

for(let i=0; i<arr2.length; i++){
    if(arr2[i]>3 && arr2[i]<10){
        console.log(arr2[i]);
    }
}

let res=0; 

for(let i=1; i<=99; i+=2){
    res+=i;
}

console.log(res);

let res2=0; 

for(let i=0; i<=100; i+=2){
    res2+=i;
}

console.log(res2);

let res3=1; 

for(i=1; i<=20; i++){
    res3*=i;
}

console.log(res3);

let arr3=[2,5,9,3,1,4];

let res4=0;

for(let i=0; i<arr3.length; i++){
    res4+=arr3[i];
}

console.log(res4);

let arr4=[2,5,9,3,-1,4];

for(elem of arr4){
    if(elem<0){
        console.log(elem);
        break;
    }
}

for(elem of arr4){
    if(elem>0){
        console.log(elem);
    }
}

for(let i=1; i<=9; i++){
    for(n=1; n<=3; n++){
        document.write(i);
    }
}

let arr0=[];

for(let i=1; i<=10; i++){
    arr0.push(i);
}

console.log(arr0);

let arr5=[1,2,3,4,5];

for(let i=0; i<arr5.length; i++){
    arr5[i]=arr5[i]*2;
}

console.log(arr5);