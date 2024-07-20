class Tree {
    root;

    add(value = [{ data: 3, wing: 'left' }], root = 8) {
        if (!this.root) {
            this.root = new Node1(root);
        }
        for (const entry of value) {
            // recursively add the Node
            const lastWingNode = this.getLastWingNode(this.root, entry.wing === 'left');
            if (lastWingNode) {
                lastWingNode[entry.wing] = new Node1(entry.data);
            } else {
                //no left: 
                this.root.left = new Node1(entry.data);
            }

        }
    }

    addComplete(value = []) {
        for (const val of value) {
            if (!this.root) {
                this.root = new Node1(val);
                continue;
            }
            // add nodes
            const addNodes = (node = new Node1(), value) => {
                if (!node) {
                    node = new Node1(value);
                    return;
                }
                const left = node.left;
                const right = node.right;
                if (left && !right) {
                    addNodes(node.right, value)
                }
                if (!left) {
                    addNodes(node.left, value);
                }
                //find if left and right are equal
                if (left && right) {
                    addNodes(node.left, value);
                }
            }

        }

        addNodes(this.root, val)
    }

    inorder(node = new Node1()) {
        //nod is invalid return
        // get last left: print value
        // get right wing
        if (!node) return;
        this.inorder(node.left);
        console.log(node.value);
        this.inorder(node.right);
    }

    getLastWingNode(node = new Node1(), isLeft = true) {
        if (!node) return null;
        const leftNode = node.left;
        const rightNode = node.right;
        //return latest node to be take right
        if (isLeft == false && !rightNode) return node;
        //return latest node to take left
        if (leftNode) return this.getLastWingNode(leftNode, isLeft);
        return node;

    }

    buildComplete(values = [], index = 0){

        if(index >= values.length) return null;
        const node = new Node1(values[index]);
        node.left = this.buildComplete(values, 2*index+1)
        node.right = this.buildComplete(values, 2*index+2)
        if(index === 0) this.root = node;
        return node;
    }

    checkComplete(){
        const check = (node = new Node1()) => {
            if(!node) return true;
            const left = node.left;
            const right = node.right;
            if (left && right) return true;
            if (left && !right) return true;
            if (!left && right) return false;
            return check(left) && check(right);
        }

        if(!this.root) return true;
        return check(this.root)
    }

    size(){
        const check = (node) => {
            let total = 0;
            if(!node) return 0;
            return 1+check(node.left) + check(node.right)
        }
        return check(this.root)
    }
}

class Node1 {
    value;
    left;
    right;

    constructor(value) {
        this.value = value;
        this.left = this.right = null;
    }
}

module.exports = {
    Node1,
    Tree
};
