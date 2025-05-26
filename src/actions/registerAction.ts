"use server";

import supabaseClient from "@/lib/supabase/client";

const registerAction = async (
  _: any,
  formData: FormData,
): Promise<{ success: boolean; error?: string }> => {
  try {
    const displayName = formData.get("displayName");
    const email = formData.get("email");
    const password = formData.get("password");

    const { data, error } = await supabaseClient.auth.signUp({
      email: email as string,
      password: password as string,
      options: {
        data: {
          displayName: displayName as string,
        },
      },
    });

    console.log(data);
    console.log(error);

    if (error) {
      if (error.message.includes("duplicate key")) {
        return { success: false, error: "Email already in use" };
      }
      return { success: false, error: error.message };
    }

    // 중복 이메일 확인: identities 배열이 비어있으면 이미 존재하는 이메일
    // Supabase는 보안상의 이유로 이메일 확인(Email Confirmation)이 활성화된 경우 중복 이메일로 가입 시 오류를 반환하지 않고 가짜 사용자 객체를 반환합니다.
    // 이 가짜 사용자 객체는 user.identities 배열이 비어있는 특징이 있어 이를 통해 중복 이메일 여부를 확인할 수 있습니다.
    if (data?.user && data.user.identities && data.user.identities.length === 0) {
      return { success: false, error: "Email already in use" };
    }

    if (!data?.user) return { success: false, error: "Error creating account" };

    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false, error: "An error occurred" };
  }
};

export default registerAction;
