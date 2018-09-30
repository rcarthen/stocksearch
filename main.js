
const stockList = ['FB', 'AAPL', 'TSLA', 'GOOG'];
const newButton = $('<button>')

$("#createbtn").on("click",function(event){
    event.preventDefault()
    let stock=$("#stocksymbol").val()
    console.log(stock)

 $.ajax({
    url:  `https://api.iextrading.com/1.0/stock/${stock}/batch?types=quote,news&range=1m&last=1`,
    method:"GET"
}) .then(function(response){
    console.log(response);

});
})

const makebutton = function (stockList) { 

    for ( let i=0; i< stockList.length; i++)
`<button ${stockList[i]}></button>`
      
};

makebutton(stockList);

//
