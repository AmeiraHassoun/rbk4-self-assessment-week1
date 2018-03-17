var Stack = function() {

    this._storage = []

    this.add = function(element){
      this._storage.push(element)
      return this._storage
    };


    this.remove = function(element) {
      this._storage.pop(element)
      return this._storage
    };


  };

var stack = new Stack()