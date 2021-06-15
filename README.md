<h1 align="center">MDL Scraper</h1>
<p align="center">
  <a href="https://www.npmjs.com/package/mdl-scraper" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/mdl-scraper.svg?style=flat-square">
  </a>
  <a href="https://github.com/sujalgoel/mdl-scraper/blob/master/LICENSE" target="_blank">
    <img alt="License: GPL-3.0" src="https://img.shields.io/github/license/sujalgoel/mdl-scraper?style=flat-square" />
  </a>
</p>

## What is this package?

> A npm package for scraping data from mydramalist.

## Install the package 📥

```sh
npm i mdl-scraper
```

## Example ✏️

<details>
<summary>SearchQuery example</summary>

```js
const { mdl } = require("mdl-scraper");

mdl.SearchQuery("song-joong-ki").then((data) => {
  console.log(data);
});
```

### Example Response

```json
{
   "dramas":[
      {
         "slug":"40775-i-m-real-song-joong-ki",
         "url":"https://mydramalist.com/40775-i-m-real-song-joong-ki",
         "thumb":"https://i.mydramalist.com/RZREzs.jpg?v=1",
         "mdl_id":"mdl-40775",
         "title":"I'm Real Song Joong Ki",
         "ranking":"#8857",
         "type":"Korean TV Show",
         "year":"2011",
         "series":"2 episodes"
      }
   ],
   "people":[
      {
         "slug":"people/431-song-joong-ki",
         "url":"https://mydramalist.com/people/431-song-joong-ki",
         "thumb":"https://i.mydramalist.com/1kymd_5v.jpg",
         "name":"Song Joong Ki",
         "nationality":"South Korean"
      }
   ]
}
```

</details>

<details>
<summary>FetchQuery example</summary>

```js
const { mdl } = require("mdl-scraper");

mdl.FetchQuery("61371-vincenzo").then((data) => {
  console.log(data);
});
```

### Example Response

```json
{
   "title":"Vincenzo",
   "rating":9,
   "poster":"https://i.mydramalist.com/vAnBe_4c.jpg?v=1",
   "synopsis":"At the age of eight, Park Joo Hyeong went to Italy after being adopted. Now an adult, he is known as Vincenzo Cassano to the Mafia, who employ him as a consigliere. Because mafia factions are at war with each other, he flees to South Korea, where he gets involved with Lawyer Hong Cha Young. She is the type of attorney who will do anything to win a case. Now back at his motherland, he gives an unrivaled conglomerate a taste of its own medicine with a side of justice.(Source: Netflix, AsianWiki) his motherland, he gives an unrivaled conglomerate a taste of its own medicine with a side of justice.(Source: Netflix, AsianWiki)",
   "cast":[
      {
         "slug":"people/431-song-joong-ki",
         "name":"Song Joong Ki",
         "url":"https://mydramalist.com/people/431-song-joong-ki"
      },
      {
         "slug":"people/18974-jeon-yeo-bin",
         "name":"Jeon Yeo Bin",
         "url":"https://mydramalist.com/people/18974-jeon-yeo-bin"
      },
      {
         "slug":"people/423-ok-taec-yeon",
         "name":"Ok Taec Yeon",
         "url":"https://mydramalist.com/people/423-ok-taec-yeon"
      },
      {
         "slug":"people/3264-kim-yeo-jin",
         "name":"Kim Yeo Jin",
         "url":"https://mydramalist.com/people/3264-kim-yeo-jin"
      },
      {
         "slug":"people/5409-jo-han-chul",
         "name":"Jo Han Chul",
         "url":"https://mydramalist.com/people/5409-jo-han-chul"
      },
      {
         "slug":"people/5101-kwak-dong-yeon",
         "name":"Kwak Dong Yeon",
         "url":"https://mydramalist.com/people/5101-kwak-dong-yeon"
      }
   ],
   "trailer":[
      "https://mydramalist.com/61371-vincenzo/trailers/21661",
      "https://mydramalist.com/61371-vincenzo/trailers/21721",
      "https://mydramalist.com/61371-vincenzo/trailers/21883",
      "https://mydramalist.com/61371-vincenzo/trailers/22067"
   ],
   "details":{
      "country":"South Korea",
      "type":"Drama",
      "episodes":"20",
      "aired":"Feb 20, 2021 - May  2, 2021",
      "aired_on":"Saturday, Sunday",
      "original_network":"tvN  Netflix  Netflix  Netflix  Netflix",
      "duration":"1 hr. 25 min.",
      "score":"9.0 (scored by 18,530 users)",
      "ranked":"#19",
      "popularity":"#103",
      "content_rating":"15+ - Teens 15 or older",
      "watchers":"38,095",
      "favorites":"0"
   },
   "others":{
      "native_title":"빈센조",
      "also_known_as":"Binsenjo",
      "screenwriter":"Park Jae Bum",
      "director":"Kim Hee Won",
      "genres":"Comedy,  Law,  Romance,  Crime,  Drama",
      "tags":"Lawyer,   Smart Male Lead,   Mafia,   Eccentric Female Lead,   Competent Protagonist,   Suspense,   Charming Male Lead,   Father-Daughter Relationship,   Injustice,   Funny Female Lead  (Vote or add tags)"
   }
}
```

</details>

<details>
<summary>FetchPerson example</summary>

```js
const { mdl } = require("mdl-scraper");

mdl.FetchPerson("5647-bong-joon-ho").then((data) => {
  console.log(data);
});
```

### Example Response

```json
{
   "name":"Bong Joon Ho",
   "about":"`Bong Joon Ho  Name: Bong Joon Ho  Native name: 봉준호    Nationality: South Korean Gender: Male  Born: September 14, 1969   Age: 51 Bong Joon-ho is a South Korean film director and screenwriter. Bong in general is known as being a director who takes a great interest in film genres, while simultaneously trying to move beyond genre's usual boundaries. Also known for the pure craft and finished quality of his works, Korean film industry insiders have nicknamed him \"Bong Tae-il,\" which, pronounced in Korean, sounds similar to the word \"detail\". Though he displays a fascination for strong subject matter, at the same time, his films are filled with (often black) humor and sudden mood shifts, making for an emotional roller coaster ride. The fact that he is able to combine all these contrasting elements into such a smooth whole is Bong's particular strength as a filmmaker. In 2019, director, Bong Joon-ho won the Cannes Palm d'Or (Grand Prize) for his movie Parasite. This is the first Korean film to ever win the award.`",
   "profile":"https://i.mydramalist.com/dWLK5_5c.jpg",
   "first_name":"Joon Ho",
   "family_name":"Bong",
   "native_name":"봉준호",
   "nationality":"South Korean",
   "gender":"Male",
   "born":"September 14, 1969",
   "age":"51"
}
```

</details>

## Contributing 🤝

- **Contributions, issues and feature requests are welcome!**
- **Feel free to check <a id="href" href="https://github.com/sujalgoel/mdl-scraper/issues" target="_blank">issues page</a>.**

## Author 💖

#### **Copyright © 2021 Sujal Goel** 👤

- **Github:** [@Sujal Goel](https://github.com/sujalgoel)
- **Website:** [@Sujal Goel](https://sujalgoel.ml)

## Support ❓
<a href="https://discord.gg/2SUybzb"><img src="https://invidget.switchblade.xyz/2SUybzb"></a>