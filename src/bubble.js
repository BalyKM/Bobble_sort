class Bubble{
    constructor(){
        this.data = [];
    }
	append(element){
		return this.data.push(element);
	}
    show (separator=', '){
        return this.data.join(separator);
 	};
};