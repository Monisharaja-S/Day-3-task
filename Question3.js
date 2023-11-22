// Use same rest countries and print all countries names,regions,sub region and populations
var req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function () {
    var result = JSON.parse(req.response);
    for(var country in result)
    {
        console.log("name : " + country, result[country]["name"]);
        console.log("region : " + result[country]["region"]);
        console.log("subregion : " + result[country]["subregion"]);
        console.log("population : " + result[country]["population"]);
    }
}