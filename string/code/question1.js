const kmp = require('./kmp.js')

function Node(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

let t1 = new Node(1),
    n2 = new Node(2),
    n3 = new Node(3),
    n4 = new Node(4),
    n5 = new Node(5),
    n6 = new Node(6),
    n7 = new Node(7),
    n8 = new Node(8),
    n9 = new Node(9);

t1.left = n2;
t1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;
n4.left = n8;
n5.right = n9;

let t2 = new Node(2),
    m4 = new Node(4),
    m5 = new Node(5),
    m8 = new Node(8),
    m9 = new Node(9);
t2.left = m4;
t2.right = m5;
m4.left = m8;
m5.right = m9;

function serialization(head){
    var str = "";
    if(head){
        str += head.val + "!";
        str += serialization(head.left);
        str += serialization(head.right);
    }else{
        str = "#!"
    }
    return str;
}

let str1 = serialization(t1),
    str2 = serialization(t2);

console.log(kmp(str1, str2));