
function arrayMethod(arr) {
    let newArr = arr.filter(n => n === n.includes('y' || 'Y'));
    console.log('newArr', newArr);
    return newArr;

    //later: reformat phrase
}

module.exports = {
    arrayMethod
};