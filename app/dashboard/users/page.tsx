import { BreadcrumnForPage } from "@/components/breadcrum-for-page";
import { MainContainer } from "@/components/main-container";
import { DataTableDemo } from "./table";
import { DataTable } from "./data-table";
import { userData } from "./data";
import { columns } from "./colums";

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
      <DataTable columns={columns} data={userData} />
    </MainContainer>
  );
};

export default UsersPage;
