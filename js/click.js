//Purchasing variables
let cookieButton = document.getElementById("cookiesButton");
let cookieAmount = document.getElementById("cookiesAmount");
let grandmaUpgrade = document.getElementById("grandmaUpgrade");
let farmUpgrade = document.getElementById("farmUpdgrade");
let factoryUpgrade = document.getElementById("factoryUpgrade");
let mineUpgrade = document.getElementById("mineUpgrade");
let bankUpgrade = document.getElementById("bankUpgrade");
let templeUpgrade = document.getElementById("templeUpgrade");

// count display items owned
let grandmaCountEl = document.getElementById("grandmaCount");
let farmCountEl = document.getElementById("farmCount");
let mineCountEl = document.getElementById("mineCount");
let factoryCountEl = document.getElementById("factoryCount");
let bankCountEl = document.getElementById("bankCount");
let templeCountEl = document.getElementById("templeCount");

//Selling variables
let sellGrandmaBtn = document.getElementById("granmaSell");
let sellFarmBtn = document.getElementById("farmSell");
let sellFactoryBtn = document.getElementById("factorySell");
let sellMineBtn = document.getElementById("mineSell");
let sellBankBtn = document.getElementById("sellBank");
let sellTempleBtn = document.getElementById("sellTemple");

//Effectiviness variables
let grandmaEffectiviness = document.getElementById("grandmaEffectiviness");
let farmEffectiviness = document.getElementById("farmEffectiviness");
let mineEffectiviness = document.getElementById("mineEffectiviness");
let factoryEffectiviness = document.getElementById("factoryEffectiviness");
let bankEffectiviness = document.getElementById("bankEffectiviness");
let templeEffectiviness = document.getElementById("templeEffectiviness");

//Counts clicks per second
const clickPerSecond = document.getElementById("pointPerSecond");
let pointPerSecond = 0;

//cookies generator
let cookies = 0;
let grandmas = 0;   
let grandmaCost = 100;
let farms = 0;
let farmCost = 1250;
let factorys = 0;
let factoryCost = 130000;
let mines = 0;
let mineCost = 32500;
let banks = 0;
let bankCost = 1000000;
let temples = 0;
let templeCost = 20000000;

// production
const grandmaProduction = 2;
const farmProduction = 8;
const mineProduction = 87;
const factoryProduction = 260;
const bankProduction = 1250;
const templeProduction = 7800;

//from selling 
let sellGrandmaValue = 50;
let sellFarmValue = 625;
let sellMineValue = 16250;
let sellFactoryValue = 65000;
let sellBankValue = 500000;
let sellTempleValue = 10000000;

//Effectiviness
let grandmaEffect = 1;
let grandmaEffectCost = 500;
let farmEffect = 1;
let farmEffectCost = 2000;
let mineEffect = 1;
let mineEffectCost = 40000;
let factoryEffect = 1;
let factoryEffectCost =175000;
let bankEffect = 1;
let bankEffectCost = 1350000;
let templeEffect = 1;
let templeEffectCost = 25000000;


//Updating cookies amount
function updateCookiesAmount(){
    cookieAmount.innerText = "You have " +  cookies  + " cookies!";
    clickPerSecond.innerText = pointPerSecond;

    // update owned counts
    if (grandmaCountEl) grandmaCountEl.innerText = grandmas;
    if (farmCountEl) farmCountEl.innerText = farms;
    if (mineCountEl) mineCountEl.innerText = mines;
    if (factoryCountEl) factoryCountEl.innerText = factorys;
    if (bankCountEl) bankCountEl.innerText = banks;
    if (templeCountEl) templeCountEl.innerText = temples;
}

//Cliks
function clickCookies(){
    cookies++;
    updateCookiesAmount();
}


//Purchasing 
function purchaseGrandma(){
    if(cookies >= grandmaCost){
        cookies -= grandmaCost;
        grandmaCost = Math.round(grandmaCost * 1.25);
        grandmas += 1;
        grandmaUpgrade.innerText = grandmaCost + " cookies for Grandma";
        updateCookiesAmount();
    }
}

function purchaseFarm(){
    if(cookies >= farmCost){
        cookies -= farmCost;
        farmCost = Math.round(farmCost * 1.25);
        farms  += 1;
        farmUpgrade.innerText = farmCost + " cookies for Farm";
        updateCookiesAmount();
    }
}

function purchaseMine(){
    if(cookies >= mineCost){
        cookies -= mineCost;
        mineCost = Math.round(mineCost * 1.25);
        mines += 1;
        mineUpgrade.innerText = mineCost + " cookies for Mine";
        updateCookiesAmount();
    }
}


function purchaseFactory(){
    if(cookies >= factoryCost){
        cookies -= factoryCost;
        factoryCost = Math.round(factoryCost * 1.25);
        factorys += 1;
        factoryUpgrade.innerText = factoryCost + " cookies for Factory";
        updateCookiesAmount();
    }
}

