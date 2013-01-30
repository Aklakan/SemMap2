module org.aksw.commons.util {
	
	/**
	 * FIXME Extend with generics when they are out
	 * 
	 */
	export class Pair {
		private key : any;
		private value : any;
	
	    constructor(key : any, value : any) {
	    	this.key = key;
	    	this.value = value;
	    }
	
		get Key() : any {
			return this.key;
		}
		
		set Key(key: any) {
			this.key = key;
		}
		
		get Value() : any {
			return this.key;
		}
		
		set Value(value : any) {
			this.value = value;
		}
	}
	
}