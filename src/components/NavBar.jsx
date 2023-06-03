import React, { useEffect, useState } from "react";
import giftImage from "../assets/img/svg/mdi_gift.svg";
import navLogo from "../assets/img/svg/navLogo.svg";
import closeImage from "../assets/img/svg/closeImage.png";
import searchImage from "../assets/img/svg/search.svg";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [navBar, setNavBar] = useState(true);
  const [first, setfirst] = useState(1);
  useEffect(() => {
    if (navBar) {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [navBar]);

  return (
    <div>
      <div className="bg-[#2E015B] py-3">
        <div className="container mx-auto px-3  flex flex-col md:flex-row justify-center gap-3 items-center">
          <div className="flex items-center gap-2">
            <img src={giftImage} alt="giftImage" />
            <p className="text-[#EAE6EF] ff_montserrat font-light text-sm sm:text-base ">
              <span className=" font-extrabold ">Black Friday</span> savings are
              here ,save up to 10% off on coupon code
            </p>
          </div>
          <button className="ff_montserrat ease-out duration-300 hover:translate-x-1 font-extrabold ms-3 text-base text_gridient">
            Shop Now
          </button>
        </div>
      </div>
      <div className="container mx-auto px-3">
        <nav className="flex justify-between items-center py-4">
          <Link to="/">
            <a href="#">
              <img src={navLogo} alt="navLogo" />
            </a>
          </Link>

          <ul
            className={
              navBar
                ? " navClose flex items-center gap-6 "
                : " navOpen  flex items-center gap-6"
            }
          >
            <img
              onClick={() => setNavBar(true)}
              width={35}
              className="rounded-full absolute cursor-pointer lg:hidden top-5 right-5"
              src={closeImage}
              alt="closeImage"
            />
            <Link to="/">
              <li onClick={() => setNavBar(true)}>
                <a
                  onClick={() => setfirst(1)}
                  className={
                    first === 1
                      ? " navStroke text-white ease-out duration-300 hover:navStroke text-base ff_montserrat font-normal"
                      : "text-white ease-out duration-300 hover:navStroke text-base ff_montserrat font-normal"
                  }
                  href="#"
                >
                  HOME
                </a>
              </li>
            </Link>
            <li onClick={() => setNavBar(true)}>
              <a
                onClick={() => setfirst(2)}
                className={
                  first === 2
                    ? "navStroke text-white ease-out duration-300 hover:navStroke  text-base ff_montserrat font-normal"
                    : "text-white ease-out duration-300 hover:navStroke text-base ff_montserrat font-normal"
                }
                href="#"
              >
                SHOP
              </a>
            </li>
            <li onClick={() => setNavBar(true)}>
              <a
                onClick={() => setfirst(3)}
                className={
                  first === 3
                    ? "navStroke text-white ease-out duration-300 hover:navStroke  text-base ff_montserrat font-normal"
                    : "text-white ease-out duration-300 hover:navStroke text-base ff_montserrat font-normal"
                }
                href="#"
              >
                ABOUT
              </a>
            </li>
            <Link to="/Second">
              <li onClick={() => setNavBar(true)}>
                <a
                  onClick={() => setfirst(4)}
                  className={
                    first === 4
                      ? "navStroke text-white ease-out duration-300 hover:navStroke  text-base ff_montserrat font-normal"
                      : "text-white ease-out duration-300 hover:navStroke text-base ff_montserrat font-normal"
                  }
                  href="#"
                >
                  CONTACT
                </a>
              </li>
            </Link>
            <li onClick={() => setNavBar(true)}>
              <a
                onClick={() => setfirst(5)}
                className={
                  first === 5
                    ? "navStroke text-white ease-out duration-300 hover:navStroke  text-base ff_montserrat font-normal"
                    : "text-white ease-out duration-300 hover:navStroke text-base ff_montserrat font-normal"
                }
                href="#"
              >
                FAQ
              </a>
            </li>
            <li>
              <form className="flex outline-none cursor-pointer  bg-[#212121] border border-[#565656] rounded-2xl py-[7px] px-3">
                <input
                  type="search"
                  className=" outline-none bg-[#212121] text-white ff_montserrat font-normal text-xs"
                  placeholder="Search here.."
                />
                <img src={searchImage} alt="searchImage" />
              </form>
            </li>
            <li onClick={() => setNavBar(true)}>
              <a className="group" href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className=" ease-in duration-300 group-hover:fill-[#AA1FFE]"
                    d="M7.2 24C6.54 24 5.9752 23.7652 5.5056 23.2956C5.0352 22.8252 4.8 22.26 4.8 21.6C4.8 20.94 5.0352 20.3748 5.5056 19.9044C5.9752 19.4348 6.54 19.2 7.2 19.2C7.86 19.2 8.4248 19.4348 8.8944 19.9044C9.3648 20.3748 9.6 20.94 9.6 21.6C9.6 22.26 9.3648 22.8252 8.8944 23.2956C8.4248 23.7652 7.86 24 7.2 24ZM19.2 24C18.54 24 17.9752 23.7652 17.5056 23.2956C17.0352 22.8252 16.8 22.26 16.8 21.6C16.8 20.94 17.0352 20.3748 17.5056 19.9044C17.9752 19.4348 18.54 19.2 19.2 19.2C19.86 19.2 20.4252 19.4348 20.8956 19.9044C21.3652 20.3748 21.6 20.94 21.6 21.6C21.6 22.26 21.3652 22.8252 20.8956 23.2956C20.4252 23.7652 19.86 24 19.2 24ZM6.18 4.8L9.06 10.8H17.46L20.76 4.8H6.18ZM5.04 2.4H22.74C23.2 2.4 23.55 2.6048 23.79 3.0144C24.03 3.4248 24.04 3.84 23.82 4.26L19.56 11.94C19.34 12.34 19.0448 12.65 18.6744 12.87C18.3048 13.09 17.9 13.2 17.46 13.2H8.52L7.2 15.6H21.6V18H7.2C6.3 18 5.62 17.6048 5.16 16.8144C4.7 16.0248 4.68 15.24 5.1 14.46L6.72 11.52L2.4 2.4H0V0H3.9L5.04 2.4ZM9.06 10.8H17.46H9.06Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li onClick={() => setNavBar(true)}>
              <button className=" py-[14px] md:text-xl text-sm  px-[34px] text-white bg-gradient-to-r from-[#AA1FFE] to-[#DD22E6] rounded-[40px] ease-linear duration-300 hover:scale-105 ff_montserrat font-bold ">
                SIGN IN
              </button>
            </li>
          </ul>
          <div
            onClick={() => setNavBar(false)}
            className="flex flex-col lg:hidden"
          >
            <span className=" w-6 h-[3px] bg-[#AA1FFE]"></span>
            <span className=" w-6 h-[3px] bg-[#AA1FFE] my-1"></span>
            <span className=" w-6 h-[3px] bg-[#AA1FFE]"></span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
