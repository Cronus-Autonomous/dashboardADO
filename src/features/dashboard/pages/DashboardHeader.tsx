import { Greeting } from "@/features/dashboard/header/Greeting";
import { PeriodFilter } from "@/features/dashboard/header/PeriodFilter";
import { NotificationMenu } from "@/features/dashboard/header/NotificationMenu";
import { UserMenu } from "@/features/dashboard/header/UserMenu";
// import { PeriodFilterCompare } from "@/features/dashboard/header/PeriodFilterCompare";

export function DashboardHeader({ user, logout }: { user: any; logout: () => void }) {
  return (
    <header className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
      <Greeting valor={user} />
      <div className="flex flex-wrap items-center justify-end gap-3">
        <PeriodFilter />
        {/* {user.isFranchise && <PeriodFilterCompare />} */}
        {/* {!user.isFranchise && <RegionFilter />} */}
        <NotificationMenu user={user} />
        <UserMenu logout={logout} user={user} />
      </div>
    </header>
  );
}