const cart = {
    item: [],
   
   addItems(items) {
        this.item.push(items)
    },
    showItems(){
        console.log(this.item)
    }
};
cart.addItems("Laptop")
cart.addItems("Desktop")
cart.showItems()
    