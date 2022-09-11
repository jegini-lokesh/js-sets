// const loki=new Set(["x","y","z"]) //here "s" should be capital letter
// alert(loki.size); //here for finding length we use "size" property
// document.write(loki.size);
//----------------"add method" by using add method we cn add values to "Set"--------
// loki.add("a");
// loki.add("b");
// loki.add("a");
// alert(loki.size); //here i pass total 6  values but i out put as 5 because set will not accept duplicate values.
//------------add variable to set by using add method--------
// const letters=new Set()
//create a variables
// const a="x";
// const b="y";
// const c="z";
//the difference between adding const and valus is (quotes for variable we did not included quotes)
// letters.add(a); //here we are adding values to letters by using  variable concept
// letters.add(b);
// letters.add(c);
// alert(letters.size) //here the value is 3
// letters.add("e");
// letters.add("f");
// alert(letters.size) //here the value is 5
//To print ll element in array by using forEach method
const letters = new Set(["a","b","c"]);
alert(letters.size)
letters.forEach(murali);
function murali(ele) {
    alert(ele)
}