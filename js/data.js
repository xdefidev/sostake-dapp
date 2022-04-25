"use strict"
const tokenAddress = "0x0b399e87add76f6890fa28deb624cbee6a2dfe21";
const wbnb = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';
const treasuryAddress = '0x9432f7c5370876Df5aF4397cDaFBDc50fE33FB11';
const pairAddress = '0xdB969A3aF52a3754D1Db3D4acE22FEF3883D9353';
// const usdc = '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664';

const apiKey = "NIRJMYPQHC9S5KA57GFWK4Z86H27CMDN57";

const decimals = 18;


const options= { style: 'currency', currency: 'USD' };
const numberFormat = new Intl.NumberFormat('en-US', options);


let reqHeader = new Headers();
reqHeader.append('Content-Type', 'text/json');

let initObject = {
    method: 'GET',
    headers: reqHeader,
};

Promise.all([
        fetch("https://api.pancakeswap.info/api/v2/tokens/" + tokenAddress, initObject),
        fetch("https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress="+ wbnb + "&address=" + pairAddress +"&tag=latest&apikey="+ apiKey, initObject),
        fetch("https://api.bscscan.com/api?module=account&action=balance&address=" + treasuryAddress +"&tag=latest&apikey="+ apiKey, initObject),
        fetch("https://api.pancakeswap.info/api/v2/tokens/" + wbnb, initObject),
        fetch("https://api.bscscan.com/api?module=stats&action=tokenCsupply&contractaddress=" + tokenAddress + "&apikey" + apiKey, initObject)

    ]).then( function (responses) {
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    }).then( function (data){
        
        let price = data[0].price;
        let pairBalance = data[1].result;
        let treasury = data[2].result;
        let bnbPrice = data[3].price;
        let supply = data[4].result;

        console.log(bnbPrice);
        console.log(supply);
        console.log(price);
        console.log(pairBalance);
        console.log(treasury);

        
       
        document.getElementById("treasury").innerHTML = numberFormat.format(((treasury / Math.pow(10, decimals)) * bnbPrice).toFixed(2));
            document.getElementById("pool").innerHTML = "$" + ((pairBalance / Math.pow(10, decimals)) * bnbPrice).toFixed(2);
            document.getElementById("dropbtn").innerHTML = "HYBRID " + "$" + Number(price).toFixed(3);
            document.getElementById("price").innerHTML = "$" + Number(price).toFixed(3);
            document.getElementById("price2").innerHTML = "$" + Number(price).toFixed(3);
            document.getElementById("price3").innerHTML = "$" + Number(price).toFixed(3);

            document.getElementById("input_price").innerHTML = "$" + Number(price).toFixed(3);

            document.getElementById("totalsupply").innerHTML = ((supply) / Math.pow(10, decimals)).toFixed(0);
            document.getElementById("circulatingsupply").innerHTML = ((supply) / Math.pow(10, decimals)).toFixed(0);
            document.getElementById("marketcap").innerHTML = numberFormat.format(((price * ((supply) / Math.pow(10, decimals))).toFixed(0)));
    });
