import { BreadcrumnForPage } from "@/components/breadcrum-for-page";
import { MainContainer } from "@/components/main-container";
import { DataTable } from "./_components/table";
import { db } from "@/lib/db";

const breadCrumbs = [
  {
    name: "Users",
  },
];

export const UsersPage = async () => {
  const users = await db.user.findMany({
    select: {
      id: true,
      fullName: true,
      userName: true,
      email: true,
      role: true,
    },
  });

  return (
    <MainContainer>
      <BreadcrumnForPage breadCrumbs={breadCrumbs} />
      <DataTable data={users} />
    </MainContainer>
  );
};

export default UsersPage;
