// import "./web3.min.js"
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
//import data from "../data.json" assert { type: "json" };


const tokenAddress = "0x8E15f029cDDA85d4B265E2B9D59f369e7525C5A7";
const avaxAddress = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';
const wavax = '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7';
const treasuryAddress = '0x20D43a59363111a9015457c92E730E113a7E738C';
const pairAddress = '0x08bc2bab67Cf712ca43c5a91B4b123299208d7F0';
const usdc = '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664';


const regex = /^0x[a-fA-F0-9]{40}$/;
const loginButton = document.getElementById('loginButton')
window.userWalletAddress = null
const reward = 0.0002233;

const apiKey = "1CD47ZX72N99FZQKZM2VKPU95A6QFJ26YW";
const apiKey2 = "PK7MG44T2BZ6MT65QS391JWDA8AJI4UQHC";
const apiKey3 = "1XZDIJIGCC9UIY5UZR1JVZCQ7U5B9QI49J";
const decimals = 18;
let start = Date.parse("13 apr 2022 18:27:00 UTC");

let price = 0;
let tokens = 0;
let format = 0;
let supply = 0;
let csupply = 0;
let bnbPrice = 0;
let usdcTreasury = 0;
let treasurybalance = 0;
let circulatingSupply = 0;
let avaxTreasury = 0;
let dailyUSD = 0;
let balanceUSD = 0;







const minABI = [{
    "inputs": [{
        "internalType": "address",
        "name": "_presale",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "_treasury",
        "type": "address"
    }],
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }],
    "name": "Approval",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "uint256",
        "name": "epoch",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "totalSupply",
        "type": "uint256"
    }],
    "name": "LogRebase",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
    }],
    "name": "OwnershipRenounced",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
    }],
    "name": "OwnershipTransferred",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }],
    "name": "Transfer",
    "type": "event"
}, {
    "inputs": [],
    "name": "MAX_SUPPLY",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "RATE_DECIMALS",
    "outputs": [{
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "Treasury",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "TreasuryReceiver",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "_lastRebasedTime",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "_rebaseLock",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "owner_",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }],
    "name": "allowance",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }],
    "name": "approve",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "autoLiquidityReceiver",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "who",
        "type": "address"
    }],
    "name": "balanceOf",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "blacklist",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_addr",
        "type": "address"
    }],
    "name": "checkFeeExempt",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "checkSwapThreshold",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "amountPercentage",
        "type": "uint256"
    }, {
        "internalType": "address",
        "name": "adr",
        "type": "address"
    }],
    "name": "clearStuckBalance",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "decimals",
    "outputs": [{
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
    }],
    "name": "decreaseAllowance",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "feeDenominator",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "getCirculatingSupply",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "accuracy",
        "type": "uint256"
    }],
    "name": "getLiquidityBacking",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
    }],
    "name": "increaseAllowance",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "isNotInSwap",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "target",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "accuracy",
        "type": "uint256"
    }],
    "name": "isOverLiquified",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "isOwner",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "liquidityFee",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "manualSync",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "name",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "owner",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "pair",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "pairContract",
    "outputs": [{
        "internalType": "contract InterfaceLP",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "rebaseRate",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "tokenAddress",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "tokens",
        "type": "uint256"
    }],
    "name": "rescueToken",
    "outputs": [{
        "internalType": "bool",
        "name": "success",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "router",
    "outputs": [{
        "internalType": "contract IDEXRouter",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "sellFee",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_addr",
        "type": "address"
    }],
    "name": "setFeeExempt",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_autoLiquidityReceiver",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "_TreasuryReceiver",
        "type": "address"
    }],
    "name": "setFeeReceivers",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_address",
        "type": "address"
    }],
    "name": "setLP",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_rebaseRate",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_maxSupply",
        "type": "uint256"
    }],
    "name": "setRebaseAndMaxSupply",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "bool",
        "name": "_enabled",
        "type": "bool"
    }, {
        "internalType": "uint256",
        "name": "_num",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "_denom",
        "type": "uint256"
    }],
    "name": "setSwapBackSettings",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "target",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "accuracy",
        "type": "uint256"
    }],
    "name": "setTargetLiquidity",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "swapEnabled",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "symbol",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "totalFee",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }],
    "name": "transfer",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }],
    "name": "transferFrom",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_botAddress",
        "type": "address"
    }, {
        "internalType": "bool",
        "name": "_flag",
        "type": "bool"
    }],
    "name": "updateBlacklist",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "stateMutability": "payable",
    "type": "receive"
}];




