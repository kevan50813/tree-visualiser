import { BinaryTreeNode, drawBinaryTree, VisualizationType } from "binary-tree-visualizer";

const root = new BinaryTreeNode(100);

/**
 * for instering a node in a binery tree
 * 1. insetr form the root node
 * 2. Equlity check
 * 3. Lesser check
 * 4. Greter check 
 * 
 * @param {BinaryTreeNode} node 
 * @param {number} value 
 */
function insert(node,value){
    if(node.value == value){
        return;
    }
    if(node.value < value){
        if(node.left){
            insert(node.left,value);
            return;
        }
        node.setLeft(new BinaryTreeNode(value));
        return;
    }

    if(node.right){
        insert(node.right,value);
        return;
    }

    node.setRight(new BinaryTreeNode(value));

}

insert(root,50);
insert(root, 125);
insert(root,75);
drawBinaryTree(root,document.querySelector('canvas'), {type: VisualizationType.HIGHLIGHT,});