class Bubble{
    constructor(){
        this.sort = [];
    };
	append(element){
		return this.sort.push(element);
	};
    show (){
        return this.sort.join();
 	};
 	bubble_plus(){
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
 		return this.sort.join();
 	};
 	bubble_minor(){
 		var sort = this.sort;s
 		var accont = sort.length-1;
 		for(var i = 0; i <= sort.length-1; i++){
 			accont = sort.length-1;
 			for(var bb = 0; bb <= sort.length-1; bb++){
 				if (sort[bb] < sort[bb+1]){
 					bubble = this.sort[bb];
 					this.sort[bb] = sort[bb+1];
 					this.sort[bb+1] = bubble;
 					accont = accont + 2
 			}
 		}
 			if(accout === sort.length-1)
 				break;
 	};
 		return this.sort.join();
 	};
};