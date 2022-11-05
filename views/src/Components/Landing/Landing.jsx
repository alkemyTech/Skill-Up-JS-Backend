import React from "react";
import "./landing.css";

const Landing = () => {
  return (
    <div className="container-landing">
      <div className="landing md:flex flex-col">
        <div className="flex justify-center py-24 flex-col-reverse md:px-5 md:flex-row bg-primary-white">
          <div className="flex justify-between h-full md:m-auto md:max-w-[92%] xxl:max-w-[80%]">
            <div className="md:text-left mb-4 mt-5 pt-4 md:mt-0 leading-[42px] md:leading-[3rem] px-4 md:px-0">
              <h2 className="md:text-left mb-4 mt-5 pt-4 md:mt-0 leading-[42px] md:leading-[3rem] px-4 md:px-0 text-6xl font-semibold">
                La billetera virtual <br /> que conecta tu dinero con todo <br /> lo que
                querés.{" "}
              </h2>
              <p className="text-center mt-10 md:text-left mb-8 md:mb-[35px] font-medium md:leading-8 text-[16px] md:text-[24px] leading-[31px]">
                Tus cuentas y tarjetas 100% digitales.
              </p>
              <div>
                <div>
                  <button className="sm:ml-4 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Empezá a usar WALLET
                  </button>
                </div>
              </div>
            </div>
            <div
              className="img-container md:max-w-[55%] opacity-75 transition-all"
              width="100%"
              height="auto"
            >
              <img
                className="w-full rounded-full"
                src="https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iproup.com/assets/jpg/2020/04/9550.jpg"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
