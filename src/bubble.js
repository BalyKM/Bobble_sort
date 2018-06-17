class Bubble{
    constructor(){
        this.sort = [];
    }
	append(element){
		return this.sort.push(element);
	}
    show (separator=', '){
        return this.sort.join(separator);
 	};
 	bubble_plus(separator=', '){
 		var sort = this.sort;
 		for(var i = 0; i <= sort.length-1; i++){
 			for(var bb = 0; bb <= sort.length-1; bb++){
 				if (sort[bb] > sort[bb+1]){
 					bubble = this.sort[bb];
 					this.sort[bb] = sort[bb+1];
 					this.sort[bb+1] = bubble;
 			}
 		}
 	}
 		return this.sort.join(separator);
 	}
};