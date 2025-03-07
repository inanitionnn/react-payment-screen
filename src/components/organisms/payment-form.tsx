import { useCheckoutPayment } from "../../hooks/use-checkout-payment.hook";
import { Button } from "../atoms/button";
import { Input } from "../atoms/input";
import { AsyncButton } from "../molecules/async-button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../molecules/form";
import { TextSeparator } from "../molecules/text-separator";
import applePayLogo from "@/assets/apple_pay_logo.svg";
import infoIcon from "@/assets/info.svg";

export const PaymentForm = () => {
  const {
    form,
    formatCardNumber,
    formatExpirationDate,
    submit,
    isError,
    isLoading,
    isSuccess,
  } = useCheckoutPayment();

  return (
    <div className="flex flex-col gap-4">
      <Button size={"default"} variant={"black"} className="mb-2 w-full">
        <img src={applePayLogo} className="h-5" alt="Apple pay" />
      </Button>
      <TextSeparator>or pay with card</TextSeparator>
      {/* Card form */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submit)}
          className="flex flex-col gap-3"
        >
          <FormField
            control={form.control}
            name="CardNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="CardNumber">Card Number</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="CardNumber"
                    placeholder="1234 1234 1234 1234"
                    onChange={(e) =>
                      field.onChange(formatCardNumber(e.target.value))
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-3">
            <FormField
              control={form.control}
              name="ExpirationDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="ExpirationDate">
                    Expiration Date
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="ExpirationDate"
                      placeholder="MM/YY"
                      onChange={(e) =>
                        field.onChange(formatExpirationDate(e.target.value))
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="CVC"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="CVC">CVC</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <img
                        src={infoIcon}
                        className="absolute top-[12px] right-[12px] h-[18px] cursor-pointer"
                        alt="Info"
                        // todo add tooltip
                      />
                      <Input
                        {...field}
                        id="CVC"
                        type="password"
                        maxLength={3}
                        placeholder="•••"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-1 flex flex-col gap-2">
            <AsyncButton
              disabled={isLoading || isSuccess || isError}
              type="submit"
              defaultText="Start Trial"
              loadingText="Processing payment"
              successText="Success payment"
              errorText="Something went wrong"
              isError={isError}
              isLoading={isLoading}
              isSuccess={isSuccess}
            />

            <div className="border-border rounded-md border px-4 py-3 text-gray-400">
              <p className="text-xs leading-4 font-normal">
                You'll have your{" "}
                <b className="font-semibold">Plan Pro during 1 year</b>. After
                this period of time, your plan will be{" "}
                <b className="font-semibold">automatically renewed</b> with its
                original price without any discounts applied.
              </p>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};
