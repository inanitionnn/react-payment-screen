import { createFileRoute } from "@tanstack/react-router";
import PaymentPage from "../components/pages/payment.page";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <PaymentPage />;
}
