/**
 *一元操作符
 */
// var x = 9;
// alert(-x);
// alert(x++);
var y = 0;
function pri() {
    for (var x = 0; x < 10; x ++){
        for (var j = 0; j < 10; j++){
            document.write("<h1>" );
            document.write(++y);
            document.write("</h1>" )
        }
    }
}
setTimeout(pri,1000);