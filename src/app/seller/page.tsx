import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import SellerDashboard from "@/components/SellerDashboard";

export default async function SellterPage() {
  const { userId } = await auth();
  if (!userId) redirect("/");

  return (
    <div>
      <SellerDashboard />
    </div>
  );
}
