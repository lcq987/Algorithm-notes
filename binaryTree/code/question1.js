function Node(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

let root = new Node(1),
    n2 = new Node(2),
    n3 = new Node(3),
    n4 = new Node(4),
    n5 = new Node(5),
    n6 = new Node(6),
    n7 = new Node(7),
    n8 = new Node(8);

root.left = n2;
root.right = n3;
n2.left = n4;
n3.left = n5;
n3.right = n6;
n5.left = n7;
n5.right = n8;

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

printBinatyTree(root);