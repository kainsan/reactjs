import React from "react";
import styled from "styled-components";
function TwoBanner() {
  return (
    <Section>
    <div class="mb-10 px-2 lg:px-10 py-10 bg-white rounded-lg">
          <h2 class="text-center tex-heading-4 mt-2 mb-7 font-bold text-3xl ">Most Popular Products</h2>
          <div class="mt-8 grid gap-16 grid-cols-4 px-5">

            <div class="card">
              <div class="poster"><img src="https://themebun.com/public/frontent/img/thiet-ke-website-87.jpg"
                  alt="location unknown"/></div>
              <div class="details">
                <h1>location unknown</h1>
                <h2>2021 • pg • 1hr 38min</h2>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <span>4.2/5</span>
                </div>
                <div class="tags">
                  <span class="tag">italian</span>
                  <span class="tag">drama</span>
                  <span class="tag">indie</span>
                </div>
                <p class="desc">
                  marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for
                  meaning.
                </p>
                <div class="cast ">
                  <button-group rounded class="bg-emerald-300"  >
                    <button  rounded glossy icon="timeline" />
                    <button  rounded glossy icon="visibility" />
                    <button  rounded glossy icon-right="update" label="Update" />
                  </button-group>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="poster"><img src="https://themebun.com/public/frontent/img/thiet-ke-website-87.jpg"
                  alt="location unknown"/></div>
              <div class="details">
                <h1>location unknown</h1>
                <h2>2021 • pg • 1hr 38min</h2>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <span>4.2/5</span>
                </div>
                <div class="tags">
                  <span class="tag">italian</span>
                  <span class="tag">drama</span>
                  <span class="tag">indie</span>
                </div>
                <p class="desc">
                  marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for
                  meaning.
                </p>
                <div class="cast ">
                  <button-group rounded class="bg-emerald-300"  >
                    <button  rounded glossy icon="timeline" />
                    <button  rounded glossy icon="visibility" />
                    <button  rounded glossy icon-right="cart" label="Update" />
                  </button-group>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="poster"><img src="https://themebun.com/public/frontent/img/thiet-ke-website-87.jpg"
                  alt="location unknown"/></div>
              <div class="details">
                <h1>location unknown</h1>
                <h2>2021 • pg • 1hr 38min</h2>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <span>4.2/5</span>
                </div>
                <div class="tags">
                  <span class="tag">italian</span>
                  <span class="tag">drama</span>
                  <span class="tag">indie</span>
                </div>
                <p class="desc">
                  marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for
                  meaning.
                </p>
                <div class="cast ">
                  <button-group rounded class="bg-emerald-300"  >
                    <button  rounded glossy icon="timeline" />
                    <button  rounded glossy icon="visibility" />
                    <button  rounded glossy icon-right="update" label="Update" />
                  </button-group>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Section>
  );
}
const Section = styled.section`
.card {
  position: relative;
  width: 100%;
  height: 450px;
  background: #000;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
}

.poster {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  overflow: hidden;
}

.poster::before {
  content: '';
  position: absolute;
  bottom: -45%;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: .3s;
}

.card:hover .poster::before {
  bottom: 0;
}

.poster img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: .3s;
}

.details {
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: auto;
  padding: 1.5em 1.5em 2em;
  background: #000a;
  backdrop-filter: blur(16px) saturate(120%);
  transition: .3s;
  color: #fff;
  z-index: 2;
}

.card:hover .details {
  bottom: 0;
}

.details h1,
.details h2 {
  font-weight: 700;
}

.details h1 {
  font-size: 1.5em;
  margin-bottom: 5px;
}

.details h2 {
  font-weight: 400;
  font-size: 1em;
  margin-bottom: 10px;
  opacity: .6;
}

.details .rating {
  position: relative;
  margin-bottom: 15px;
  display: flex;
  gap: .25em;
}

.details .rating i {
  color: #e3c414;
}

.details .rating span {
  margin-left: 0.25em;
}

.details .tags {
  display: flex;
  gap: .375em;
  margin-bottom: .875em;
  font-size: .85em;
}

.details .tags span {
  padding: .35rem .65rem;
  color: #fff;
  border: 1.5px solid rgba(255 255 255 / 0.4);
  border-radius: 4px;
  border-radius: 50px;
}

.details .desc {
  color: #fff;
  opacity: .8;
  line-height: 1.5;
  margin-bottom: 1em;
}

.details .cast h3 {
  margin-bottom: .5em;
}

.details .cast ul {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
  width: 100%;
}

.details .cast ul li {
  list-style: none;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  overflow: hidden;
  border: 1.5px solid #fff;
}

.details .cast ul li img {
  width: 100%;
  height: 100%;
  }
`;

export default TwoBanner;