"use strict";


const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const evmChains = window.evmChains;

// Web3modal instance
let web3Modal
// Chosen wallet provider given by the dialog window
let provider;



/*Setup the orchestra*/
function init() {

    console.log("Initializing example");
    console.log("WalletConnectProvider is", WalletConnectProvider);
    console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum);

    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                network: "binance",
                rpc: {
                    56: "https://bsc-dataseed1.binance.org",
                }

            }
        }
    };

    web3Modal = new Web3Modal({
        network: "binance",
        cacheProvider: false, // optional
        providerOptions, // required
        disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
        theme: {
            background: "rgb(39, 49, 56)",
            main: "rgb(199, 199, 199)",
            secondary: "rgb(136, 136, 136)",
            border: "rgba(195, 195, 195, 0.14)",
            hover: "rgb(16, 26, 32)"
        }

    });
    console.log("Web3Modal instance is", web3Modal);
    
     if (web3Modal.cachedProvider) {
        
        onConnect();
    }
}
/*Kick in the UI action after Web3modal dialog has chosen a provider*/
async function fetchAccountData() {

    // Get a Web3 instance for the wallet
    const web3 = new Web3(provider);

    console.log("Web3 instance is", web3);

    const accounts = await web3.eth.getAccounts();





    // MetaMask does not give you all accounts, only the selected account
    console.log("Got accounts", accounts);
    window.userWalletAddress = accounts[0];
    // document.getElementById("import").value = window.userWalletAddress;
    document.getElementById("import_dashboard").value = window.userWalletAddress;

    // Go through all accounts and get their ETH balance
    const rowResolvers = accounts.map(async (address) => {
        const balance = await web3.eth.getBalance(address);
        const contract = new web3.eth.Contract(minABI, tokenAddress);

        const circulating = await contract.methods.getCirculatingSupply().call();

        circulatingSupply = circulating / Math.pow(10, decimals);

        const result = await contract.methods.balanceOf(window.userWalletAddress).call();

        format = result / Math.pow(10, decimals);





        const chainId = await web3.eth.getChainId()
            .then(function (result) {
                console.log(result);
                if (result == "56") {
                    // MetaMask is locked or the user has not connected any accounts
                    console.log('You are connected to the avax blockchain');
                } else if (result !== "56") {

                    switchEthereumChain();
                }
            });




        // ethBalance is a BigNumber instance

        const ethBalance = web3.utils.fromWei(balance, "ether");
        const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);
        console.log("humanFriendlyBalance: " + humanFriendlyBalance);

        writeAddress();
        getBalance();



    });


    await Promise.all(rowResolvers);

    document.querySelector("#prepare").style.display = "none";
    document.querySelector("#connected").style.display = "block";
}

async function refreshAccountData() {
    document.querySelector("#connected").style.display = "none";
    document.querySelector("#prepare").style.display = "block";
    document.querySelector("#loginButton").setAttribute("disabled", "disabled")
    await fetchAccountData(provider);
    document.querySelector("#loginButton").removeAttribute("disabled")
}
/*Connect wallet button pressed.*/
async function onConnect() {
    console.log("Opening a dialog", web3Modal);
    try {
        provider = await web3Modal.connect();
    } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
    }
    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts) => {
        fetchAccountData();
    });
    // Subscribe to chainId change
    provider.on("chainChanged", (chainId) => {
        fetchAccountData();
        console.log("chain id", chainId);
        

    });
    // Subscribe to networkId change
    provider.on("networkChanged", (networkId) => {
        fetchAccountData();

    });
    await refreshAccountData();
}
/*Disconnect wallet button pressed.*/
async function onDisconnect() {
    console.log("Killing the wallet connection", provider);
    if (provider.close) {
        await provider.close();

        await web3Modal.clearCachedProvider();
        provider = null;
    }
    window.userWalletAddres = null;
    // Set the UI back to the initial state
    document.querySelector("#prepare").style.display = "block";
    document.querySelector("#connected").style.display = "none";
}
/* Main entry point.*/
window.addEventListener('load', async () => {
    init();
    document.querySelector("#loginButton").addEventListener("click", onConnect);
    document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
});


// const tokenSupply = await fetch("https://api.snowtrace.io/api?module=stats&action=tokensupply&contractaddress=" + tokenAddress + "&apikey=" + apiKey);
// const supplyJson = await tokenSupply.json();
// supply = supplyJson.result;





