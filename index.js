import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: '*',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type'
}));



// Movies data (for your movie API)
let movies = [
  {
    "id":1,
    "title": "Game Of Thrones",
    "year": 2011,
    "rank": 15,
    "rankChange": "▲ -1",
    "rating": 96,
    "imdbRating": 9.2,
    "imdbVotes": "2m",
    "backdropImage": "https://images.justwatch.com/backdrop/10043150/s1440/game-of-thrones.webp/game-of-thrones.webp",
    "posterImage": "https://thedigitalbits.com/media/k2/items/cache/6e4b2528701707a3ed973fc804a3e209_XL.jpg",
    "duration": "58min",
    "highestRank": 1,
    "top10Days": 2113,
    "top100Days": 3180,
    "top1000Days": 3191,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "70k",
    "dislikes": "2.1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "bjqEWgDVPe0",
    "type" : ["series", "hollywood"],
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 10,
        "posterImage": "https://images.justwatch.com/poster/8584648/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 10,
        "posterImage": "https://images.justwatch.com/poster/8584616/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 10,
        "posterImage": "https://images.justwatch.com/poster/8584568/s166/season-3.webp"
      },

      {
        "seasonNumber": 4,
        "episodes": 10,
        "posterImage": "https://images.justwatch.com/poster/8584555/s166/season-4.webp"
      },

      {
        "seasonNumber": 5,
        "episodes": 10,
        "posterImage": "https://images.justwatch.com/poster/8584386/s166/season-5.webp"
      },

      {
        "seasonNumber": 6,
        "episodes": 10,
        "posterImage": "https://images.justwatch.com/poster/8583927/s166/season-6.webp"
      },

      {
        "seasonNumber": 7,
        "episodes": 7,
        "posterImage": "https://images.justwatch.com/poster/78227677/s166/season-7.webp"
      },

      {
        "seasonNumber": 8,
        "episodes": 6,
        "posterImage": "https://images.justwatch.com/poster/123167430/s166/season-8.webp"
      },
    ],
    "genre": ["Science-Fiction", "Drama","Action & Adventure", "Fantasy"]

  },
 

  {
    "id":2,
    "title": "TERMINATOR ZERO",
    "year": 2024,
    "rank": 52,
    "rankChange": "▲ +30",
    "rating": 76,
    "imdbRating": 7,
    "imdbVotes": "7.8k",
    "backdropImage": "https://images.justwatch.com/backdrop/319782457/s1440/terminator-zero.webp/terminator-zero.webp",
    "posterImage": "https://sportshub.cbsistatic.com/i/2024/07/02/da4783e5-b14b-47d5-9b9b-0f15b8f2dca9/terminator-zero.jpg?auto=webp&width=1080&height=1350&crop=0.8:1,smart",
    "duration": "50min",
    "highestRank": 1,
    "top10Days": 8,
    "top100Days": 22,
    "top1000Days": 42 ,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "10k",
    "dislikes": "3k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "1uRZ8CFExEY",
    "type": ["series", "hollywood"],
    "seasons": [
      {
        "seasonNumber": 1,
        "episodes": 8,
        "posterImage": "https://www.justwatch.com/images/poster/320444958/s166/season-1.webp"
      }
    ],
    "genre": ["Science-Fiction", "Animation", "Action & Adventure"]

  

  },

  {
    "id":3,
    "title": "KILL",
    "year": 2024,
    "rank": 3,
    "rankChange": "▲ +1",
    "rating": 79,
    "imdbRating": 7.6,
    "imdbVotes": "27k",
    "backdropImage": "https://images.justwatch.com/backdrop/320515994/s1440/kill-2024.webp/kill-2024.webp",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BZjI1ZjM3NjUtYTc1Ni00ODJmLWI5YjQtMWZiZTAyNTFiZGY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "duration": "1h 45min",
    "highestRank": 1,
    "top10Days": 81,
    "top100Days": 86,
    "top1000Days": 92,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "3k",
    "dislikes": "400",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "da7lKeeS67c",
    "type": "bollywood",
   "genre": ["Action & Adventure", "Crime", "Drama", "Mystery & Thriller"]


  },
 


  {
    "id":4,
    "title": "Daredevil",
    "year": 2015,
    "rank":125,
    "rankChange": "▲ +400",
    "rating": 96,
    "imdbRating": 8.6,
    "imdbVotes": "484k",
    "backdropImage": "https://www.justwatch.com/images/backdrop/301255918/s1440/marvels-daredevil.webp/marvels-daredevil.webp",
    "posterImage": "https://rare-gallery.com/thumbnail/1402218-daredevil-season-4-daredevil-tv-shows-hd-poster.jpg",
    "duration": "53min",
    "highestRank": 1,
    "top10Days": 195,
    "top100Days": 805,
    "top1000Days": 3219,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
    ],
    "likes": "19k",
    "dislikes": "300",
    "watchlistText": "List",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId" : "n83s6NO1NE0",
    "type" : ["series", "hollywood"],
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 13,
        "posterImage": "https://www.justwatch.com/images/poster/158004164/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 13,
        "posterImage": "https://www.justwatch.com/images/poster/8635981/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 13,
        "posterImage": "https://www.justwatch.com/images/poster/87981316/s166/season-3.webp"
      },
    ],
    "genre" : ["Action & Adventure", "Crime", "Drama", "Fantasy", "Science-Fiction", "Mystery & Thriller"]
  },


  {
    "id":5,
    "title": "STREE 2:SARKATE KA AATANK",
    "year": 2024,
    "rank":79,
    "rankChange": "▲ +50",
    "rating": 79,
    "imdbRating": 7.6,
    "imdbVotes": "24k",
    "backdropImage": "https://assets-in.bmscdn.com/discovery-catalog/events/et00364249-qbqdytudsg-landscape.jpg",
    "posterImage": "https://assetscdn1.paytm.com/images/cinema/Stree21-min-f4ac2e40-4389-11ef-83ec-5d141d381675.jpg",
    "duration": "  2h 27min",
    "highestRank": 1,
    "top10Days": 125,
    "top100Days": 230,
    "top1000Days": 255,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "200k",
    "dislikes": "100",
    "watchlistText": "Watchist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "KVnheXywIbY",
    "type" : "bollywood",
    "genre" : ["Comedy", "Horror"],
  },


  {
    "id":6,
    "title": "MIRZAPUR",
    "year": 2018,
    "rank": 25,
    "rankChange": "▲ +33",
    "rating": 80,
    "imdbRating": 9.0,
    "imdbVotes": "97k",
    "backdropImage": "https://m.media-amazon.com/images/S/pv-target-images/855e8bb647c4a3ccfcdceb8d8d354ffc1df41908b203322b96c6683a0a070f0a._SX1080_FMjpg_.jpg",
    "posterImage": "https://rukminim2.flixcart.com/image/850/1000/l0h1g280/poster/1/m/t/small-mirzapur-web-series-poster-multicolor-photopaper-print-12-original-imagc95bfufzrhw8.jpeg?q=90&crop=false",
    "duration": "35min",
    "highestRank": 1,
    "top10Days": 292,
    "top100Days": 702,
    "top1000Days": 852,
    "watchOptions": [
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "4k",
    "dislikes": "555",
    "watchlistText": "List",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "ZNeGF-PvRHY",
    "type" : ["series", "bollywood"],
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 10,
        "posterImage": "https://images.justwatch.com/poster/98993671/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 10,
        "posterImage": "https://images.justwatch.com/poster/216332297/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 10,
        "posterImage": "https://images.justwatch.com/poster/318579955/s166/season-3.webp"
      },
    ],
    "genre" : ["Action & Adventure", "Drama", "Crime", "Mystery & Thriller"]
  },



  {
    "id":7,
    "title": "HOUSE OF THE DRAGON",
    "year": 2022,
    "rank":19,
    "rankChange": "▲ +11",
    "rating": 95,
    "imdbRating": 8.4,
    "imdbVotes": "446k",
    "backdropImage": "https://images.justwatch.com/backdrop/317367735/s1440/house-of-the-dragon.webp/house-of-the-dragon.webp",
    "posterImage": "https://deadline.com/wp-content/uploads/2022/05/house-of-dragon-fabien-frankel-ser-criston-cole-.jpg?w=691",
    "duration": "  1h 3min",
    "highestRank": 1,
    "top10Days": 154,
    "top100Days": 546,
    "top1000Days": 913,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "44k",
    "dislikes": "3k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "dVp0k6PV3Hk",
    "type" : ["series", "hollywood"],
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 8,
        "posterImage": "https://images.justwatch.com/poster/300920866/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 8,
        "posterImage": "https://images.justwatch.com/poster/319802873/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 10,
        "posterImage": "https://images.justwatch.com/poster/260075695/s166/season-3.webp"
      },
    ],
    "genre": ["Action & Adventure", "Science-Fiction", "Drama", "Fantasy", "Romance"],
  },
 

  {
    "id":8,
    "title": "The Lord of the Rings: The Rings of Power",
    "year": 2022,
    "rank":18,
    "rankChange": "▲ +13",
    "rating": 88,
    "imdbRating": 6.9,
    "imdbVotes": "380k",
    "backdropImage": "https://images.justwatch.com/backdrop/320045052/s1440/the-lord-of-the-rings-the-rings-of-power.webp/the-lord-of-the-rings-the-rings-of-power.webp",
    "posterImage": "https://i0.wp.com/www.artofvfx.com/wp-content/uploads/2022/08/lord_of_the_rings_the_rings_of_power_ver52_xlg.jpg?fit=1280%2C1895&ssl=1",
    "duration": "  1h 8min",
    "highestRank": 1,
    "top10Days": 47,
    "top100Days": 197,
    "top1000Days": 938,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "57k",
    "dislikes": "2.1",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "Uc4dE4LJ3xQ",
    "type" : ["series", "hollywood"],
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 8,
        "posterImage": "https://www.justwatch.com/images/poster/300920866/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 8,
        "posterImage": "https://www.justwatch.com/images/poster/319802873/s166/season-2.webp"
      },
    ],
    "genres": ["Action & Adventure", "Science-Fiction", "Drama", "Fantasy"],
  },
 
  {
    "id":9,
    "title": "Harold and the Purple Crayon",
    "year": 2024,
    "rank":18,
    "rankChange": "▲ +13",
    "rating": 72,
    "imdbRating": 5.7,
    "imdbVotes": "3.7k",
    "backdropImage": "https://images.justwatch.com/backdrop/320023808/s1440/harold-and-the-purple-crayon-2024.webp/harold-and-the-purple-crayon-2024.webp",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BZGE3MmYxOTgtMGY1Ni00ZWQ4LTlhNjAtMzcxYjIzMjcwN2U1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "duration": "  1h 8min",
    "highestRank": 1,
    "top10Days": 47,
    "top100Days": 197,
    "top1000Days": 938,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "51",
    "dislikes": "10",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "WojIv-PVYm8",
    "type" : "hollywood",
    "genre" : ["Comedy", "Action & Adventure", "Kids & Family", "Fantasy", "Animation"]

  },


  {
    "id":10,
    "title": "PANCHAYAT",
    "year": 2020,
    "rank": 3,
    "rankChange": "▲ +2",
    "rating": 79,
    "imdbRating": 8.4,
    "imdbVotes": "87k",
    "backdropImage": "https://media.assettype.com/pratidintime%2F2024-03%2Fdd857ae7-f9b8-4909-a1ca-534aea22d538%2FSnapinsta_app_433426900_18339877129112131_5071267279140018758_n_1080.jpg",
    "posterImage": "https://images.justwatch.com/poster/316699631/s718/panchayat.jpg",
    "duration": "50min",
    "highestRank": 1,
    "top10Days": 1003,
    "top100Days": 1877,
    "top1000Days": 2141,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "1.3k",
    "dislikes": "200",
    "watchlistText": "List",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "mojZJ7oeD_g",
    "type" : ["series", "bollywood"],
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 8,
        "posterImage": "https://images.justwatch.com/poster/319303704/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 8,
        "posterImage": "https://images.justwatch.com/poster/319303711/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 8,
        "posterImage": "https://images.justwatch.com/poster/319303722/s166/season-3.webp"
      },
    ],
    "genre" : ["Drama", "Comedy"]
  },

  
  {
    "id":11,
    "title": "AFRAID",
    "year": 2024,
    "rank":18,
    "rankChange": "▲ +13",
    "rating": 56,
    "imdbRating": 5.1,
    "imdbVotes": "4.8k",
    "backdropImage": "https://images.justwatch.com/backdrop/320204860/s1440/they-listen.webp/they-listen.webp",
    "posterImage": "https://image.tmdb.org/t/p/original/w0SFLjdtQtjCB4LvwB7On2V1lgG.jpg",
    "duration": "  1h 8min",
    "highestRank": 1,
    "top10Days": 47,
    "top100Days": 197,
    "top1000Days": 938,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "51",
    "dislikes": "23",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "LE5QzD_qtxs",
    "type" : "hollywood",
    "genre": ["Mystery & Thriller", "Horror", "Science-Fiction"]
  },


  {
    "id":12,
    "title": "Baaghi",
    "year": 2016,
    "rank":914,
    "rankChange": "▲ +411",
    "rating": 60,
    "imdbRating": 8.2,
    "imdbVotes": "4.9k",
    "backdropImage": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2016/04/baaghi-review.jpg",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BMzczODY2ZmMtYjU4MS00MzFjLTk2YTAtYTMyMmFlNTk3OTIyXkEyXkFqcGc@._V1_.jpg",
    "duration": "  2h 14min",
    "highestRank": 28,
    "top10Days": 44,
    "top100Days": 105,
    "top1000Days": 500,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "100",
    "dislikes": "12k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "FV-3avN3Oxc",
    "type" : "bollywood",
    "genre": ["Action & Adventure", "Mystery & Thriller", "Romance"]
  },

  {
    "id":13,
    "title": "The Boys",
    "year": 2019,
    "rank":21,
    "rankChange": "▲ +96",
    "rating": 95,
    "imdbRating": 8.9,
    "imdbVotes": "790k",
    "backdropImage": "https://www.justwatch.com/images/backdrop/109745293/s1440/the-boys.webp/the-boys.webp",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BMWJlN2U5MzItNjU4My00NTM2LWFjOWUtOWFiNjg3ZTMxZDY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "duration": "  1h 1min",
    "highestRank": 1,
    "top10Days": 172,
    "top100Days": 1326,
    "top1000Days": 1922,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "68k",
    "dislikes": "3.2k",
    "watchlistText": "Lists",
    "seenText": "Seenall",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "zi0YW9MoQ7w",
    "type": ["series", "hollywood"],
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 8,
        "posterImage": "https://www.justwatch.com/images/poster/139452420/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 8,
        "posterImage": "https://www.justwatch.com/images/poster/203606186/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 8,
        "posterImage": "https://www.justwatch.com/images/poster/318597532/s166/season-3.webp"
      },

      {
        "seasonNumber": 4,
        "episodes": 8,
        "posterImage": "https://www.justwatch.com/images/poster/315996798/s166/season-4.webp"
      },

  
    ],

    "genre": ["Action & Adventure", "Science-Fiction", "Crime", "Drama", "Comedy"]

  },

  
  {
    "id":14,
    "title": "Harry Potter and the Philosopher's Stone",
    "year": 2001,
    "rank":65,
    "rankChange": "▲ +130",
    "rating": 95,
    "imdbRating": 8.9,
    "imdbVotes": "900k",
    "duration": "2h 32min",
    "highestRank":2,
    "top10Days": 172,
    "top100Days": 1326,
    "top1000Days": 3105,
    "backdropImage": "https://www.justwatch.com/images/backdrop/179940893/s1440/harry-potter-and-the-philosophers-stone.webp/harry-potter-and-the-philosophers-stone.webp",
    "posterImage": "https://divinepicturesoftruth.in/cdn/shop/files/HarryPotterandtheSorcerer_sStone_2002.jpg?v=1721127538&width=1445",
    "duration": "  2h 1min",
    
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "50k",
    "dislikes": "1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "y5fXuZ3ns_c",
    "type" : "hollywood",
    "genre": ["Action & Adventure", "Fantasy", "Kids & Family"]
  },

  
  {
    "id":15,
    "title": "Watchmen",
    "year": 2009,
    "rank":618,
    "rankChange": "▲ +300",
    "rating": 92,
    "imdbRating": 7.6,
    "imdbVotes": "589k",
    "backdropImage": "https://images.justwatch.com/backdrop/179879377/s1440/watchmen.webp/watchmen.webp",
    "posterImage": "https://cdn.europosters.eu/image/750/posters/watchmen-city-street-i13393.jpg",
    "duration": "  2h 42min",
    "highestRank": 3,
    "top10Days": 8,
    "top100Days": 105,
    "top1000Days": 2242,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "17k",
    "dislikes": "1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "wglmbroElU0",
    "type" : "hollywood",
    "genre": ["Mystery & Thriller", "Action & Adventure", "Science-Fiction", "Drama"]
  },

  {
    "id":16,
    "title": "Thangalaan",
    "year": 2024,
    "rank": 15,
    "rankChange": "▲ +100",
    "rating": 96,
    "imdbRating": 7.2,
    "imdbVotes": "4.3k",
    "backdropImage": "https://images.justwatch.com/backdrop/319827592/s1440/thangalaan.webp/thangalaan.webp",
    "posterImage": "https://stat5.bollywoodhungama.in/wp-content/uploads/2024/07/Thangalaan-322x503.jpg",
    "duration": "2h 36min",
    "highestRank": 1,
    "top10Days": 213,
    "top100Days": 180,
    "top1000Days": 391,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "70k",
    "dislikes": "2.1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "vidoId" : "tnKhlp6NaVs",
    "type" : "tollywood",
    "genre" : ["Action & Adventure", "Fantasy", "History", "Drama"]

  },

 
  {
    "id":17,
    "title": "Avatar", 
    "year": 2009,
    "rank":2991,
    "rankChange": "▲ +2128",
    "rating": 92,
    "imdbRating": 7.9,
    "imdbVotes": "1m",
    "backdropImage": "https://www.justwatch.com/images/backdrop/8730102/s1440/avatar.webp/avatar.webp",
    "posterImage": "https://m.media-amazon.com/images/I/61O8KP0CYVS.jpg",
    "duration": "2h 41min",
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "50k",
    "dislikes": "1.3k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "d9MyW72ELq0",
    "type": "hollywood",
    "genre" : ["Action & Adventure", "Fantasy", "Science-Fiction"]
  },

  {
    "id":18,
    "title": "Despicable Me 4",
    "year": 2024,
    "rank":83,
    "rankChange": "▲ +300",
    "rating": 83,
    "imdbRating": 6.2,
    "imdbVotes": "42k",
    "backdropImage": "https://images.justwatch.com/backdrop/311602034/s1440/despicable-me-4-2024.webp/despicable-me-4-2024.webp",
    "posterImage": "https://shop.warnerbros.co.uk/cdn/shop/files/DM4-DVD_15_MF1.jpg?v=1721135650",
    "duration": "  1h 34min",
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "28k",
    "dislikes": "140",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "qQlr9-rF32A",
    "type":["series", "anime", "hollywood"],
    "genre" : ["Kids & Family", "Comedy", "Action & Adventure", "Animation", "Science-Fiction", "Fantasy", "Crime"]

  },

  {
    "id":19,
    "title": "Trap",
    "year": 2024,
    "rank":78,
    "rankChange": " ▲ +300",
    "rating": 78,
    "imdbRating": 6.0,
    "imdbVotes": "66k",
    "backdropImage": "https://images.justwatch.com/backdrop/319859355/s1440/trap-2024.webp/trap-2024.webp",
    "posterImage": "https://i.redd.it/mfnua86j7mxc1.jpeg",
    "duration": " 1h 45min",
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "913",
    "dislikes": "221",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId":"hJiPAJKjUVg",
    "type":"hollywood",
    "genre": ["Crime", "Horror", "Mystery & Thriller"]
  },

  
  {
    "id":20,
    "title": "Inside Out 2",
    "year": 2015,
    "rank":134,
    "rankChange": "▲ -26",
    "rating": 97,
    "imdbRating": 8.1,
    "imdbVotes": "829k",
    "backdropImage": "https://images.justwatch.com/backdrop/178301399/s1440/inside-out.webp/inside-out.webp",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_.jpg",
    "duration": "  1h 35min",
    "highestRank": 3,
    "top10Days": 18,
    "top100Days": 220,
    "top1000Days": 2559,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "35k",
    "dislikes": "1.1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "LEjhY15eCx0",
    "type": ["hollywood","anime"],
    "genre": ["Drama", "Comedy", "Animation", "Kids & Family", "Action & Adventure", "Fantasy"],


  },

  
  {
    "id":21,
    "title": "Raayan",
    "year": 2024,
    "rank": 155,
    "rankChange": "▲ -14",
    "rating": 55,
    "imdbRating": 6.5,
    "imdbVotes": "8.k",
    "backdropImage": "https://images.justwatch.com/backdrop/319476194/s1440/raayan.webp/raayan.webp",
    "posterImage": "https://alldatmatterz.com/uploads/2024/06/raayan_1718258332.webp",
    "duration": "2h 25min",
    "highestRank": 2,
    "top10Days": 13,
    "top100Days": 54,
    "top1000Days": 68,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "70k",
    "dislikes": "2.1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "UzTm--hNa6Q",
    "type": "tollywood",
    "genre": ["Action & Adventure", "Drama", "Mystery & Thriller"],

  },
 

  {
    "id":22,
    "title": "Jumanji: Welcome to the Jungle ",
    "year": 2017,
    "rank":314,
    "rankChange": "▲ +400",
    "rating": 93,
    "imdbRating": 8.0,
    "imdbVotes": "500k",
    "backdropImage": "https://www.justwatch.com/images/backdrop/37400848/s1440/jumanji-welcome-to-the-jungle.webp/jumanji-welcome-to-the-jungle.webp",
    "posterImage": "https://wallpapercat.com/w/full/5/b/8/2087372-2000x3000-phone-hd-jumanji-welcome-to-the-jungle-background-image.jpg",
    "duration": "  1h 59min",
    "highestRank": 2,
    "top10Days": 70,
    "top100Days": 405,
    "top1000Days": 2219,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Apple TV+", "price": "Rs1500/-"}
    ],
    "likes": "20k",
    "dislikes": "1.1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "2QKg5SZ_35I",
    "type" : "hollywood",
    "genre": ["Comedy", "Fantasy", "Action & Adventure"],
  },

 
  
  {
    "id":23,
    "title": "Jumanji: The Next Level",
    "year": 2019,
    "rank":1291,
    "rankChange": "▲ +700",
    "rating": 91,
    "imdbRating": 6.7,
    "imdbVotes": "293k",
    "backdropImage": "https://www.justwatch.com/images/backdrop/152188580/s1440/jumanji-the-next-level.webp/jumanji-the-next-level.webp",
    "posterImage": "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/jumanjithenextlevel_onesheet_1400x2100.jpg?itok=1_kQc_Bz",
    "duration": "  1h 46min",
    "highestRank": 1,
    "top10Days": 28,
    "top100Days": 202,
    "top1000Days": 1600,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "25k",
    "dislikes": "200",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "rBxcF-r9Ibs",
    "type": "hollywood",
    "genre": ["Action & Adventure", "Comedy", "Fantasy"],
  },

  



  
  {
    "id":24,
    "title": "Batman: The Dark Knight Returns, Part 1",
    "year": 2012,
    "rank":1,
    "rankChange": "▲ +100",
    "rating": 88,
    "backdropImage": "https://images.justwatch.com/backdrop/320550333/s1440/batman-the-dark-knight-returns-part-1.webp/batman-the-dark-knight-returns-part-1.webp",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_.jpg",
    "duration": "  1h 16min",
    "highestRank": 1,
    "top10Days": 64,
    "top100Days": 148,
    "top1000Days": 1124,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "1.9k",
    "dislikes": "235",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "vuvykaDj2dY",
    "type" : "hollywood",
    "genre" : ["Mystery & Thriller", "Science-Fiction", "Action & Adventure", "Animation"]
  },

  {
    "id":25,
    "title": "Fast and the Furious 7",
    "year": 2015,
    "rank":729,
    "rankChange": "▲ +314",
    "rating": 92,
    "imdbRating": 6.8,
    "imdbVotes": "426k",
    "backdropImage": "https://ew.com/thmb/gSHO6t0Y7bTBua1PoZRF65gJoWQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/furious-7-cast_0-2000-eac0fdddffb8449186a6514aaabd27f8.jpg",
    "posterImage": "https://www.tallengestore.com/cdn/shop/products/Fast_Furious_7_-_Paul_Walker_-_Vin_Diesel_-_Dwayne_Johnson_-_Hollywood_Action_Movie_Poster_92545455-e1d9-436c-9f4c-95143035c41b.jpg?v=1582543219",
    "duration": "  1h 46min",
    "highestRank": 25,
    "top10Days": 125,
    "top100Days": 51,
    "top1000Days": 1109,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "13k",
    "dislikes": "1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId":"Skpu5HaVkOc",
    "type" : "hollywood",
    "genre" : ["Crime", "Action & Adventure", "Mystery & Thriller"]
  },

  {
    "id":26,
    "title": "Fast and the Furious 8",
    "year": 2017,
    "rank":3056,
    "rankChange": "▲ +2230",
    "rating": 92,
    "imdbRating": 7.8,
    "imdbVotes": "426k",
    "backdropImage": "https://www.justwatch.com/images/backdrop/8541005/s1440/the-fate-of-the-furious.webp/the-fate-of-the-furious.webp",
    "posterImage": "https://m.media-amazon.com/images/I/81nEFN2HHuL._AC_UF894,1000_QL80_.jpg",
    "duration": "  2h 16min",
    "highestRank": 3,
    "top10Days": 90,
    "top100Days": 500,
    "top1000Days": 2168,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "13k",
    "dislikes": "100",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId":"uisBaTkQAEs",
    "type" : "hollywood",
    "genre" : ["Action & Adventure", "Crime", "Mystery & Thriller"]
  },

  
  {
    "id":27,
    "title": "Fast and the Furious 9",
    "year": 2021,
    "rank":676,
    "rankChange": "▲ +2230",
    "rating": 92,
    "imdbRating": 7.8,
    "imdbVotes": "726k",
    "backdropImage": "https://www.justwatch.com/images/backdrop/166932455/s1440/f9.webp/f9.webp",
    "posterImage": "https://www.cinestar.de/media/cache/web_l/media/mmmb/0./0.-614c3fb1ed56d.jpg",
    "duration": "  2h 16min",
    "highestRank": 3,
    "top10Days": 90,
    "top100Days": 700,
    "top1000Days": 4168,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "50k",
    "dislikes": "200",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId":"FUK2kdPsBws",
    "type" : "hollywood",
    "genre" : ["Action & Adventure", "Crime", "Mystery & Thriller"]
  },

  
  {
    "id":28,
    "title": "Fast X",
    "year": 2023,
    "rank":649,
    "rankChange": "▲ +2210",
    "rating": 92,
    "imdbRating": 7.8,
    "imdbVotes": "626k",
    "backdropImage": "https://www.justwatch.com/images/backdrop/305793486/s1440/fast-x.webp/fast-x.webp",
    "posterImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOC3S7UMAcenr4nToN2MW3shHraFnIzUwAB3SnlGUlD1aHe6qCk67z8QelTcag0Je2XPc&usqp=CAU",
    "duration": "  2h 16min",
    "highestRank": 3,
    "top10Days": 90,
    "top100Days": 500,
    "top1000Days": 2168,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "13k",
    "dislikes": "100",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId":"eoOaKN4qCKw",
    "type" : "hollywood",
    "genre" : ["Action & Adventure", "Crime", "Mystery & Thriller"]
  },



  {
    "id":29,
    "title": "Extraction",
    "year": 2020,
    "rank":724,
    "rankChange": "▲ +337",
    "rating": 94,
    "imdbRating": 6.8,
    "imdbVotes": "270k",
    "backdropImage": "https://images.justwatch.com/backdrop/177559132/s1440/extraction-2020.webp/extraction-2020.webp",
    "posterImage": "https://m.media-amazon.com/images/I/71ntZpru-4L._AC_UF894,1000_QL80_.jpg",
    "duration": "  1h 56min",
    "highestRank": 1,
    "top10Days": 5,
    "top100Days": 39,
    "top1000Days": 614,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "12k",
    "dislikes": "648",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId" : "L6P3nI6VnlY",
    "type" : "hollywood",
    "genre" : ["Mystery & Thriller", "Action & Adventure", "Crime"]
  },

  
  {
    "id":30,
    "title": "MULAN",
    "year": 2020,
    "rank":722,
    "rankChange": "▲ +594",
    "rating": 74,
    "imdbRating": 5.8,
    "imdbVotes": "160k",
    "backdropImage": "https://images.justwatch.com/backdrop/199842629/s1440/mulan-2020.webp/mulan-2020.webp",
    "posterImage": "https://i2.wp.com/www.themoviedb.org/t/p/original/tt8TxCL2W1Arv7vMYfjXMUO8JBW.jpg",
    "duration": "  1h 55min",
    "highestRank": 1,
    "top10Days": 8,
    "top100Days": 39,
    "top1000Days": 454,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "8.2k",
    "dislikes": "2.8k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "KK8FHdFluOQ",
    "type" : "hollywood",
    "genre" : ["Action & Adventure", "Fantasy", "Kids & Family", "Drama"]
  },


  {
    "id":31,
    "title": "Captain America: The First Avenger",
    "year": 2011,
    "rank":768,
    "rankChange": "▲ +353",
    "rating": 96,
    "imdbRating": 6.9,
    "imdbVotes": "910k",
    "backdropImage": "https://images.justwatch.com/backdrop/198981995/s1440/captain-america-the-first-avenger.webp/captain-america-the-first-avenger.webp",
    "posterImage": "https://www.geekalerts.com/u/Captain-America-The-First-Avenger-Poster.jpg",
    "duration": "  2h 4min",
    "highestRank": 4,
    "top10Days": 4,
    "top100Days": 192,
    "top1000Days": 2391,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "21k",
    "dislikes": "729",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId" : "ru0MEXIX_ZE",
    "type" : "hollywood",
    "genre" : ["Action & Adventure", "Science-Fiction"]
  },

  
  {
    "id":32,
    "title": "Deadpool 2",
    "year": 2018,
    "rank":411,
    "rankChange": "▲ +295",
    "rating": 96,
    "imdbRating": 7.6,
    "imdbVotes": "683k",
    "backdropImage": "https://images.justwatch.com/backdrop/55613628/s1440/deadpool-2.webp/deadpool-2.webp",
    "posterImage": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/50f59dfe-f3de-4253-98ed-41972905ee82/dc580ue-a72e7954-b25c-413e-927d-779d52f76888.jpg/v1/fill/w_1024,h_1517,q_75,strp/deadpool_2___poster_by_omrkse10_dc580ue-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUxNyIsInBhdGgiOiJcL2ZcLzUwZjU5ZGZlLWYzZGUtNDI1My05OGVkLTQxOTcyOTA1ZWU4MlwvZGM1ODB1ZS1hNzJlNzk1NC1iMjVjLTQxM2UtOTI3ZC03NzlkNTJmNzY4ODguanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.zFf-Ix2nMdNoATlRUejRxIR7zrT6yqVr6j-3ygUjdbY",
    "duration": "  1h 59min",
    "highestRank": 4,
    "top10Days": 19,
    "top100Days": 289,
    "top1000Days": 2214,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "33k",
    "dislikes": "1.3k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "D86RtevtfrA",
    "type" : "hollywood",
    "genre" : ["Action & Adventure", "Comedy", "Science-Fiction"]
  },


  
  {
    "id":33,
    "title": "Deadpool & Wolverine",
    "year": 2024,
     "rank":4,
    "rankChange": "▲ +295",
    "rating": 95,
    "imdbRating": 8.0,
    "imdbVotes": "288k",
    "backdropImage": "https://images.justwatch.com/backdrop/319139252/s1440/deadpool-3.webp/deadpool",
    "posterImage": "https://xl.movieposterdb.com/24_07/2024/6263850/xl_deadpool-wolverine-movie-poster_a229c3b9.jpg",
    "duration": "  2h 8min",
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "5.3k",
    "dislikes": "196k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId" : "ea94nqoxnVQ",
    "type" : "hollywood",
    "genre" : ["Action & Adventure", "Science-Fiction", "Comedy"]
  },

  
  {
    "id":34,
    "title": "The Marvels",
    "year": 2023,
    "rank":3046,
    "rankChange": "▲ +2311",
    "rating": 69,
    "imdbRating": 5.5,
    "imdbVotes": "133k",
    "backdropImage": "https://compote.slate.com/images/b3997261-711a-4d26-b18e-e1dd7dc19dd9.jpeg?crop=1560%2C1040%2Cx0%2Cy0",
    "posterImage": "https://jmade.org/Chapter%203/images/captainmarvel.jpg",
    "duration": "  1h 45min",
    "highestRank": 4,
    "top10Days": 5,
    "top100Days": 61,
    "top1000Days": 312,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "4.4k",
    "dislikes": "1.9k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId" : "gLuhrhEfQBc",
    "type" : "hollywood",
    "genre" : ["Science-Fiction", "Action & Adventure", "Fantasy"]
  },

  
  {
    "id":35,
    "title": "The Guardians of the Galaxy Holiday Special",
    "year": 2022,
    "rank":964,
    "rankChange": "▲ +445",
    "rating": 90,
    "imdbRating": 6.9,
    "imdbVotes": "97k",
    "backdropImage": "https://images.justwatch.com/backdrop/301916630/s1440/the-guardians-of-the-galaxy-holiday-special.webp/the-guardians-of-the-galaxy-holiday-special.webp",
    "posterImage": "https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_guardiansofthegalaxy_holidayspeci_352289e6.jpeg",
    "duration": "  1h 45min",
    "highestRank": 4,
    "top10Days": 5,
    "top100Days": 61,
    "top1000Days": 312,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "8.1k",
    "dislikes": "876",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId" : "OYhFFQl4fLs",
    "type" : "hollywood",
    "genre" : ["Comedy", "Science-Fiction", "Action & Adventure"]
  },

   
  {
    "id":36,
    "title": "Ant-Man and the Wasp: Quantumania",
    "year": 2023,
    "rank":2819,
    "rankChange": "▲ +2115",
    "rating": 73,
    "imdbRating": 6.0,
    "imdbVotes": "238k",
    "backdropImage": "https://images.justwatch.com/backdrop/303438481/s1440/ant-man-3.webp/ant-man-3.webp",
    "posterImage": "https://cdn.marvel.com/content/1x/ant-man_4.jpg",
    "duration": "  2h 5min",
    "highestRank": 1,
    "top10Days": 33,
    "top100Days": 113,
    "top1000Days": 349,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "16k",
    "dislikes": "1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId" : "ZlNFpri-Y40",
    "type" : "hollywood",
    "genre" : ["Science-Fiction", "Action & Adventure", "Comedy"]
  },

  {
    "id":37,
    "title": "Thor: Love and Thunder",
    "year": 2022,
    "rank":903,
    "rankChange": "▲ +537",
    "rating": 77,
    "imdbRating": 6.2,
    "imdbVotes": "238k",
    "backdropImage": "https://images.justwatch.com/backdrop/300409455/s1440/thor-love-and-thunder.webp/thor-love-and-thunder.webp",
    "posterImage": "https://images.moviesanywhere.com/a542619a429486f00c7d0cd8ad61b34d/28615d76-65cf-4110-ae21-d97f43debef3.jpg",
    "duration": "  1h 59min",
    "highestRank": 1,
    "top10Days": 77,
    "top100Days": 160,
    "top1000Days": 473,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "20k",
    "dislikes": "10k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "Go8nTmfrQd8",
    "type" : "hollywood",
    "genre" : ["Fantasy", "Action & Adventure", "Comedy", "Romance", "Science-Fiction"]
  },

  
  {
    "id":38,
    "title": "Avengers: Endgame",
    "year": 2019,
    "rank":535,
    "rankChange": "▲ +247",
    "rating": 97,
    "imdbRating": 8.4,
    "imdbVotes": "1m",
    "backdropImage": "https://images.justwatch.com/backdrop/108456304/s1440/avengers-endgame.webp/avengers-endgame.webp",
    "posterImage": "https://rukminim2.flixcart.com/image/850/1000/ju2z6a80/poster/v/9/g/medium-endgameart-avengers-endgame-new-poster-for-room-office-original-imaff9ecy3wgbdtv.jpeg?q=90&crop=false",
    "duration": "  3h 1min",
    "highestRank": 1,
    "top10Days": 52,
    "top100Days": 555,
    "top1000Days": 1963,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "98k",
    "dislikes": "1.5k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "TcMBFSGVi1c",
    "type" : "hollywood",
    "genre" : ["Science-Fiction", "Action & Adventure", "Drama"]
  },

 
  {
    "id":39,
    "title": "Venom: LET THERE BE CARNAGE",
    "year": 2021,
    "rank":343,
    "rankChange": "▲ +270",
    "rating": 88,
    "imdbRating": 6.6,
    "imdbVotes": "550k",
    "backdropImage": "https://w0.peakpx.com/wallpaper/73/319/HD-wallpaper-venom-2-let-there-be-carnage-new-poster.jpg",
    "posterImage": "https://images.squarespace-cdn.com/content/v1/5ff0f2d566132f51dedacd3f/1660848818778-QJETBW2SBL4XRT7PWJ4U/goopy_03.jpg",
    "duration": "  1h 52min",
    "highestRank": 1,
    "top10Days": 88,
    "top100Days": 436,
    "top1000Days": 2049,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "38k",
    "dislikes": "2.5k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "-FmWuCgJmxo",
    "type" : "hollywood",
    "genre" : ["Science-Fiction", "Action & Adventure", "Mystery & Thriller"]
  },


  {
    "id":40,
    "title": "Logan",
    "year": 2017,
    "rank":330,
    "rankChange": "▲ +292",
    "rating": 96,
    "imdbRating": 8.1,
    "imdbVotes": "861k",
    "backdropImage": "https://images.justwatch.com/backdrop/10573557/s1440/logan.webp/logan.webp",
    "posterImage": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/wolverine-3-logan-et00047340-06-10-2016-11-01-21.jpg",
    "duration": "  2h 17min",
    "highestRank": 6,
    "top10Days": 11,
    "top100Days": 365,
    "top1000Days": 2445,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "31k",
    "dislikes": "1.1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "Div0iP65aZo",
    "type" : "hollywood",
    "genre" : ["Drama", "Mystery & Thriller", "Action & Adventure", "Science-Fiction"]
  },

  {
    "id":41,
    "title": "The Amazing Spider-Man",
    "year": 2012,
    "rank":406,
    "rankChange": "▲ +113",
    "rating": 92,
    "imdbRating": 6.9,
    "imdbVotes": "714k",
    "backdropImage": "https://images.justwatch.com/backdrop/204659694/s1440/the-amazing-spider-man.webp/the-amazing-spider-man.webp",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_.jpg",
    "duration": "  2h 16min",
    "highestRank": 1,
    "top10Days": 50,
    "top100Days": 335,
    "top1000Days": 2145,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "100k",
    "dislikes": "2.1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "-tnxzJ0SSOw",
    "type" : "hollywood",
    "genre" : ["Action & Adventure", "Science-Fiction"]
  },

  {
    "id":42,
    "title": "Spiderman: NO WAY HOME",
    "year": 2021,
    "rank":16,
    "rankChange": "▲ +2220",
    "rating": 84,
    "imdbRating": 6.6,
    "imdbVotes": "340k",
    "backdropImage": "https://i.ytimg.com/vi/uyPCkTzhDxQ/maxresdefault.jpg",
    "posterImage": "https://m.media-amazon.com/images/I/81y0foYjoFL._AC_UF1000,1000_QL80_.jpg",
    "duration": "  1h 49min",
    "highestRank": 2,
    "top10Days": 114,
    "top100Days":127,
    "top1000Days": 238,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "129",
    "dislikes": "47",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "JfVOs4VSpmA",
    "type" : "hollywood",
    "genre" : ["Action & Adventure", "Science-Fiction", "Fantasy"]
  },
  
   
  {
    "id":43,
    "title": "Doctor Strange In the Multiverse Of Madness",
    "year": 2022,
    "rank":7480,
    "rankChange": "▲ +738",
    "rating": 90,
    "imdbRating": 8.2,
    "imdbVotes": "97k",
    "backdropImage": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EB479687DDB78C087550ADC004EDEEF96DF6354724342E3599BABB94389B6E3/scale?width=1200&aspectRatio=1.78&format=webp",
    "posterImage": "https://lumiere-a.akamaihd.net/v1/images/p_drstrangeinthemultiverseofmadness_245_476cabb1.jpeg",
    "duration": "  25min",
    "highestRank": 1,
    "top10Days": 24,
    "top100Days":45,
    "top1000Days": 1385,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "4.8",
    "dislikes": "481",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "aWzlQ2N6qqg",
    "type" : "hollywood",
    "genre" : ["Fantasy", "Action & Adventure", "Science-Fiction"]
  },

  {
    "id": 44,
    "title": "Agatha All Along",
    "year": 2024,
    "rank": 9.,
    "rankChange": "▲ +4",
    "rating": 83,
    "imdbRating": 6.9,
    "imdbVotes": "28k",
    "backdropImage": "https://www.justwatch.com/images/backdrop/320432746/s1440/agatha-house-of-harkness.webp/agatha-house-of-harkness.webp",
    "posterImage": "https://pix1.wapkizfile.info/download/be397283a01febdccbba1e58cb69f5ef/filmy4cab+wapkiz+com/Agatha-All-Along-2024-Season-1-Dual-Audio-Hindi-English-Completed-Web-Series-HD-ESub-(filmycab.us).jpg",
    "duration": "39min",
    "highestRank": 1,
    "top10Days": 12,
    "top100Days": 36,
    "top1000Days": 73,
    "watchOptions": [
  {"platform": "Netflix", "price": "Rs200/-"},
  {"platform": "Amazon Prime", "price": "Rs500/-"}
  ],
    "likes": "1.7",
    "dislikes": "36",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to sync Watch List",
    "videoId" : "nfK6UgLra7g",
    "type" : ["sereis", "hollywood"],
    "seasons":[
      {
        "seasonNumber": 1,
        "episodes": 8,
        "posterImage": "https://www.justwatch.com/images/poster/321582835/s166/season-1.webp"
      }

    ],
    "genre" : ["Science-Fiction", "Comedy", "Drama", "Fantasy", "Action & Adventure"]
  },
  
  {
    "id":45,
    "title": "Shang-Chi and the Legend of the Ten Rings",
    "year": 2021,
    "rank":790,
    "rankChange": "▲ +353",
    "rating": 93,
    "imdbRating": 7.4,
    "imdbVotes": "446k",
    "backdropImage": "https://images.justwatch.com/backdrop/249102371/s1440/shang-chi-and-the-legend-of-the-ten-rings.webp/shang-chi-and-the-legend-of-the-ten-rings.webp",
    "posterImage": "https://i.pinimg.com/originals/0c/74/1d/0c741d63608bcbaf753c956a7c996cab.jpg",
    "duration": "  2h 12min",
    "highestRank": 1,
    "top10Days": 69,
    "top100Days": 83,
    "top1000Days": 705,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "38k",
    "dislikes": "2.5k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "pOEvuzEVh8g",
    "type" : "hollywood",
    "genre" : ["Action & Adventure", "Fantasy", "Science-Fiction"]
  },

  {
    "id":46,
    "title": "Bahubali: The Beginning ",
    "year": 2015,
    "rank":300,
    "rankChange": "+2030",
    "rating": 89,
    "imdbRating": 8.0,
    "imdbVotes": "785k",
    "backdropImage": "https://www.justwatch.com/images/backdrop/37681818/s1440/baahubali-the-beginning.webp/baahubali-the-beginning.webp",
    "posterImage": "https://i.pinimg.com/736x/97/82/3f/97823fec3aad7753f2707638669bdaaa.jpg",
    "duration": "  2h 39min",
    "highestRank": 1,
    "top10Days": 213,
    "top100Days": 1245,
    "top1000Days": 2100,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "38k",
    "dislikes": "200",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "G62HrubdD6o",
    "type" : ["tollywood", "bollywood"],
    "genre" : ["Action & Adventure", "Fantasy", "Drama"]
  },

  {
    "id":47,
    "title": "Bahubali 2: The Conclusion",
    "year": 2017,
    "rank":1155,
    "rankChange": "+5345",
    "rating": 95,
    "imdbRating": 9.0,
    "imdbVotes": "885k",
    "backdropImage": "https://www.justwatch.com/images/backdrop/8710029/s1440/baahubali-2-the-conclusion.webp/baahubali-2-the-conclusion.webp",
    "posterImage": "https://i.pinimg.com/564x/b2/a3/3d/b2a33d968de0cb600e9d3e8877f230b5.jpg",
    "duration": "  2h 39min",
    "highestRank": 1,
    "top10Days": 213,
    "top100Days": 1245,
    "top1000Days": 2100,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "38k",
    "dislikes": "200",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "G62HrubdD6o",
    "type" : ["tollywood", "bollywood"],
    "genre" : ["Action & Adventure", "Fantasy", "Drama"]
  },

  
  {
    "id":48,
    "title": "Mr. Majnu ",
    "year": 2019,
    "rank":1640,
    "rankChange": "+689",
    "rating": 85,
    "imdbRating": 8.3,
    "imdbVotes": "205k",
    "backdropImage": "https://www.justwatch.com/images/backdrop/106287842/s1440/mr-majnu.webp/mr-majnu.webp",
    "posterImage": "https://images.filmibeat.com/img/popcorn/movie_posters/mrmajnu-20190115102200-17038.jpg",
    "duration": "  2h 25min",
    "highestRank": 1,
    "top10Days": 50,
    "top100Days": 432,
    "top1000Days": 300,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "2.2",
    "dislikes": "230",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "ZdHCeHlMcm8",
    "type" : "tollywood",
    "genre" : ["Drama", "Romance"]
  },

  
  {
    "id":49,
    "title": "Ala Vaikunthapurramuloo",
    "year": 2020,
    "rank":108,
    "rankChange": "+3000",
    "rating": 89,
    "imdbRating": 8.5,
    "imdbVotes": "506k",
    "backdropImage": "https://www.justwatch.com/images/backdrop/265398402/s1440/ala-vaikunthapurramuloo.webp/ala-vaikunthapurramuloo.webp",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BMDBlNzk1MmEtMWJkNS00NDIyLWIxYjUtYjE5OGIzMDU4MjgwXkEyXkFqcGc@._V1_.jpg",
    "duration": "  2h 45min",
    "highestRank": 1,
    "top10Days": 105,
    "top100Days": 500,
    "top1000Days": 1700,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "38k",
    "dislikes": "220",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "52xDIeNaNtw",
    "type" : ["tollywood", "bollywood"],
    "genre" : ["Comedy, Drama", "Action & Adventure"]
  },
  
  
  {
    "id":50,
    "title": "Ravanasura",
    "year": 2023,
    "rank":605,
    "rankChange": "▲ +467",
    "rating": 40,
    "imdbRating": 5.7,
    "imdbVotes": "2.6k",
    "backdropImage": "https://images.justwatch.com/backdrop/304258843/s1440/ravanasura.webp/ravanasura.webp",
    "posterImage": "https://i.pinimg.com/originals/48/61/3e/48613e3dfe4b8d590dbf5c04acbe2bd9.jpg",
    "duration": "  2h 22min",
    "highestRank": 1,
    "top10Days": 4,
    "top100Days": 24,
    "top1000Days": 167,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "77",
    "dislikes": "2.1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "qLGZbo_YjqE",
    "type" : "tollywood",
    "genre" : ["Mystery & Thriller", "Comedy", "Drama", "Action & Adventure", "Crime"]
  },


  
  {
    "id":51,
    "title": "Bholaa",
    "year": 2024,
    "rank":3262,
    "rankChange": "▲ +2513",
    "rating": 53,
    "backdropImage": "https://images.justwatch.com/backdrop/304668096/s1440/bholaa-2022.webp/bholaa-2022.webp",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BYjgxNzY1MjktOTg4Ny00NzU5LWEzNmItMGQyZWYwMjhhNmQxXkEyXkFqcGc@._V1_.jpg",
    "duration": "  2h 24min",
    "highestRank": 1,
    "top10Days": 13,
    "top100Days": 85,
    "top1000Days": 259,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "159K",
    "dislikes": "112",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "K-EMszLvRIQ",
    "type" : "tollywood",
    "genre" : ["Crime", "Mystery & Thriller", "Action & Adventure"]
  },

  
  
  {
    "id":52,
    "title": "DEVARA PART 1",
    "year": 2024,
    "rank":1,
    "rankChange": "▲ +250",
    "backdropImage": "https://images.justwatch.com/backdrop/320975332/s1440/ntr-30.webp/ntr-30.webp",
    "posterImage": "https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2024-01/jr_ntr_devara_glimpse.jpg?VersionId=FO..TRJHzYBdPzgb7_gXZNbgHVzmQqHS&size=750:*",
    "duration": "  2h 50min",
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "78k",
    "dislikes": "3.2k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "Xg0vBOxV2to",
     "type" : ["tollywood", "bollywood"],
    "genre" : ["Mystery & Thriller", "Action & Adventure", "Drama"]
  },


  {
    "id":53,
    "title": "The Umbrella Academy",
    "year": 2019,
    "rank":143,
    "rankChange": "▲ +7",
    "rating": 92,
    "imdbRating": 7.8,
    "imdbVotes": "293k",
    "backdropImage": "https://images.justwatch.com/backdrop/286521525/s1440/the-umbrella-academy.webp/the-umbrella-academy.webp",
    "posterImage": "https://m.media-amazon.com/images/I/61Bn5CFCpJL._AC_UF894,1000_QL80_.jpg",
    "duration": "  2h 5min",
    "highestRank": 2,
    "top10Days": 14,
    "top100Days":237,
    "top1000Days": 1871,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "29k",
    "dislikes": "2.4k",
    "watchlistText": "List",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "0DAmWHxeoKw",
    "type" : ["series", "hollywood"],
         "seasons": [ // Add season details here
          {
            "seasonNumber": 1,
            "episodes": 10,
            "posterImage": "https://www.justwatch.com/images/poster/286498756/s166/season-1.webp"
          },
    
          {
            "seasonNumber": 2,
            "episodes": 10,
            "posterImage": "https://www.justwatch.com/images/poster/192088275/s166/season-2.webp"
          },
    
          {
            "seasonNumber": 3,
            "episodes": 10,
            "posterImage": "https://www.justwatch.com/images/poster/286383023/s166/season-3.webp"
          },
    
          {
            "seasonNumber": 4,
            "episodes": 10,
            "posterImage": "https://www.justwatch.com/images/poster/319805788/s166/season-4.webp"
          },
        ],
        "genre": ["Action & Adventure", "Comedy", "Drama", "Fantasy", "Science-Fiction"]

  },

  
  {
    "id":54,
    "title": "Gladiator II",
    "year": 2024,
    "rating": 85,
    "rank":500,
    "rankChange": "▲ +4300",
    "imdbRating": 6.3,
    "imdbVotes": "593k",
    "backdropImage": "https://images.justwatch.com/backdrop/318611814/s1440/gladiator-2.webp/gladiator-2.webp",
    "posterImage": "https://www.mensjournal.com/.image/t_share/MjA3NzA0NzgxMTA2NTIxNzUz/gladiator-2-poster.jpg",
    "duration": "  2h 30min",
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "79",
    "dislikes": "6",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "Ts0N8swyWFI",
    "type" : "hollywood",
    "genre": ["Drama", "Action & Adventure"],

  },


  {
    "id":55,
    "title": "Thunderbolts*",
    "year": 2025,
    "rank":123,
    "rankChange": "▲ +78",
    "rating": 95,
    "imdbRating": 8.8,
    "imdbVotes": "490k",
    "backdropImage": "https://images.justwatch.com/backdrop/300660467/s1440/thunderbolts.webp/thunderbolts.webp",
    "posterImage": "https://i.pinimg.com/564x/f9/be/23/f9be23cdee7da4d4d05a4e95c6c9516c.jpg",
    "duration": "  2h 0min",
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "38k",
    "dislikes": "10k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "v-94Snw-H4o",
    "type" : "hollywood",
    "genre": ["Action & Adventure", "Crime", "Drama", "Fantasy", "Science-Fiction"]
  },

  {
    "id":56,
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "year": 2001,
    "rank":123,
    "rankChange": "▲ +148",
    "rating": 96,
    "imdbRating": 8.9,
    "imdbVotes": "2m",
    "backdropImage": "https://c4.wallpaperflare.com/wallpaper/228/806/372/the-lord-of-the-rings-the-lord-of-the-rings-the-fellowship-of-the-ring-wallpaper-preview.jpg",
    "posterImage": "https://images.moviesanywhere.com/198e228b071c60f5ad57e5f62fe60029/ff22cad6-2218-414d-b853-3f95d76905c7.jpg",
    "duration": "  2h 58min",
    "highestRank": 5,
    "top10Days": 2,
    "top100Days":532,
    "top1000Days": 2983,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "57k",
    "dislikes": "2.1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "V75dMMIW2B4",
     "type" : "hollywood",
    "genre": ["Action & Adventure", "Fantasy", "Drama"]
  },

  {
    "id":57,
    "title": "It Follows",
    "year": 2015,
    "rank":234,
    "rankChange": "▲ +330",
    "rating": 89,
    "imdbRating": 6.8,
    "imdbVotes": "277k",
    "backdropImage": "https://images.justwatch.com/backdrop/183675309/s1440/it-follows.webp/it-follows.webp",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BNGZiYWRiYjAtODU0NS00YzAzLTk2MzQtZGVlMzVjM2M3MGQ3XkEyXkFqcGc@._V1_.jpg",
    "duration": "  1h 41min",
    "highestRank": 3,
    "top10Days": 9,
    "top100Days":2177,
    "top1000Days": 1871,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "29k",
    "dislikes": "2.4k",
    "watchlistText": "List",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "HkZYbOH0ujw",
    "type" : "hollywood",
    "genre": ["Horror", "Mystery & Thriller"]
  },




  {
    "id":58,
    "title": "Spin the Bottle",
    "year": 2024,
    "rank":130,
    "rankChange": "▲ +25",
    "rating": 47,
    "imdbRating": 7.0,
    "imdbVotes": "293k",
    "backdropImage": "https://images.justwatch.com/backdrop/320945962/s1440/.webp.webp",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BZmJjOWJkZmUtZmFhMi00NTg1LWI5Y2QtNTYxOGI4N2M2NDhlXkEyXkFqcGc@._V1_.jpg",
    "duration": "  1h 23min",
    "highestRank": 1,
    "top10Days": 14,
    "top100Days":12,
    "top1000Days": 183,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "129",
    "dislikes": "47",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "KkSk2xG82Zs",
    "type" : "hollywood",
    "genre": ["Horror"]
  },

  {
    "id":59,
    "title": "Small Things Like These",
    "year": 2024,
    "rank":13,
    "rankChange": "▲ +24",
    "rating": 47,
    "imdbRating": 7.5,
    "imdbVotes": "428k",
    "backdropImage": "https://images.justwatch.com/backdrop/312101749/s1440/small-things-like-these.webp/small-things-like-these.webp",
    "posterImage": "https://www.thehollywoodnews.com/wp-content/uploads/1_Art_SmallThingsLikeThese-691x1024.jpg",
    "duration": "  1h 38min",
    "highestRank": 1,
    "top10Days": 24,
    "top100Days":45,
    "top1000Days": 238,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "129",
    "dislikes": "47",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "Nqwn5Y_Y4xs",
    "type" : "hollywood",
    "genre": ["Drama", "History"]
  },

  {
    "id":60,
    "title": "Brothers",
    "year": 2024,
    "rank":23,
    "rankChange": "▲ +24",
    "rating": 47,
    "imdbRating": 6.5,
    "imdbVotes": "128k",
    "backdropImage": "https://m.media-amazon.com/images/M/MV5BNWJiZjM4ZGMtNjlkNC00YTMxLWEzNmQtOTA2YzE4MDA4MmIwXkEyXkFqcGc@._V1_.jpg",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BNzQ4Njg3Mjg5Nl5BMl5BanBnXkFtZTgwODE5MDg1NjE@._V1_.jpg",
    "duration": "  1h 28min",
    "highestRank": 1,
    "top10Days": 14,
    "top100Days":57,
    "top1000Days": 138,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "129",
    "dislikes": "47",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "QuRSCU0tOKs",
    "type" : "bollywood",
    "genre": ["Drama", "Sports", "Action & Adventure"]
  },

  {
    "id":61,
    "title": "The Fire Inside",
    "year": 2024,
    "rank":46,
    "rankChange": "▲ +4",
    "rating": 47,
    "imdbRating": 7.5,
    "imdbVotes": "56k",
    "backdropImage": "https://images.justwatch.com/backdrop/319494366/s1440/flint-strong.webp/flint-strong.webp",
    "posterImage": "https://thesource.com/wp-content/uploads/2024/09/unnamed-6-1.jpg",
    "duration": "  1h 49min",
    "highestRank": 1,
    "top10Days": 14,
    "top100Days":17,
    "top1000Days": 38,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "129",
    "dislikes": "47",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "Z4EthHjPg-A",
    "type" : "hollywood",
    "genre": ["Drama", "Sports", "comedy"]
  },

  {
    "id":62,
    "title": "Salem's Lot ",
    "year": 2024,
    "rank":26,
    "rankChange": "▲ +1",
    "rating": 84,
    "imdbRating": 6.8,
    "imdbVotes": "82k",
    "backdropImage": "https://images.justwatch.com/backdrop/320706218/s1440/salems-lot.webp/salems-lot.webp",
    "posterImage": "https://posterspy.com/wp-content/uploads/2022/03/salems-lot-twitter.jpg",
    "duration": "  1h 53min",
    "highestRank": 2,
    "top10Days": 114,
    "top100Days":127,
    "top1000Days": 238,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "129",
    "dislikes": "47",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "QtVzKkv03ic",
    "type" : "hollywood",
    "genre": ["Horror","Mystery & Thriller"]
  },

  {
    "id":63,
    "title": "Howl's Moving Castle",
    "year": 2004,
    "rank":3480,
    "rankChange": "▲ +2738",
    "rating": 96,
    "imdbRating": 8.2,
    "imdbVotes": "463k",
    "backdropImage": "https://images.justwatch.com/backdrop/9036037/s1440/howls-moving-castle.webp/howls-moving-castle.webp",
    "posterImage": "https://m.media-amazon.com/images/I/81nY1K-OigL.jpg",
    "duration": "  1h 59min",
    "highestRank": 18,
    "top10Days": 0,
    "top100Days":2,
    "top1000Days": 385,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "117",
    "dislikes": "565",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "iwROgK94zcM",
    "type" : "anime",
    "genre": ["Fantasy", "Animation", "Action & Adventure", "Music & Musical, Drama", "Kids & Family"]

  },
 
  {
    "id":64,
    "title": "Saripodhaa Sanivaaram",
    "year": 2024,
    "rank":4,
    "rankChange": "▲ +9",
    "rating": 45,
    "imdbRating": 7.2,
    "imdbVotes": "4.6k",
    "backdropImage": "https://images.justwatch.com/backdrop/319530142/s1440/saripodhaa-sanivaaram.webp/saripodhaa-sanivaaram.webp",
    "posterImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR93OSZF2pjPVQOkxaIMgS_BlBPuRFaWJ1ZaA&s",
    "duration": "  2h 50min",
    "highestRank": 2,
    "top10Days": 8,
    "top100Days":17,
    "top1000Days": 34,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "39",
    "dislikes": "30",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "dkx07ZvjKE4",
    "type" : "tollywood",
    "genr": ["Action & Adventure","Mystery & Thriller", "Drama"]
  },

  {
    "id":65,
    "title": "The Greatest of All Time",
    "year": 2024,
    "rank":1,
    "rankChange": "▲ +9",
    "rating": 37,
    "imdbRating": 6.6,
    "imdbVotes": "14k",
    "backdropImage": "https://images.justwatch.com/backdrop/320516448/s1440/thalapathy-68.webp/thalapathy-68.webp",
    "posterImage": "https://preview.redd.it/the-greatest-of-all-time-new-poster-v0-21g6479eu68d1.jpeg?width=640&crop=smart&auto=webp&s=aa8e6f8ab02c9672498e13a2e3e5a296dbe26ff9",
    "duration": "  3h 3min",
    "highestRank": 1,
    "top10Days": 5,
    "top100Days":29,
    "top1000Days": 31,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "20",
    "dislikes": "18",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "tb37SwBvRoQ",
     "type" : "tollywood",
    "genre": ["Drama", "Mystery & Thriller", "Action & Adventure"]
  },
  
  {
    "id":66,
    "title": "GHOSTBUSTERS",
    "year": 2016,
    "rank":149,
    "rankChange": "▲ +610",
    "rating": 59,
    "imdbRating": 6.8,
    "imdbVotes": "250k",
    "backdropImage": "https://images.justwatch.com/backdrop/178693367/s1440/ghostbusters.webp/ghostbusters.webp",
    "posterImage": "https://devdiscourse.blob.core.windows.net/devnews/19_10_2021_08_25_17_529654.jpg",
    "duration": "  1h 57min",
    "highestRank": 1,
    "top10Days": 20,
    "top100Days":121,
    "top1000Days": 921,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "5.6",
    "dislikes": "3.7",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "HpOBXh02rVc",
     "type" : "hollywood",
    "genre": ["Action & Adventure","Science-fiction", "Fantasy", "Comedy"]
  },

  {
    "id":67,
    "title": "Double Ismart",
    "year": 2024,
    "rank":39,
    "rankChange": "▲ +31",
    "rating": 25,
    "imdbRating": 2.9,
    "imdbVotes": "1.5k",
    "backdropImage": "https://images.justwatch.com/backdrop/319810520/s1440/double-ismart.webp/double-ismart.webp",
    "posterImage": "https://stat4.bollywoodhungama.in/wp-content/uploads/2024/07/Double-Ismart-322x483.jpeg",
    "duration": "  2h 36min",
    "highestRank": 1,
    "top10Days": 7,
    "top100Days":34,
    "top1000Days": 53,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "20",
    "dislikes": "34",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "OOhbzK-BBnc",
     "type" : "tollywood",
    "genre": ["Action & Adventure","Mystery & Thriller", "Drama"]
  },

  {
    "id":68,
    "title": "Salaar",
    "year": 2023,
    "rank":21,
    "rankChange": "▲ +347",
    "rating": 64,
    "imdbRating": 6.6,
    "imdbVotes": "70k",
    "backdropImage": "https://images.justwatch.com/backdrop/310502802/s1440/salaar.webp/salaar.webp",
    "posterImage": "https://wallpapercave.com/wp/wp13540562.jpg",
    "duration": "  2h 55min",
    "highestRank": 1,
    "top10Days": 76,
    "top100Days":249,
    "top1000Days": 311,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "2.1k",
    "dislikes": "175",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "HihakYi5M2I",
     "type" : "tollywood",
    "genre": ["Crime", "Drama", "Mystery & Thriller", "Action & Adventure"]
  },

  {
    "id":69,
    "title": "KGF:Chapter1",
    "year": 2018,
    "rank":21,
    "rankChange": "▲ +947",
    "rating": 92,
    "imdbRating": 8.6,
    "imdbVotes": "101k",
    "backdropImage": "https://www.justwatch.com/images/backdrop/131930909/s1440/k-g-f-chapter-1.webp/k-g-f-chapter-1.webp",
    "posterImage": "https://stat4.bollywoodhungama.in/wp-content/uploads/2018/12/KGF.jpg",
    "duration": "  2h 36min",
    "highestRank": 1,
    "top10Days": 166,
    "top100Days":506,
    "top1000Days": 2098,
    "watchOptions": [
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "2.4k",
    "dislikes": "175",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "KfsY-qwBS0",
    "type" : "tollywood",
    "genre": ["Action & Adventure", "Crime", "Mystery & Thriller", "Drama"]
  },

    {
    "id":70,
    "title": "KGF:Chapter2",
    "year": 2022,
    "rank":77,
    "rankChange": "▲ +30",
    "rating": 98,
    "imdbRating": 8.3,
    "imdbVotes": "158k",
    "backdropImage": "https://www.justwatch.com/images/backdrop/259100241/s1440/k-g-f-chapter-2.webp/k-g-f-chapter-2.webp",
    "posterImage": "https://img.rgstatic.com/content/movie/e05e9437-c969-42fa-9b55-e1ce36aeb81f/poster-500.jpg",
    "duration": "  2h 46min",
    "highestRank": 1,
    "top10Days": 179,
    "top100Days":3490,
    "top1000Days": 5011,
    "watchOptions": [
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "371",
    "dislikes": "175",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "JKa05nyUmuQ",
    "type" : "tollywood",
    "genre": ["Crime", "Drama", "Mystery & Thriller", "Action & Adventure"]
  },

  {
 
    "id":71,
    "title": "Aavesham",
    "year": 2024,
    "rank":43,
    "rankChange": "▲ +32",
    "rating": 82,
    "imdbRating": 7.8,
    "imdbVotes": "21k",
    "backdropImage": "https://images.justwatch.com/backdrop/313630178/s1440/aavesham-2024.webp/aavesham-2024.webp",
    "posterImage": "https://image.tmdb.org/t/p/original/k5RWPaNjgRcNvGoawYaQHQwyctI.jpg",
    "duration": "  2h 38min",
    "highestRank": 1,
    "top10Days": 68,
    "top100Days":160,
    "top1000Days": 177,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "288",
    "dislikes": "48",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "UttccYQXpTM",
     "type" : "tollywood",
    "genre": ["Comedy", "Action & Adventure"]
  },
  {

    "id":72,
    "title": "Bhediya",
    "year": 2022,
    "rank":64,
    "rankChange": "▲ +79",
    "rating": 81,
    "imdbRating": 6.7,
    "imdbVotes": "26k",
    "backdropImage": "https://images.justwatch.com/backdrop/301523379/s1440/bhediya.webp/bhediya.webp",
    "posterImage": "https://wallpapercave.com/wp/wp12167960.jpg",
    "duration": "  2h 36min",
    "highestRank": 1,
    "top10Days": 179,
    "top100Days":319,
    "top1000Days": 673,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "625",
    "dislikes": "122",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "d_BPlvbw_ok",
    "type" : "bollywood",
    "genre": ["Comedy", "Horror", "Mystery & Thriller"]

  },

  {
 
    "id":73,
    "title": "Ulajh",
    "year": 2024,
    "rank":8,
    "rankChange": "▲ +4",
    "rating": 20,
    "imdbRating": 6.7,
    "imdbVotes": "21k",
    "backdropImage": "https://images.justwatch.com/backdrop/321200667/s1440/ulajh.webp/ulajh.webp",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BYmJiYTQ4NWYtNDFmYS00NjJlLWJhZDItMGY4OWJiMDE0N2UyXkEyXkFqcGc@._V1_.jpg",
    "duration": "  2h 14min",
    "highestRank": 2,
    "top10Days": 5,
    "top100Days":10,
    "top1000Days": 51,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "13",
    "dislikes": "28",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "Tk1EQD7vGiY",
    "type" : "bollywood",
    "genre": ["Drama", "Mystery & Thriller"]
  },

  {

    "id":74,
    "title": "Rathnam",
    "year": 2024,
    "rank":30,
    "rankChange": "▲ +33",
    "rating": 33,
    "imdbRating": 5.4,
    "imdbVotes": "3.4k",
    "backdropImage": "https://images.justwatch.com/backdrop/316453487/s1440/rathnam.webp/rathnam.webp",
    "posterImage": "https://static.moviecrow.com/gallery/20240108/224283-Rathanam.jpeg",
    "duration": "  2h 39min",
    "highestRank": 4,
    "top10Days": 5,
    "top100Days":27,
    "top1000Days": 101,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "16",
    "dislikes": "17",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "eeZAC976hjw",
    "type" : "tollywood",
    "genre": ["Action & Adventure", "Romance",]
  },

  
  {

    "id":75,
    "title": "Tholi Prema",
    "year": 2018,
    "rank":3365,
    "rankChange": "▲ +2722",
    "rating": 77,
    "imdbRating": 7.2,
    "imdbVotes": "3.7k",
    "backdropImage": "https://images.justwatch.com/backdrop/42954185/s1440/tholi-prema-2018.webp/tholi-prema-2018.webp",
    "posterImage": "https://files.prokerala.com/movies/pics/800/tholi-prema-posters-84059.jpg",
    "duration": "  2h 26min",
    "highestRank": 2,
    "top10Days": 18,
    "top100Days":118,
    "top1000Days":1300,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "109",
    "dislikes": "17",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "nS9ZM4R1DJw",
    "type" : "tollywood",
    "genre": ["Romantic", "Kids & Family", "Comedy"]
  },

  {

    "id":76,
    "title": "A Aa",
    "year": 2016,
    "rank":3333,
    "rankChange": "▲ +2548",
    "rating": 79,
    "imdbRating": 7.8,
    "imdbVotes": "3.9k",
    "backdropImage": "https://images.justwatch.com/backdrop/319043243/s1440/a-aa.webp/a-aa.webp",
    "posterImage": "https://i.pinimg.com/550x/be/b2/3d/beb23d971116f4cea5859a41516673f1.jpg",
    "duration": "  2h 26min",
    "highestRank": 2,
    "top10Days": 18,
    "top100Days":118,
    "top1000Days":1300,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "109",
    "dislikes": "17",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "SU7h7Nan_4o",
    "type" : "tollywood",
    "genre": ["Romance", "Drama", "Kids & Family", "Comedy"]
  },

  {
 
    "id":77,
    "title": "Manjummel Boys",
    "year": 2024,
    "rank":460,
    "rankChange": "▲ +461",
    "rating": 89,
    "imdbRating": 8.3,
    "imdbVotes": "2.2k",
    "backdropImage": "https://images.justwatch.com/backdrop/311759378/s1440/manjummel-boys.webp/manjummel-boys.webp",
    "posterImage": "https://img.nowrunning.com/content/movie/2023/manju-27581/Stills/manjummelboys_2024212.jpg",
    "duration": "  2h 15min",
    "highestRank": 1,
    "top10Days": 54,
    "top100Days":167,
    "top1000Days": 225,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "275",
    "dislikes": "21",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "rqBuKT_8dMY",
    "type" : "tollywood",
    "genre": ["Drama", "Mystery & Thriller", "Action & Adventure"]
  },
  {

    "id":78,
    "title": "12th Fail",
    "year": 2023,
    "rank":83,
    "rankChange": "▲ +78",
    "rating": 83,
    "imdbRating": 8.8,
    "imdbVotes": "130k",
    "backdropImage": "https://images.justwatch.com/backdrop/312357660/s1440/12th-fail.webp/12th-fail.webp",
    "posterImage": "https://image.tmdb.org/t/p/original/26xY5efr080WgR8mGhFiwSBhh9e.jpg",
    "duration": "  2h 28min",
    "highestRank": 1,
    "top10Days": 127,
    "top100Days":264,
    "top1000Days": 346,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "869",
    "dislikes": "147",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "WeMJo701mvQ",
    "type" : "bollywood",
    "genre": ["Drama"]
  },

  {
 
    "id":79,
    "title": "Bhimaa",
    "year": 2024,
    "rank":235,
    "rankChange": "▲ +20",
    "rating": 5.2,
    "imdbRating": 986,
    "imdbVotes": "87k",
    "backdropImage": "https://images.justwatch.com/backdrop/315907160/s1440/bhimaa.webp/bhimaa.webp",
    "posterImage": "https://cdn.gulte.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-12-at-10.35.16-AM-scaled.jpeg",
    "duration": "2h 21min",
    "highestRank": 18,
    "top10Days": 0,
    "top100Days":16,
    "top1000Days": 131,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "1",
    "dislikes": "1",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "P3t--CmbibE",
    "type": "tollywood",
    "genre": ["Action & Adventure", "Fantasy"]
  },

  {

    "id":80,
    "title": "Pushpa: The Rise",
    "year": 2021,
    "rank":1397,
    "rankChange": "▲ +411",
    "rating": 82,
    "imdbRating": 7.6,
    "imdbVotes": "90k",
    "backdropImage": "https://images.justwatch.com/backdrop/257781354/s1440/pushpa.webp/pushpa.webp",
    "posterImage": "https://images.sr.roku.com/idType/roku/context/global/id/b29c7a063ab25b81bd7d11c56f126f27/images/gracenote/assets/p21200456_v_v8_aa.jpg/magic/396x0/filters:quality(70)",
    "duration": "2h 59min",
    "highestRank": 1,
    "top10Days": 127,
    "top100Days":622,
    "top1000Days": 1088,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "2.6",
    "dislikes": "537",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "pKctjlxbFDQ",
    "type" : "tollywood",
    "genre": ["Action & Adventure", "Drama", "Mystery & Thriller", "Crime"]
  },

  {

    "id":81,
    "title": "The Family Star",
    "year": 2024,
    "rank":1123,
    "rankChange": "▲ +476",
    "rating": 37,
    "imdbRating": 5.3,
    "imdbVotes": "4.8k",
    "backdropImage": "https://m.media-amazon.com/images/S/pv-target-images/b815768031a3ecc44dc665c6a2e5b223cda2c4b4812f2918f40f025845363239.jpg",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BOTRjOTM5YzktNzZkMS00ODFhLWJjNGQtYTMwNjRmZmFlMzM5XkEyXkFqcGc@._V1_.jpg",
    "duration": "2h 39min",
    "highestRank": 1,
    "top10Days": 50,
    "top100Days":118,
    "top1000Days": 190,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "69",
    "dislikes": "87",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "jWVbxd80oyc",
    "type" : "tollywood",
    "genre": ["Action & Adventure", "Drama", "Romance", "Comedy"]
  },

  {
 
    "id":82,
    "title": "Rockstar",
    "year": 2011,
    "rank":670,
    "rankChange": "▲ +659",
    "rating": 86,
    "imdbRating": 7.8,
    "imdbVotes": "51k",
    "backdropImage": "https://images.justwatch.com/backdrop/244145151/s1440/rockstar.webp/rockstar.webp",
    "posterImage": "https://stat4.bollywoodhungama.in/wp-content/uploads/2016/03/Rockstar-Poster-Feature.jpg",
    "duration": "2h 39min",
    "highestRank": 4,
    "top10Days": 11,
    "top100Days":580,
    "top1000Days": 2344,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "481",
    "dislikes": "61",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "bD5FShPZdpw",
    "type" : "bollywood",
    "genre": ["Drama", "Music & Musical", "Romance"]
  },

    {
 
    "id":83,
    "title": "War",
    "year": 2019,
    "rank":856,
    "rankChange": "▲ +477",
    "rating": 70,
    "imdbRating": 7.8,
    "imdbVotes": "40k",
    "backdropImage": "https://www.justwatch.com/images/backdrop/151180234/s1440/war-2019.webp/war-2019.webp",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BZWVhZDJiYTctYTA4NS00NWVjLWEzNGQtMmY4YTQ3MTNlNTZjXkEyXkFqcGc@._V1_.jpg",
    "duration": "2h 32min",
    "highestRank": 1,
    "top10Days": 10,
    "top100Days":159,
    "top1000Days": 1424,
    "watchOptions": [
      {"platform": "Apple Tv+", "price": "Rs1500/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "481",
    "dislikes": "61",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "tQ0mzXRk",
    "type" : "bollywood",
    "genre": ["Mystery & Thriller", "Action & Adventure"]
  },

  {
    "id":84,
    "title": "Chandu Champion",
    "year": 2024,
    "rank":688,
    "rankChange": "▲ +600",
    "rating": 71,
    "imdbRating": 7.9,
    "imdbVotes": "2m",
    "backdropImage": "https://images.justwatch.com/backdrop/319469589/s1440/chandu-champion.webp/chandu-champion.webp",
    "posterImage": "https://upload.wikimedia.org/wikipedia/hi/archive/d/df/20240918230235%21Chandu_Champion_film_poster.jpeg",
    "duration": "2h 2min",
    "highestRank": 2,
    "top10Days": 13,
    "top100Days":666,
    "top1000Days": 1130,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "96",
    "dislikes": "26",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "IHQQK_Wn5DM",
    "type": "bollywood",
    "genre": ["War & Military", "Action & Adventure", "Drama", "History", "Sport"]
  },

    {
    "id":85,
    "title": "Chhichore",
    "year": 2019,
    "rank":754,
    "rankChange": "▲ +600",
    "rating": 93,
    "imdbRating": 8.3,
    "imdbVotes": "2m",
    "backdropImage": "https://www.justwatch.com/images/backdrop/306657607/s1440/chhichhore.webp/chhichhore.webp",
    "posterImage": "https://i.scdn.co/image/ab67616d0000b273eaa6b4bfb5954ee5a5a8ce9e",
    "duration": "2h 26min",
    "highestRank": 2,
    "top10Days": 1,
    "top100Days":100,
    "top1000Days": 1608,
    "watchOptions": [
      {"platform": "Hotstar", "price": "Rs200/-"}
    ],
    "likes": "9.6k",
    "dislikes": "26",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "t56jPOpGFts",
    "type": "bollywood",
    "genre": ["Drama", "Romance", "Comedy"]
  },
  
  {
    "id":86,
    "title": "Raees",
    "year": 2017,
    "rank":2007,
    "rankChange": "▲ +1188",
    "rating": 59,
    "imdbRating": 6.6,
    "imdbVotes": "51k",
    "backdropImage": "https://www.justwatch.com/images/backdrop/240523726/s1440/raees.webp/raees.webp",
    "posterImage": "https://i.pinimg.com/736x/22/ae/81/22ae8160991e1cb4d28b6b1b70579d5b.jpg",
    "duration": "2h 23min",
    "highestRank": 2,
    "top10Days": 13,
    "top100Days":666,
    "top1000Days": 113,
    "watchOptions": [
      {"platform": "Amazon Prime Video", "price": "Rs200/-"},
      {"platform": "Netflix", "price": "Rs500/-"},
    ],
    "likes": "9.6k",
    "dislikes": "26",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "t56jPOpGFts",
    "type": "bollywood",
    "genre": ["Mystery & Thriller", "Action & Adventure", "Crime", "Drama"]
  },


  {
 
    "id":87,
    "title": "Joker",
    "year": 2019,
    "rank":25,
    "rankChange": "▲ +17",
    "rating": 94,
    "imdbRating": 8.4,
    "imdbVotes": "31k",
    "backdropImage": "https://images.justwatch.com/backdrop/147680055/s1440/joker-2019.webp/joker-2019.webp",
    "posterImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTqLyEBucif__c02XSXE5UEVsqcnJyW4n-ng&s",
    "duration": "2h 2min",
    "highestRank": 1,
    "top10Days": 138,
    "top100Days":511,
    "top1000Days": 1853,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "56k",
    "dislikes": "3.7k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "a3B0bePcfl4",
    "type": "hollywood",
    "genre": ["Crime", "Mystery & Thriller", "Drama"]
  },

  {

    "id":88,
    "title": "John Wick",
    "year": 2014,
    "rank":295,
    "rankChange": "▲ +184",
    "rating": 96,
    "imdbRating": 7.4,
    "imdbVotes": "755k",
    "backdropImage": "https://images.justwatch.com/backdrop/8697369/s1440/john-wick.webp/john-wick.webp",
    "posterImage": "https://rukminim2.flixcart.com/image/850/1000/jmz7csw0/poster/r/z/5/medium-wall-poster-john-wick-hd-movie-poster-18x12pow-538-original-imaf9rgzmugvzxry.jpeg?q=90&crop=false",
    "duration": "1h 54min",
    "highestRank": 1,
    "top10Days": 91,
    "top100Days":1532,
    "top1000Days": 3198,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "47k",
    "dislikes": "1.6k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "C0BMx-qxsP4",
    "type": "hollywood",
    "genre": ["Action & Adventure", "Mystery & Thriller", "Crime"]
  },
  
  {

    "id":89,
    "title": "777 Charlie",
    "year": 2022,
    "rank":108,
    "rankChange": "▲ +63",
    "rating": 83,
    "imdbRating": 8.7,
    "imdbVotes": "11k",
    "backdropImage": "https://images.justwatch.com/backdrop/279111882/s1440/777-charlie.webp/777-charlie.webp",
    "posterImage": "https://pbs.twimg.com/media/E3NRfpEVcAQcOVW.jpg",
    "duration": "2h 46min",
    "highestRank": 2,
    "top10Days": 102,
    "top100Days":563,
    "top1000Days": 855,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "523",
    "dislikes": "85",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "lzr2PJXeHww",
    "type": "tollywood",
    "genre": ["Action & Adventure", "Comedy", "Drama"]
  },

  {
 
    "id":90,
    "title": "Jailer",
    "year": 2023,
    "rank":4010,
    "rankChange": "▲ +3432",
    "rating": 74,
    "imdbRating": 7.7,
    "imdbVotes": "9k",
    "backdropImage": "https://images.justwatch.com/backdrop/302068761/s1440/jailer.webp/jailer.webp",
    "posterImage": "https://ih1.redbubble.net/image.5157749045.2422/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
    "duration": "2h 45min",
    "highestRank": 2,
    "top10Days": 28,
    "top100Days":131,
    "top1000Days": 404,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "404",
    "dislikes": "117",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId":"xenOE1Tma0A",
    "type": "tollywood",
    "genre": ["Action & Adventure", "Crime", "Mystery & Thriller", "Comedy"]
  },

  {

    "id":91,
    "title": "Drishyam 2",
    "year": 2022,
    "rank":511,
    "rankChange": "▲ +410",
    "rating": 80,
    "imdbRating": 8.2,
    "imdbVotes": "46k",
    "backdropImage": "https://images.justwatch.com/backdrop/302032241/s1440/drishyam-2-2022.webp/drishyam-2-2022.webp",
    "posterImage": "https://resizing.flixster.com/xuDDnS7s-nZAIs-1-EUzZNNZ084=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23271406_v_v9_aa.jpg",
    "duration": "2h 20min",
    "highestRank": 1,
    "top10Days": 44,
    "top100Days":142,
    "top1000Days": 613,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "574",
    "dislikes": "121",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "cxA2y9Tgl7o",
    "type": "bollywood",
    "genre": ["Mystery & Thriller", "Crime", "Drama"]
  },

  {

    "id":92,
    "title": "Leo",
    "year": 2023,
    "rank":381,
    "rankChange": "▲ +243",
    "rating": 68,
    "imdbRating": 7.2,
    "imdbVotes": "63k",
    "backdropImage": "https://images.justwatch.com/backdrop/309143388/s1440/leo-2023.webp/leo-2023.webp",
    "posterImage": "https://i.pinimg.com/originals/46/37/db/4637dbeccdf457d9086f4e19e3737863.jpg",
    "duration": "2h 43min",
    "highestRank": 1,
    "top10Days": 57,
    "top100Days":125,
    "top1000Days": 358,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "369",
    "dislikes": "143",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "Po3jStA673E",
    "type": "tollywood",
    "genre": ["Mystery & Thriller", "Action & Adventure", "Crime", "Drama"]
  },

  {
 
    "id":93,
    "title": "Kakuda",
    "year": 2024,
    "rank":290,
    "rankChange": "▲ +899",
    "rating": 43,
    "imdbRating": 6.4,
    "imdbVotes": "6.9k",
    "backdropImage": "https://images.justwatch.com/backdrop/319553669/s1440/kakuda.webp/kakuda.webp",
    "posterImage": "https://media5.bollywoodhungama.in/wp-content/uploads/2024/07/Kakuda-2-322x402.jpg",
    "duration": "2h 57min",
    "highestRank": 29,
    "top10Days": 0,
    "top100Days":9,
    "top1000Days": 82,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "19",
    "dislikes": "11",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "5V8Z3h9oVMc",
    "type": "bollywood",
    "genre": ["Horror", "Comedy"]
  },

  {

    "id":94,
    "title": "Yeh Jawaani Hai Deewani",
    "year": 2013,
    "rank":541,
    "rankChange": "▲ +87",
    "rating": 75,
    "imdbRating": 6.7,
    "imdbVotes": "8.9k",
    "backdropImage": "https://www.justwatch.com/images/backdrop/176326026/s1440/yeh-jawaani-hai-deewani.webp/yeh-jawaani-hai-deewani.webp",
    "posterImage": "https://i.pinimg.com/originals/34/5f/ec/345fecf5e269212d9a287508648ec173.jpg",
    "duration": "53min",
    "highestRank": 2,
    "top10Days": 17,
    "top100Days":87,
    "top1000Days": 917,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "144",
    "dislikes": "33",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "Rbp2XUSeUNE",
    "type": "bollywood",
    "genre": ["Romance", "Comedy", "Drama"]
  },

  {

    "id":95,
    "title": "Teri Baaton Mein Aisa Uljha Jiya",
    "year": 2024,
    "rank":1243,
    "rankChange": "▲ +146",
    "rating": 63,
    "imdbRating": 6.3,
    "imdbVotes": "5.2k",
    "backdropImage": "https://images.justwatch.com/backdrop/308601827/s1440/untitled-shahid-kapoor-kriti-sanon-film.webp/untitled-shahid-kapoor-kriti-sanon-film.webp",
    "posterImage": "https://th-i.thgim.com/public/entertainment/movies/4pv6z/article67726624.ece/alternates/FREE_1200/VS--1ShahidKapoorshahidkapoorX-0%E2%80%9905%E2%80%9D.png",
    "duration": "2h 21min",
    "highestRank": 1,
    "top10Days": 38,
    "top100Days":122,
    "top1000Days": 239,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "142",
    "dislikes": "62",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "w_N6d4ec79c",
    "type": "bollywood",
    "genre": ["Comedy", "Drama", "Romance", "Science-Fiction"]
  },

  {
 
    "id":96,
    "title": "Kabir Singh",
    "year": 2019,
    "rank":459,
    "rankChange": "▲ +1209",
    "rating": 95,
    "imdbRating": 7.6,
    "imdbVotes": "130k",
    "backdropImage": "https://www.justwatch.com/images/backdrop/134469354/s1440/kabir-singh.webp/kabir-singh.webp",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BNjU5ZTljMDEtNzg5Ny00OTliLWI3NmYtOTE1ZDg3NTNkMDM0XkEyXkFqcGc@._V1_QL75_UX480_.jpg",
    "duration": "1h 58min",
    "highestRank": 1,
    "top10Days": 36,
    "top100Days":247,
    "top1000Days": 1591,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Apple TV+", "price": "Rs1500/-"}
    ],
    "likes": "17k",
    "dislikes": "100",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "1ovgxN2VWNc",
    "type": "bollywood",
    "genre": ["Drama", "Romance", "Action & Adventure"]
   
  },

  {

    "id":97,
    "title": "Yodha",
    "year": 2024,
    "rank":1402,
    "rankChange": "▲ +152",
    "rating": 55,
    "imdbRating": 5.7,
    "imdbVotes": "8.4k",
    "backdropImage": "https://images.justwatch.com/backdrop/312812342/s1440/yodha-2022.webp/yodha-2022.webp",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BMTIxYmY0YzUtYTkxNS00ZDEwLTg5MGEtODZkOWRmNjkzNWFkXkEyXkFqcGc@._V1_.jpg",
    "duration": "2h 11min",
    "highestRank": 3,
    "top10Days": 13,
    "top100Days":67,
    "top1000Days": 202,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "60",
    "dislikes": "32",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "3AuB8RTfBJc",
    "type": "bollywood",
    "genre": ["Action & Adventure", "Mystery & Thriller", "Drama"]
  },

  {

    "id":98,
    "title": "Shaitaan",
    "year": 2024,
    "rank":522,
    "rankChange": "▲ +670",
    "rating": 53,
    "imdbRating": 6.6,
    "imdbVotes": "5.1k",
    "backdropImage": "https://images.justwatch.com/backdrop/315476071/s1440/black-magic-2024.webp/black-magic-2024.webp",
    "posterImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTvmTs_KuGBvDgydgU5KryIzYDHRIGmbu4Uw&s",
    "duration": "2h 12min",
    "highestRank": 1,
    "top10Days": 17,
    "top100Days":105,
    "top1000Days": 209,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "171",
    "dislikes": "122",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "jLshY-zUfZ4",
    "type": "bollywood",
    "genre": ["Mystery & Thriller", "Horror", "Drama"]
  },
  
  {

    "id":99,
    "title": "Bhool Bhulaiyaa 2",
    "year": 2022,
    "rank":407,
    "rankChange": "▲ +900",
    "rating": 56,
    "imdbRating": 5.7,
    "imdbVotes": "33k",
    "backdropImage": "https://images.justwatch.com/backdrop/290417264/s1440/bhool-bhulaiyaa-2.webp/bhool-bhulaiyaa-2.webp",
    "posterImage": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ec16a4146301677.62addf77becfe.jpg",
    "duration": "2h 22min",
    "highestRank": 1,
    "top10Days": 22,
    "top100Days":113,
    "top1000Days": 472,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "321",
    "dislikes": "210",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "P2KRKxAb2ek",
    "type": "bollywood",
    "genre": ["Horror", "Comedy"]
  },
 
  
  {

    "id":100,
    "title": "The Kerala Story",
    "year":2023,
    "rank":702,
    "rankChange": "▲ +2974",
    "rating": 79,
    "imdbRating": 6.1,
    "imdbVotes": "73k",
    "backdropImage": "https://images.justwatch.com/backdrop/305317096/s1440/the-kerala-story.webp/the-kerala-story.webp",
    "posterImage": "https://assets.telegraphindia.com/telegraph/2023/May/1683547821_kerala-story.jpg",
    "duration": "2h 18min",
    "highestRank": 1,
    "top10Days": 158,
    "top100Days":353,
    "top1000Days": 513,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "470",
    "dislikes": "160",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
     "videoId": "hM12KxC3ONA",
     "type": "bollywood",
    "genre": ["Drama"]
  },
  
  {

    "id":101,
    "title": "Shershaah",
    "year":2021,
    "rank":421,
    "rankChange": "▲ +461",
    "rating": 71,
    "imdbRating": 8.3,
    "imdbVotes": "131k",
    "backdropImage": "https://images.justwatch.com/backdrop/253243045/s1440/shershaah.webp/shershaah.webp",
    "posterImage": "https://etvbharatimages.akamaized.net/etvbharat/prod-images/5727921_s1.jpg",
    "duration": "2h 15min",
    "highestRank": 1,
    "top10Days": 28,
    "top100Days":136,
    "top1000Days": 1009,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "1k",
    "dislikes": "378",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "Q0FTXnefVBA",
    "type": "bollywood",
    "genre": ["War & Military", "Action & Adventure", "Drama", "Mystery & Thriller"]
  },

  
  {

    "id":102,
    "title": "M.S. DHONI: THE UNTOLD STORY",
    "year":2016,
    "rank":861,
    "rankChange": "▲ +394",
    "rating": 94,
    "imdbRating": 8.0,
    "imdbVotes": "70k",
    "backdropImage": "https://images.justwatch.com/backdrop/197009956/s1440/m-s-dhoni-the-untold-story.webp/m-s-dhoni-the-untold-story.webp",
    "posterImage": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200,q_60/lsci/db/PICTURES/CMS/194400/194475.jpg",
    "duration": "1h 40min",
    "highestRank": 5,
    "top10Days": 6,
    "top100Days":55,
    "top1000Days": 946,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "345",
    "dislikes": "33",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "6L6XqWoS8tw",
    "type": "bollywood",
    "genre": ["Drama", "Sport"]
  },

  {

    "id":103,
    "title": "Tu Jhoothi Mai Makkar",
    "year":2023 ,
    "rank":1399,
    "rankChange": "▲ +5659",
    "rating": 61,
    "imdbRating": 7.0,
    "imdbVotes": "30k",
    "backdropImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202301/trailer_of_tu_jhoothi_main_makkar_to_release_on_this_date-sixteen_nine.jpg?VersionId=xjr0srH.rjTI7AtxbqEg_sO6Ear6W_f4",
    "posterImage": "https://stat4.bollywoodhungama.in/wp-content/uploads/2023/01/Tu-Jhoothi-Main-Makkaar-1.jpeg",
    "duration": "2h 39min",
    "highestRank": 1,
    "top10Days": 54,
    "top100Days":174,
    "top1000Days": 541,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "352",
    "dislikes": "192",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "JzGGF4JPFIQ",
    "type": "bollywood",
    "genre": ["Comedy", "Romance", "Kids & Family"]
  },

  {
    "id": 104,
    "title": "MUNJYA",
    "year": 2024,
    "rank": 15,
    "rankChange": "▲ +110",
    "rating": 67,
    "imdbRating": 6.5,
    "imdbVotes": "21k",
    "backdropImage": "https://images.justwatch.com/backdrop/317639257/s1440/munjha.webp/munjha.webp",
    "posterImage": "https://wallpapercave.com/wp/wp14067165.jpg",
    "duration": "2h 3min",
    "highestRank": 1,
    "top10Days": 97,
    "top100Days": 114,
    "top1000Days": 121,
    "watchOptions": [
  {"platform": "Netflix", "price": "Rs200/-"},
  {"platform": "Amazon Prime", "price": "Rs500/-"}
],
    "likes": "55k",
    "dislikes": 5,
    "watchlistText": "WatchList",
    "seenText": "Seen",
    "syncText": "Sign in to sync Watch List",
    "videoId" : "qGb5aKEYR8Q",
    "type": "bollywood",
    "genre": ["Comedy", "Horror"]
  },

  
  {
    "id": 105,
    "title": "ANIMAL",
    "year": 2023,
    "rank": 192,
    "rankChange": "▲ +342",
    "rating": 67,
    "imdbRating": 6.1,
    "imdbVotes": "99k",
    "backdropImage": "https://images.justwatch.com/backdrop/309854144/s1440/animal-2022.webp/animal-2022.webp",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BMmFjYzdhZjktN2E1ZS00NzY5LWE1NTUtY2U4YTQ1NzdhOGVmXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
    "duration": "1h 1min",
    "highestRank": "01",
    "top10Days": 113,
    "top100Days": 241,
    "top1000Days": 336,
    "watchOptions": [
  {"platform": "Netflix", "price": "Rs200/-"},
  {"platform": "Amazon Prime", "price": "Rs500/-"}
  ],
    "likes": "12k",
    "dislikes": "152",
    "watchlistText": "Lists",
    "seenText": "Seen all",
    "syncText": "Sign in to sync Watch List", 
    "videoId" : "Dydmpfo68DA",
    "type": "bollywood",
    "genre": ["Drama", "Action & Adventure", "Crime", "Mystery & Thriller"]
  },

  {
    "id": 106,
    "title": "SANAM TERI KASAM",
    "year": 2016,
    "rank": 214,
    "rankChange": "▲ +8",
    "rating": 69,
    "imdbRating": 7.6,
    "imdbVotes": "17k",
    "backdropImage": "https://images.justwatch.com/backdrop/198570000/s1440/sanam-teri-kasam.webp/sanam-teri-kasam.webp",
    "posterImage": "https://eros-asset-msp.airtelxstream.in/assets/EROSNOW/MOVIE/613844b8e987121d7171c31d/images/SQUARE_HD/SQUARE_HD_qlhDjABJ9_Sanam_Teri_Kasam_Airtel_Xstream_1080x1080.jpg",
    "duration": "2h 34min",
    "highestRank": 7,
    "top10Days": 3,
    "top100Days": 117,
    "top1000Days": 1869,
    "watchOptions": [
  {"platform": "Netflix", "price": "Rs200/-"},
  {"platform": "Amazon Prime", "price": "Rs500/-"}
  ],
    "likes": "118k",
    "dislikes": "37",
    "watchlistText": "Watchlists",
    "seenText": "Seen",
    "syncText": "Sign in to sync Watch List", 
    "videoId" : "v1Zajpp0aEY",
    "type": "bollywood",
    "genre": ["Drama", "Romance"]
  },


  {
    "id": 107,
    "title": "LAILA MAJNU",
    "year": 2018,
    "rank": 12,
    "rankChange": "▲ +11",
    "rating": 78,
    "imdbRating": 7.7,
    "imdbVotes": "6.6",
    "backdropImage": "https://images.justwatch.com/backdrop/81338817/s1440/laila-majnu.webp/laila-majnu.webp",
    "posterImage": "https://static.digit.in/OTT/v2/images/laila-majnu-229760.jpg?tr=w-600",
    "duration": "2h 19min",
    "highestRank": 2,
    "top10Days": 8,
    "top100Days": 83,
    "top1000Days": 445,
    "watchOptions": [
  {"platform": "Netflix", "price": "Rs200/-"},
  {"platform": "Amazon Prime", "price": "Rs500/-"}
  ],
    "likes": "55k",
    "dislikes": "358",
    "watchlistText": "Watchlists",
    "seenText": "Seen",
    "syncText": "Sign in to sync Watch List", 
    "videoId" : "Cv-6cAHanZ8",
    "type": "bollywood",
    "genre": ["Drama", "Romance"]
  },

  {
    "id": 108,
    "title": "STRANGER THINGS",
    "year": 2016,
    "rank": 82,
    "rankChange": "▲ +67",
    "rating": 15,
    "imdbRating": 8.7,
    "imdbVotes": "1m",
    "backdropImage": "https://images.justwatch.com/backdrop/102141616/s1440/stranger-things.webp/stranger-things.webp",
    "posterImage": "https://rukminim2.flixcart.com/image/850/1000/jr0y9ow0/poster/r/g/e/medium-stranger-things-poster-for-room-office-13-inch-x-19-inch-original-imafcwvzakgs3c5v.jpeg?q=90&crop=false",
    "duration": "1h 1min",
    "highestRank": 1,
    "top10Days": 228,
    "top100Days": 1921,
    "top1000Days": 2994,
    "watchOptions": [
  {"platform": "Netflix", "price": "Rs200/-"},
  {"platform": "Amazon Prime", "price": "Rs500/-"}
],
    "likes": "79k",
    "dislikes": "3.6",
    "watchlistText": "Lists",
    "seenText": "Seen",
    "syncText": "Sign in to sync Watch List",  
    "videoId" : "b9EkMc79ZSU",
    "type" : ["series", "hollywood"],
        "seasons": [ // Add season details here
          {
            "seasonNumber": 1,
            "episodes": 8,
            "posterImage": "https://www.justwatch.com/images/poster/249313589/s166/season-1.webp"
          },
    
          {
            "seasonNumber": 2,
            "episodes": 9,
            "posterImage": "https://www.justwatch.com/images/poster/10828442/s166/season-2.webp"
          },
    
          {
            "seasonNumber": 3,
            "episodes": 8,
            "posterImage": "https://www.justwatch.com/images/poster/147403540/s166/season-3.webp"
          },
    
          {
            "seasonNumber": 4,
            "episodes": 9,
            "posterImage": "https://www.justwatch.com/images/poster/264470916/s166/season-4.webp"
          },
        ],
        "genres": ["Science-Fiction", "Action & Adventure", "Mystery & Thriller", "Drama", "Fantasy", "Horror"]
},

{
  "id": 109,
  "title": "JUJUTSU KAISEN",
  "year": 2020,
  "rank": 175,
  "rankChange": "▲ +21",
  "rating": 93,
  "imdbRating": 8.6,
  "imdbVotes": "131K",
  "backdropImage": "https://images.justwatch.com/backdrop/297814126/s1440/jujutsu-kaisen.webp/jujutsu-kaisen.webp",
  "posterImage": "https://i.pinimg.com/originals/ac/43/52/ac4352f877cd4265d69538bd7532b7b3.jpg",
  "duration": " 24min",
  "highestRank": 2,
  "top10Days": 71,
  "top100Days": 390,
  "top1000Days": 1437,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "7.5K",
  "dislikes": "511",
  "watchlistText": "Lists",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List",  
  "videoId" : "Pm-wNmS9RGI",
  "type" : ["hollywood","anime","series"],
  "seasons": [ // Add season details here
    {
      "seasonNumber": 1,
      "episodes": 24,
      "posterImage": "https://www.justwatch.com/images/poster/312146079/s166/season-1.webp"
    },

    {
      "seasonNumber": 2,
      "episodes": 24,
      "posterImage": "https://www.justwatch.com/images/poster/306336521/s166/season-2.webp"
    },

    {
      "seasonNumber": 3,
      "episodes": 1,
      "posterImage": "https://www.justwatch.com/images/poster/320955231/s166/season-3.webp"
    },
  ],
  "genres": ["Animation", "Action & Adventure", "Fantasy", "Mystery & Thriller", "Science-Fiction"]
},



{
  "id": 110,
  "title": "WEDNESDAY",
  "year": 2022,
  "rank": 172,
  "rankChange": "▲ +104",
  "rating": 95,
  "imdbRating": 8.1,
  "imdbVotes": "383K",
  "backdropImage": "https://images.justwatch.com/backdrop/301994024/s1440/wednesday.webp/wednesday.webp",
  "posterImage": "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/b/1/l/large-wednesday-poster-for-wall-home-office-decoration-posters-original-imagn38htdpyunqe.jpeg?q=90&crop=false",
  "duration": "29min",
  "highestRank": 1,
  "top10Days": 107,
  "top100Days": 329,
  "top1000Days": 783,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "44k",
  "dislikes": "2.2",
  "watchlistText": "Lists",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List", 
  "videoId" : "DwvQLVAxiKY",
  "type" : ["series", "hollywood"],
  "seasons": [ // Add season details here
    {
      "seasonNumber": 1,
      "episodes": 8,
      "posterImage": "https://www.justwatch.com/images/poster/300790715/s166/season-1.webp"
    },

    {
      "seasonNumber": 2,
      "episodes": 3,
      "posterImage": "https://www.justwatch.com/images/poster/300790715/s166/season-1.webp"
    },
  ],
  "genres": ["Comedy", "Science-Fiction", "Mystery & Thriller", "Crime", "Fantasy"]
},

{
  "id": 111,
  "title": "MY FAULT",
  "year": 2023,
  "rank": 579,
  "rankChange": "▲ +453",
  "rating": 82,
  "imdbrating": 6.2,
  "imdbVotes": "28K",
  "backdropImage": "https://images.justwatch.com/backdrop/305772264/s1440/culpa-mia.webp/culpa-mia.webp",
  "posterImage": "https://m.media-amazon.com/images/I/61i+ZrpiIiL._AC_UF894,1000_QL80_.jpg",
  "duration": "1h 57min",
  "highestRank": 3,
  "top10Days": 17,
  "top100Days": 82,
  "top1000Days": 484,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "30k",
  "dislikes": "536",
  "watchlistText": "Lists",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List", 
  "videoId" : "e7lvpm13ZN0",
  "type": "hollywood",
  "genre": ["Romance", "Drama"]
},

{
  "id": 112,
  "title": "Your FAULT",
  "year": 2024,
  "rank": 579,
  "rankChange": "▲ +453",
  "rating": 82,
  "imdbrating": 6.2,
  "imdbVotes": "28K",
  "backdropImage": "https://www.justwatch.com/images/backdrop/313236012/s1440/your-fault.webp/your-fault.webp",
  "posterImage": "https://assets.gadgets360cdn.com/pricee/assets/product/202308/Your-Fault_1691060840.jpg",
  "duration": "1h 57min",
  "highestRank": 3,
  "top10Days": 17,
  "top100Days": 82,
  "top1000Days": 484,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "30k",
  "dislikes": "536",
  "watchlistText": "Lists",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List", 
  "videoId" : "Wp4S0-fWgI0",
  "type": "hollywood",
  "genre": ["Romance", "Drama"]
},


{
  "id": 113,
  "title": "YOUR NAME",
  "year": 2016,
  "rank": 596,
  "rankChange": "▲ +33",
  "rating": 15,
  "imdbRating": 8.4,
  "imdbVotes": "334K",
  "backdropImage": "https://images.justwatch.com/backdrop/56668328/s1440/your-name.webp/your-name.webp",
  "posterImage": "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/1/f/p/your-name-the-official-visual-guide-original-imahy5knsetkjzxe.jpeg?q=90&crop=false",
  "duration": "1h 49min",
  "highestRank": 1,
  "top10Days": 228,
  "top100Days": 1921,
  "top1000Days": 2994,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "30k",
  "dislikes": "382",
  "watchlistText": "Lists",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List", 
  "videoId" : "_oWzYOwXn-o",
  "type": ["anime", "hollywood"],
  "genre": ["Animation", "Drama", "Fantasy", "Romance"]

},

{
  "id": 114,
  "title": "SUZUME",
  "year": 2022,
  "rank": 82,
  "rankChange": "▲ +67",
  "rating": 91,
  "imdbRating": 7.6,
  "imdbVotes": "46K",
  "backdropImage": "https://images.justwatch.com/backdrop/306324717/s1440/suzume-no-tojimari.webp/suzume-no-tojimari.webp",
  "posterImage": "https://m.media-amazon.com/images/I/71riN5eCekL.jpg",
  "duration": "2h 1min",
  "highestRank": 2,
  "top10Days": 245,
  "top100Days": 1451,
  "top1000Days": 1584,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "2k",
  "dislikes": "263",
  "watchlistText": "Lists",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List", 
  "videoId" : "ciQc8lfvSm0",
  "type": ["anime", "hollywood"],
  "genre": ["Animation", "Drama", "Action & Adventure", "Fantasy"]
},

{
  "id": 115,
  "title": "MONEY HEIST",
  "year": 2017,
  "rank": 40,
  "rankChange": "▲ +1",
  "rating": 91,
  "imdbRating": 8.2,
  "imdbVotes": "547k",
  "backdropImage": "https://images.justwatch.com/backdrop/242778527/s1440/paperhouse.webp/paperhouse.webp",
  "posterImage": "https://m.media-amazon.com/images/I/71pFk6piECL._AC_UF1000,1000_QL80_.jpg",
  "duration": "50min",
  "highestRank": 1,
  "top10Days": 239,
  "top100Days": 2007,
  "top1000Days": 2481,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "40k",
  "dislikes": "2.7k",
  "watchlistText": "Lists",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List", 
  "videoId" : "8QkyLqmJCMM",
  "type": ["series", "hollywood"],
  "seasons": [ // Add season details here
        {
          "seasonNumber": 1,
          "episodes": 13,
          "posterImage": "https://www.justwatch.com/images/poster/270389468/s166/season-1.webp"
        },
  
        {
          "seasonNumber": 2,
          "episodes": 9,
          "posterImage": "https://www.justwatch.com/images/poster/281065948/s166/season-2.webp"
        },
  
        {
          "seasonNumber": 3,
          "episodes": 8,
          "posterImage": "https://www.justwatch.com/images/poster/281066199/s166/season-3.webp"
        },
  
        {
          "seasonNumber": 4,
          "episodes": 8,
          "posterImage": "https://www.justwatch.com/images/poster/270389906/s166/season-4.webp"
        },
  
        {
          "seasonNumber": 5,
          "episodes": 10,
          "posterImage": "https://www.justwatch.com/images/poster/281044992/s166/season-5.webp"
        },
      ],
      "genre": ["Mystery & Thriller", "Action & Adventure", "Crime", "Drama"]
},

{
  "id": 116,
  "title": "TUMBBAD",
  "year": 2018,
  "rank": 73,
  "rankChange": "▲ +67",
  "rating": 82,
  "imdbRating": 8.2,
  "imdbVotes": "64k",
  "backdropImage": "https://images.justwatch.com/backdrop/245230559/s1440/tumbbad.webp/tumbbad.webp",
  "posterImage": "https://m.media-amazon.com/images/M/MV5BMzVjNGFmZTMtYjRjNi00OWQzLTlkNWQtZmU1OGI0ODc2ODU5XkEyXkFqcGc@._V1_QL75_UX820_.jpg",
  "duration": "1h 53min",
  "highestRank": 2,
  "top10Days": 258,
  "top100Days": 1458,
  "top1000Days": 2586,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "18k",
  "dislikes": "3.5k",
  "watchlistText": "Lists",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List",
  "videoId" : "YGIcZrUBY0k",
  "type": "bollywood",
  "genre": ["Fantasy", "Horror", "Drama", "Mystery & Thriller"]
},

{
  "id": 117,
  "title": "ATTACK ON TITAN",
  "year": 2013,
  "rank": 46,
  "rankChange": "▲ +63",
  "rating": 91,
  "imdbRating": 9.1,
  "imdbVotes": "546k",
  "backdropImage": "https://images.justwatch.com/backdrop/302212233/s1440/attack-on-titan.webp/attack-on-titan.webp",
  "posterImage": "https://m.media-amazon.com/images/I/61t9ie31jgL._AC_UF1000,1000_QL80_.jpg",
  "duration": "25min",
  "highestRank": 1,
  "top10Days": 63,
  "top100Days": 1077,
  "top1000Days": 2941,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "17k",
  "dislikes": "1.6k",
  "watchlistText": "Lists",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List", 
  "videoId" : "LV-nazLVmgo",
  "type": ["anime", "hollywood","series"],
  "seasons": [ // Add season details here
    {
      "seasonNumber": 1,
      "episodes": 25,
      "posterImage": "https://www.justwatch.com/images/poster/130288291/s166/season-1.webp"
    },

    {
      "seasonNumber": 2,
      "episodes": 12,
      "posterImage": "https://www.justwatch.com/images/poster/130288324/s166/season-2.webp"
    },

    {
      "seasonNumber": 3,
      "episodes": 22,
      "posterImage": "https://www.justwatch.com/images/poster/241158061/s166/season-3.webp"
    },

    {
      "seasonNumber": 4,
      "episodes": 30,
      "posterImage": "https://www.justwatch.com/images/poster/307580701/s166/season-4.webp"
    }
  ],
  "genre": ["Animation", "Action & Adventure", "Drama", "Fantasy", "Horror", "Science-Fiction"]
},





{
  "id": 118,
  "title": "THE CONJURING 2",
  "year": 2016,
  "rank": 990.,
  "rankChange": "▲ +589",
  "rating": 93,
  "imdbRating": 7.3,
  "imdbVotes": "309k",
  "backdropImage": "https://www.justwatch.com/images/backdrop/828170/s1440/the-conjuring-2.webp/the-conjuring-2.webp",
  "posterImage": "https://e0.pxfuel.com/wallpapers/230/354/desktop-wallpaper-the-conjuring-2-movie-hq-the-conjuring-2-2019-the-conjuring-3-thumbnail.jpg",
  "duration": "1h 53min",
  "highestRank": 13,
  "top10Days": 5,
  "top100Days": 70,
 "top1000Days": 2994,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "17k",
  "dislikes": "1.1k",
  "watchlistText": "WatchList",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List", 
  "videoId" : "VFsmuRPClr4",
  "type" : "hollywood",
  "genre": ["Horror", "Mystery & Thriller"]
},


{
  "id": 119,
  "title": "THE KISSING BOOTH 3",
  "year": 2018,
  "rank": 3023.,
  "rankChange": "▲ +2225",
  "rating": 75,
  "imdb": 5.9,
  "imdbVotes": "96k",
  "backdropImage": "https://images.justwatch.com/backdrop/238965629/s1440/the-kissing-booth.webp/the-kissing-booth.webp",
  "posterImage": "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/z/u/s/the-kissing-booth-3-one-last-time-original-imah4ey75grdnnsp.jpeg?q=90&crop=false",
  "duration": "1h 45min",
  "highestRank": 4,
  "top10Days": 13,
  "top100Days": 164,
  "top1000Days": 667,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "4.7k",
  "dislikes": "1.5k",
  "watchlistText": "WatchLists",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List",
  "videoId" : "5fKn0Dhj64w",
  "type" : "hollywood",
  "genre": ["Drama", "Comedy", "Romance"]
},



{
  "id": 120,
  "title": "Bad Newz",
  "year": 2024,
  "rank": 61,
  "rankChange": "▲ +170",
  "rating": 27,
  "imdbRating": 5.1,
  "imdbVotes": "25k",
  "backdropImage": "https://images.justwatch.com/backdrop/321215960/s1440/untitled-vicky-kaushal-prime-video-project.webp/untitled-vicky-kaushal-prime-video-project.webp",
  "posterImage": "https://www.prabhatkhabar.com/wp-content/uploads/2024/07/IMG_5778-716x1024.jpeg",
  "duration": "2h 20min",
  "highestRank": 3,
  "top10Days": 9,
  "top100Days": 41,
  "top1000Days": 80,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "1.5k",
  "dislikes": "203",
  "watchlistText": "Lists",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List", 
  "videoId" : "uV50UfcIT68",
  "type" : "bollywood",
  "genre": ["Drama", "Comedy", "Romance"]


},


{
  "id": 121,
  "title": "DEMON SLAYER: Kimetsu no Yaiba",
  "year": 2019,
  "rank": 29,
  "rankChange": "▲ +6",
  "rating": 90,
  "imdbRating": 8.6,
  "imdbVotes": "166k",
  "backdropImage": "https://images.justwatch.com/backdrop/317220005/s1440/demon-slayer-kimetsu-no-yaiba.webp/demon-slayer-kimetsu-no-yaiba.webp",
  "posterImage": "https://i.pinimg.com/736x/51/2c/9a/512c9a9bfd71ae7ab6b583dca74c318f.jpg",
  "duration": "26min",
  "highestRank": 1,
  "top10Days": 126,
  "top100Days": 660,
  "top1000Days": 1920,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "15k",
  "dislikes": "951",
  "watchlistText": "Lists",
  "seenText": "Seen all",
  "syncText": "Sign in to sync Watch List",
  "videoId" : "VQGCKyvzIM4",
  "type": ["anime", "hollywood"],
  "seasons": [ // Add season details here
        {
          "seasonNumber": 1,
          "episodes": 26,
          "posterImage": "https://www.justwatch.com/images/poster/320272945/s166/season-1.webp"
        },
  
        {
          "seasonNumber": 2,
          "episodes": 18,
          "posterImage": "https://www.justwatch.com/images/poster/320272944/s166/season-2.webp"
        },
  
        {
          "seasonNumber": 3,
          "episodes": 11,
          "posterImage": "https://www.justwatch.com/images/poster/320272942/s166/season-3.webp"
        },
  
        {
          "seasonNumber": 4,
          "episodes": 11,
          "posterImage": "https://www.justwatch.com/images/poster/320272941/s166/season-4.webp"
        },
  
        {
          "seasonNumber": 5,
          "episodes": 8,
          "posterImage": "https://www.justwatch.com/images/poster/320272943/s166/season-5.webp"
        },
      ],
      "genre": ["Action & Adventure", "Science-Fiction", "Fantasy", "Mystery & Thriller", "Animation"]

},

{
  "id": 122,
  "title": "FRIENDS",
  "year": 1994,
  "rank": 31,
  "rankChange": "▲ +85",
  "rating": 92,
  "imdbRating": 8.9,
  "imdbVotes": "1m",
  "backdropImage": "https://images.justwatch.com/backdrop/177294826/s1440/friends.webp/friends.webp",
  "posterImage": "https://i.pinimg.com/originals/41/2c/ea/412cea60bab9c59e1d7414616d426f81.jpg",
  "duration": "25min",
  "hightRank": "01",
  "top10Days": "869 Days",
  "top100Days": "2581 Days",
  "top1000Days": "3197 Days",
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "35k",
  "dislikes": "274",
  "watchlistText": "Lists",
  "seenText": "Seen all",
  "syncText": "Sign in to sync Watch List", 
   "videoId" : "VQGCKyvzIM4",
   "type" : ["series", "hollywood"],
   "seasons": [ // Add season details here
     {
       "seasonNumber": 1,
       "episodes": 24,
       "posterImage": "https://www.justwatch.com/images/poster/238614572/s166/season-1.webp"
     },

     {
       "seasonNumber": 2,
       "episodes": 24,
       "posterImage": "https://www.justwatch.com/images/poster/238614566/s166/season-2.webp"
     },

     {
       "seasonNumber": 3,
       "episodes": 25,
       "posterImage": "https://www.justwatch.com/images/poster/238614557/s166/season-3.webp"
     },

     {
       "seasonNumber": 4,
       "episodes": 24,
       "posterImage": "https://www.justwatch.com/images/poster/238614546/s166/season-4.webp"
     },

     {
       "seasonNumber": 5,
       "episodes": 24,
       "posterImage": "https://www.justwatch.com/images/poster/238614540/s166/season-5.webp"
     },

     {
      "seasonNumber": 6,
      "episodes": 25,
      "posterImage": "https://www.justwatch.com/images/poster/300603462/s166/season-6.webp"
    },

    {
      "seasonNumber": 7,
      "episodes": 24,
      "posterImage": "https://www.justwatch.com/images/poster/238614521/s166/season-7.webp"
    },

    {
      "seasonNumber": 8,
      "episodes": 24,
      "posterImage": "https://www.justwatch.com/images/poster/304855085/s166/season-8.webp"
    },

    {
      "seasonNumber": 9,
      "episodes": 24,
      "posterImage": "https://www.justwatch.com/images/poster/238614510/s166/season-9.webp"
    },

    {
      "seasonNumber": 10,
      "episodes": 18,
      "posterImage": "https://www.justwatch.com/images/poster/252095774/s166/season-10.webp"
    },
   ],
   "genre": ["Comedy", "Romance"]
},

{
  "id": 123,
  "title": "FLAMES",
  "year": 2018,
  "rank": 196,
  "rankChange": "▲ +297",
  "Rating": "71%",
  "imdbRating": 8.8,
  "imdbVotes": "33k",
  "backdropImage": "https://images.justwatch.com/backdrop/163344875/s1440/flames.webp/flames.webp",
  "posterImage": "https://m.media-amazon.com/images/M/MV5BOTQ5MWNkMDgtNjk5ZC00NGE5LWEyMGQtN2YzNzlkZTgxZWFlXkEyXkFqcGc@._V1_.jpg",
  "duration": "31min",
  "highestRank": 1,
  "top10Days": 71,
  "top100Days": 515,
  "top1000Days": 1793,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "4k",
  "dislikes": "35",
  "watchlistText": "Lists",
  "seenText": "Seen all",
  "syncText": "Sign in to sync Watch List", 
  "videoId" : "NkdCgjqQq7s",
  "type": ["series", "bollywood"],
  "seasons": [ // Add season details here
        {
          "seasonNumber": 1,
          "episodes": 5,
          "posterImage": "https://www.justwatch.com/images/poster/310326899/s166/season-1.webp"
        },
  
        {
          "seasonNumber": 2,
          "episodes": 5,
          "posterImage": "https://www.justwatch.com/images/poster/310330520/s166/season-2.webp"
        },
  
        {
          "seasonNumber": 3,
          "episodes": 5,
          "posterImage": "https://www.justwatch.com/images/poster/301436273/s166/season-3.webp"
        },
  
        {
          "seasonNumber": 4,
          "episodes": 5,
          "posterImage": "https://www.justwatch.com/images/poster/310330522/s166/season-4.webp"
        },
      ],
      "genre" :[ "Drama", "Comedy", "Romance"]
},

{
  "id": 124,
  "title": "ALICE IN BORDERLAND",
  "year": 2020,
  "rank": 204,
  "rankChange": "▲ +347",
  "rating": 92,
  "imdbRating": 7.7,
  "imdbVotes": "102k",
  "backdropImage": "https://images.justwatch.com/backdrop/239548970/s1440/alice-in-borderland.webp/alice-in-borderland.webp",
  "posterImage": "https://e1.pxfuel.com/desktop-wallpaper/942/291/desktop-wallpaper-alice-in-borderland-thumbnail.jpg",
  "duration": "54min",
  "highestRank": 4,
  "top10Days": 14,
  "top100Days": 152,
  "top1000Days": 1287,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "12k",
  "dislikes": "1k",
  "watchlistText": "Lists",
  "seenText": "Seen all",
  "syncText": "Sign in to sync Watch List", 
  "videoId" : "49_44FFKZ1M",
  "type" : ["series", "hollywood"],
  "seasons": [ // Add season details here
    {
      "seasonNumber": 1,
      "episodes": 8,
      "posterImage": "https://www.justwatch.com/images/poster/302278527/s166/season-1.webp"
    },

    {
      "seasonNumber": 2,
      "episodes": 8,
      "posterImage": "https://www.justwatch.com/images/poster/302278475/s166/season-2.webp"
    },

  ],
  "genre": ["Action & Adventure", "Drama", "Science-Fiction", "Mystery & Thriller"]
  
},

{
  "id": 125,
  "title": "EVIL DEAD RISE",
  "year": 2023,
  "rank": 78,
  "rankChange": "▲ +640",
  "rating": 81,
  "imdbRating": 6.5,
  "imdbVotes": "146k",
  "backdropImage": "https://images.justwatch.com/backdrop/305192753/s1440/evil-dead-rise.webp/evil-dead-rise.webp",
  "posterImage": "https://rukminim2.flixcart.com/image/850/1000/xif0q/movie/v/k/r/2023-dvd-flt-films-english-evil-dead-rise-2023-in-english-play-original-imagpnke3bexpr2h.jpeg?q=90&crop=false",
  "duration": "1h 36min",
  "highestRank": 3,
  "top10Days": 12,
  "top100Days": 126,
  "top1000Days": 549,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "6.1k",
  "dislikes": "452",
  "watchlistText": "Lists",
  "seenText": "Seen all",
  "syncText": "Sign in to sync Watch List",
  "videoId" : "smTK_AeAPHs",
  "type" : "hollywood",
  "genre": ["Horror", "Mystery & Thriller"]
},

{
  "id": 126,
  "title": "NARUTO",
  "year": 2002,
  "rank": 34,
  "rankChange": "▲ +82",
  "rating": 88,
  "imdbRating": 8.4,
  "imdbVotes": "134k",
  "backdropImage": "https://images.justwatch.com/backdrop/304968809/s1440/naruto.webp/naruto.webp",
  "posterImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVZVkWEJXqWMrX7CHsp9NvpacXO5DMWygAdw&s",
  "duration": "23min",
  "highestRank": 6,
  "top10Days": 25,
  "top100Days": 666,
  "top1000Days": 2673,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "8.8k",
  "dislikes": "1k",
  "watchlistText": "Lists",
  "seenText": "Seen all",
  "syncText": "Sign in to sync Watch List",
  "videoId" : "-G9BqkgZXRA",
  "type": ["series", "hollywood", "anime"],
  "seasons": [ // Add season details here
    {
      "seasonNumber": 1,
      "episodes": 220,
      "posterImage": "https://www.justwatch.com/images/poster/301262497/s166/season-1.webp"
    },

    {
      "seasonNumber": 2,
      "episodes": 104,
      "posterImage": "https://www.justwatch.com/images/poster/280619753/s166/season-2.webp"
    },

    {
      "seasonNumber": 3,
      "episodes": 108,
      "posterImage": "https://www.justwatch.com/images/poster/8605717/s166/season-3.webp"
    },

    {
      "seasonNumber": 4,
      "episodes": 124,
      "posterImage": "https://www.justwatch.com/images/poster/8605715/s166/season-4.webp"
    },

    {
      "seasonNumber": 5,
      "episodes": 220,
      "posterImage": "https://www.justwatch.com/images/poster/734764/s166/season-5.webp"
    },

    {
      "seasonNumber": 6,
      "episodes": 50,
      "posterImage": "https://www.justwatch.com/images/poster/6499522/s166/season-6.webp"
    },
  ],
  "genre": ["Animation", "Action & Adventure", "Science-Fiction", "Comedy", "Fantasy"]

},


{
  "id": 127,
  "title": "COLLEGE ROMANCE",
  "year": 2018,
  "rank": 126.,
  "rankChange": "▲ +160",
  "rating": 76,
  "imdbRating": 8.8,
  "imdbVotes": "29k",
  "backdropImage": "https://images.justwatch.com/backdrop/307434339/s1440/college-romance.webp/college-romance.webp",
  "posterImage": "https://i.pinimg.com/736x/f3/e1/b1/f3e1b1e3fe5fb345efefb38dd40e6560.jpg",
  "duration": "31min",
  "highestRank": 1,
  "top10Days": 309,
  "top100Days": 992,
  "top1000Days": 1622,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "72k",
  "dislikes": "158",
  "watchlistText": "Lists",
  "seenText": "Seen all",
  "syncText": "Sign in to sync Watch List",
  "videoId" : "zwRhlzrJGxo",
  "type": ["series", "bollywood"],
  "seasons": [ // Add season details here
    {
      "seasonNumber": 1,
      "episodes": 5,
      "posterImage": "https://www.justwatch.com/images/poster/153922176/s166/season-1.webp"
    },

    {
      "seasonNumber": 2,
      "episodes": 5,
      "posterImage": "https://www.justwatch.com/images/poster/241488605/s166/season-2.webp"
    },

    {
      "seasonNumber": 3,
      "episodes": 5,
      "posterImage": "https://www.justwatch.com/images/poster/300726847/s166/season-3.webp"
    },

    {
      "seasonNumber": 4,
      "episodes": 5,
      "posterImage": "https://www.justwatch.com/images/poster/307436638/s166/season-4.webp"
    },
  ],
  "genre": ["Drama", "Comedy", "Romance"]
},

{
  "id":128,
  "title": "Kalki 2898-AD",
  "year": 2024,
  "rank": 33,
  "rankChange": "▲ +16",
  "rating": 63,
  "imdbRating": 7.5,
  "imdbVotes": "24k",
  "backdropImage": "https://images.justwatch.com/backdrop/319594814/s1440/project-k.webp/project-k.webp",
  "posterImage": "https://m.media-amazon.com/images/M/MV5BMjNkNmEyMjAtYmJmNi00MWFlLWE2ZDMtMTc0YjQ5NDYwZjlmXkEyXkFqcGc@._V1_.jpg",
  "durection": "2h 56min",
  "highestRank": 1,
  "top10Days": 79,
  "top100Days": 110,
  "top1000Days": 142,
  "watchOptions": [
    {"platform": "Netflix", "price": "Rs200/-"},
    {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
  "likes": 341,
  "dislike": 170,
  "watchlistText": "watchlist",
  "seenText": "seen",
  "syncText": "sing in to watch list",
  "videoId": "aninoDcPWo4" ,
  "type" : ["bolllywood","tollywood"],
  "genre": ["Action & Adventure"," Drama", "Fantasy", "Science-Fiction", "Mystery & Thriller"]
},

{
  "id":129,
  "title": "Maharaja",
  "year": 2024,
  "rank": 51,
  "rankChange": "▲ +78",
  "rating": 76,
  "imdbRating": 8.5,
  "imdbVotes": "48k",
  "backdropImage": "https://images.justwatch.com/backdrop/318728320/s1440/maharaja-2024.webp/maharaja-2024.webp",
  "posterImage": "https://assetscdn1.paytm.com/images/cinema/164545-c46fe080-3f4e-11ef-99b5-d35223c98590.jpg",
  "durection": "2h 21min",
  "highestRank": 1,
  "top10Days": 41,
  "top100Days": 108,
  "top1000Days": 114,
  "watchOptions": [
    {"platform": "Netflix", "price": "Rs200/-"},
    {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
  "likes": 455,
  "dislike": 114,
  "watchlistText": "watchlist",
  "seenText": "seen",
  "syncText": "sing in to watch list",
  "videoId": "n3ttNeXKPHg",
  "type" : "tollywood",
  "genre": ["Mystery & Thriller", "Action & Adventure", "Crime", "Drama"]
},

{
    "id":130,
    "title": "Lucifer",
    "year": 2016,
    "rank": 384,
    "rankChange": "▲ +64",
    "rating": 91,
    "imdbRating": 8.1,
    "imdbVotes": "364k",
    "backdropImage": "https://images.justwatch.com/backdrop/8621909/s1440/lucifer.webp/lucifer.webp",
    "posterImage": "https://cdn.moviefone.com/image-assets/63174/uHpfjWUJI2gXQIIxjgAvOZWJORx.jpg?d=360x540&q=80",
    "duration": "58min",
    "highestRank": 1,
    "top10Days": 157,
    "top100Days": 2176,
    "top1000Days": 3172,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "18k",
    "dislikes": "1.6k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "X4bF_quwNtw",
    "type" : ["series", "hollywood"],
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 13,
        "posterImage": "https://images.justwatch.com/poster/256495379/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 18,
        "posterImage": "https://images.justwatch.com/poster/256495445/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 26,
        "posterImage": "https://images.justwatch.com/poster/256495450/s166/season-3.webp"
      },

      {
        "seasonNumber": 4,
        "episodes": 10,
        "posterImage": "https://images.justwatch.com/poster/127860861/s166/season-4.webp"
      },

      {
        "seasonNumber": 5,
        "episodes": 16,
        "posterImage": "https://images.justwatch.com/poster/256495449/s166/season-5.webp"
      },

      {
        "seasonNumber": 6,
        "episodes": 10,
        "posterImage": "https://images.justwatch.com/poster/256495457/s166/season-6.webp"
      },
    ],
    "genre": ["Science-Fiction", "Crime", "Drama", "Fantasy"]
},


{
    "id":131,
    "title": "The Walking Dead",
    "year": 2010,
    "rank": 94,
    "rankChange": "▲ +4",
    "rating": 86,
    "imdbRating": 8.1,
    "imdbVotes": "1m",
    "backdropImage": "https://images.justwatch.com/backdrop/86305926/s1440/the-walking-dead.webp/the-walking-dead.webp",
    "posterImage": "https://i.pinimg.com/736x/8b/55/aa/8b55aa9b71b85499e4971c8d3c707b35.jpg",
    "duration": "46min",
    "highestRank": 1,
    "top10Days": 547,
    "top100Days": 2393,
    "top1000Days": 3205,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "29k",
    "dislikes": "4.4k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "sfAc2U20uyg",
    "type" : ["series", "hollywood"],
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 6,
        "posterImage": "https://images.justwatch.com/poster/306348297/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 13,
        "posterImage": "https://images.justwatch.com/poster/306348306/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 16,
        "posterImage": "https://images.justwatch.com/poster/306348314/s166/season-3.webp"
      },

      {
        "seasonNumber": 4,
        "episodes": 16,
        "posterImage": "https://images.justwatch.com/poster/306348331/s166/season-4.webp"
      },

      {
        "seasonNumber": 5,
        "episodes": 16,
        "posterImage": "https://images.justwatch.com/poster/306304089/s166/season-5.webp"
      },

      {
        "seasonNumber": 6,
        "episodes": 16,
        "posterImage": "https://images.justwatch.com/poster/140225063/s166/the-walking-dead.webp"
      },

      {
        "seasonNumber": 7,
        "episodes": 16,
        "posterImage": "https://images.justwatch.com/poster/306348427/s166/season-7.webp"
      },

      {
        "seasonNumber": 8,
        "episodes": 16,
        "posterImage": "https://images.justwatch.com/poster/27657865/s166/season-8.webp"
      },

      {
        "seasonNumber": 9,
        "episodes": 16,
        "posterImage": "https://images.justwatch.com/poster/306348482/s166/season-9.webp"
      },

      {
        "seasonNumber": 10,
        "episodes": 16,
        "posterImage": "https://images.justwatch.com/poster/306348465/s166/season-10.webp"
      },

      {
        "seasonNumber": 11,
        "episodes": 16,
        "posterImage": "https://images.justwatch.com/poster/306348518/s166/season-11.webp"
      },
    ],
    "genre" : ["Science-Fiction", "Action & Adventure", "Drama", "Horror", "Mystery & Thriller"]
},

{
    "id":132,
    "title": "Crushed",
    "year": 2022,
    "rank": 111,
    "rankChange": "▲ +1397",
    "rating": 85,
    "imdbRating": 8.4,
    "imdbVotes": "5.3k",
    "backdropImage": "https://i.ytimg.com/vi/hvyV9qFUuDM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB2ektq2ZrZMhuzGkikfINeGwi2bQ",
    "posterImage": "https://assets.gadgets360cdn.com/pricee/assets/product/202311/Crushed_poster2_1699872795.jpg",
    "duration": "30min",
    "highestRank": 64,
    "top10Days": 9,
    "top100Days": 89,
    "top1000Days": 765,
    "watchOptions": [
      {"platform": "Amazon Prime", "price": "Rs500/-"},
      {"platform": "Amazon MiniTv"}
    ],
    "likes": "8k",
    "dislikes": "1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "3tRiy5OHea4",
    "type" : ["series", "bollywood"],
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 6,
        "posterImage": "https://www.justwatch.com/images/poster/259529669/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 6,
        "posterImage": "https://www.justwatch.com/images/poster/301898545/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 6,
        "posterImage": "https://www.justwatch.com/images/poster/309388921/s166/season-3.webp"
      },

      {
        "seasonNumber": 4,
        "episodes":6,
        "posterImage": "https://www.justwatch.com/images/poster/316281397/s166/season-4.webp"
      },
    ], 
    "genre": ["Drama", "Romance", "Comedy"]
  },

  {
    "id":133,
    "title": "Guttur Gu",
    "year": 2023,
    "rank": 111,
    "rankChange": "▲ +1397",
    "rating": 85,
    "imdbRating": 8.4,
    "imdbVotes": "5.3k",
    "backdropImage": "https://www.justwatch.com/images/backdrop/305701430/s1440/gutar-gu.webp/gutar-gu.webp",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BODk2MzUzYjEtNGU4Mi00N2EyLWFlNzUtZjk1YjQ2MWMzOGE4XkEyXkFqcGc@._V1_.jpg",
    "duration": "30min",
    "highestRank": 64,
    "top10Days": 9,
    "top100Days": 89,
    "top1000Days": 765,
    "watchOptions": [
      {"platform": "Amazon Prime", "price": "Rs500/-"},
      {"platform": "Amazon MiniTv"}
    ],
    "likes": "8k",
    "dislikes": "1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "pDZ-9c2vtf4",
    "type" : ["series", "bollywood"],
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 6,
        "posterImage": "https://www.justwatch.com/images/poster/307662332/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 6,
        "posterImage": "https://www.justwatch.com/images/poster/319976871/s166/season-2.webp"
      },
    ],
    "genre": ["Drama", "Romance", "Comedy"]
  },

  {
    "id":134,
    "title": "Breaking Bad",
    "year": 2008,
    "rank": 111,
    "rankChange": "▲ +6",
    "rating": 97,
    "imdbRating": 9.5,
    "imdbVotes": "2m",
    "backdropImage": "https://images.justwatch.com/backdrop/178169781/s1440/breaking-bad.webp/breaking-bad.webp",
    "posterImage": "https://mir-s3-cdn-cf.behance.net/project_modules/hd/6e04e4104134375.5f5c010ef323a.jpg",
    "duration": "47min",
    "highestRank": 4,
    "top10Days": 75,
    "top100Days": 2542,
    "top1000Days": 3209,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
    ],
    "likes": "72k",
    "dislikes": "2.3k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "1JLUn2DFW4w",
    "type" : ["series", "hollywood"],
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 7,
        "posterImage": "https://images.justwatch.com/poster/8594434/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 13,
        "posterImage": "https://images.justwatch.com/poster/8594406/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 13,
        "posterImage": "https://images.justwatch.com/poster/301572468/s166/season-3.webp"
      },

      {
        "seasonNumber": 4,
        "episodes":13,
        "posterImage": "https://images.justwatch.com/poster/8594372/s166/season-4.webp"
      },

      {
        "seasonNumber": 5,
        "episodes": 16,
        "posterImage": "https://images.justwatch.com/poster/8594362/s166/season-5.webp"
      },
    ],
    "genre": ["Crime", "Drama", "Mystery & Thriller"]
  },

  
  {
    "id":135,
    "title": "Peaky Blinders",
    "year": 2013,
    "rank": 138,
    "rankChange": "▲ +49",
    "rating": 95,
    "imdbRating": 8.8,
    "imdbVotes": "675k",
    "backdropImage": "https://images.justwatch.com/backdrop/178308142/s1440/peaky-blinders.webp/peaky-blinders.webp",
    "posterImage": "https://www.tallengestore.com/cdn/shop/products/PeakyBlinders-ThomasShelby-GarrisonBombing-NetflixTVShow-ArtPoster_7fef60c1-eddd-41e8-89fd-ac6edeba5038.jpg?v=1619864662",
    "duration": "58min",
    "highestRank": 2,
    "top10Days": 63,
    "top100Days": 1631,
    "top1000Days": 3193,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "39k",
    "dislikes": "2k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "1JLUn2DFW4w",
    "type" : ["series", "hollywood"],
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 6,
        "posterImage": "https://images.justwatch.com/poster/195479700/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 6,
        "posterImage": "https://images.justwatch.com/poster/195470848/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 6,
        "posterImage": "https://images.justwatch.com/poster/195470821/s166/season-3.webp"
      },

      {
        "seasonNumber": 4,
        "episodes":6,
        "posterImage": "https://images.justwatch.com/poster/195470692/s166/season-4.webp"
      },

      {
        "seasonNumber": 5,
        "episodes": 6,
        "posterImage": "https://images.justwatch.com/poster/252100318/s166/season-5.webp"
      }, 

      {
        "seasonNumber": 6,
        "episodes": 6,
        "posterImage": "https://images.justwatch.com/poster/265096894/s166/season-6.webp"
      }, 
    ],
    "genre": ["Crime", "Drama", "Mystery & Thriller"]
  },


  {
    "id":136,
    "title": "Supernatural",
    "year": 2005,
    "rank": 123,
    "rankChange": "▲ +1",
    "rating": 90,
    "imdbRating": 8.4,
    "imdbVotes": "495k",
    "backdropImage": "https://images.justwatch.com/backdrop/8604625/s1440/supernatural.webp/supernatural.webp",
    "posterImage": "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781608878277/supernatural-the-poster-collection-9781608878277_lg.jpg",
    "duration": "45min",
    "highestRank": 2,
    "top10Days": 104,
    "top100Days": 1823,
    "top1000Days": 3205,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "14k",
    "dislikes": "1.4k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "1JLUn2DFW4w",
    "type" : ["series", "hollywood"],
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/86311580/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/86311568/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 16,
        "posterImage": "https://images.justwatch.com/poster/170937379/s166/season-3.webp"
      },

      {
        "seasonNumber": 4,
        "episodes":22,
        "posterImage": "https://images.justwatch.com/poster/86311545/s166/season-4.webp"
      },

      {
        "seasonNumber": 5,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/86311496/s166/season-5.webp"
      }, 

      {
        "seasonNumber": 6,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/170937327/s166/season-6.webp"
      }, 

      {
        "seasonNumber": 7,
        "episodes": 23,
        "posterImage": "https://images.justwatch.com/poster/170937264/s166/season-7.webp"
      }, 

      {
        "seasonNumber": 8,
        "episodes": 23,
        "posterImage": "https://images.justwatch.com/poster/170937264/s166/season-7.webp"
      }, 

      {
        "seasonNumber": 9,
        "episodes": 23,
        "posterImage": "https://images.justwatch.com/poster/170937211/s166/season-9.webp"
      }, 

      {
        "seasonNumber": 10,
        "episodes": 24,
        "posterImage": "https://images.justwatch.com/poster/86311406/s166/season-10.webp"
      }, 

      {
        "seasonNumber": 11,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/86311386/s166/season-11.webp"
      }, 

      {
        "seasonNumber": 12,
        "episodes": 23,
        "posterImage": "https://images.justwatch.com/poster/86311364/s166/season-12.webp"
      }, 

      {
        "seasonNumber": 13,
        "episodes": 23,
        "posterImage": "https://images.justwatch.com/poster/86311344/s166/season-13.webp"
      }, 

      {
        "seasonNumber": 14,
        "episodes": 20,
        "posterImage": "https://images.justwatch.com/poster/86311777/s166/season-14.webp"
      }, 

      {
        "seasonNumber": 15,
        "episodes": 20,
        "posterImage": "https://images.justwatch.com/poster/256744176/s166/season-15.webp"
      }, 
    ],
    "genre": ["Mystery & Thriller", "Science-Fiction", "Drama", "Fantasy", "Horror"]
  },

  {
    "id":137,
    "title": "Dark",
    "year": 2017,
    "rank": 66,
    "rankChange": "▲ +320",
    "rating": 94,
    "imdbRating": 8.7,
    "imdbVotes": "464k",
    "backdropImage": "https://www.justwatch.com/images/backdrop/34479143/s1440/dark.webp/dark.webp",
    "posterImage": "https://m.media-amazon.com/images/I/91-tOC-2EQL._AC_UF1000,1000_QL80_.jpg",
    "duration": "56min",
    "highestRank": 1,
    "top10Days": 87,
    "top100Days": 738,
    "top1000Days": 2517,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "30k",
    "dislikes": "1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "Ruyl8_PT_y8",
    "type" : ["series", "hollywood"],
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 10,
        "posterImage": "https://www.justwatch.com/images/poster/32769879/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 8,
        "posterImage": "https://www.justwatch.com/images/poster/272652674/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 8,
        "posterImage": "https://www.justwatch.com/images/poster/191377514/s166/season-3.webp"
      },
    ],
    "genres": ["Science-Fiction", "Mystery & Thriller", "Crime", "Drama"],
  },



  {
    "id":138,
    "title": "The Blacklist ",
    "year": 2013,
    "rank": 243,
    "rankChange": "▲ +45",
    "rating": 90,
    "imdbRating": 7.9,
    "imdbVotes": "284k",
    "backdropImage": "https://images.justwatch.com/backdrop/222822775/s1440/the-blacklist.webp/the-blacklist.webp",
    "posterImage": "https://posterun.com/files/products/blacklist_ver19_xlg.1400x1400.jpg?16cca508a0b1a1af80ac41f3f57ee0b3",
    "duration": "43min",
    "highestRank": 1,
    "top10Days": 53,
    "top100Days": 1912,
    "top1000Days": 3205,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "16k",
    "dislikes": "1.7k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "z-cTuId0rYs",
    "type" : ["series", "hollywood"],
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/94672126/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/176028087/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 23,
        "posterImage": "https://images.justwatch.com/poster/237677062/s166/season-3.webp"
      },

      {
        "seasonNumber": 4,
        "episodes":22,
        "posterImage": "https://images.justwatch.com/poster/35297513/s166/season-4.webp"
      },

      {
        "seasonNumber": 5,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/35297510/s166/season-5.webp"
      }, 

      {
        "seasonNumber": 6,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/265885938/s166/season-6.webp"
      }, 

      {
        "seasonNumber": 7,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/265885939/s166/season-7.webp"
      }, 

      {
        "seasonNumber": 8,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/265885943/s166/season-8.webp"
      }, 

      {
        "seasonNumber": 9,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/265885942/s166/season-9.webp"
      }, 

      {
        "seasonNumber": 10,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/302759152/s166/season-10.webp"
      }, 
    ],
    "genre": ["Mystery & Thriller", "Drama", "Crime"]
  },


  {
    "id":139,
    "title": "Arrow ",
    "year": 2012,
    "rank": 378,
    "rankChange": "▲ +20",
    "rating": 86,
    "imdbRating": 7.5,
    "imdbVotes": "449k",
    "backdropImage": "https://c4.wallpaperflare.com/wallpaper/526/1013/176/arrow-tv-series-wallpaper-preview.jpg",
    "posterImage": "https://media.comicbook.com/wp-content/uploads/2014/05/arrow-season-two-finale-poster.jpg",
    "duration": "42min",
    "highestRank": 1,
    "top10Days": 430,
    "top100Days": 1694,
    "top1000Days": 3190,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "7.4k",
    "dislikes": "1.1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "sKr3mjsVZzU",
    "type" : ["series", "hollywood"],
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 22,
        "posterImage": "https://www.justwatch.com/images/poster/244807449/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 22,
        "posterImage": "https://www.justwatch.com/images/poster/244807457/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 23,
        "posterImage": "https://www.justwatch.com/images/poster/244807463/s166/season-3.webp"
      },

      {
        "seasonNumber": 4,
        "episodes":22,
        "posterImage": "https://www.justwatch.com/images/poster/8579670/s166/season-4.webp"
      },

      {
        "seasonNumber": 5,
        "episodes": 22,
        "posterImage": "https://www.justwatch.com/images/poster/244807490/s166/season-5.webp"
      }, 

      {
        "seasonNumber": 6,
        "episodes": 22,
        "posterImage": "https://www.justwatch.com/images/poster/244807541/s166/season-6.webp"
      }, 

      {
        "seasonNumber": 7,
        "episodes": 22,
        "posterImage": "https://www.justwatch.com/images/poster/109824753/s166/season-7.webp"
      }, 

      {
        "seasonNumber": 8,
        "episodes": 22,
        "posterImage": "https://www.justwatch.com/images/poster/150304764/s166/season-8.webp"
      }, 
    ],
    "genre": ["Crime", "Drama", "Action & Adventure", "Science-Fiction"]
    
  },

  
  {
    "id":140,
    "title": "Asur",
    "year": 2020,
    "rank": 82,
    "rankChange": "▲ +60",
    "rating": 91,
    "imdbRating": 8.5,
    "imdbVotes": "67k",
    "backdropImage": "https://www.justwatch.com/images/backdrop/305709131/s1440/asur.webp/asur.webp",
    "posterImage": "https://assets.gadgets360cdn.com/pricee/assets/product/202305/Asur-Season-1_1685018145.jpg",
    "duration": "47min",
    "highestRank": 1,
    "top10Days": 122,
    "top100Days": 835,
    "top1000Days": 1646,
    "watchOptions": [
      {"platform": "JioCinema", "price": "Rs500/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "7.4k",
    "dislikes": "300",
    "watchlistText": "List",
    "seenText": "Seenall",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "LDirQBvwx7g",
    "type" : ["series", "bollywood"],
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 8,
        "posterImage": "https://www.justwatch.com/images/poster/174333047/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 8,
        "posterImage": "https://www.justwatch.com/images/poster/320137019/s166/season-2.webp"
      },
    ],
    "genre": ["Drama", "Mystery & Thriller", "Crime"]
  },

  {
    "id":141,
    "title": "Guntur Kaaram",
    "year": 2024,
    "rank": 276,
    "rankChange": "▲ +180",
    "rating": 75,
    "imdbRating": 6.9,
    "imdbVotes": "67k",
    "backdropImage": "https://www.justwatch.com/images/backdrop/319454136/s1440/ssmb-28.webp/ssmb-28.webp",
    "posterImage": "https://www.telugutimes.net/storage/gallery/cinema/wall-papers/guntur-karam-movie-posters/guntur-karam-movie-posters-2.jpg",
    "duration": "2h 39min",
    "highestRank": 1,
    "top10Days": 8,
    "top100Days": 74,
    "top1000Days": 456,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Apple TV +", "price": "Rs500/-"}
    ],
    "likes": "7.4k",
    "dislikes": "300",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "QDmCyFxHNME",
    "type" : "tollywood",
    "genre" :["Action & Adventure", "Drama"],
    "description": "Succession is a critically acclaimed drama television series that premiered in 2018 on HBO. Created by Jesse Armstrong, the show centers around the powerful Roy family, owners of a global media empire, and their internal power struggles as they grapple with the impending retirement of the family patriarch, Logan Roy, portrayed by Brian Cox.The series explores themes of power, family loyalty, betrayal, and the complexities of wealth and privilege. As Logan’s children—Kendall (Jeremy Strong), Shiv (Sarah Snook), Roman (Kieran Culkin), and Connor (Alan Ruck)—jockey for position to inherit their father’s empire, their relationships become increasingly strained. Each character embodies distinct personality traits and ambitions, creating a tense and often darkly comedic atmosphere.",
    "cast": [
    {
      "name": "Jeremy Strong",
      "character": "Kendall Roy",
      "photo": "https://dims.apnews.com/dims4/default/7f64548/2147483647/strip/false/crop/2228x1596+0+0/resize/1486x1064!/quality/90/?url=https%3A%2F%2Fstorage.googleapis.com%2Fafs-prod%2Fmedia%2Fc466b2eb934b454ebeadb010b89a6ffa%2F2228.jpeg"
    },

    {
      "name": "Sarah Snook",
      "character": "Siobhan Shiv Roy",
      "photo": "https://evoke.ie/wp-content/uploads/2024/01/GettyImages-1928401708.jpg?w=768"
    },

    {
      "name": "Nicholas Braun",
      "character": "Greg Hirsch",
      "photo": "https://www.the-sun.com/wp-content/uploads/sites/6/2023/03/SC-Nicholas-Braun-Off-Plat-copy.jpg?strip=all&quality=100&w=1620&h=1080&crop=1"
    },

    {
      "name": "Matthew Macfadyen",
      "character": "Tom Wambsgans",
      "photo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcGZGDs6TCShOvAJUsWil3uOnbb89eM79K9YKPB5sIIrkcIJDXE3dfh9MPogGkuMSBloMhuOTBUDio2dCjkguqd4t2VF67V-AMIBsBNCQBg9tUAHhgt3a_1FEkqw1xKbheeBW0O4EpOq77/s1600/kinopoisk.ru-Matthew-Macfadyen-434537--w--1280.jpg"
    },

    {
      "name": "Justine Lupe",
      "character": "Willa Ferreyra",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9Ddt3nFzs3LTvbKCQMOJtYkHiTh8DqAsGg&s"
    },

    {
      "name": "Hope Davis",
      "character" : "Sandi Furness",
      "photo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqPDpqr_1lOHPutGO9-qbXY29qoR2ezWu_ZuVLovie3H9iuFRuSJ2VEuKh_PNRcxkXk6ulFFPSdt86Tu0S12tDNkL4vol8KLEwwXHpSEOM25imVQFbqmPckg7AE_hWqQQik6180hYloaRH/s320/Hope+Davis.jpg"
    },

    {
      "name": "Arian Moayed",
      "character": "Stewy Hosseini",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8POJEpNTtA5ROJ0XQsB3dZTe011TK5T_hXg&s"
    },

    {
      "name": "Natalie Gold",
      "character": "Rava Roy",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUYlxX6Hq9eouKnDBK7Vx55IyIu6oQoYqwVg&s"
    },

    {
      "name": "Alexander Skarsgård",
      "character" : "Lukass Matsson",
      "photo": "https://media.vanityfair.com/photos/6258742267f4b24bbe87221a/1:1/w_1657,h_1657,c_limit/alexander-skarsgard-2022-portrait-lede.png"
    },

    {
      "name": "David Rasche",
      "character" : "Kart Muller",
      "photo": "https://images.squarespace-cdn.com/content/v1/5964d21746c3c4251f73ccec/1631205540209-JPUKWE572XEXMWSYO6C9/Dave+Rasche.jpg"
    },

    {
      "name": "Fisher Stevens",
      "character" : "Hugo Baker",
      "photo": "https://www.indiewire.com/wp-content/uploads/2016/09/160908_tiff0314.jpg"
    },

    {
      "name": "Dasha Nekrasova",
      "character" : "Comfery Pellits",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKOzScdTcuDwPzJy-C433iXe-0b6XVMHE5EA&s"
    },
  ] 
  },
  
  {
    "id":142,
    "title": "This Is Us",
    "year": 2016,
    "rank": 192,
    "rankChange": "▲ +63",
    "rating": 91,
    "imdbRating": 8.7,
    "imdbVotes": "163k",
    "backdropImage": "https://www.justwatch.com/images/backdrop/84106888/s1440/this-is-us.webp/this-is-us.webp",
    "posterImage": "https://d32qys9a6wm9no.cloudfront.net/images/tvs/poster/ff/944a61fd23f3784569b1ae3d5c00d5ba_300x442.jpg?t=1636102095",
    "duration": "43min",
    "highestRank": 3,
    "top10Days": 45,
    "top100Days": 1645,
    "top1000Days": 2949,
    "watchOptions": [
      {"platform": "Hulu", "price": "Rs350/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "19k",
    "dislikes": "2.1k",
    "watchlistText": "List",
    "seenText": "Seenall",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "hljQfJLQmaI",
    "type" :["series", "hollywood"],
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 18,
        "posterImage": "https://www.justwatch.com/images/poster/303934465/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 18,
        "posterImage": "https://www.justwatch.com/images/poster/18479144/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 18,
        "posterImage": "https://www.justwatch.com/images/poster/115402753/s166/season-3.webp"
      },

      {
        "seasonNumber": 4,
        "episodes": 18,
        "posterImage": "https://www.justwatch.com/images/poster/147453411/s166/season-4.webp"
      },

      {
        "seasonNumber": 5,
        "episodes": 16,
        "posterImage": "https://www.justwatch.com/images/poster/240762201/s166/season-5.webp"
      },

      {
        "seasonNumber": 6,
        "episodes": 18,
        "posterImage": "https://www.justwatch.com/images/poster/257533647/s166/season-6.webp"
      },
    ],
    "genre": ["Drama", "Romance", "Comedy"],
    "description": "This Is Us delves into the lives of Jack and Rebecca Pearson and their three children—Kevin, Kate, and Randall—portraying both their everyday struggles and defining life events with a rare depth and authenticity. The show masterfully shifts between the past, where we see Jack and Rebecca raising their children, and the present, where each of the siblings faces their own unique journeys. Randall, an adopted Black child raised in a white family, grapples with questions of identity; Kevin, a successful actor, struggles to find personal fulfillment; and Kate faces lifelong battles with self-worth and body image.The series also touches on powerful themes such as addiction, mental health, adoption, racial identity, and the impact of parenting. With each season, This Is Us unveils how moments of both joy and sorrow weave through generations, shaping each person’s identity. Its profound storytelling, paired with beautifully layered characters, makes it an emotional, compelling portrayal of family, connection, and resilience.",

    "cast": [
    {
      "name": "Milo Ventimiglia",
      "character": "jack Pearson",
      "photo": "https://i2.wp.com/images2.fanpop.com/images/photos/4300000/MILO-sweet-milo-ventimiglia-4362339-1702-2560.jpg"
    },

    {
      "name": "Mandy Moor",
      "character": "Rebecca",
      "photo": "https://evoke.ie/wp-content/uploads/2024/01/GettyImages-1928401708.jpg?w=768"
    },

    {
      "name": "Sterling K. Brown",
      "character": "Randall Pearson",
      "photo": "https://www.the-sun.com/wp-content/uploads/sites/6/2023/03/SC-Nicholas-Braun-Off-Plat-copy.jpg?strip=all&quality=100&w=1620&h=1080&crop=1"
    },

    {
      "name": "Justin Hartley",
      "character": "Kevin",
      "photo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcGZGDs6TCShOvAJUsWil3uOnbb89eM79K9YKPB5sIIrkcIJDXE3dfh9MPogGkuMSBloMhuOTBUDio2dCjkguqd4t2VF67V-AMIBsBNCQBg9tUAHhgt3a_1FEkqw1xKbheeBW0O4EpOq77/s1600/kinopoisk.ru-Matthew-Macfadyen-434537--w--1280.jpg"
    },

    {
      "name": "Hannah Zeile",
      "character": "Kate Pearson",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9Ddt3nFzs3LTvbKCQMOJtYkHiTh8DqAsGg&s"
    },

    {
      "name": "Alexandra Breckenridge",
      "character" : "Sophie",
      "photo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqPDpqr_1lOHPutGO9-qbXY29qoR2ezWu_ZuVLovie3H9iuFRuSJ2VEuKh_PNRcxkXk6ulFFPSdt86Tu0S12tDNkL4vol8KLEwwXHpSEOM25imVQFbqmPckg7AE_hWqQQik6180hYloaRH/s320/Hope+Davis.jpg"
    },

    {
      "name": "Susan Kelechi Watson",
      "character": "Beth",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8POJEpNTtA5ROJ0XQsB3dZTe011TK5T_hXg&s"
    },

    {
      "name": "Natalie Gold",
      "character": "Rava Roy",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUYlxX6Hq9eouKnDBK7Vx55IyIu6oQoYqwVg&s"
    },

    {
      "name": "Alexander Skarsgård",
      "character" : "Lukass Matsson",
      "photo": "https://media.vanityfair.com/photos/6258742267f4b24bbe87221a/1:1/w_1657,h_1657,c_limit/alexander-skarsgard-2022-portrait-lede.png"
    },

    {
      "name": "David Rasche",
      "character" : "Kart Muller",
      "photo": "https://images.squarespace-cdn.com/content/v1/5964d21746c3c4251f73ccec/1631205540209-JPUKWE572XEXMWSYO6C9/Dave+Rasche.jpg"
    },

    {
      "name": "Fisher Stevens",
      "character" : "Hugo Baker",
      "photo": "https://www.indiewire.com/wp-content/uploads/2016/09/160908_tiff0314.jpg"
    },

    {
      "name": "Dasha Nekrasova",
      "character" : "Comfery Pellits",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKOzScdTcuDwPzJy-C433iXe-0b6XVMHE5EA&s"
    },
  ] 
  },
  
  {
    "id":143,
    "title": "The Handmaid's Tale",
    "year": 2017,
    "rank": 225,
    "rankChange": "▲ +61",
    "rating": 90,
    "imdbRating": 8.4,
    "imdbVotes": "264k",
    "backdropImage": "https://www.justwatch.com/images/backdrop/63296147/s1440/the-handmaids-tale.webp/the-handmaids-tale.webp",
    "posterImage": "https://m.media-amazon.com/images/I/61pnkMeoWeL._AC_UF1000,1000_QL80_.jpg",
    "duration": "52min",
    "highestRank": 1,
    "top10Days": 203,
    "top100Days": 1916,
    "top1000Days": 2813,
    "watchOptions": [
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "28k",
    "dislikes": "2.8k",
    "watchlistText": "List",
    "seenText": "Seenall",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "81PyH5TH-NQ",
    "type" : ["series", "hollywood"],
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 10,
        "posterImage": "https://www.justwatch.com/images/poster/245230736/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 13,
        "posterImage": "https://www.justwatch.com/images/poster/54958153/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 13,
        "posterImage": "https://www.justwatch.com/images/poster/127484949/s166/season-3.webp"
      },

      {
        "seasonNumber": 4,
        "episodes": 10,
        "posterImage": "https://www.justwatch.com/images/poster/244464454/s166/season-4.webp"
      },

      {
        "seasonNumber": 5,
        "episodes": 10,
        "posterImage": "https://www.justwatch.com/images/poster/300630020/s166/season-5.webp"
      },

    ],
    "genre": ["Drama", "Science-Fiction", "Mystery & Thriller"],
    "description": "The Handmaid's Tale is a 2017 dystopian television series based on Margaret Atwood's 1985 novel of the same name. The series is set in a totalitarian society called Gilead, where a religious, patriarchal regime has overthrown the U.S. government. Due to environmental disasters and declining birth rates, fertile women, called handmaids, are forced into childbearing slavery to repopulate the world.The show follows June Osborne (played by Elisabeth Moss), who is renamed Offred when she becomes a handmaid. It portrays her struggle for survival and resistance against the brutal and oppressive regime, tackling themes of power, control, and the fight for freedom. The series is known for its dark, intense storytelling and its reflection on contemporary issues like women's rights and authoritarianism.",
    "cast": [
    {
      "name": "Elisabeth Moss",
      "character": "June Osborne",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWHKf7V-GYzd69NWTPY8rqDmE2sGn9dEroA&s"
    },

    {
      "name": "Yvonne Strahovski",
      "character": "Serena Joy",
      "photo": "https://goldenglobes.com/wp-content/uploads/2023/10/Yvonne-Strahovski-032218-The-Handmaids-Tale-TV-3.jpg?w=600?w=600"
    },

    {
      "name": "Madeline Brewer",
      "character": "Ofwarren",
      "photo": "https://www.hollywoodreporter.com/wp-content/uploads/2016/08/madeline_brewer_roots_getty_h_2016.jpg?w=1024"
    },

    {
      "name": "Alexis Bledel",
      "character": "Dr.Emily Malek/ Ofglen",
      "photo": "https://i.pinimg.com/originals/39/55/11/395511b399c109fd1d405660a4851c16.jpg"
    },

    {
      "name": "Joseph Fiennes",
      "character": "Commander Fred",
      "photo": "https://m.media-amazon.com/images/M/MV5BNDBkZGNlNGEtNTg5OS00NTY5LTlkOGItOWRhNjUwODEyZDcwXkEyXkFqcGdeQXVyMTA2MDIzMDE5._V1_.jpg"
    },

    {
      "name": "Sam Jaeger",
      "character" : "Mark Tuello",
      "photo": "https://ntvb.tmsimg.com/assets/assets/263434_v9_bd.jpg?w=360&h=480"
    },

    {
      "name": "Max Minghella",
      "character": "Nick Blaine",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2lhjaX1TMeJeyW2L5Q3ljQjS53GTN8OElVg&s"
    },

    {
      "name": "Natalie Gold",
      "character": "Rava Roy",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUYlxX6Hq9eouKnDBK7Vx55IyIu6oQoYqwVg&s"
    },

    {
      "name": "Alexander Skarsgård",
      "character" : "Lukass Matsson",
      "photo": "https://media.vanityfair.com/photos/6258742267f4b24bbe87221a/1:1/w_1657,h_1657,c_limit/alexander-skarsgard-2022-portrait-lede.png"
    },

    {
      "name": "David Rasche",
      "character" : "Kart Muller",
      "photo": "https://images.squarespace-cdn.com/content/v1/5964d21746c3c4251f73ccec/1631205540209-JPUKWE572XEXMWSYO6C9/Dave+Rasche.jpg"
    },

    {
      "name": "Fisher Stevens",
      "character" : "Hugo Baker",
      "photo": "https://www.indiewire.com/wp-content/uploads/2016/09/160908_tiff0314.jpg"
    },

    {
      "name": "Dasha Nekrasova",
      "character" : "Comfery Pellits",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKOzScdTcuDwPzJy-C433iXe-0b6XVMHE5EA&s"
    },

    {
      "name": "Sydney Sweeney",
      "character" : "Eden Blaine",
      "photo": "https://variety.com/wp-content/uploads/2023/12/syd.jpg?w=1000"
    },

   
  ] 
  },

  {
    "id":144,
    "title": "Succession",
    "year": 2018,
    "rank": 177,
    "rankChange": "▲ +59",
    "rating": 93,
    "imdbRating": 8.8,
    "imdbVotes": "292k",
    "backdropImage": "https://www.justwatch.com/images/backdrop/304409202/s1440/succession.webp/succession.webp",
    "posterImage": "https://posterwa.com/cdn/shop/files/SUCCESSION2_f5dd1267-2717-4efe-945b-888af4b3e255.jpg?v=1714543461",
    "duration": "1h 4min",
    "highestRank": 1,
    "top10Days": 115,
    "top100Days": 1024,
    "top1000Days": 2327,
    "watchOptions": [
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "32k",
    "dislikes": "2.2k",
    "watchlistText": "List",
    "seenText": "Seenall",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "ZO-XX1UpsqY",
    "type" : ["series", "hollywood"],
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 10,
        "posterImage": "https://www.justwatch.com/images/poster/139313185/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 10,
        "posterImage": "https://www.justwatch.com/images/poster/142946493/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 9,
        "posterImage": "https://www.justwatch.com/images/poster/256205397/s166/season-3.webp"
      },

      {
        "seasonNumber": 4,
        "episodes": 10,
        "posterImage": "https://www.justwatch.com/images/poster/304268634/s166/season-4.webp"
      },
    ],
    "genre": ["Drama", "Comedy"],
    "description": "Succession is a critically acclaimed drama television series that premiered in 2018 on HBO. Created by Jesse Armstrong, the show centers around the powerful Roy family, owners of a global media empire, and their internal power struggles as they grapple with the impending retirement of the family patriarch, Logan Roy, portrayed by Brian Cox.The series explores themes of power, family loyalty, betrayal, and the complexities of wealth and privilege. As Logan’s children—Kendall (Jeremy Strong), Shiv (Sarah Snook), Roman (Kieran Culkin), and Connor (Alan Ruck)—jockey for position to inherit their father’s empire, their relationships become increasingly strained. Each character embodies distinct personality traits and ambitions, creating a tense and often darkly comedic atmosphere.",
    "cast": [
    {
      "name": "Jeremy Strong",
      "character": "Kendall Roy",
      "photo": "https://dims.apnews.com/dims4/default/7f64548/2147483647/strip/false/crop/2228x1596+0+0/resize/1486x1064!/quality/90/?url=https%3A%2F%2Fstorage.googleapis.com%2Fafs-prod%2Fmedia%2Fc466b2eb934b454ebeadb010b89a6ffa%2F2228.jpeg"
    },

    {
      "name": "Sarah Snook",
      "character": "Siobhan Shiv Roy",
      "photo": "https://evoke.ie/wp-content/uploads/2024/01/GettyImages-1928401708.jpg?w=768"
    },

    {
      "name": "Nicholas Braun",
      "character": "Greg Hirsch",
      "photo": "https://www.the-sun.com/wp-content/uploads/sites/6/2023/03/SC-Nicholas-Braun-Off-Plat-copy.jpg?strip=all&quality=100&w=1620&h=1080&crop=1"
    },

    {
      "name": "Matthew Macfadyen",
      "character": "Tom Wambsgans",
      "photo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcGZGDs6TCShOvAJUsWil3uOnbb89eM79K9YKPB5sIIrkcIJDXE3dfh9MPogGkuMSBloMhuOTBUDio2dCjkguqd4t2VF67V-AMIBsBNCQBg9tUAHhgt3a_1FEkqw1xKbheeBW0O4EpOq77/s1600/kinopoisk.ru-Matthew-Macfadyen-434537--w--1280.jpg"
    },

    {
      "name": "Justine Lupe",
      "character": "Willa Ferreyra",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9Ddt3nFzs3LTvbKCQMOJtYkHiTh8DqAsGg&s"
    },

    {
      "name": "Hope Davis",
      "character" : "Sandi Furness",
      "photo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqPDpqr_1lOHPutGO9-qbXY29qoR2ezWu_ZuVLovie3H9iuFRuSJ2VEuKh_PNRcxkXk6ulFFPSdt86Tu0S12tDNkL4vol8KLEwwXHpSEOM25imVQFbqmPckg7AE_hWqQQik6180hYloaRH/s320/Hope+Davis.jpg"
    },

    {
      "name": "Arian Moayed",
      "character": "Stewy Hosseini",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8POJEpNTtA5ROJ0XQsB3dZTe011TK5T_hXg&s"
    },

    {
      "name": "Natalie Gold",
      "character": "Rava Roy",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUYlxX6Hq9eouKnDBK7Vx55IyIu6oQoYqwVg&s"
    },

    {
      "name": "Alexander Skarsgård",
      "character" : "Lukass Matsson",
      "photo": "https://media.vanityfair.com/photos/6258742267f4b24bbe87221a/1:1/w_1657,h_1657,c_limit/alexander-skarsgard-2022-portrait-lede.png"
    },

    {
      "name": "David Rasche",
      "character" : "Kart Muller",
      "photo": "https://images.squarespace-cdn.com/content/v1/5964d21746c3c4251f73ccec/1631205540209-JPUKWE572XEXMWSYO6C9/Dave+Rasche.jpg"
    },

    {
      "name": "Fisher Stevens",
      "character" : "Hugo Baker",
      "photo": "https://www.indiewire.com/wp-content/uploads/2016/09/160908_tiff0314.jpg"
    },

    {
      "name": "Dasha Nekrasova",
      "character" : "Comfery Pellits",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKOzScdTcuDwPzJy-C433iXe-0b6XVMHE5EA&s"
    },
  ] 
  },

  {
    "id":145,
    "title": "The Office",
    "year": 2005,
    "rank": 65,
    "rankChange": "▲ +40",
    "rating": 94,
    "imdbRating": 9.0,
    "imdbVotes": "741k",
    "backdropImage": "https://www.justwatch.com/images/backdrop/304433230/s1440/the-office.webp/the-office.webp",
    "posterImage": "https://m.media-amazon.com/images/I/91gZANzFVKL._AC_UF894,1000_QL80_.jpg",
    "duration": "24min",
    "highestRank": 1,
    "top10Days": 20,
    "top100Days": 2133,
    "top1000Days": 3053,
    "watchOptions": [
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "37k",
    "dislikes": "2.5k",
    "watchlistText": "List",
    "seenText": "Seenall",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "A7qOi8VyxG8",
    "type" : ["series", "hollywood"],
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 6,
        "posterImage": "https://www.justwatch.com/images/poster/245581596/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 22,
        "posterImage": "https://www.justwatch.com/images/poster/238556208/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 23,
        "posterImage": "https://www.justwatch.com/images/poster/245581579/s166/season-3.webp"
      },

      {
        "seasonNumber": 4,
        "episodes": 14,
        "posterImage": "https://www.justwatch.com/images/poster/238555997/s166/season-4.webp"
      },

      {
        "seasonNumber": 5,
        "episodes": 26,
        "posterImage": "https://www.justwatch.com/images/poster/238555958/s166/season-5.webp"
      },

      {
        "seasonNumber": 6,
        "episodes": 26,
        "posterImage": "https://www.justwatch.com/images/poster/245582099/s166/season-6.webp"
      },

      {
        "seasonNumber": 7,
        "episodes": 24,
        "posterImage": "https://www.justwatch.com/images/poster/238555894/s166/season-7.webp"
      },

      {
        "seasonNumber": 8,
        "episodes": 24,
        "posterImage": "https://www.justwatch.com/images/poster/238555860/s166/season-8.webp"
      },

      {
        "seasonNumber": 9,
        "episodes": 23,
        "posterImage": "https://www.justwatch.com/images/poster/8603758/s166/season-9.webp"
      },
    ],
    "genre": ["Drama", "Comedy"],
    "description": "The Office (U.S.) is a mockumentary-style comedy television series that premiered in 2005, adapted from the British series of the same name. Set in the mundane offices of Dunder Mifflin Paper Company in Scranton, Pennsylvania, the show follows the daily lives of the employees as they navigate their work environment, personal relationships, and the eccentricities of their boss, Michael Scott, played by Steve Carell. The series features an ensemble cast, including Rainn Wilson as the eccentric and ambitious salesman Dwight Schrute, Jenna Fischer as the sweet and relatable receptionist Pam Beesly, and John Krasinski as the charming paper salesman Jim Halpert. The unique format of the show allows characters to address the camera directly, providing insight into their thoughts and emotions, which adds to the comedic effect.",
    "cast": [
    {
      "name": "Michael Scott",
      "character": "Steve Carell",
      "photo": "https://jeprades.github.io/michael-scott-tribute/images/michael-scott-header.png"
    },

    {
      "name": "Pam Beesly",
      "character" : "Jenna Fischer",
      "photo": "https://images.squarespace-cdn.com/content/v1/59321c90b8a79b875d416c51/1597173626096-CDZGXGAX80OCS7SX1H03/IMG_8069.jpg"
    },

    {
      "name": "Erin Hanon",
      "character" : "Ellie kamper",
      "photo": "https://brobible.com/wp-content/uploads/2018/09/best-of-erin-the-office-moments.jpg"
    },

    {
      "name": "jan Levinson",
      "character" : "Melora Hardin",
      "photo": "https://www.denofgeek.com/wp-content/uploads/2022/09/Jan-Levinson.jpg?fit=1200%2C675"
    },

    {
      "name": "Jim Harplet",
      "character" : "John Krasinski",
      "photo": "https://parade.com/.image/t_share/MjAzNDg1MjIxMzU2NTc4NjEy/john-krasinski-net-worth.jpg"
    },

    {
      "name": "Dwight Schrute",
      "character" : "Rainn Wilson",
      "photo": "https://www.myany.city/sites/default/files/styles/scaled_cropped_medium__260x260/public/field/image/node-related-images/sample-dwight-k-schrute.jpg?itok=8TfRscbA"
    },

    {
      "name": "Karen Filippelli",
      "character" : "Rashida Jones",
      "photo": "https://www.nbc.com/sites/nbcblog/files/2023/07/the-office-karen-filippelli-4.jpg"
    },

    {
      "name": "Creed Bratton",
      "character" : "Creed Bratton",
      "photo": "https://creedbratton.com/cdn/shop/files/about_3024x.jpg?v=1702927857"
    },

    {
      "name": "Kevin Malone",
      "character" : "Brian Baumgartner",
      "photo": "https://people.com/thmb/uOz-W_vRpGFK4ttzVaGLkmoGdcA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(639x0:641x2)/GettyImages-915596304-0247dbf9c44544abbe1e8b7ebab010db.jpg"
    },

    {
      "name": "Angela Martin",
      "character" : "Angela Kinsey",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRw5aSuIzKe4qe0GDTiGLwq8W5ToZrhqmfGA&s"
    },

    {
      "name": "Nellie Bertram",
      "character" : "Chaterine Tate",
      "photo": "https://d2thvodm3xyo6j.cloudfront.net/media/2022/04/5d528646bb88a244-1200x675.jpg"
    },

  ] 
    
  },

  {
    "id":146,
    "title": "My Hero Academia",
    "year": 2016,
    "rank": 192,
    "rankChange": "▲ +105",
    "rating": 90,
    "imdbRating": 8.2,
    "imdbVotes": "85k",
    "backdropImage": "https://www.justwatch.com/images/backdrop/99635713/s1440/my-hero-academia.webp/my-hero-academia.webp",
    "posterImage": "https://images-cdn.ubuy.co.in/667d1947ef36b7500453ca2e-my-hero-academia-group-collage-wall.jpg",
    "duration": "24min",
    "highestRank": 1,
    "top10Days": 203,
    "top100Days": 300,
    "top1000Days": 2506,
    "watchOptions": [
      {"platform": "Amazon Prime", "price": "Rs500/-"},
      {"platform": "Netflix", "price": "Rs 800/-"},
      {"platform": "Applle TV+", "price": "Rs 1500/-"},
    ],
    "likes": "8.2k",
    "dislikes": "500",
    "watchlistText": "List",
    "seenText": "Seenall",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "X_r-M3coFe4",
    "type" : ["series", "hollywood", "anime"],
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 13,
        "posterImage": "https://www.justwatch.com/images/poster/261522801/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 25,
        "posterImage": "https://www.justwatch.com/images/poster/261523688/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 25,
        "posterImage": "https://www.justwatch.com/images/poster/261523692/s166/season-3.webp"
      },

      {
        "seasonNumber": 4,
        "episodes": 25,
        "posterImage": "https://www.justwatch.com/images/poster/261523691/s166/season-4.webp"
      },

      {
        "seasonNumber": 5,
        "episodes": 25,
        "posterImage": "https://www.justwatch.com/images/poster/272640918/s166/season-5.webp"
      },

      {
        "seasonNumber": 6,
        "episodes": 25,
        "posterImage": "https://www.justwatch.com/images/poster/301317954/s166/season-6.webp"
      },

      {
        "seasonNumber": 7,
        "episodes": 21,
        "posterImage": "https://www.justwatch.com/images/poster/320446097/s166/season-7.webp"
      },
    ],
    "genre": ["Science-Fiction", "Action & Adventure", "Animation", "Fantasy", "Comedy"],
    "description": "My Hero Academia (Boku no Hero Academia) is a popular anime and manga series created by Kohei Horikoshi. Set in a world where the majority of the population possesses superpowers known as Quirks, the story follows a young boy named Izuku Midoriya. Born without a Quirk, Izuku dreams of becoming a hero like his idol, All Might, the world's greatest hero.When he unexpectedly inherits All Might's powerful Quirk, One For All, Izuku is granted the chance to attend U.A. High School, a prestigious academy for aspiring heroes. Here, he trains alongside a diverse group of classmates, each with unique abilities and personalities, including the fiery Shoto Todoroki and the determined Ochaco Uraraka.",
    "cast": [
    {
      "character": "Izuku Midoriya",
      "name": "Justin Briner",
      "photo": "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/a5258082-3128-475e-ab92-1a5eae6eb35b/width=450/pixai-1648288826444539350-0.jpeg"
    },

    {
      "character": "Katsuki Bakugou",
      "name": "Clifford Chapin",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw68ViM2xtn651x4S53U55Xdl2d0JM92iScA&s"
    },

    {
      "character": "Ochaco Uraraka",
      "name": "Ayane Sakura",
      "photo": "https://i.pinimg.com/736x/ae/51/07/ae51074af794a4761444fd32a6907d50.jpg"
    },

    {
      "character": "Denki Kaminari",
      "name": "Kyle Phillips",
      "photo": "https://i.pinimg.com/736x/6a/13/a2/6a13a2b899383e5ea159fd2a868d87ee.jpg"
    },

    {
      "character": "Shoto Todoroki",
      "name": "David Matranga",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjluH5LF9s2PdLen8AvMy015b9jpX-gOkJag&s"
    },

    {
      "character": "Tsuyu Asui",
      "name": "Monica Rial",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsCWXIoArqBvtCCuenHnssqrFQNfAiBugFAA&s"
    },

    {
      "character": "All Might",
      "name": "Kenta Miyake",
      "photo": "https://wallpapers.com/images/hd/all-anime-my-hero-academia-sl2elsl50nf0vsrr.jpg"
    },

    {
      "character": "Eijiro Kirishima",
      "name": "Justin Cook",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVx7mrEaZBNphzZTiOE8gUCTf4ioaP7HaBsQ&s"
    },

    {
      "character": "Tenya Iida",
      "name": "Kaito Ishikawa",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1qFNLSb8zVZ4kKJ9CQ1n4ruROgXy3Gjx7PQ&s"
    },

    {
      "character": "Momo Yaoyorozu",
      "name": "Colleen Clinkenbeared",
      "photo": "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/03/My-Hero-Academia-Momo-Yaoyorozu-Feature.jpg"
    },

  ] 
  },

  {
    "id":147,
    "title": "Naruto Shippuden",
    "year": 2007,
    "rank": 127,
    "rankChange": "▲ +400",
    "rating": 88,
    "imdbRating": 8.7,
    "imdbVotes": "541k",
    "backdropImage": "https://www.justwatch.com/images/backdrop/186994372/s1440/naruto-shippuden.webp/naruto-shippuden.webp",
    "posterImage": "https://i.pinimg.com/736x/c5/7b/0f/c57b0f99d98cd442f734478734cd375c.jpg",
    "duration": "24min",
    "highestRank": 1,
    "top10Days": 24,
    "top100Days": 1132,
    "top1000Days": 2890,
    "watchOptions": [

      {"platform": "Amazon Prime", "price": "Rs500/-"},
      {"platform": "Netflix", "price": "Rs 800/-"},
    ],
    "likes": "9.7k",
    "dislikes": "1k",
    "watchlistText": "List",
    "seenText": "Seenall",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "dzvoS1gA80s",
    "type" : ["series", "hollywood", "anime"],
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 500,
        "posterImage": "https://www.justwatch.com/images/poster/304636806/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 53,
        "posterImage": "https://www.justwatch.com/images/poster/304636102/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 71,
        "posterImage": "https://www.justwatch.com/images/poster/304636676/s166/season-3.webp"
      },

      {
        "seasonNumber": 4,
        "episodes": 65,
        "posterImage": "https://www.justwatch.com/images/poster/304636702/s166/season-4.webp"
      },

      {
        "seasonNumber": 5,
        "episodes": 65,
        "posterImage": "https://www.justwatch.com/images/poster/304636510/s166/season-5.webp"
      },

      {
        "seasonNumber": 6,
        "episodes": 62,
        "posterImage": "https://www.justwatch.com/images/poster/304636774/s166/season-6.webp"
      },

      {
        "seasonNumber": 7,
        "episodes": 16,
        "posterImage": "https://www.justwatch.com/images/poster/304636787/s166/season-7.webp"
      },

      {
        "seasonNumber": 8,
        "episodes": 48,
        "posterImage": "https://www.justwatch.com/images/poster/304636815/s166/season-8.webp"
      },

      {
        "seasonNumber": 9,
        "episodes": 42,
        "posterImage": "https://www.justwatch.com/images/poster/304636849/s166/season-9.webp"
      },

      {
        "seasonNumber": 10,
        "episodes": 50,
        "posterImage": "https://www.justwatch.com/images/poster/304123742/s166/season-10.webp"
      },

      {
        "seasonNumber": 11,
        "episodes": 45,
        "posterImage": "https://www.justwatch.com/images/poster/304201961/s166/season-11.webp"
      },

      {
        "seasonNumber": 12,
        "episodes": 66,
        "posterImage": "https://www.justwatch.com/images/poster/304202001/s166/season-12.webp"
      },

      {
        "seasonNumber": 13,
        "episodes": 81,
        "posterImage": "https://www.justwatch.com/images/poster/304227685/s166/season-13.webp"
      },

      {
        "seasonNumber": 14,
        "episodes": 53,
        "posterImage": "https://www.justwatch.com/images/poster/304229669/s166/season-14.webp"
      },

      {
        "seasonNumber": 15,
        "episodes": 71,
        "posterImage": "https://www.justwatch.com/images/poster/304229675/s166/season-15.webp"
      },

      {
        "seasonNumber": 16,
        "episodes": 26,
        "posterImage": "https://www.justwatch.com/images/poster/304237425/s166/season-16.webp"
      },

      {
        "seasonNumber": 17,
        "episodes": 24,
        "posterImage": "https://www.justwatch.com/images/poster/307613717/s166/season-17.webp"
      },

      {
        "seasonNumber": 18,
        "episodes": 42,
        "posterImage": "https://www.justwatch.com/images/poster/304637016/s166/season-18.webp"
      },

      {
        "seasonNumber": 19,
        "episodes": 77,
        "posterImage": "https://www.justwatch.com/images/poster/304637023/s166/season-19.webp"
      },

      {
        "seasonNumber": 20,
        "episodes": 141,
        "posterImage": "https://www.justwatch.com/images/poster/304637039/s166/season-20.webp"
      },

      {
        "seasonNumber": 21,
        "episodes": 68,
        "posterImage": "https://www.justwatch.com/images/poster/125146126/s166/season-21.webp"
      },

      {
        "seasonNumber": 22,
        "episodes": 63,
        "posterImage": "https://www.justwatch.com/images/poster/8603953/s166/season-22.webp"
      },

      {
        "seasonNumber": 23,
        "episodes": 50,
        "posterImage": "https://www.justwatch.com/images/poster/8603952/s166/season-23.webp"
      },

      {
        "seasonNumber": 24,
        "episodes": 21,
        "posterImage": "https://www.justwatch.com/images/poster/33474763/s166/season-24.webp"
      },
    ],
    "genre": ["Animation", "Action & Adventure", "Science-Fiction", "Comedy", "Drama", "Fantasy"],
    "description": "Naruto Shippuden is the continuation of the original Naruto anime, based on the manga by Masashi Kishimoto. The series picks up approximately two and a half years after the events of the first installment, following the journey of Naruto Uzumaki, a young ninja with dreams of becoming the strongest Hokage (leader) of his village, the Hidden Leaf Village (Konoha).In Shippuden, Naruto returns from his training with Jiraiya, eager to reunite with his friends and continue his quest to bring back his friend Sasuke Uchiha, who has left the village in pursuit of power. The series delves deeper into the complex relationships among the characters, especially the themes of friendship, loyalty, and redemption.",
    "cast": [
    {
      "character": "Uzumaki Naruto",
      "name" : "Junko Takeuchi",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlGr9nqscZBqmD_lc0CGx7ZgMpaHZeTogdLg&s"
    },

    {
      "character": "Sasuke Uchiha",
      "name" : "Noriaki Sugiyama",
      "photo": "https://imgix.ranker.com/list_img_v2/1377/2681377/original/best-sasuke-uchiha-quotes?fit=crop&fm=pjpg&q=80&dpr=2&w=1200&h=720"
    },

    {
      "character": "Kakashi Hatake",
      "name" : "Kenichi Suzumura",
      "photo": "https://wallshub.com/uploads/posts/2024-05/462cee137f_epic-kakashi-hatake.webp"
    },

    {
      "character": "Itachi Uchiha",
      "name" : "Hideo Ishikawa",
      "photo": "https://i.pinimg.com/736x/9a/63/06/9a6306db28f70d27f39249e0044da128.jpg"
    },

    {
      "character": "Deidara",
      "name" : "Katsuhiko Kawamoto",
      "photo": "https://i.pinimg.com/originals/15/64/d9/1564d9c329586d3f3064110a7dac5331.jpg"
    },

    {
      "character": "Kushina Uzumaki",
      "name" : "Emi Shinohara",
      "photo": "https://e1.pxfuel.com/desktop-wallpaper/222/853/desktop-wallpaper-kushina-uzumaki-by-lunasaki10-kushina-uzumaki.jpg"
    },

    {
      "character": "karin",
      "name" : "Kanako Toujô",
      "photo": "https://image.cdn2.seaart.ai/2024-02-07/cn1mvtde878c73bg0f10/82340e34d58721257beb8b2719f46574bc9f59bf_high.webp"
    },

    {
      "character": "Shizune",
      "name" : "Keiko Nemoto",
      "photo": "https://go_service.aieasypic.com/?url=https%3A%2F%2Fimage.civitai.com%2FxG1nkqKTMzGDvpLrqFT7WA%2Fed954d93-97b5-4ed4-a5da-b187d55e21b2%2Fwidth%3D450%2F4214000.jpeg&type=webp&width=500&quality=60&civitai=true"
    },

    {
      "character": "Temari Romi Park",
      "name" : "Romi Park",
      "photo": "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/ddcf4700-3167-4b8e-a172-8e0b990b0692/width=450/00756-649156240.jpeg"
    },

    {
      "character": "Tenten",
      "name" : "Yukari Tamura",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAwQFs8JiSwfjc-OvJyeU4VIQTfzktT5XrBg&s"
    },
  ]
  },

  {
    "id":148,
    "title": "One Piece",
    "year": 2000,
    "rank": 13,
    "rankChange": "▲ +400",
    "rating": 88,
    "imdbRating": 9.0,
    "imdbVotes": "541k",
    "backdropImage": "https://www.justwatch.com/images/backdrop/310515850/s1440/one-piece.webp/one-piece.webp",
    "posterImage": "https://i.ebayimg.com/images/g/bosAAOSwLB5egNBa/s-l1200.jpg",
    "duration": "24min",
    "highestRank": 5,
    "top10Days": 30,
    "top100Days": 531,
    "top1000Days": 2890,
    "watchOptions": [

      {"platform": "Amazon Prime", "price": "Rs500/-"},
      {"platform": "Netflix", "price": "Rs 800/-"},
    ],
    "likes": "9.7k",
    "dislikes": "1k",
    "watchlistText": "List",
    "seenText": "Seenall",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "dzvoS1gA80s",
    "type" : ["series", "hollywood", "anime"],
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 930,
        "posterImage": "https://www.justwatch.com/images/poster/301574476/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 38,
        "posterImage": "https://www.justwatch.com/images/poster/304428670/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 31,
        "posterImage": "https://www.justwatch.com/images/poster/304340004/s166/season-3.webp"
      },

      {
        "seasonNumber": 4,
        "episodes": 78,
        "posterImage": "https://www.justwatch.com/images/poster/304340006/s166/season-4.webp"
      },

      {
        "seasonNumber": 5,
        "episodes": 26,
        "posterImage": "https://www.justwatch.com/images/poster/304428668/s166/season-5.webp"
      },

      {
        "seasonNumber": 6,
        "episodes": 104,
        "posterImage": "https://www.justwatch.com/images/poster/304340154/s166/season-6.webp"
      },

      {
        "seasonNumber": 7,
        "episodes": 72,
        "posterImage": "https://www.justwatch.com/images/poster/304340155/s166/season-7.webp"
      },

      {
        "seasonNumber": 8,
        "episodes": 70,
        "posterImage": "https://www.justwatch.com/images/poster/304340156/s166/season-8.webp"
      },

      {
        "seasonNumber": 9,
        "episodes": 147,
        "posterImage": "https://www.justwatch.com/images/poster/304340157/s166/season-9.webp"
      },

    
      {
        "seasonNumber": 10,
        "episodes": 90,
        "posterImage": "https://www.justwatch.com/images/poster/304346873/s166/season-10.webp"
      },

      {
        "seasonNumber": 11,
        "episodes": 125,
        "posterImage": "https://www.justwatch.com/images/poster/304340169/s166/season-11.webp"
      },

      {
        "seasonNumber": 12,
        "episodes": 70,
        "posterImage": "https://www.justwatch.com/images/poster/304340184/s166/season-12.webp"
      },

      {
        "seasonNumber": 13,
        "episodes": 201,
        "posterImage": "https://www.justwatch.com/images/poster/304153856/s166/season-13.webp"
      },

      {
        "seasonNumber": 14,
        "episodes": 116,
        "posterImage": "https://www.justwatch.com/images/poster/304346876/s166/season-14.webp"
      },

      {
        "seasonNumber": 15,
        "episodes": 124,
        "posterImage": "https://www.justwatch.com/images/poster/304153857/s166/season-15.webp"
      },

      {
        "seasonNumber": 16,
        "episodes": 100,
        "posterImage": "https://www.justwatch.com/images/poster/304340207/s166/season-16.webp"
      },

      {
        "seasonNumber": 17,
        "episodes": 174,
        "posterImage": "https://www.justwatch.com/images/poster/304340232/s166/season-17.webp"
      },

      {
        "seasonNumber": 18,
        "episodes": 59,
        "posterImage": "https://www.justwatch.com/images/poster/304340055/s166/season-18.webp"
      },

      {
        "seasonNumber": 19,
        "episodes": 76,
        "posterImage": "https://www.justwatch.com/images/poster/304340279/s166/season-19.webp"
      },

      {
        "seasonNumber": 20,
        "episodes": 28,
        "posterImage": "https://www.justwatch.com/images/poster/304340298/s166/season-20.webp"
      },

      {
        "seasonNumber": 21,
        "episodes": 213,
        "posterImage": "https://www.justwatch.com/images/poster/304340302/s166/season-21.webp"
      },

      {
        "seasonNumber": 22,
        "episodes": 38,
        "posterImage": "https://www.justwatch.com/images/poster/313689452/s166/season-22.webp"
      },

      {
        "seasonNumber": 23,
        "episodes": 50,
        "posterImage": "https://www.justwatch.com/images/poster/8603952/s166/season-23.webp"
      },
    ],
    "genre": ["Animation", "Action & Adventure", "Science-Fiction", "Comedy", "Drama", "Fantasy", "Kids & Family"] ,
    "description": "One Piece is a legendary adventure anime based on the manga by Eiichiro Oda. It follows the journey of Monkey D. Luffy, a young pirate with the dream of becoming the Pirate King by finding the mysterious and coveted treasure known as the One Piece. Set in a vast world filled with dangerous seas, mythical creatures, and powerful pirates, the story is full of excitement, humor, and heartwarming moments.Luffy, who gains rubber-like abilities after eating a Devil Fruit, assembles a diverse crew known as the Straw Hat Pirates, each member with their unique dreams and backstories. Together, they sail across the Grand Line, facing dangerous enemies, powerful marine forces, and other pirates who are also searching for the One Piece.",
    "cast": [
    {
      "character": "Monkey D. Luffy",
      "name" : "Iñaki Godoy",
      "photo": "https://i.pinimg.com/564x/b7/27/58/b7275872bc129499881522ce5e50af92.jpg"
    },

    {
      "character": "Nami",
      "name" : "Emily Rudd",
      "photo": "https://imagedelivery.net/LBWXYQ-XnKSYxbZ-NuYGqQ/e3626abf-41c9-4d6e-a4ed-b920e30dda00/avatarhd"
    },

    {
      "character": "Roronona Zoro",
      "name" : "Mackenyu",
      "photo": "https://www.dexerto.com/cdn-image/wp-content/uploads/2023/04/20/one-piece-zoro-in-wano-arc.jpeg?width=1200&quality=60&format=auto"
    },

    {
      "character": "Nico Robin",
      "name" : "Stephanie Young",
      "photo": "https://beebom.com/wp-content/uploads/2023/06/Robin-Laughing.jpg?w=432"
    },

    {
      "character": "Shanks",
      "name" : "Peter Gadot",
      "photo": "https://lh5.googleusercontent.com/zN_gwl5WqKbSjSVxJBMyxgkJjCQiORWEzA00emQcHQs5DFQSxM_GqYgH6DjUfWWSeiRTOCSlgNve4zqulzehAHvSm3HD9ydGXN4YQl5Q5oTf4AYfhvZtlME5Xtca52UaxcrdgNjHOlAl982r2-gOIFI"
    },

    {
      "character": "Boa Hancock",
      "name" : "Lydia Mackay",
      "photo": "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/11/Featured-Image-Boa-Hancock-Cropped.jpg"
    },

    {
      "character": "Monkey D. Garp",
      "name" : "Vincent Regan",
      "photo": "https://i.pinimg.com/originals/02/a0/ef/02a0ef57af24aa729ec4128505e1234a.jpg"
    },

    {
      "character": "Koby",
      "name" : "Mika Doi",
      "photo": "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/koby-one-piece.jpg"
    },

    {
      "character": "Sanji",
      "name" : "Taz Skylar",
      "photo": "https://i.pinimg.com/originals/d3/51/84/d351847348dd0dabeac308be8e2bb072.jpg"
    },

    {
      "character": "Nefertari Vivi",
      "name" : "Misa Watanabe",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtpS2YLwoavPJ7_47gNQzUTewiMDMA4dR1KvNGvfN0-u7ZDtDGzqWaQu8HQcT7_gDpXxA&usqp=CAU"
    },

    
    {
      "character": "Monkey D. Dragon",
      "name" : "Richard Epcar",
      "photo": "https://wallpapers.com/images/hd/monkey-d-dragon-digital-portrait-4eljzh8l5vplhk4j.jpg"
    },

    
    {
      "character": "Tonny Tonny Chopper",
      "name" : "Hiroshi Kamiya",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSfZnp3E6Rqgo3rO0OneflEfvzqZ74fAmQkg&s"
    }

  ]

    
  },

  {
    "id":149,
    "title": "Tokyo Ghoul",
    "year": 2014,
    "rank": 1100,
    "rankChange": "▲ +569",
    "rating": 82,
    "imdbRating": 7.7,
    "imdbVotes": "301k",
    "backdropImage": "https://www.justwatch.com/images/backdrop/309016903/s1440/tokyo-ghoul.webp/tokyo-ghoul.webp",
    "posterImage": "https://i.pinimg.com/736x/bb/d5/9b/bbd59b6cbfb0d1a2a1b64da1accd76a8.jpg",
    "duration": "24min",
    "highestRank": 17,
    "top10Days": 30,
    "top100Days": 331,
    "top1000Days": 1190,
    "watchOptions": [

      {"platform": "Amazon Prime", "price": "Rs500/-"},
      {"platform": "Netflix", "price": "Rs 800/-"},
    ],
    "likes": "7.7k",
    "dislikes": "1k",
    "watchlistText": "List",
    "seenText": "Seenall",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "UUeqpuZobBw",
    "type" : ["series", "hollywood", "anime", "Kids & Family"],
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 12,
        "posterImage": "https://www.justwatch.com/images/poster/199427082/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 12,
        "posterImage": "https://www.justwatch.com/images/poster/79604567/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 12,
        "posterImage": "https://www.justwatch.com/images/poster/199427057/s166/season-3.webp"
      },

      {
        "seasonNumber": 4,
        "episodes": 12,
        "posterImage": "https://www.justwatch.com/images/poster/320055932/s166/season-4.webp"
      },
    ],
    "genre": ["Science-Fiction", "Animation"," Drama", "Action & Adventure", "Fantasy", "Horror", "Mystery & Thriller", "Kids & Family"],
    "description": "Tokyo Ghoul is a dark fantasy anime series based on the manga by Sui Ishida. The story is set in a world where flesh-eating ghouls secretly live among humans. These ghouls possess superhuman abilities and can only survive by consuming human flesh. The plot follows Ken Kaneki, a shy college student who becomes a half-ghoul after a near-fatal encounter with one of these creatures.After a life-saving surgery that involves the transplant of ghoul organs into his body, Kaneki struggles to adjust to his new identity, torn between his human and ghoul natures. The series explores themes of survival, identity, morality, and what it means to be human. It delves into the emotional and physical toll Kaneki endures as he navigates the dangerous world of ghouls while trying to protect his loved ones",
    "cast": [
    {
      "character": "Koutarou Amon",
      "name": "Mike McFarland",
      "photo": "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/3ad6f880-c77e-4e7d-acc6-abb75033b11c/width=1200/3ad6f880-c77e-4e7d-acc6-abb75033b11c.jpeg"
    },

    {
      "character": "Hinami Fueguchi",
      "name": "Sumire Morohoshi",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIok1DL1rOHCLyu7hZo5EFYwEYXIWh5RFgYg&s"
    },

    {
      "character": "Nishio Nishiki",
      "name": "Shunya Shiraishi",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCaWnGpOtkn4H_fT5lWGJ-uSQbPMkDqeClDg&s"
    },

    {
      "character": "Renji Yemo",
      "name": "Shuntarō Yanagi",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0O2Shk0B7GLiKcMbpWHNfSfnoA3PBhfQgw&s"
    },

    {
      "character": "Itori",
      "name": "jamie Marchi",
      "photo": "https://i.pinimg.com/236x/3e/4f/3f/3e4f3f27cdb811344a9e2b67676250cd.jpg"
    },

    {
      "character": "Enji Koma",
      "name": "Kenta Hamano",
      "photo": "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/5fad0c18-84e0-4ab1-953f-64d5ec6a1b94/width=1200/5fad0c18-84e0-4ab1-953f-64d5ec6a1b94.jpeg"
    },

    {
      "character": "Kimi Nishino",
      "name": "Caitlin Glass",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-CMV0tbhWKR8bx-HKXrvEMcK9jW445Bmq-g3vXyoz97WubFNSceTp-KLvPLS86pOqqfc&usqp=CAU"
    }

  ]

    }


 


];

