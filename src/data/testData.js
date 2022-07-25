export const post3 = {
    "id": 3,
    "type": "post",
    "user_id": 2,
    "likes": 0,
    "card_id": 0,
    "collection_id": 0,
    "task_id": null,
    "date_create": "2021-04-01 00:45:09",
    "date_update": "2022-07-15 00:50:05",
    "state": 1,
    "title": "5 лайфхаков для поиска денег: как в кризис строить коммуникацию с инвесторами",
    "annotation": "Как сейчас искать инвесторов, выстраивать коммуникационную стратегию и презентовать себя, — рассказывает сооснователь Vinci Agency Мария Лапук.",
    "content": "<p>На фоне санкций, экономического кризиса и сложной общественно-политической ситуации на венчурном рынке России наступило затишье. Может показаться, что не лучшее время для привлечения инвестиций — но в реальности игроки скорее взяли паузу.</p><p><img src=\"https://img.targemy.com/e6999c69189e47efb773cb8f9a711427\" style=\"\" alt=\"Stonks?\"></p><p>По прогнозам экспертов, рынок действительно может просесть. Но снижение общих показателей не означает прекращения инвестиционной деятельности.</p><p>После того, как ряд западных компаний покинули страну, а поставки многих товаров прекратились или серьезно подорожали, в России критически выросла потребность в импортозамещении. Так что у многих отечественных компаний, особенно в сфере технологий, есть шанс занять внушительную долю рынка — поэтому инвесторы будут присматриваться к новым проектам.</p><p><img src=\"https://img.targemy.com/187c933ef10227f597aeacdd66dda3d2\" alt=\"Мамкин инвестор\" style=\"\"></p><p>В IT-отрасли уже активно ведутся переговоры фондов со стартапами, и уже в ближайшее время мы увидим возобновление новостей о сделках. Так, на днях уже появилась новость о том, что МТС вложит 72 млн рублей в в сервис онлайн-заказов еды и напитков Bartello, а российский сервис поиска наставников в ИТ Solvery привлёк инвестиции от red_mad_robot.\r\n</p><p>Кроме того, на рынке скоро должны появиться новые игроки — российские инвесторы, которые раньше вкладывались в западные проекты, а сейчас потеряли такую возможность.\r\n</p><p>Так что стартапам, которые планировали привлекать финансирование, уже стоит начать подготовительную работу в инфополе.</p><p>\r\n</p><p>\r\n</p><p></p>",
    "photo_cover": "https://img.targemy.com/7d16c568abfaeb27fc0b86d2303404db",
    "photo_grad": 8,
    "linkURL": "/posts/show?id=3"
}

export const users = [
    {
        "id": 2,
        "first_name": "Alex",
        "last_name": "T",
        "is_company": 0,
        "status": 2,
        "created_at": "2020-07-17 19:25:06",
        "updated_at": "2022-03-13 14:04:26",
        "is_verified": 1,
        "city": "",
        "hobby": "",
        "about": "Just dude",
        "photo_cover": "https://img.targemy.com/a2c064be550a8787c0195879c247caf7",
        "photo_avatar": "https://img.targemy.com/8552bb4d748042eb7cee6401c36ef26d",
        "profileLink": "https://stage.targemy.com/u2"
    },
    {
        "id": 8,
        "first_name": "Den",
        "last_name": "Vir",
        "is_company": 0,
        "status": 2,
        "created_at": "2020-07-17 19:25:06",
        "updated_at": "2022-07-18 13:36:31",
        "is_verified": 1,
        "city": null,
        "hobby": "Programmer",
        "about": "Obo mne",
        "photo_cover": "https://img.targemy.com/fd78fb2f0c667253641fe0365f3bdcb4",
        "photo_avatar": "https://img.targemy.com/cb544da654fdda33885a2efebe4e080b",
        "profileLink": "https://stage.targemy.com/u8"
    }
]

export const userInfo = [
    {
        "user_id": 2,
        "data": {
            "postsCount": 4,
            "collectionsCount": 1,
            "targetsCount": 1,
            "challengeCount": 1,
            "participantCount": 2,
            "subscribersCount": 3,
            "subscribesCount": 1,
            "withTargemySince": "2020-07-17 19:25:06"
        }
    }
]

export const comments = [
    {
        url: 'https://api.stage.targemy.com/v1/comments?filter%5Bpost_id%5D=3&sort=-id&page=1&per-page=2',
        data: {
            "items": [
                {
                    "id": 86,
                    "user_id": 2,
                    "type": "post",
                    "post_id": 3,
                    "card_id": null,
                    "date_create": "2022-07-15 01:32:12",
                    "content": "Так, я добавлю ещё несколько комментариев чтобы попасть в тренды. Это ведь так работает да? Ведь да?"
                },
                {
                    "id": 85,
                    "user_id": 2,
                    "type": "post",
                    "post_id": 3,
                    "card_id": null,
                    "date_create": "2022-07-15 00:51:12",
                    "content": "Где моя тысяча лайков? 🐕‍🦺🐕‍🦺"
                }
            ],
            "_links": {
                "self": {
                    "href": "https://api.stage.targemy.com/v1/comments?filter%5Bpost_id%5D=3&sort=-id&page=1&per-page=2"
                },
                "first": {
                    "href": "https://api.stage.targemy.com/v1/comments?filter%5Bpost_id%5D=3&sort=-id&page=1&per-page=2"
                },
                "last": {
                    "href": "https://api.stage.targemy.com/v1/comments?filter%5Bpost_id%5D=3&sort=-id&page=2&per-page=2"
                },
                "next": {
                    "href": "https://api.stage.targemy.com/v1/comments?filter%5Bpost_id%5D=3&sort=-id&page=2&per-page=2"
                }
            },
            "_meta": {
                "totalCount": 3,
                "pageCount": 2,
                "currentPage": 1,
                "perPage": 2
            }
        }
    },
    {
        url: 'https://api.stage.targemy.com/v1/comments?filter%5Bpost_id%5D=3&sort=-id&page=2&per-page=2',
        data: {
            "items": [
                {
                    "id": 5,
                    "user_id": 8,
                    "type": "post",
                    "post_id": 3,
                    "card_id": null,
                    "date_create": "2021-05-24 20:18:41",
                    "content": "Коммент к посту"
                }
            ],
            "_links": {
                "self": {
                    "href": "https://api.stage.targemy.com/v1/comments?filter%5Bpost_id%5D=3&sort=-id&page=2&per-page=2"
                },
                "first": {
                    "href": "https://api.stage.targemy.com/v1/comments?filter%5Bpost_id%5D=3&sort=-id&page=1&per-page=2"
                },
                "last": {
                    "href": "https://api.stage.targemy.com/v1/comments?filter%5Bpost_id%5D=3&sort=-id&page=2&per-page=2"
                },
                "prev": {
                    "href": "https://api.stage.targemy.com/v1/comments?filter%5Bpost_id%5D=3&sort=-id&page=1&per-page=2"
                }
            },
            "_meta": {
                "totalCount": 3,
                "pageCount": 2,
                "currentPage": 2,
                "perPage": 2
            }
        }
    }
]