// const bnbTokenPrice = await fetch("https://api.pancakeswap.info/api/v2/tokens/0x1ce0c2827e2ef14d5c4f29a091d735a204794041");
// const bnbpairCall = await fetch("https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=" + wavax + "&address=" + pairAddress + "&tag=latest&apikey=" + apiKey2);
// const usdcTreasuryCall = await fetch("https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=" + usdc + "&address=" + treasuryAddress + "&tag=latest&apikey=" + apiKey3);
// const treasuryCall = await fetch("https://api.snowtrace.io/api?module=account&action=balance&address=" + treasuryAddress + "&tag=latest&apikey=" + apiKey2);







// async function getMarketCap() {

//     const uri = "https://deep-index.moralis.io/api/v2/erc20/" + tokenAddress + "/price?chain=avalanche";

//     let req = new Request(uri, {
//         method: 'GET',
//         headers: {
//             "Content-type": "application/json;charset=UTF-8",
//             "X-API-KEY": "NuQf4rVFokCHxAHZcdra9rIveJISka1BjmZ54HYqAYpnZLvcuAzzjDRj62J3EOR2"
//         },
//         mode: 'cors'
//     });




//     const tokenPrice = await fetch(req)
//     const priceJson = await tokenPrice.json();
//     price = priceJson.usdPrice;





//     const pairBalanceJson = await bnbpairCall.json();
//     const usdcTreasuryJson = await usdcTreasuryCall.json();
//     usdcTreasury = usdcTreasuryJson.result / Math.pow(10, 6);
//     const bnbJson = await bnbTokenPrice.json();
//     const treasuryJson = await treasuryCall.json();
//     avaxTreasury = treasuryJson.result / Math.pow(10, decimals);
//     bnbPrice = bnbJson.data.price;


//     document.getElementById("treasury").innerHTML = "$" + (avaxTreasury * bnbPrice + usdcTreasury).toFixed(2);
//     document.getElementById("pool").innerHTML = "$" + ((pairBalanceJson.result / Math.pow(10, decimals)) * bnbPrice).toFixed(2);
//     document.getElementById("dropbtn").innerHTML = "HYBRID " + "$" + Number(price).toFixed(3);
//     document.getElementById("price").innerHTML = "$" + Number(price).toFixed(3);
//     document.getElementById("price2").innerHTML = "$" + Number(price).toFixed(3);
//     document.getElementById("price3").innerHTML = "$" + Number(price).toFixed(3);

//     document.getElementById("totalsupply").innerHTML = ((supplyJson.result) / Math.pow(10, decimals)).toFixed(0);
//     document.getElementById("circulatingsupply").innerHTML = ((supplyJson.result) / Math.pow(10, decimals)).toFixed(0);
//     document.getElementById("marketcap").innerHTML = "$" + ((price * ((supplyJson.result) / Math.pow(10, decimals))).toFixed(0));
//     Promise.all([



//     ]).then(function (responses) {
//         return Promise.all(responses.map(function (response) {
//             return response.json();
//         }));
//     }).then(function (data) {


//     })
// }

function writeAddress() {
    document.querySelector("#btn-disconnect").textContent = window.userWalletAddress.substring(0, 6) + "..." + window.userWalletAddress.substring(38, 42)
}


async function getBalance() {



    tokens = Number(format).toFixed(4);


    document.getElementById("balance").innerHTML = tokens;
    // document.getElementById("balance2").innerHTML = tokens;
    document.getElementById("next_reward").innerHTML = (Number(format) * reward).toFixed(4);
    document.getElementById("roi_5_reward").innerHTML = "$" + ((Number(format) * 0.8886 * price) / Math.pow(10, 1)).toFixed(2);
    document.getElementById("balanceUSD").innerHTML = "$" + (tokens * price).toFixed(2);
    document.getElementById("dailyUSD").innerHTML = "$" + (tokens * 0.01717 * price).toFixed(2);
    // document.getElementById("input").value = Number(format).toFixed(4);
}

// document.getElementById("input").addEventListener("input", function () {
//     calculateReturns();
// })

// document.getElementById("input_price").addEventListener("input", function () {
//     calculateReturns();
// })

