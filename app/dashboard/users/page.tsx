import { BreadcrumnForPage } from "@/components/breadcrum-for-page";
import { MainContainer } from "@/components/main-container";
import { DataTable } from "./table";
import { userData } from "./data";

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
