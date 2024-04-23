import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";

interface BreadCrumbsProps {
  name: string;
  link?: string;
}

interface BreadCrumbPageProps {
  breadCrumbs: BreadCrumbsProps[];
}

export const BreadcrumnForPage = ({ breadCrumbs }: BreadCrumbPageProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/dashboard">Dashboard</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {breadCrumbs.map((crumbs) => {
          if (crumbs.link) {
            return (
              <Fragment key={crumbs.link}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link key={crumbs.link} href="/components">
                      {crumbs.name}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Fragment>
            );
          }
          return (
            <Fragment key={crumbs.link}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{crumbs.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
