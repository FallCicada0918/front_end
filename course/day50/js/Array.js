
var arr = new Array(1,2,3,"4",[1,2,3],true);

var arr1 = [1,2,3];

console.log("🚀FallCicada ~> arr:", arr);

arr.push(5,3,2,1);

//遍历数组
for (var i = 0; i < arr.length; i++) {
    console.log("🚀FallCicada ~> arr[" + i + "]:", arr[i]);
}

//删除元素
arr.splice(0,2);
arr.forEach((item,index) => {
    console.log("🚀FallCicada ~> arr[" + index + "]:", item);
});