function calculateReturns() {
    let balance;
    let input_value = document.getElementById("input").value;
    let hours = document.getElementById("days").value * 96;
    let price_input = document.getElementById("input_price").value;
    balance = input_value * Math.pow((1 + reward), hours);
    document.getElementById("balance_apy").innerHTML = balance.toFixed(2);
    document.getElementById("potential_return").innerHTML = "$" + (balance * price).toFixed(2);

    document.getElementById("import_reward").innerHTML = (reward * input_value).toFixed(3);
    document.getElementById("next_reward").innerHTML = (reward * input_value).toFixed(4);

    document.getElementById("totalusd").innerHTML = "$ " + (Number(tokens * price_input) / Math.pow(10, 13)).toFixed(2);
}

// document.getElementById('days').addEventListener("input", function () {
//     document.getElementById("time_input").innerHTML = document.getElementById("days").value;
//     calculateReturns();
// });

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = now - start;
    var diff = (distance / (1000 * 60 * 15));
    var minutes = Math.floor((distance % (1000 * 60 * 15)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if ((24 - minutes) < 10) {
        document.getElementById("minutes").innerHTML = "0" + (14 - minutes);
        document.getElementById("minutes2").innerHTML = "0" + (14 - minutes);
        // document.getElementById("minutes3").innerHTML = "0" + (29 - minutes);
    } else {
        document.getElementById("minutes").innerHTML = (14 - minutes);
        document.getElementById("minutes2").innerHTML = (14 - minutes);
        // document.getElementById("minutes3").innerHTML = (29 - minutes);
    }
    if ((59 - seconds) < 10) {
        document.getElementById("seconds").innerHTML = "0" + (59 - seconds);
        document.getElementById("seconds2").innerHTML = "0" + (59 - seconds);
        // document.getElementById("seconds3").innerHTML = "0" + (59 - seconds);
    } else {
        document.getElementById("seconds").innerHTML = 59 - seconds;
        document.getElementById("seconds2").innerHTML = 59 - seconds;
        // document.getElementById("seconds3").innerHTML = 59 - seconds;
    }
    if (minutes == 0 && seconds == 0) {
        console.log("Updating Balance...")
        getBalance();
    }
}, 1000);

// async function getBalanceFromAddress(wallet) {
//     const apiCall = await fetch("https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=" + tokenAddress + "&address=" + wallet + "&tag=latest&apikey=" + apiKey2);


//     const balanceJson = await apiCall.json();




//     document.getElementById("input").value = (balanceJson.result / Math.pow(10, decimals)).toFixed(3);

//     calculateReturns()
// }


function callbal() {

    // document.getElementById("import").setCustomValidity("Invalid Address");
    // let temp = document.getElementById("import").value;

    // if (regex.test(temp) && (!temp == '')) {
    //     getBalanceFromAddress(temp);
    // } else {
    //     document.getElementById("import").reportValidity();
    //     console.log("Wrong Address");
    // }
}


const skeletons = document.querySelectorAll('.skeleton')
skeletons.forEach((skeleton) => {
    setTimeout(() => {
        skeleton.classList.remove('skeleton')
    }, 3000)
})


// window.addEventListener('DOMContentLoaded', () => {

    

//     if (window.ethereum) {

//     } else {
//         window.addEventListener('ethereum#initialized', handleEthereum, {
//             once: true,
//         });
//         // If the event is not dispatched by the end of the timeout,
//         // the user probably doesn't have MetaMask installed.
//         setTimeout(handleEthereum, 3000); // 5 seconds
//     };




// });






async function switchEthereumChain() {
    try {
        const switchednetwork = await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{
                chainId: '0x38'
            }],
        });
    } catch (error) {
        if (error.code === 4902) {
            try {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [{
                        chainId: '0x38',
                        chainName: 'Binance',
                        nativeCurrency: {
                            name: 'AVAX',
                            symbol: 'AVAX', // 2-6 characters long
                            decimals: 18
                        },
                        blockExplorerUrls: ['https://bscscan.com/'],
                        rpcUrls: ['https://bsc-dataseed1.binance.org'],
                    }, ],
                });
            } catch (addError) {
                console.error(addError);
            }
        }
        // console.error(e)
    }
}

async function addTokenFunction() {

    try {

        const wasAdded = await ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    address: tokenAddress,
                    symbol: 'SOS',
                    decimals: decimals,
                    image: '',
                },
            },
        });

        if (wasAdded) {
            console.log('SOS token was added');
        } else {
            console.log('SOS token has not been added');
        }
    } catch (error) {
        console.log(error);
    }
}

addToken.addEventListener("click", function () {
    addTokenFunction();
});