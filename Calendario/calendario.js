

let calend = document.querySelectorAll('#tabela-calendario [name]');

/**************** declaração do obj data ******************/
let data = new Date();
let ano = data.getFullYear();
let mes = data.getMonth();
let dia = data.getDay();
/**************** Fim da declaração do obj data ******************/



/**************** arrays dos meses ******************/
let meses = [

    'Janeiro', 'Fevereiro', 'Março', 'Abril',
    'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro',
    'Outubro', 'Novembro', 'Dezembro' 

]

let getMeses = meses[mes]// variavel que aciona o mes atual

/**************** Fim dos arrays dos meses ******************/



/**************** arrays dos dias da semana ******************/
let d_semana = [

    'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'

]
/**************** Fim dos arrays dos dias da semana ******************/


/**************** Corpo da tabela do calendario de maneira programatica ******************/
let calendario =  document.createElement('table');

 calendario.innerHTML = 
 `
    <table id='tabela-calendario'>

        <thead>
            <tr name ='cabecalho'>   
                <th colspan = '7'>
            
                    <button id='mesAnterior' class= 'btn btn-light'>
                        <i class="fas fa-angle-double-left"></i>
                    </button>
                    
                        <p>${getMeses} de ${ano}</p>

                    <button id='mesAnterior' class= 'btn btn-light'>
                        <i class="fas fa-angle-double-right" id='proximo'></i>
                    </button>
                </th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>D</td>
                <td>S</td>
                <td>T</td>
                <td>Q</td>
                <td>Q</td>
                <td>S</td>
                <td>S</td>
            </tr>
        </tbody>

    </table>
 `
 document.querySelector('#calendario').appendChild(calendario)
/**************** Fim do Corpo da tabela de maneira programatica ******************/




/**************** Comando para retroceder os meses ******************/
document.getElementById('mesAnterior').addEventListener("click", function(){

    meses.forEach((nome, pos) =>{         

         if(pos == getMeses){

            --getMeses 

         }                  
    });    
   console.log(getMeses)
});
/**************** Fim do Comando para retroceder os meses ******************/
