export const HOOK_IMPORTS = `"use client";
import { useRouter } from "next/navigation";`;

export const HOOK_WRAPPER_START = `
export const useAppRouter = () => {
  const router = useRouter();

  return {`;

export const HOOK_WRAPPER_END = `
  };
};
`;
