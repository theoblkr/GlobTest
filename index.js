/**
 * 
 * @param {array} intervals 
 * @returns {array}
 */
const intervalsMax = (intervals) => {
    // sorted intervals array on first values
    intervals.sort((a, b) => a[0] - b [0])
    
    // initialize result with the first interval
    let result = [intervals[0]]

    intervals.map((singleInterval) => {
        // get the last interval in the result array
        const lastIntervalInResult = result[result.length - 1]

        // check if the second value of lastIntervalInResult is higher or equal to singleInterval of intervals
        // if so, replace the second value of lastIntervalInResult by the highest number between lastIntervalInResult and singleInterval
        // else just push the singleInterval in result
        if(lastIntervalInResult[1] >= singleInterval[0]) {
            lastIntervalInResult[1] = Math.max(lastIntervalInResult[1], singleInterval[1])
        } else {
            result.push(singleInterval)
        }
    })
    return result
}

const exemple1 = intervalsMax([[0, 3], [2, 4]]) //[[0, 4]]
console.log(exemple1)

const exemple2 = intervalsMax([[0, 1], [2, 10], [4, 7]]) //[[0, 1], [2, 10]]
console.log(exemple2)

const exemple3 = intervalsMax([[0, 5], [12, 13], [12, 20], [6, 8]]) //[[0, 5], [6, 8], [12, 20]]
console.log(exemple3)