import { createContext, useContext, useEffect, useState } from "react";
import {
  createSchedule,
  deleteSchedule,
  getSchedules,
  updateSchedule,
} from "../supabase/SupabaseScheduleService";
import { nanoid } from "nanoid";
import { supabase } from "../supabase/supabase";
import { useAuth } from "./AuthProvider";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [username, setUsername] = useState("");
  const [tempName, setTempName] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [tempAvatar, setTempAvatar] = useState(null);

  const [posts, setPosts] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [postDateTime, setPostDateTime] = useState("");
  const [postImage, setPostImage] = useState(null);

  const [isEditingMode, setIsEditingMode] = useState(false);
  const [editingPostId, setEditingPostId] = useState(null);

  const { user } = useAuth();

  // Load settings from localStorage on initial render
  useEffect(() => {
    const savedSettings = localStorage.getItem("userSettings");
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      setUsername(settings.username || "");
      setAvatar(settings.avatar || null);
      setIsDarkMode(settings.theme === "dark");
    }
  }, []);

  // Listen for auth state changes and fetch schedules when authenticated
  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        if (session) {
          const data = await getSchedules();
          setPosts(data);
        }
      } catch (error) {
        console.error("Error fetching schedules:", error);
      }
    };

    // Initial fetch
    fetchData();

    // Subscribe to auth changes - Check it after logout
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        fetchData();
      } else if (event === "SIGNED_OUT") {
        setPosts([]);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    // Save theme to localStorage
    const savedSettings = localStorage.getItem("userSettings");
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      settings.theme = !isDarkMode ? "dark" : "light";
      localStorage.setItem("userSettings", JSON.stringify(settings));
    } else {
      // If no settings exist yet, create them with default values
      const defaultSettings = {
        username: username || user?.user_metadata?.username,
        theme: !isDarkMode ? "dark" : "light",
        avatar: avatar,
      };
      localStorage.setItem("userSettings", JSON.stringify(defaultSettings));
    }
  };

  const handleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleSystemTheme = () => {
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(systemPrefersDark);
    // Save system theme to localStorage
    const savedSettings = localStorage.getItem("userSettings");
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      settings.theme = systemPrefersDark ? "dark" : "light";
      localStorage.setItem("userSettings", JSON.stringify(settings));
    } else {
      // If no settings exist yet, create them with default values
      const defaultSettings = {
        username: username || "User",
        theme: systemPrefersDark ? "dark" : "light",
        avatar: avatar,
      };
      localStorage.setItem("userSettings", JSON.stringify(defaultSettings));
    }
  };

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleEditPost = (post) => {
    setIsEditingMode(true);
    setEditingPostId(post.post_id);
    setPostTitle(post.title);
    setPostDescription(post.description);
    setPostDateTime(post.scheduled_at);
    setPostImage(post.image_file);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleResetFields = () => {
    setIsEditingMode(false);
    setEditingPostId("");
    setPostTitle("");
    setPostDescription("");
    setPostDateTime("");
    setPostImage(null);
  };

  // CRUD operation handlers
  const handleCreatePost = async () => {
    const postData = {
      post_id: nanoid(),
      title: postTitle,
      description: postDescription,
      scheduled_at: postDateTime,
      image_file: postImage,
    };

    if (
      postTitle === "" ||
      postDescription === "" ||
      postDateTime === "" ||
      postImage === null
    ) {
      alert("Please fill up all the input fields");
      return;
    }

    await createSchedule(postData);
    setPosts((prevPosts) => [...prevPosts, postData]);
    handleClosePopup();
    handleResetFields();
  };

  const handleUpdatePost = async () => {
    const newPostData = {
      post_id: editingPostId,
      title: postTitle,
      description: postDescription,
      scheduled_at: postDateTime,
      image_file: postImage,
    };

    await updateSchedule(editingPostId, newPostData);
    handleClosePopup();
    handleResetFields();
  };

  const handleDeletePost = async (id) => {
    try {
      await deleteSchedule(id); // delete from Supabase
      setPosts((prevPosts) => prevPosts.filter((post) => post.post_id !== id)); // update UI
    } catch (error) {
      console.error("Failed to delete post from Supabase:", error.message);
    }
  };

  const values = {
    isDarkMode,
    toggleDarkMode,
    isSidebarOpen,
    isPopupOpen,
    posts,
    postTitle,
    postDescription,
    postDateTime,
    postImage,
    isEditingMode,
    username,
    tempName,
    avatar,
    tempAvatar,
    setPosts,
    setPostTitle,
    setPostDescription,
    setPostDateTime,
    setPostImage,
    setIsDarkMode,
    setUsername,
    setTempName,
    handleSidebar,
    handleSystemTheme,
    handleOpenPopup,
    handleClosePopup,
    handleCreatePost,
    handleUpdatePost,
    handleDeletePost,
    handleEditPost,
    setAvatar,
    setTempAvatar,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppState = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppState must use within an AppProvider");
  }

  return context;
};
