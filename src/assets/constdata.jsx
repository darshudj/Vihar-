import { atom } from 'recoil';

export const StickState =atom({
    key:"StickState",
    default:[]
})

export const PlacesInfo = atom({
    key: "ProductInfo",
    default:[
    {
        id: 1,
        catogory: "falls",
        name: "Jog",
        km:"110",
        src: "https://thumbs.dreamstime.com/b/vertical-shot-beautiful-jog-falls-jog-india-vertical-shot-beautiful-jog-falls-jog-india-205393636.jpg",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 2,
        catogory: "falls",
        name: "Dabbe",
        km:"124",
        src: "https://image3.mouthshut.com/images/Restaurant/Photo/-58767_253150.jpg",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 3,
        catogory: "falls",
        name: "Hiddlumane",
        km:"76",
        src: "https://cdn.tripuntold.com/media/photos/location/2018/09/24/b5b699d2-0e26-4ca6-a1e1-a99f89833210.jpg",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 4,
        catogory: "falls",
        name: "Bhimeswara",
        km:"141",
        src: "https://i0.wp.com/aravindgundumane.com/wp-content/uploads/2019/09/DSC_4350.jpg?fit=1080%2C721&ssl=1",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 5,
        catogory: "falls",
        name: "Savehaklu",
        km:"94",
        src: "https://lh3.googleusercontent.com/p/AF1QipPcZ7KRpocwbA3lGN16SUdep6U4rv0Q76OkFCRc=s0",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 6,
        catogory: "falls",
        name: "Gajnur",
        km:"15",
        src: "https://www.deccanherald.com/sites/dh/files/article_images/2017/06/27/619445.jpg",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 7,
        catogory: "temple",
        name: "Kodachadri",
        km:"107",
        src: "https://cdn1.goibibo.com/voy_ing/t_fs/shimoga-kodachadri-hill-152455775197o.jpeg",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 8,
        catogory: "temple",
        name: "Kundadri",
        km:"95",
        src: "https://i.ytimg.com/vi/JweXrAbS-aM/maxresdefault.jpg",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 9,
        catogory: "temple",
        name: "Nagara",
        km:"86",
        src: "https://www.thetoptours.com/wp-content/uploads/bidar-fort.jpg",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 9,
        catogory: "temple",
        name: "Koodli",
        km:"30",
        src: "https://1.bp.blogspot.com/-klSEwlUvTC8/WJSKdsg0hwI/AAAAAAAAAjs/i_n4yZ-PKvc0dObFS4VAymSEG30WSoT3QCLcB/s1600/Koodli-Tunga-Bhadra-%2BRiver-Shimoga-Travel-27.jpg",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 10,
        catogory: "temple",
        name: "Kavaledurga",
        km:"85",
        src: "https://1.bp.blogspot.com/-SjYZdM7aero/WWBH26PwTzI/AAAAAAAAN4c/J-eahafWv58W3OMdRVNG65qqXt9Y4wUdQCLcBGAs/s1600/IMG_5502.JPG",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
    {
        id: 11,
        catogory: "sanchuries",
        name: "Tyavarekoppa",
        km:"8",
        src: "https://www.deccanherald.com/sites/dh/files/article_images/lionsafari.JPG",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
    {
        id: 12,
        catogory: "sanchuries",
        name: "Sakkarebailu",
        km:"18",
        src: "https://live.staticflickr.com/2704/32180263714_612b2a74f0_b.jpg",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
    {
        id: 13,
        catogory: "sanchuries",
        name: "Gudavi",
        km:"99",
        src: "https://www.trawell.in/admin/images/upload/001223619Gudavi_Bird_Sanctuary.jpg",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
    {
        id: 14,
        catogory: "sanchuries",
        name: "Mandagadde",
        km:"36",
        src: "https://1.bp.blogspot.com/-mQ_mlbGhlrU/VEKj5M4RKNI/AAAAAAAAAVc/UCSvBCB-Joc/s1600/Agumbe%2BTrek%2B065.JPG",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
    {
        id: 15,
        catogory: "others",
        name: "agumbe",
        km:"99",
        src: "https://preview.redd.it/zo51pdav06141.jpg?auto=webp&s=8bb559cd0a898558f53737402b7cc7c450d3d5ab",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
    {
        id: 16,
        catogory: "others",
        name: "linganmakki",
        km:"104",
        src: "https://www.deccanherald.com/sites/dh/files/article_images/2018/08/21/file71grjftpg9h111347jqw153487.jpg",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
    {
        id: 17,
        catogory: "others",
        name: "unchalli",
        km:"120",
        src: "https://adventurebuddha.com/wp-content/uploads/2020/05/unchalli-falls-1024x530.jpg",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
    {
        id: 18,
        catogory: "others",
        name: "nipli",
        km:"97",
        src: "https://i0.wp.com/karnatakastartoday.com/wp-content/uploads/2020/07/New-Project-97.jpg?fit=1200%2C800&ssl=1",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
    {
        id: 19,
        catogory: "others",
        name: "jogigundi",
        km:"94",
        src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgk-J47NPBZzBijb52QZWuWs1eZQqQWPCntcfKIPQDuWbCdvYSAt4GiQLDhVpBOmPFNagBDN1uJsaEhJqX6NmsHNzx6vNqOltkUv3cW3AfEGx6_g9nDSuyoLxQWIdJBhuWUyO-4rHpk69pRwBKtTwNFdKs0oLQiV5HfPfbnhAjPS3FU-0tVrxA/s800/jogi%20gundi%20agumbe.jpg",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
]
})