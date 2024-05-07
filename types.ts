import { Role } from "@prisma/client";

export interface User {
  id: string;
  fullName: string;
  email: string;
  userName: string;
  role: Role;
}
