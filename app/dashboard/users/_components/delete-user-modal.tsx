import { deleteUser } from "@/action/userActions";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface DeleteUserModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userId: string;
}

export const DeleteUserModal = ({
  isOpen,
  setIsOpen,
  userId,
}: DeleteUserModalProps) => {
  const handleDelete = () => {
    deleteUser(userId);
    setIsOpen(false);
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="p-8">
        <h2 className="font-bold">Are You Sure You Want To Delete?</h2>
        <div className="mt-2 flex gap-2 p-2">
          <form action={handleDelete}>
            <Button type="submit" variant={"destructive"}>
              Delete
            </Button>
          </form>
          <Button onClick={() => setIsOpen(false)}>Cancel</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
