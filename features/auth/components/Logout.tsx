"use client";

import { SidebarMenuSubButton } from "@/components/ui/sidebar";
import { LogOut } from "lucide-react";
import { useState } from "react";
import useCrossTabLogout from "../hooks/useCrossTabLogout";
import { useDispatch } from "react-redux";
import { logout as authLogout } from "../redux/authSlice";
import { ConfirmationPopup } from "@/features/shared";
import { useRouter } from "next/navigation";

const Logout = () => {
  const [showDialog, setShowDialog] = useState(false);
  const broadcast = useCrossTabLogout();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authLogout());
    broadcast("logout");
    router.push("/login");
  };

  return (
    <ConfirmationPopup
      triggerButton={
        <SidebarMenuSubButton className="cursor-pointer w-full !py-5 p-2 ">
          <LogOut />
          Logout
        </SidebarMenuSubButton>
      }
      onOpenChange={setShowDialog}
      open={showDialog}
      title="Confirm Logout"
      description="Are you sure you want to log out? Any unsaved changes will be lost."
      onConfirm={() => handleLogout()}
      variant="primary"
      cancelText="Stay Logged In"
      confirmText="Logout"
    />
  );
};

export default Logout;
