import { supabase } from "../../auth/supabase";

// Helper to get authenticated user or throw
const getAuthenticatedUser = async () => {
  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(`Authentication error: ${error.message}`);
  if (!data.user) throw new Error("Not authenticated");

  return data.user;
};

// Handle the uploaded image
const uploadImage = async (file) => {
  if (!file) return null;

  try {
    const timestamp = Date.now();
    const fileExt = file?.name?.split(".").pop() || "jpg";
    const fileName = `${timestamp}.${fileExt}`;

    // Using the documented approach from Supabase docs
    const { data, error } = await supabase.storage
      .from("schedule-images")
      .upload(`public/${fileName}`, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) throw error;

    const {
      data: { publicUrl },
    } = supabase.storage
      .from("schedule-images")
      .getPublicUrl(`public/${fileName}`);

    return publicUrl;
  } catch (error) {
    console.error("Upload error:", error);
    throw new Error(`Image upload failed: ${error.message}`);
  }
};

// Create
export const createSchedule = async (scheduleData) => {
  try {
    const { post_id, title, description, imageFile, scheduled_at } =
      scheduleData;

    // Validate required fields
    if (!title || !description || !scheduled_at) {
      throw new Error("Missing required fields");
    }

    const user = await getAuthenticatedUser();
    const image_file = await uploadImage(imageFile);

    const { data, error } = await supabase
      .from("schedule_data")
      .insert([
        {
          post_id,
          title,
          description,
          image_file,
          scheduled_at,
          user_id: user.id,
          // created_at: new Date(),
        },
      ])
      .select();

    if (error) throw new Error(`Create failed: ${error.message}`);
    return data;
  } catch (error) {
    console.error("Create schedule error:", error);
    throw error;
  }
};

// Get all scheduled posts for the user
export const getSchedules = async () => {
  try {
    const user = await getAuthenticatedUser();

    const { data, error } = await supabase
      .from("schedule_data")
      .select("*")
      .eq("user_id", user.id);
    // .order("created_at", { ascending: false });

    if (error) throw new Error(`Fetch failed: ${error.message}`);
    return data;
  } catch (error) {
    console.error("Get schedules error:", error);
    throw error;
  }
};

// Update
export const updateSchedule = async (id, scheduleData) => {
  try {
    const { title, description, image_file, scheduled_at } = scheduleData;

    // Validate required fields
    if (!id || !title || !description || !scheduled_at || !image_file) {
      throw new Error("Missing required fields");
    }

    const user = await getAuthenticatedUser();

    // Prepare update fields
    const updates = {
      title,
      description,
      scheduled_at,
      image_file,
      updated_at: new Date(),
    };

    // Only process image if a new one is provided
    if (image_file) {
      updates.image_file = await uploadImage(image_file);
    }

    const { data, error } = await supabase
      .from("schedule_data")
      .update(updates)
      .eq("post_id", id)
      .eq("user_id", user.id)
      .select();

    if (error) throw new Error(`Update failed: ${error.message}`);
    return data;
  } catch (error) {
    console.error("Update schedule error:", error);
    throw error;
  }
};

// Delete
export const deleteSchedule = async (id) => {
  try {
    if (!id) throw new Error("Schedule ID is required");

    const user = await getAuthenticatedUser();

    const { data, error } = await supabase
      .from("schedule_data")
      .delete()
      .eq("post_id", id)
      .eq("user_id", user.id);

    if (error) throw new Error(`Delete failed: ${error.message}`);
    return data;
  } catch (error) {
    console.error("Delete schedule error:", error);
    throw error;
  }
};
