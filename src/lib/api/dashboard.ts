import dashboard from "@/mocks/dashboard/franchisor.json";
import regions from "@/mocks/network/regions.json";

export async function getDashboard() {
  return dashboard;
}
export async function getRegions() {
  return regions;
}