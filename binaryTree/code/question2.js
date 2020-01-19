const {root, Node} = require('./binaryTree');
const printBinatyTree = require('./question1')

// 先序遍历序列化
function serialization(head){
    var str = "";
    if(head){
        str += head.val+"!";
        str += serialization(head.left);
        str += serialization(head.right);
    }else{
        str += "#!";
    }
    return str;
}

// 先序遍历反序列化
function deserialization(str){
    var arr = str.split('!');
    function makeTree(arr){
        var current = arr.shift(),
            node = new Node(current);
        if(current === '#'){
            return null;
        }else{
            node.left = makeTree(arr);
            node.right = makeTree(arr);
        }
        return node;
    }
    return makeTree(arr);
}

var str = serialization(root);
var head = deserialization(str);
printBinatyTree(head);