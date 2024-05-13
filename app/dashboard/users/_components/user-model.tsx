"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { createUserSchema, editUserSchema, updateUserSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useEffect, useMemo, useState, useTransition } from "react";
import { createUser, getUserById, updateUser } from "@/action/userActions";
import { FormError } from "@/components/form-error-message";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AddUserModelProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mode: "create" | "edit" | "view";
  userId?: string;
}

export const AddUserModel = ({
  isOpen,
  setIsOpen,
  mode,
  userId,
}: AddUserModelProps) => {
  const [error, setError] = useState<string | undefined>("");

  const [isPending, startTransition] = useTransition();

  const formValidationSchema = useMemo(() => {
    switch (mode) {
      case "create":
        return createUserSchema;
      case "view":
        return createUserSchema;
      case "edit":
        return editUserSchema;
      default:
        return createUserSchema;
    }
  }, [mode]);

  const form = useForm<z.infer<typeof formValidationSchema>>({
    resolver: zodResolver(formValidationSchema),
  });

  const handleSubmit = (values: z.infer<typeof formValidationSchema>) => {
    setError("");
    startTransition(() => {
      if (mode === "create") {
        const createValues = values as z.infer<typeof createUserSchema>;
        createUser(createValues).then((data) => {
          if (data?.error) {
            setError(data.error);
          } else {
            form.reset();
            setIsOpen(false);
          }
        });
      }
      if (mode === "edit") {
        const updateValues = values as z.infer<typeof updateUserSchema>;
        updateUser(updateValues, userId ?? "").then((data) => {
          if (data?.error) {
            setError(data.error);
          } else {
            form.reset();
            setIsOpen(false);
          }
        });
      }
    });
  };

  useEffect(() => {
    if (userId && (mode === "view" || mode === "edit")) {
      getUserById(userId).then((data) => {
        form.setValue("fullName", data?.fullName ?? "");
        form.setValue("email", data?.email ?? "");
        form.setValue("userName", data?.userName ?? "");
        form.setValue("phone", data?.phone ?? "");
        form.setValue("role", data?.role ?? "");
      });
    }
  }, [mode, userId]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="p-8">
        <h2 className="font-bold">Create User</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <div className="flex flex-col space-y-1.5 pb-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>FullName</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Full Name"
                        {...field}
                        disabled={mode === "view"}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {mode !== "edit" && (
              <>
                <div className="flex flex-col space-y-1.5 pb-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="email@gmail.com"
                            {...field}
                            disabled={mode === "view"}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col space-y-1.5 pb-6">
                  <FormField
                    control={form.control}
                    name="userName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>UserName</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="username"
                            {...field}
                            disabled={mode === "view"}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </>
            )}
            <div className="flex flex-col space-y-1.5 pb-6">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="9808123456"
                        {...field}
                        disabled={mode === "view"}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {mode === "create" && (
              <div className="flex flex-col space-y-1.5">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="*****" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
            <div className="flex flex-col space-y-1.5 mt-4">
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      disabled={mode === "view"}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Please Select A Role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="User">User</SelectItem>
                        <SelectItem value="Admin">Admin</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormError message={error} />
            {mode !== "view" && (
              <Button disabled={isPending} className="mt-4" type="submit">
                {isPending
                  ? "Loading...."
                  : mode === "edit"
                  ? "Update User"
                  : "Create User"}
              </Button>
            )}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
