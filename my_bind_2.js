
Function.prototype.myBind = function (obj) {
  var fn = this;
  var args = [].slice.call(arguments, 1, arguments.length);
  return function () {
    console.log(args);
    fn.apply(obj, args);
  }
}

var cat = {
  name: 'Gizmo',
  printName: function () {
    console.log(this.name);
  }
}

function greeting (phrase) {
  console.log(phrase + this.name);
}

cat.printName();
greeting.myBind(cat, "Howdy ")();

