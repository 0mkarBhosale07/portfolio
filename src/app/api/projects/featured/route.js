import { NextResponse } from "next/server";

export async function GET(){
    return await NextResponse.json([{
    title: "Watch Movie App",
    para: "Watch Movie Web Application created using NextJs 14 and TheMovieDB API.",
    img: "https://media.discordapp.net/attachments/1066265844167999488/1170719342023950376/Home-screen.jpg?ex=655a105a&is=65479b5a&hm=f3c64adf7ac67b9cb4e9d6c55477a8bd0bbb54895ff36b6d65380f61fd5f28dc&=&width=1231&height=876",
    tech:["NextJs", "TheMovieDB API"],
    link: "https://watch-app-three.vercel.app/",
    github:"/",
    featured:true,
  },
  {
    title: "Codedamn Hacktoberfest 2023",
    para: "Solving all 30Days coding challange by codedamn. Track my progress and code by below link",
    img: "https://media.discordapp.net/attachments/1066265844167999488/1160762139481493585/Hacktoberfest-2023-Codedamn.png?ex=6535d6fb&is=652361fb&hm=df7f4a15de7fd28737b594a7e8529839355c9ae213f768d2a316d76526cc2176&=&width=1551&height=888",
    tech:["JavaScript"],
    link: "https://github.com/0mkarBhosale07/codedamn-hacktoberfest-2023",
    github:"https://github.com/0mkarBhosale07/codedamn-hacktoberfest-2023",
    featured:true,
  },
  {
    title: "MovieLog Pro",
    para: "This is a fully responsive clone of IMDB created using React, Tailwind CSS, React Router, TheMovieDB API.",
    img: "https://media.discordapp.net/attachments/1075106029869735936/1080757668408467496/Movie_Log.png?width=1165&height=597",
    tech:["ReactJS","TheMovieDB API", "React Router v6"],
    link: "https://movielog-pro.netlify.app/",
    github:"/",
    featured:true,
  },
  {
    title: "Disney+ Hotstar Clone",
    para: "This is a clone for Disney+ Hotstar (Only Desktop) created using Tailwind CSS.",
    img: "https://cdn.discordapp.com/attachments/1075106029869735936/1075106119090970657/Diseny_Hotstar_-_Tech_Omkar.png",
    tech:["Tailwind CSS"],
    link: "https://disney-hotstar-clone-omega.vercel.app/",
    github:"/",
    featured:true,
  },
  ])
}