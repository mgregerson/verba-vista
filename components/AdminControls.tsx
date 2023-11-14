import DeleteChatButton from "./DeleteChatButton";
import InviteUser from "./InviteUser";

function AdminControls({ chatId }: { chatId: string }) {
  return (
    <div className="flex flex-row gap-2 justify-end space-x-2- m-5 mb-0">
      <InviteUser chatId={chatId} />
      <DeleteChatButton chatId={chatId} />
    </div>
  );
}

export default AdminControls;
