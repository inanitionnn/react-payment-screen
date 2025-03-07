import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  CardNumber: z
    .string()
    .transform((val) => val.replace(/\s/g, ""))
    .refine((val) => val.length === 16, {
      message: "Card number must be 16 digits",
    })
    .refine((val) => /^\d{16}$/.test(val), { message: "Invalid card number" }),
  ExpirationDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/(\d{2})$/, { message: "Invalid format (MM/YY)" }),
  CVC: z
    .string()
    .length(3, { message: "CVC must be 3 digits" })
    .regex(/^\d{3}$/, { message: "Invalid CVC" }),
});

type formDataType = z.infer<typeof formSchema>;

export const useCheckoutPayment = () => {
  const [status, setStatus] = useState("default");

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      CardNumber: "",
      ExpirationDate: "",
      CVC: "",
    },
  });

  const formatExpirationDate = (value: string) => {
    const numericValue = value.replace(/\D/g, "").slice(0, 4);

    if (numericValue.length > 2) {
      return `${numericValue.slice(0, 2)}/${numericValue.slice(2)}`;
    }

    return numericValue;
  };

  const formatCardNumber = (value: string) => {
    console.log("Value:", value);
    const numericValue = value.replace(/\D/g, "").slice(0, 16);
    let formattedValue = "";
    for (let i = 0; i < numericValue.length; i += 4) {
      if (i > 0) {
        formattedValue += " ";
      }
      formattedValue += numericValue.slice(i, i + 4);
    }
    return formattedValue;
  };

  const submit = (data: formDataType) => {
    const cleanedData = {
      CardNumber: data.CardNumber.replace(/\D/g, ""),
      ExpirationDate: data.ExpirationDate.replace(/\D/g, ""),
      CVC: data.CVC,
    };

    console.log("Cleaned Form Data:", cleanedData);

    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  return {
    form,
    submit,
    formatCardNumber,
    formatExpirationDate,
    isLoading: status === "loading",
    isSuccess: status === "success",
    isError: status === "error",
  };
};
