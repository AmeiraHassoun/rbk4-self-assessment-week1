var Stack = function() {
    this._storage = []

    this.add = function(element){
      this._storage.push(element)
    };


    this.remove = function(element) {
      this.storage.pop(element)
    };


  };
