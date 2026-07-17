import type { Metadata } from "next";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { StatusDashboard } from "@/components/status/StatusDashboard";
import { StatusHeader } from "@/components/status/StatusHeader";
import { getPublicStatus } from "@/lib/api";

export const metadata: Metadata = {
  title: "Status",
  description: "Live BetterPomo service health and anonymous product activity metrics.",
};

export default async function StatusPage() {
  const status = await getPublicStatus();

  return (
    <>
      <StatusHeader />
      <StatusDashboard status={status} />
      <SiteFooter />
    </>
  );
}
