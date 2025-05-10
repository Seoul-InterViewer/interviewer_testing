"use server";

import supabaseClient from "@/lib/supabase/client";

const loginAction = async (
  _: any,
  formData: FormData
): Promise<{ success: boolean; error?: string }> => {
  try {
    const email = formData.get("email");
    const password = formData.get("password");

    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: email as string,
      password: password as string,
    });

    if (error) return { success: false, error: error.message };
    if (!data.user) return { success: false, error: "Account not found" };

    return { success: true };
  } catch (error) {
    return { success: false, error: "An error occurred" };
  }
};

export default loginAction;