function purchaseBank(){
    if(cookies >= bankCost){
        cookies -= bankCost;
        bankCost = Math.round(bankCost * 1.25);
        banks += 1;
        bankUpgrade.innerText = bankCost + " cookies for Bank";
        updateCookiesAmount()
    }
}

function purchaseTemple(){
    if(cookies >= templeCost){
        cookies -= templeCost;
        templeCost = Math.round(templeCost * 1.25);
        temples += 1;
        templeUpgrade.innerText = templeCost + " cookies for Temple";
        updateCookiesAmount()
    }
}

//Selling
function sellGrandma(){
    if (grandmas > 0){
        grandmas -= 1;
        cookies += sellGrandmaValue;
        updateCookiesAmount();
    }
}

function sellFarm(){
    if (farms > 0){
        farms -= 1;
        cookies += sellFarmValue;
        updateCookiesAmount();
    }
}
function sellFactory(){
    if (factorys > 0){
        factorys -= 1;
        cookies += sellFactoryValue;
        updateCookiesAmount();
    }
}
function sellMine(){
    if (mines > 0){
        mines -= 1;
        cookies += sellMineValue;
        updateCookiesAmount();
    }
}
function sellBank(){
    if (banks > 0){
        banks -= 1;
        cookies += sellBankValue;
        updateCookiesAmount();
    }
}
function sellTemple(){
    if (temples > 0){
        temples -= 1;
        cookies += sellTempleValue;
        updateCookiesAmount();
    }
}

//Effectiviness boost
function grandmaBoost(){
    if (cookies >= grandmaEffectCost){
        cookies -= grandmaEffectCost;
        grandmaEffect *= 2;
        grandmaEffectCost = Math.round(grandmaEffectCost *1.25);
        grandmaEffectiviness.innerText = grandmaEffectCost + " Grandma for Effectiviness";
        updateCookiesAmount()
    }
}

function farmBoost(){
    if (cookies >= farmEffectCost){
        cookies -= farmEffectCost;
        farmEffect *= 2;
        farmEffectCost = Math.round(farmEffectCost * 1.25);
        farmEffectiviness.innerText = farmEffectCost + " Farm for Effectiviness";
    }
}
function mineBoost(){
    if (cookies >= mineEffectCost){
        cookies -= mineEffectCost;
        mineEffect *= 2;
        mineEffectCost = Math.round(mineEffectCost * 1.25);
        mineEffectiviness.innerText = mineEffectCost + " Mine for Effectiviness";
    }
}
function factoryBoost(){
    if (cookies >= factoryEffectCost){
        cookies -= factoryEffectCost;
        factoryEffect *= 2;
        factoryEffectCost = Math.round(factoryEffectCost * 1.25);
        factoryEffectiviness.innerText = factoryEffectCost + " Factory for Effectiviness";
    }
}
function bankBoost(){
    if (cookies >= bankEffectCost){
        cookies -= bankEffectCost;
        bankEffect *= 2;
        bankEffectCost = Math.round(bankEffectCost * 1.25);
        bankEffectiviness.innerText = bankEffectCost + " Bank for Effectiviness";
    }
}
function templeBoost(){
    if (cookies >= templeEffectCost){
        cookies -= templeEffectCost;
        templeEffect *= 2;
        templeEffectCost = Math.round(templeEffectCost * 1.25);
        templeEffectiviness.innerText = templeEffectCost + " Temple for Effectiviness";
    }
}

//Shop
function shopItems(){
    const shop = document.querySelectorAll(".shop-item");

    shop.forEach(item => {
        const price = parseInt(item.dataset.price);
        const buyButton = item.querySelector(".buy-button");
        const sellButton = item.querySelector(".sell-button");

        if (cookies < price) {
            buyButton.disabled = true;
        } else {
            buyButton.disabled = false;
        }

        if (!item.classList.contains("ownned")) {
            sellButton.disabled = true;
        } else{
            sellButton.disabled = false;
        }
    });
}

//Executer
setInterval(function(){
    cookies += grandmas * grandmaProduction * grandmaEffect;
    cookies += farms * farmProduction * farmEffect;
    cookies += mines * mineProduction * mineEffect;
    cookies += factorys * factoryProduction * factoryEffect;
    cookies += banks * bankProduction * bankEffect;
    cookies += temples * templeProduction * templeEffect;

    pointPerSecond = (grandmas * grandmaProduction * grandmaEffect) + (farms * farmProduction * farmEffect) + (mines * mineProduction * mineEffect) + (factorys * factoryProduction * factoryEffect) + (banks * bankProduction * bankEffect) + (temples * templeProduction * templeEffect);
    updateCookiesAmount();

}, 1000);


updateCookiesAmount();