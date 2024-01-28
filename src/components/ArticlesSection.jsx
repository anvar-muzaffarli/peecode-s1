import React from "react";
import './ArticlesSection.css'
const ArticlesSection = () => {
  return (
    <div className="mt-5">
      <nav className="tab-links d-flex justify-content-center gap-3">
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
          <div class="card border-0">
            <img
              src="https://res.cloudinary.com/derzgbs7x/image/upload/v1704437298/Rectangle_228_fpjrct.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div class="card">
            <img
              src="https://res.cloudinary.com/derzgbs7x/image/upload/v1704437298/Rectangle_228_fpjrct.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesSection;