app.get('/', (req, res) => {
  res.send('Welcome to the Movie API!');
});

// Endpoint to get all movies or filter by title, type, or genre
app.get('/api/New-movies', (req, res) => {
  try {
    console.log('Incoming request:', req.query); // Log incoming queries

    const titleQuery = req.query.title ? req.query.title.toLowerCase() : null;
    const typeQuery = req.query.type ? req.query.type.toLowerCase() : null;
    const genreQuery = req.query.genre ? req.query.genre.toLowerCase() : null;

    let filteredMovies = movies;

    // Check if titleQuery is defined
    if (titleQuery) {
      const movieByTitle = movies.find(movie => movie.title.toLowerCase() === titleQuery);
      if (movieByTitle) {
        return res.json(movieByTitle);
      } else {
        return res.status(404).json({ message: 'Movie not found by title' });
      }
    }

    // Filter by type if present
    // Filter by type if present
if (typeQuery) {
  console.log('Filtering by type:', typeQuery); // Debug log for typeQuery
  filteredMovies = filteredMovies.filter(movie => {
    console.log('Checking movie type:', movie.type); // Debug log for movie type

    // Handle both string and array types for movie.type
    if (Array.isArray(movie.type)) {
      return movie.type.some(t => t.toLowerCase() === typeQuery); // Check if any type matches the query
    } else {
      return movie.type.toLowerCase() === typeQuery; // Handle string case
    }
  });

  if (filteredMovies.length === 0) {
    return res.status(404).json({ message: 'No movies found for this type' });
  }
}


    // Filter by genre if present
    if (req.query.genre) {
      const genreQueries = Array.isArray(req.query.genre) ? req.query.genre : [req.query.genre];
      const normalizedGenres = genreQueries.map(g => g.toLowerCase().trim());
    
      console.log('Filtering by genres:', normalizedGenres); // Debug log for genres
      filteredMovies = filteredMovies.filter(movie =>
        movie.genre && movie.genre.some(g => normalizedGenres.includes(g.toLowerCase()))
      );
    
      // Check if no movies were found after filtering
      if (filteredMovies.length === 0) {
        return res.status(404).json({ message: 'No movies found for these genres' });
      }
    }
    
    // Return filtered movies or all if none matched
    res.json(filteredMovies);
    
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});


// Endpoint to get a single movie by ID
app.get('/api/New-movies/:id', (req, res) => {
  const id = req.params.id;
  const movie = movies.find(movie => movie.id === parseInt(id));
  if (!movie) {
    return res.status(404).json({ message: 'Movie not found by id' });
  }
  res.json(movie);
});

// Endpoint to add a new movie
app.post('/api/New-movies', (req, res) => {
  const newMovie = { ...req.body, id: movies.length + 1 }; // Simple ID generation
  movies.push(newMovie);
  res.status(201).json(newMovie);
});

// Listen to server on the defined PORT
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
