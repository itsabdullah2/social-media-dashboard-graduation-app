import { supabase } from "./supabase";
import { getAuthenticatedUser } from "./SupabaseScheduleService";

// Handle the uploaded avatar
const uploadAvatar = async (file) => {
  if (!file) return null;

  try {
    const timestamp = Date.now();
    const fileExt = file?.name?.split(".").pop() || "jpg";
    const fileName = `${timestamp}.${fileExt}`;

    const { data, error } = await supabase.storage
      .from("user-avatar")
      .upload(`public/${fileName}`, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) throw error;

    const {
      data: { publicUrl },
    } = supabase.storage.from("user-avatar").getPublicUrl(`public/${fileName}`);

    return publicUrl;
  } catch (error) {
    console.error("Avatar upload error:", error);
    throw new Error(`Avatar upload failed: ${error.message}`);
  }
};

// Get user settings
export const getUserSettings = async () => {
  try {
    const user = await getAuthenticatedUser();

    const { data, error } = await supabase
      .from("user_settings")
      .select("*")
      .eq("id", user.id)
      .single();

    if (error) {
      console.error("Error fetching settings:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Error getting user settings:", error);
    return null;
  }
};

// Update business name
export const updateBusinessName = async (businessName) => {
  try {
    const user = await getAuthenticatedUser();

    const { data, error } = await supabase
      .from("user_settings")
      .update({ username: businessName })
      .eq("id", user.id)
      .select()
      .single();

    if (error) {
      console.error("Error updating business name:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Error updating business name:", error);
    return null;
  }
};

// Update theme
export const updateTheme = async (theme) => {
  try {
    const user = await getAuthenticatedUser();

    const { data, error } = await supabase
      .from("user_settings")
      .update({ theme })
      .eq("id", user.id)
      .select()
      .single();

    if (error) {
      console.error("Error updating theme:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Error updating theme:", error);
    return null;
  }
};

// Update avatar
export const updateAvatar = async (imageFile) => {
  try {
    const user = await getAuthenticatedUser();
    const avatar = await uploadAvatar(imageFile);

    const { data, error } = await supabase
      .from("user_settings")
      .update({ avatar })
      .eq("id", user.id)
      .select()
      .single();

    if (error) {
      console.error("Error updating avatar:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Error uploading avatar:", error);
    return null;
  }
};

// Create initial user settings
export const createUserSettings = async ({ username, theme, imageFile }) => {
  try {
    const user = await getAuthenticatedUser();
    const avatar = await uploadAvatar(imageFile);

    const { data, error } = await supabase
      .from("user_settings")
      .insert([
        {
          id: user.id,
          username,
          theme,
          avatar,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Error creating settings:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Error creating user settings:", error);
    return null;
  }
};
