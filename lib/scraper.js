import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import { writeFile } from 'fs'

async function sekaikomikDl(url) {
	let res = await fetch(url)
	let $ = cheerio.load(await res.text())
	let data = $('script').map((idx, el) => $(el).html()).toArray()
	data = data.filter(v => /wp-content/i.test(v))
	data = eval(data[0].split('"images":')[1].split('}],')[0])
	return data.map(v => encodeURI(v))
}

async function facebookDl(url) {
	let res = await fetch('https://fdownloader.net/')
	let $ = cheerio.load(await res.text())
	let token = $('input[name="__RequestVerificationToken"]').attr('value')
	let json = await (await fetch('https://fdownloader.net/api/ajaxSearch', {
		method: 'post',
		headers: {
			cookie: res.headers.get('set-cookie'),
			'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
			referer: 'https://fdownloader.net/'
		},
		body: new URLSearchParams(Object.entries({ __RequestVerificationToken: token, q: url }))
	})).json()
	let $$ = cheerio.load(json.data)
	let result = {}
	$$('.button.is-success.is-small.download-link-fb').each(function () {
		let quality = $$(this).attr('title').split(' ')[1]
		let link = $$(this).attr('href')
		if (link) result[quality] = link
	})
	return result
}

async function igStalk(username) {
    username = username.replace(/^@/, '')
    const html = await (await fetch(`https://dumpor.com/v/${username}`)).text()
    const $$ = cheerio.load(html)
    const name = $$('div.user__title > a > h1').text().trim()
    const Uname = $$('div.user__title > h4').text().trim()
    const description = $$('div.user__info-desc').text().trim()
    const profilePic = $$('div.user__img').attr('style')?.replace("background-image: url('", '').replace("');", '')
    const row = $$('#user-page > div.container > div > div > div:nth-child(1) > div > a')
    const postsH = row.eq(0).text().replace(/Posts/i, '').trim()
    const followersH = row.eq(2).text().replace(/Followers/i, '').trim()
    const followingH = row.eq(3).text().replace(/Following/i, '').trim()
    const list = $$('ul.list > li.list__item')
    const posts = parseInt(list.eq(0).text().replace(/Posts/i, '').trim().replace(/\s/g, ''))
    const followers = parseInt(list.eq(1).text().replace(/Followers/i, '').trim().replace(/\s/g, ''))
    const following = parseInt(list.eq(2).text().replace(/Following/i, '').trim().replace(/\s/g, ''))
    return {
        name,
        username: Uname,
        description,
        postsH,
        posts,
        followersH,
        followers,
        followingH,
        following,
        profilePic
    }
}



async function scrapeMemedroid() {
  try {
    let memesImages = [];
    const urls = [
      'https://pt.memedroid.com/',
      'https://pt.memedroid.com/memes/top/day',
      'https://pt.memedroid.com/memes/random',
      'https://pt.memedroid.com/memes/top/ever',
      'https://pt.memedroid.com/memes/latest'
    ];
    for (let i = 0; i < urls.length; i++) {
      const res = await axios.get(urls[i]);
      const $ = cheerio.load(res.data);
      const memes = $('.img-responsive.grey-background');
      memes.each((i, e) => {
        const image = $(e).attr('src');
        memesImages.push(image);
      });
    }
    const randomMeme = memesImages[Math.floor(Math.random() * memesImages.length)];
    const response = await fetch(randomMeme);
    const buffer = await response.buffer();
    writeFile(`memedroid/${new Date().getTime()}.jpg`, buffer, (err) => {
      if(err) {
        console.log(err);
      } else {
        console.log("Salvo com sucesso");
      }
    });
  } catch (err) {
    console.log(err);
  }
}





async function iFunny() {
	return new Promise((resolve, reject) => {
	  axios.get('https://br.ifunny.co/page'+Math.floor(Math.random() * 99), {
		headers: {
		  "user-agent": "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.5195.136 Mobile Safari/537.36"
		}
	  })
	  .then(res => {
		const $ = cheerio.load(res.data);
		const dados = [];
		const dados2 = [];
		$('._0ZvA').each((i,e) => {
		  var json = {
			titulo: $(e).find('a[class="WiQc mVpV HGgf"]').text() || $(e).find('img:first').attr('alt') || $(e).find('a:first').attr('aria-label') || 'Sem Titulo',
			imagem: $(e).find('img:first').attr('data-src'),
			link: $(e).find('a:first').attr('href')
		  }
		  var json2 = {
			titulo: $(e).find('a[class="WiQc mVpV HGgf"]').text() || $(e).find('img:first').attr('alt') || $(e).find('a:first').attr('aria-label') || 'Sem Titulo',
			thumb: $(e).find('video:first').attr('data-poster'),
			video: $(e).find('video:first').attr('data-src'),
			link: $(e).find('a:first').attr('href')
		  }
		  json.imagem && dados.push(json);
		  json2.video && json2.video.toLowerCase().includes("mp4") && dados2.push(json2);
		});
		resolve({status: res.status, autor: '+55 94 9147-2796', imagens: dados, videos: dados2})
	  })
	  .catch(e => {
		reject(e)
	  });
	});
  }
export {
	scrapeMemedroid,
	sekaikomikDl,
	igStalk,
	iFunny,
	facebookDl
}
