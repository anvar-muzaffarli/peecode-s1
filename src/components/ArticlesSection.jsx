import React from "react";
import './ArticlesSection.css'

import bloglar from '../blogs.json'

import Card from "./Card";
const ArticlesSection = () => {
  return (
    <div className="mt-5">
      <nav className="tab-links d-flex justify-content-center gap-3 pb-5">
        <a href="#" className="nav-link">
          All
        </a>
        <a href="#" className="nav-link">
          Case studies
        </a>
        <a href="#" className="nav-link">
          Guides
        </a>
        <a href="#" className="nav-link">
          Articles
        </a>
        <a href="#" className="nav-link">
          Partner materials
        </a>
      </nav>

      <div className="articles-two row">
        <div className="col-12 col-md-6 ">
            <Card basliqProps="Basqa Kart 1" meqaleninMetniProps="Basqa kart metn 1" meqaleninShekliProps="https://source.unsplash.com/random/300x200" />
        </div>

        <div className="col-12 col-md-6">
            <Card basliqProps="Basqa Kart 2" meqaleninMetniProps="Basqa kart metn 2" meqaleninShekliProps="https://source.unsplash.com/random/300x200" />
        </div>
      </div>

      <div className="articles-three row">

        {

          bloglar.map((birBlog)=> (
            <div className="col-12 col-md-6 col-lg-4">
               <Card basliqProps={birBlog.meqaleBasligi} meqaleninMetniProps={birBlog.meqaleninMetni} meqaleninShekliProps={birBlog.meqaleninShekli} />
           </div>
          ))
          
        }

        
{/* bunu yazmaq yerine yuxaridakini yaziriq ve melumatlar backendden dinamik olaraq getirilende istifade edirik
<Card basliqProps="Meqale1" meqaleninMetniProps="lorem ipsumzade 1" meqaleninShekliProps="meqaleninsheklinin statik(kompda olan) urli" />
<Card basliqProps="Meqale2" meqaleninMetniProps="lorem ipsumzade 1" meqaleninShekliProps="meqaleninsheklinin statik(kompda olan) urli" />
<Card basliqProps="Meqale3" meqaleninMetniProps="lorem ipsumzade 1" meqaleninShekliProps="meqaleninsheklinin statik(kompda olan) urli" />
<Card basliqProps="Meqale4" meqaleninMetniProps="lorem ipsumzade 1" meqaleninShekliProps="meqaleninsheklinin statik(kompda olan) urli" />
<Card basliqProps="Meqale5" meqaleninMetniProps="lorem ipsumzade 1" meqaleninShekliProps="meqaleninsheklinin statik(kompda olan) urli" />
<Card basliqProps="Meqale6" meqaleninMetniProps="lorem ipsumzade 1" meqaleninShekliProps="meqaleninsheklinin statik(kompda olan) urli" /> */}




      </div>
    </div>
  );
};

export default ArticlesSection;
