"use server";

import supabaseClient from "@/lib/supabase/client";

const registerAction = async (
  _: any,
  formData: FormData
): Promise<{ success: boolean; error?: string }> => {

  console.log(formData)
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

    console.log(error);

    if (error) return { success: false, error: error.message };
    if (!data.user) return { success: false, error: "Error creating account" };

    return { success: true };
  } catch (error) {
    return { success: false, error: "An error occurred" };
  }
};

export default registerAction;

