const puppeteer = require('puppeteer');
 
(async () => {
  const browser = await puppeteer.launch({slowMo: 250});
  const page = await browser.newPage();
  await page.goto('https://www.mtvema.com/pt-br/vota/');
  
  console.log('----------------------------- START -----------------------------')
  try {
    setInterval(async () => {
      await page.waitForSelector('button[class="elements-accordion-components-item-styles_button_Nae_sr9iGBxv0mK2bG9iD sc-bZQynM etYaFo"]');
      await page.click('button[class="elements-accordion-components-item-styles_button_Nae_sr9iGBxv0mK2bG9iD sc-bZQynM etYaFo"]');
      console.count('Votos: ')
  },6000);
  } catch (error) {
    console.log('Error:', error);
  }

})();