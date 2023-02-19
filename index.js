const app = require("express")();

const express = require("express")();
const puppeteer = require("puppeteer");


app.get("/",  async (req, res)  => {
const url = "https://www.midasbuy.com/adyen/pk/buy/pubgm"

 const MOBILE_USERAGENTx = agent.randomAgent();

 const MOBILE_USERAGENT = MOBILE_USERAGENTx.agent

 console.log(MOBILE_USERAGENT)

 console.log("fun executed")

 try {

const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-gpu']});

//const browser = await puppeteer.connect({browserWSEndpoint: 'ws://127.0.0.1:44025/devtools/browser/629d9016-fecf-41bc-a011-a337d54510da'})

    let page = await browser.newPage();

   // await page.setCookie(...cookie)

   await page.setUserAgent(MOBILE_USERAGENT);

    await page.setRequestInterception(true);

    page.on('request', (req) => {

        if(req.resourceType() == 'stylesheet' || req.resourceType() == 'font' || req.resourceType() == 'image'){

            req.abort();

        }

        else {

            req.continue();

        }

    });

  await page.goto(url, { timeout:0});

    await page.$eval('#cookie-agreement-pop > .close-btn', el => el.click());

    console.log((await browser.pages()).length);

        var browserWSEndpoint = browser.wsEndpoint();

    console.log(browserWSEndpoint);

    await  page.waitForSelector('.input')

     .then(() => console.log('selector player id found'));

     //let currentcookie = await page.cookies();

    // fs.writeFileSync('./cookie.json', JSON.stringify(currentcookie))

     console.log('>>',idx)

 await page.type('.input', JSON.stringify(idx), { delay: 10 }); 

 await page.evaluate(()=>document.querySelector('.input').click( { clickCount: 1 } ))

 await page.keyboard.press('Backspace') 

 await page.type('.input', JSON.stringify(idx), { delay: 10 }); 

 //await page.$eval('.btn', el => el.click());

 await page.keyboard.press('Enter');

// await page.waitForTimeout(1000);

 await page.on('response', async(response) =>{

   const eu = response.url()

   const str = eu.split("?")

  const mxx = "https://www.midasbuy.com/interface/getCharac";

    if(str[0] == mxx){

      console.log(response.headers())

      //console.log(str[1])

      const euu = "https://www.midasbuy.com/interface/getCharac?"

      const urll = euu+str[1]

      console.log('XHR response received');

const resx = await response.json();

res.json(resx)

      console.log(resx)

    

     // await page.close();

         //   await browser.close();

    //  const ress = await axios.get(urll)

    //  console.log(ress.data)

   //   res.json(ress.data)

   

    }

})

}

catch (err) {

  console.log('error>>>',err)

if(err == 'Error: net::ERR_CONNECTION_RESET at https://www.midasbuy.com/adyen/pk/buy/pubgm'){

  

}

}

});

app.listen(process.env.PORT || 4001, () => {

  console.log("Server started");

});

module.exports = app;
