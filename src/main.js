let bubble = new Bubble();
$().ready(()=>{
   $('#btnInsert').click(insert);
   $('#onlyShow').click(show);
   $('#showTop').click(show_bubble_plus);
   $('#showBotton').click(show_bubble_minor);
});
function insert(){
    let num = parseInt(prompt("informe um número a ser inserido na lista:"));
    bubble.append(num);
}
function show (){
    $('#saida').append(`<br><div class="ui label">${bubble.show()}'</div>'`);
}
function show_bubble_plus (){
    $('#saida').append(`<br><div class="ui label">${bubble.bubble_plus()}'</div>'`);
}
function show_bubble_minor (){
    $('#saida').append(`<br><div class="ui label">${bubble.bubble_minor()}'</div>'`);
}