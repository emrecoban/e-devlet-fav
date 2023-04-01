import * as cheerio from 'cheerio';
import './content.css'

async function fetchFavs(){
  try {
    const favsHTML = await(await fetch('/favori-hizmetlerim')).text()
    const $ = cheerio.load(favsHTML);
    $('a.boxList_close').remove()
    $('img').remove()
    return $('ul.favoriteboxList').children('li')
  } catch (error) {
    console.error("Fetching favs has an error: ", error.message)
  }
}

const searchBlock = document.getElementById('homepageSearchBlock')
if(searchBlock){
  const $ = cheerio.load(searchBlock.innerHTML, {}, false);

  await fetchFavs().then((favList)=>{
    const favsEl = []
    favList.map(item=>{
      favsEl.push(`<li class="favItem"><a href='${favList[item].children[2].attribs.href}'>${favList[item].children[2].children[2].children[1].children[0].data}</a></li>`)
    })



    $(`<ul id="favBox">${favsEl.splice(0,9).join('')}</ul>`).insertAfter('form')
    console.log("faaaav ", favsEl)
  })
  
  $('em.first').remove()
  $('em.second').remove()

  //console.log("gelen veri:", $.html())
  //console.log("fonksiyondan: ", )

  searchBlock.innerHTML = $.html()
}