"use server";

import { Contacts } from "@/types";
import { createClient } from "@/utils/client";

export async function getContact(): Promise<Contacts[]> {
  const supabase = await createClient();

  const { data, error } = await supabase.from("Contact").select("*");
  if (error) {
    console.log("Error", error);
    return [];
  }
  return data;
}
