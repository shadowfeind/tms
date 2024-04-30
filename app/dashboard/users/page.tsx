import { BreadcrumnForPage } from "@/components/breadcrum-for-page";
import { MainContainer } from "@/components/main-container";
import { DataTable } from "./_components/table";
import { userData } from "./_components/data";

const breadCrumbs = [
  {
    name: "Users",
  },
];

export const UsersPage = () => {
  return (
    <MainContainer>
      <BreadcrumnForPage breadCrumbs={breadCrumbs} />
      <DataTable data={userData} />
    </MainContainer>
  );
};

export default UsersPage;
