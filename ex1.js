numbers = [3, 4, 5, 4, 5, 4, 53, 5, 5, 8]


function mostRepeated(arry) {
    let count = 0
    let highestCount = 0;
    let highestNumber = -1
    let secondHighestCount = 0;
    let secondHighestNumber = -1
    for (let i = 0; i < arry.length; i++) {
        count = 0
        for (let j = 0; j < arry.length; j++) {

            if (arry[i] == arry[j]) {

                count++
            }

        }

        if (highestCount < count) {
            secondHighestCount = highestCount
            highestCount = count

            secondHighestNumber = highestNumber
            highestNumber = arry[i]

        } else if (secondHighestCount < count && count < highestCount) {

            secondHighestCount = count
            secondHighestNumber = arry[i]

        }



    }

    console.log(secondHighestCount + ' / ' + secondHighestNumber)
}


mostRepeated([34, 3, 4, 3, 5, 4, 6, 5, 6, 56, 34, 34, 3, 3, 3, 6, 6, 6, 6, 6, 6, 6, 6])