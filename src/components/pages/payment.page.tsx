import arrowIcon from "@/assets/arrow.svg";
import solidLogo from "@/assets/solid_logo.svg";
import { Button } from "../atoms/button";
import { useState } from "react";
import { Separator } from "../atoms/separator";
import { PaymentForm } from "../organisms/payment-form";

const PaymentPage = () => {
  const [language] = useState("Укр");

  return (
    <div className="flex h-full min-h-screen flex-col items-center justify-between gap-8 p-8">
      <main className="relative flex max-w-[420px] flex-col gap-8 lg:max-w-none lg:flex-row lg:pt-14">
        <div className="absolute w-full">
          <Button
            size={"icon"}
            variant={"ghost"}
            className="absolute top-0 left-0 lg:-top-1 lg:-left-12"
          >
            <img src={arrowIcon} className="h-6 w-6" alt="Left arrow" />
          </Button>

          <Button
            size={"icon"}
            variant={"ghost"}
            className="absolute top-0 right-0 lg:-top-14"
          >
            <span className="text-sm leading-6 font-medium">{language}</span>
          </Button>
        </div>

        <div className="flex flex-col gap-8 lg:max-w-[420px]">
          {/* Checkout section */}
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <h1 className="text-lg leading-8 font-semibold">Checkout</h1>
            <div className="text-center lg:text-start">
              <h3 className="text-2xl leading-8 font-semibold">5 days free</h3>
              <p className="text-sm leading-5 font-medium">
                then 299.99 UAH per 14 days
              </p>
            </div>
          </div>

          <PaymentForm />
        </div>

        {/* Order info */}
        <div className="flex h-min w-full flex-col gap-4 rounded-md bg-gray-100 px-4 py-3 text-gray-500 lg:max-w-[420px] lg:px-10 lg:py-8">
          <h4 className="text-lg leading-6 font-semibold">
            {`Order info <= 100 char.`}
          </h4>
          <p className="text-sm leading-6 font-medium">
            {`Description <= 400 char.`}
          </p>
          <Separator />
          <h6 className="text-sm leading-5 font-semibold">
            Lamel Professional Smart Skin Compact Powder
          </h6>
          <p className="text-xs leading-4 font-normal">Пудра для лица</p>
          <Separator />
          <h3 className="text-end text-base leading-6 font-semibold">
            299.99 UAH / month
          </h3>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-center gap-1">
        <h3 className="text-center text-sm leading-5 font-medium">
          Powered by{" "}
        </h3>{" "}
        <img src={solidLogo} className="h-5" alt="Solid logo" />
      </footer>
    </div>
  );
};

export default PaymentPage;
