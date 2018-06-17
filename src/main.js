let bubble = new Bubble();
$().ready(()=>{
   $('#btnInsert').click(insert);
   $('#onlyShow').click(show);
   $('#showTop').click(show_bubble_plus);
});
function insert(){
    let num = parseInt(prompt("informe o numero a inserir no cu de adenildo:"));
        bubble.append(num);
    }
function show (){
    $('#saida').append(`<div class="ui label">${bubble.show('</div><div class="ui label">')}`)
    }
function show_bubble_plus (){
    $('#saida').append(`<div class="ui label">${bubble.bubble_plus('</div><div class="ui label">')}`)
}