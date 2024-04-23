import { BreadcrumnForPage } from "@/components/breadcrum-for-page";
import { MainContainer } from "@/components/main-container";
import { DataTableDemo } from "./table";

const breadCrumbs = [
  {
    name: "Users",
  },
];

export const UsersPage = () => {
  return (
    <MainContainer>
      <BreadcrumnForPage breadCrumbs={breadCrumbs} />
      <DataTableDemo />
    </MainContainer>
  );
};

export default UsersPage;
