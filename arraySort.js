/**
 * Created by Liyongleihf2006 on 2016/12/20.
 */
/*
 * arguments:
 * array:要进行排序的数组
 * sortType:desc 或 asc ,default desc
 * comparisonFunction:排序使用的函数,参数是数组中的每一项,返回值为进行排序使用的数值,默认使用数组中每一项本身
 * */
function arraySort(){
    var array=arguments[0];
    if(!(array instanceof Array)){
        throw new Error("You must pass in an array");
    };
    var sortType=typeof arguments[1]=="function"?"desc":arguments[1];
    if(!sortType){
        sortType="desc";
    }else if(typeof sortType=="string"){
        if(sortType.toLowerCase()!="desc"&&sortType.toLowerCase()!="asc"){
            throw new Error("Please use the correct sort:\"desc\" or \"asc\"");
        }
    }else{
        throw new Error("Please use the correct sort:\"desc\" or \"asc\"");
    }
    var comparisonFunction=typeof arguments[1]=="function"?arguments[1]:arguments[2];
    if(!comparisonFunction){
        comparisonFunction=function(item){
            return item;
        }
    };
    if(typeof comparisonFunction != "function"){
        throw new Error("Incorrect format of incoming sorting function");
    };
    array=quickSort(array);
    if(sortType=="desc"){
        return array.reverse();
    };
    return array;
    /*
     * 内置的快速排序算法
     * */
    function quickSort(array){
        var i=1,length=array.length;
        if(length<=1){
            return array;
        };
        var smaller=[];
        var bigger=[];
        var base=[array[0]];
        for(;i<length;i++){
            if(typeof comparisonFunction(array[i]) == "undefined"||comparisonFunction(array[i])<=comparisonFunction(base[0])){
                smaller.push(array[i]);
            }else{
                bigger.push(array[i]);
            }
        };
        return quickSort(smaller).concat(base.concat(quickSort(bigger)));
    };
};
