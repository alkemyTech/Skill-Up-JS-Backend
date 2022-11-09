import React from "react";


const Landing = () => {
  
  return (
    <div className="">
      <div className="">
        <div className="flex justify-center py-24 md:px-5 bg-primary-white">
          <div className="flex m-auto flex-col-reverse lg:flex-row">
            <div className="md:ml-10 mt-8">
              <h2 className="md:text-left mb-4 mt-5 pt-4 md:mt-0 leading-[42px] md:leading-[3rem] px-4 md:px-0 text-6xl font-semibold">
                The virtual wallet <br /> that connects your money with everything{" "}
                <br /> what you want.{" "}
              </h2>
              <p className="text-center mt-10 md:text-left mb-8 md:mb-[35px] font-medium md:leading-8 text-[16px] md:text-[24px] leading-[31px]">
                Your 100% digital accounts and cards.
              </p>
              <div className="ml-10">
                <button className="sm:ml-4 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                 Start using WALLET
                </button>
              </div>
            </div>
            <div
              className="md:ml-10 md:max-w-[92%] transition-all"
              width="100%"
              height="auto"
            >
              <img
                className="w-full rounded-full md:w-full"
                src="https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iproup.com/assets/jpg/2020/04/9550.jpg"
                alt="logo"
              />
            </div>
          </div>
        </div>
        <div className="bg-teal-50 flex justify-center py-24 md:px-5 bg-primary-white">
          <div className="flex m-auto flex-col-reverse lg:flex-row">
            <div
              className="md:ml-10 md:max-w-[92%] transition-all"
              width="100%"
              height="auto"
            >
              <img
                className="w-full rounded-full md:w-full"
                src="https://tynmagazine.com/wp-content/uploads/sites/3/2022/03/434767_billetera.jpg"
                alt="logo"
              />
            </div>
            <div className="md:ml-10 mt-8">
              <h2 className="md:text-left mb-4 mt-5 pt-4 md:mt-0 leading-[42px] md:leading-[3rem] px-4 md:px-0 text-6xl font-semibold">
                 Promotions with WALLET
                <br /> are added to those of your banks!
              </h2>
              <p className="text-center mt-10 md:text-left mb-8 md:mb-[35px] font-medium md:leading-8 text-[16px] md:text-[24px] leading-[31px]">
              Take advantage of installments, discounts and promotions <br /> what we have for you.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-24 md:px-5 bg-primary-white">
          <div className="flex m-auto flex-col-reverse lg:flex-row">
            <div className="md:ml-10 mt-8">
              <h2 className="md:text-left mb-4 mt-5 pt-4 md:mt-0 leading-[42px] md:leading-[3rem] px-4 md:px-0 text-6xl font-semibold">
                 Take control
                <br /> of your finances
              </h2>
              <p className="text-center mt-10 md:text-left mb-8 md:mb-[35px] font-medium md:leading-8 text-[16px] md:text-[24px] leading-[31px]">
                 From your account menu <br /> will manage all your
                 movements.
              </p>
            </div>
            <div
              className="md:ml-10 md:max-w-[92%] transition-all"
              width="100%"
              height="auto"
            >
              <img
                className="w-full rounded md:w-full"
                src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/4ONHQWJ5CVA4JOSFZV4ADRGA6E.jpeg"
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
