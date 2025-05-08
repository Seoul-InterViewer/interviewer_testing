import supabaseClient from "@/lib/supabase/client";

const testAction = async () => {
  try {
    let data = await supabaseClient.from("categories").select("*");
    return data;
  } catch (error) {
    throw new Error("Failed connecting to Supabase");
  }
};

export default testAction;
