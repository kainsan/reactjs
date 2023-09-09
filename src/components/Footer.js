import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Section>
    <div class="data-container bg:cover px-5 " >
      <div class="container mx-auto divide-y divide-white/40">
        <div class="flex flex-col lg:flex-row lg:justify-between lg:pb-16 lg:pt-20">
          <h2 class="text-heading-4 lg:text-heading-2 text-center leading-none text-white text-6xl font-black">
            React Shop
          </h2>
          <div class="flex flex-col items-center space-y-6 lg:flex-row lg:space-x-5 lg:space-y-0">
            <input placeholder="Email Address"
              class="text-body-2-medium w-full rounded-[32px] border border-white bg-transparent px-10 py-5 text-white placeholder:text-white focus:outline-0 focus:ring-1 focus:ring-white lg:w-96"
              type="text"/>
            <div class="buttons">
              <button class="button">
                <span>Subscribe Now</span>
              </button>
            </div>
          </div>
          
        </div>
        <div class="pb-14 pt-10">
          <div class="flex flex-col space-y-10 lg:flex-row lg:space-x-[120px] lg:space-y-0">
            <div class="flex flex-col space-y-8">
              <h1 class="text-white text-3xl font-semibold">Atom Shop</h1>
              <div class="text-white items-center space-x-1.5 flex">
                <p class="text-body-2-regular !leading-none"><span class="font-bold">Email us</span> : example@gmail.com
                </p>
              </div>
              <div class="flex items-center space-x-1.5 text-white">
                <p class="text-body-2-regular !leading-none"><span class="font-bold">Call</span> : 123 45678910</p>
              </div>
              <div class="text-white item-center space-x-1.5 flex">
                <p class="text-body-2-regular !leading-none"><span class="font-bold">Working Hours</span> : Monday - Friday, 08 am - 05 pm</p>
              </div>
              <div class="flex space-x-5">
                <a class="group flex h-8 w-8 items-center justify-center rounded-full fa-brands fa-facebook fa-2xl" href="/"></a>
                <a class="group flex h-8 w-8 items-center justify-center rounded-full fa-brands fa-instagram fa-2xl" href="/"></a>
                <a class="group flex h-8 w-8 items-center justify-center rounded-full fa-brands fa-brands fa-twitter fa-2xl" href="/"></a>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-x-12 gap-y-10 lg:grid-cols-3 lg:gap-x-28 lg:gap-y-0">
              <div class="flex flex-col space-y-6">
                <p class="font-semibold text-xl text-white">Shopping</p>
                <a class="text-body-3 text-white" href="">Products</a>
                <a class="text-body-3 text-white" href="">My Cart</a>
              </div>
              <div class="flex flex-col space-y-6">
                <p class="font-semibold text-xl text-white">Learn More</p>
                <a class="text-body-3 text-white" href="">About Us</a>
                <a class="text-body-3 text-white" href="">Contact Us</a>
                <a class="text-body-3 text-white" href="">Terms & Conditions</a>
                <a class="text-body-3 text-white" href="">Privacy Policy</a>
              </div>
              <div class="col-span-2 flex flex-col space-y-6 lg:col-span-1">
                <p class="font-semibold text-xl text-white">Download The App</p>
                <button class="lg:w-[145px] md:w-[120px]">
                <img src="https://cn.maplesoft.com/products/MapleCalculator/images/app-store-icons-apple-app-store.png" alt=""/>
                </button>
                <button class="lg:w-[145px] md:w-[120px]">
                <img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png?hl=vi" alt=""/>
                </button>
              </div>
          </div>
          </div>

        </div>
      </div>
    </div>
    </Section>
  )
  }
  export default Footer;
  const Section = styled.section`
  
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  padding: 5rem;
  background-image: linear-gradient(to bottom right, #2e2341, #0c378d);
  height: 100%;
    
  
  .button {
    border: none;
    background: transparent;
    cursor: pointer;
  }
  
  .button:not(:last-child) {
    margin-bottom: 2rem;
  }
  
  
  
  .button {
    border: none;
    background: transparent;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.4rem 2.2rem;
    overflow: hidden;
    border-radius: 100vmax;
    box-shadow: var(--shadow-elevation-high);
    transition: box-shadow 0.2s ease-in-out;
  }
  
  .button::after,
  .button::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: red;
  }
  
  .button::before {
    z-index: 1;
    right: -100%;
    background: linear-gradient(to right, #9900f0 0%, #ff85b3 50%, #9900f0 100%);
    background-size: 50% 100%;
    -webkit-animation: scroll 1.2s infinite linear;
    animation: scroll 1.2s infinite linear;
  }
  
  .button::after {
    z-index: 2;
    inset: 5px;
    border-radius: 100vmax;
    background-color: black;
    transition: inset 0.2s ease-in-out;
  }
  
  .button span {
    z-index: 3;
    color: white;
    text-transform: uppercase;
  }
  
  .button:hover {
    box-shadow: var(--shadow-elevation-medium);
  }
  
  .button:hover::after {
    inset: 8px;
  }
  
  @-webkit-keyframes scroll {
    to {
      transform: translatex(-50%);
    }
  }
  
  @keyframes scroll {
    to {
      transform: translatex(-50%);
    }
  }
  `;