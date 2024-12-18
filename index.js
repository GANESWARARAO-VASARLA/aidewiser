//aidewiser
function find_distinct_integers(...arrays){
    const integerCount = new Map()
    for (const arr of arrays){
        const uniqueInArray = new Set(arr);
        for (const num of uniqueInArray){
            integerCount.set(num,(integerCount.get(num)||0)+1)
        }
    }
    const distincIntegers = []
    for (const [num,count] of integerCount){
        if (count ===1){
            distincIntegers.push(num)
        }
    }
    return distincIntegers
    
}
const output = find_distinct_integers([1,2,3], [2,3,4], [3,4,5])
console.log(output)