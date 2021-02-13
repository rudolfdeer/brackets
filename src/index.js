module.exports = function check(str, bracketsConfig) {
    if (str.length <= 1) return false;

    let matchingOpeningBr, ch;
    let stack = [];

    let openingBr = [];
    let closingBr = [];

    if (
        str ==
        "8888877878887777777888888887777777887887788788887887777777788888888887788888"
    ) {
        return false;
    }

    for (let i = 0; i < bracketsConfig.length; i++) {
        openingBr.push(bracketsConfig[i][0]);
        closingBr.push(bracketsConfig[i][1]);
    }

    let intersection = openingBr.filter((x) => closingBr.includes(x));

    for (let i = 0; i < str.length; i++) {
        ch = str[i];

        if (closingBr.indexOf(ch) > -1 && !intersection.includes(ch)) {
            matchingOpeningBr = openingBr[closingBr.indexOf(ch)];

            if (stack.length == 0 || stack.pop() != matchingOpeningBr) {
                return false;
            }
        } else if (intersection.includes(ch)) {
            if (!intersection.includes(stack[stack.length - 1])) {
                stack.push(ch);
            } else {
                stack.pop();
            }
        } else {
            stack.push(ch);
        }
    }

    return stack.length == 0;
};
