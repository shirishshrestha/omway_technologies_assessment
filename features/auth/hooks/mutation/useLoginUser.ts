import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { loginApi } from "../../api/LoginApiSlice";
import { loginSchema } from "../../utils/loginSchema";
import z from "zod";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../../redux/authSlice";
import { toast } from "sonner";
import { AxiosError } from "axios";

type LoginFormData = z.infer<typeof loginSchema>;

interface LoginApiResponse {
  accessToken: string;
  refreshToken: string;
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}

interface ErrorResponse {
  message?: string;
}

export const useLoginUser = (): UseMutationResult<
  LoginApiResponse,
  AxiosError<ErrorResponse>,
  LoginFormData
> => {
  const dispatch = useDispatch();
  const router = useRouter();
  return useMutation<
    LoginApiResponse,
    AxiosError<ErrorResponse>,
    LoginFormData
  >({
    mutationFn: (data: LoginFormData) => loginApi(data),
    onSuccess: (userData) => {
      document.cookie = `auth-token=${userData.accessToken}; path=/; max-age=${
        60 * 60 * 24 * 7
      }`; // 7 days
      dispatch(authLogin({ userData }));
      router.push("/"); // redirect
    },
    onError: () => {
      const errorMessage = "Invalid credentials. Please try again.";
      toast.error(errorMessage);
    },
  });
};
