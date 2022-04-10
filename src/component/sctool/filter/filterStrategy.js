
class filterCategory{
    filter(list,category){
        return list.filter( e => e.Category === category);
    }
}
class filterRestaurant{
    filter(list,restaurant){
        return list.filter( e => e.Restaurant === restaurant);
    }
}

class Filter{
    constructor(){
        this.Restaurant = new filterRestaurant();
        this.Category = new filterCategory();
    }
    
    Restaurant(list,restaurant){
        console.log("here restaurant")
     return this.Restaurant.filter(list,restaurant)
    }
    Category(list,category){
        console.log("here category")
        return this.Category.filter(list,category)
    }
}

const filter = new Filter()
class ListFilter{
    constructor(strategy = "Category"){
        this.strategy = filter[strategy];
    }
    setFilterStrategy(strategy){
        this.strategy = filter[strategy];
    }
    run(list,criteria){
        return this.strategy.filter(list,criteria)
    }
}

 const listfilter = new ListFilter();
export  default listfilter;