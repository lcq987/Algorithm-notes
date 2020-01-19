const root = require('./binaryTree')

function printBinatyTree(head){
    var last = head,
        nlast = head,
        queue = [head],
        res = "";
    while(queue.length > 0){
        var current = queue.shift();
        res += current.val;
        if(current.left){
            queue.push(current.left);
            nlast = current.left;
        }
        if(current.right){
            queue.push(current.right);
            nlast = current.right;
        }
        if(current === last){
            last = nlast;
            res += '\n';
        }
    }
    console.log(res);
}

// printBinatyTree(root);

module.exports = printBinatyTree;