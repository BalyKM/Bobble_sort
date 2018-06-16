let bubble = new Bubble();
$().ready(()=>{
   $('#btnInsert').click(insert);
   $('#onlyShow').click(show);
});
function insert(){
    let num = parseInt(prompt("informe o numero a inserir no cu de adenildo:"));
        bubble.append(num);
    }
function show (){
    $('#saida').append(`<div class="ui label">${bubble.show('</div><div class="ui label">')}`)
    }