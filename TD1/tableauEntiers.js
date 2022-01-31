var tab = [10, 2, 55, 9, 43];
console.log("\t For Classique");
for (var i = 0; i < tab.length; i++)
    console.log(tab[i]);
console.log("\t For in");
for (var j in tab)
    console.log(tab[j]);
console.log("\t For of");
for (var _i = 0, tab_1 = tab; _i < tab_1.length; _i++) {
    var k = tab_1[_i];
    console.log(k);
}
console.log("\t For Each");
tab.forEach(function (n) { return console.log(n); });
