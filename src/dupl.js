const dupl = {
    hello: hello,
    badMethod: badMethod,
    optimizedMethod: optimizedMethod,
    betterMethod: betterMethod
};

export default dupl;

function hello(str) {
    return 'hello, ' + str;
}

function badMethod(myArray) {
    let dict = {};
    myArray.forEach(function (str) {
        if (dict[str] !== undefined) {
            dict[str] += 1;
        } else {
            dict[str] = 0;
        }
    });

    for (let prop in dict) {
        if (dict[prop] > 0) {
            myArray.forEach(function (str, idx) {
                if (str === prop) {
                    myArray[idx] = '';
                }
            });
        }
    }
}

function optimizedMethod(myArray) {
    for (let idx = 0; idx < myArray.length; idx += 1) {
        let isDup;
        for (let ptr = 0; ptr < myArray.length; ptr += 1) {
            if (idx !== ptr && myArray[idx] === myArray[ptr]) {
                myArray[ptr] = '';
                isDup = true;
            }
        }
        if (isDup) {
            myArray[idx] = '';
        }
    }
}

function betterMethod(myArray) {
    for (let idx = 0; idx < myArray.length; idx += 1) {
        let isDup;
        for (let ptr = idx; ptr < myArray.length; ptr += 1) {
            if (idx !== ptr && myArray[idx] === myArray[ptr]) {
                myArray[ptr] = '';
                isDup = true;
            }
        }
        if (isDup) {
            myArray[idx] = '';
        }
    }
}
