var makeHashTable = function() {
  //Do not change the max!
  var max = 4;  


    return {
      _storage: [],



      retrieve: function(key) {

        for (var i = 0; i < this._storage[hashFn(key, max)].length; i++) {

           if (this._storage[hashFn(key, max)][i][0] === key) {

               return this._storage[hashFn(key, max)][i][1]

            } 

        }

        return this._storage[hashFn(key, max)];

      },



      insert: function(key, value) {

        //your code is here
        if (this.storage[hashFn(key, max)] === undefined ) {

          this.storage[hashFn(key, max)] = [[key, value]]

        } else {

            this._storage[hashFn(key, max).push([key, value]) 

            } 
    }


// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key


var hashFn = function(str, max) {

  var hash = 0;

  for (var i = 0; i < str.length; i++) {

    var letter = str[i];

    hash = (hash << 5) + letter.charCodeAt(0);

    hash = (hash & hash) % max;

  }

  return hash;
};