# 二叉树打印

### 1. 二叉树按层遍历

题目：给定一颗二叉树的头节点head，请按照大家看到的这种格式打印。

![](C:\Users\MSII\Desktop\算法\Algorithm-notes\binaryTree\img\1.png)

要求打印成：

```
1
2 3
4 5 6
7 8
```

难点：知道在什么地方换行

思路：采用两个指针last和nlast记录，last表示正在打印的当前行的最右节点，nlast表示下一行的最右节点。如果遍历到last节点说明该换行了，换行后令last等于nlast即可。问题的难点就转换成了如何正确地更新last和nlast的信息。只要保证nlast始终追踪着新加入队列的节点，就能实现last更新值时nlast指向下一行的最右节点。

代码：

```javascript
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
      nlast = current.left;      // 每插入一个节点到队列中，就更新nlast指针
    }
    if(current.right){
      queue.push(current.right);
      nlast = current.right;     // 每插入一个节点到队列中，更新nlast指针
    }
    if(current === last){        // 当前节点为该行的最后一个节点
      last = nlast;              // 更新last指针
      res += '\n';
    }
  }
  console.log(res);
}
```

### 2. 二叉树的序列化和反序列化

定义：

1. 二叉树 ——> 字符串（序列化）
2. 字符串 ——> 二叉树（反序列化）

序列化的方式：

1. 根据先序遍历序列化
2. 根据中序遍历序列化
3. 根据后序遍历序列化
4. 按层序列化

题目：二叉树被记录成文件的过程叫做二叉树的序列化，通过文件内容重建原来二叉树的过程叫做二叉树的反序列化。给定一颗二叉树头节点head，请设计一种二叉树序列化和反序列化的方案，并用代码实现。

思路（序列化）：

1. 假设序列化结果为str，初始时str为空字符串。
2. 遍历二叉树时如果遇到空节点，在str末尾加上"#!"。
3. 如果遇到不为空的节点，假设节点值为3，就在str的末尾加上"3!"。

注意：为什么要用一个特殊字符表示二叉树节点值的结束？

![](C:\Users\MSII\Desktop\算法\Algorithm-notes\binaryTree\img\2.png)

如果不用特殊符号表示值的结束，则这两颗数的序列化结果为：123###，说明不用特殊字符表示节点值结束会产生歧义。

思路（反序列化）：

1. 将字符串str转化为数组。
2. 根据序列化采用的方式，对数组进行反序列化遍历。

![](C:\Users\MSII\Desktop\算法\Algorithm-notes\binaryTree\img\3.png)

