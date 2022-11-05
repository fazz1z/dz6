// 1
let km = +prompt("Vvedy kilometru")
function convert(km) {
    return km * 0.6214;
}
alert(km + " V milax " + convert(km));
// 2
let side = 4;
let srt = '';
function draw_box() {
    for(let i = 1; i <= side; i++){
        for(let j = 1; j <= side; j++){
            str+=' * ';
        }
        console.log(str);
        str='';
    }
}
draw_box();
        