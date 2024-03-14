function createXmasTree(height) {
    var tree = "";
    var odd = [];
    for (var i = 0, j = 1; i < 99; i++, j += 2) {
        odd.push(j);
    }
    var getMaxLines = odd[height - 1];
    for (var i = 0, a = 1; i < height; i++, a += 2) {
        var content = '';
        var ltp = (getMaxLines - a) / 2;
        var tmp = 1;
        for (var j = 1; j <= getMaxLines; j++) {
            if (j <= ltp) {
                content = '_';
            }
            else {
                if (tmp <= a) {
                    content = '*';
                    tmp++;
                }
                else {
                    content = '_';
                }
            }
            tree += content;
        }
        tree += "\n";
    }
    for (var i = 0; i < 2; i++) {
        var content = '';
        var ltp = (getMaxLines - 1) / 2;
        var tmp = 1;
        for (var j = 1; j <= getMaxLines; j++) {
            if (j <= ltp) {
                content = '_';
            }
            else {
                if (tmp === 1) {
                    content = '#';
                    tmp = 0;
                }
                else {
                    content = '_';
                }
            }
            tree += content;
        }
        if (i <= 0)
            tree += "\n";
    }
    return tree;
}
console.log(createXmasTree(10));
/*
__*__
_***_
*****
__#__
__#__

*/
