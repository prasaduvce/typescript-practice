var num1:number=10;
console.log(num1);

var s1:string = "test string 1";
var s2:string = `testing another string 2`;
var s3:string = 'ttesting another sting 3';

console.log(s1);
console.log(s2);
console.log(s3);

var b1:boolean = true;
var b2:boolean = false;

console.log(b1);
console.log(b2);

var any1:any = "Renuka";
any1 = 123;
any1 = true;
any1 = {
    productId: 1,
    productName: "IPhone",
    productPrice: 1000
}
console.log(any1);

var scripts:Array<string> = ["PlaneJS", "AngularJS", "ReactJS", "VueJS"];
console.log(scripts);
console.log(scripts[0]);

var heteroArray:Array<any> = ["PlaneJS", {TestEnum: 123}, true, 123];
console.log(heteroArray);