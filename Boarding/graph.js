class Graph{
    constructor(){
        this.list={}
    }
    addVertex(vertex){
        if(!this.list[vertex]){
            this.list[vertex]=new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.list[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.list[vertex2]){
            this.addVertex(vertex2)
        }

        this.list[vertex1].add(vertex2);
        this.list[vertex2].add(vertex1);\

    }
    display(){
        for(let neighbour in this.list){
            console.log(vertex + [...[this.list[vertex]]]);
        }
    }
}