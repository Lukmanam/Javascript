class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null
    }

}
class BST{
    constructor(){
        this.root=null
    }
    insert(value){
        const node=new Node(value);
        if(this.root===null){
            this.root=node
        }
        else{
            this.insertnewnode(this.root,node)
        }
    }
    insertnewnode(root,node){
        if(node.value<root.value){
            if(root.left===null){
                root.left=node;
            }
            else
            {
                this.insertnewnode(root.left,node)
            }
        }
        else{
            if(root.right===null){
                root.right=node
            }
            else{
                this.insertnewnode(root.right,node)
            }
        }
    }

    inorder(root){
        if(root){
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right)
        }
    }
    preorder(root){
        if(root){
            console.log(root.value);
            this.preorder(root.left);
            this.preorder(root.right)
        }
    }
    postorder(root){
        if(root){
            this.postorder(root.left);
            this.postorder(root.right)
            console.log(root);
        }
    }
}

const bssst=new BST()
bssst.insert(10909700);
bssst.insert(1000);
bssst.insert(5300);
bssst.insert(10675);
bssst.insert(199940);
bssst.inorder(bssst.root)

