import { createContext, useContext, useEffect, useState } from "react";
import {
  createSchedule,
  deleteSchedule,
  getSchedules,
  updateSchedule,
} from "../components/dashboard-components/schedule/SupabaseScheduleService";
import { nanoid } from "nanoid";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [posts, setPosts] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [postDateTime, setPostDateTime] = useState("");
  const [postImage, setPostImage] = useState(null);

  const [isEditingMode, setIsEditingMode] = useState(false);
  const [editingPostId, setEditingPostId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSchedules();
      setPosts(data);
    };

    fetchData();
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleSystemTheme = () => {
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(systemPrefersDark);
  };

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleEditPost = (post) => {
    // Edit Mode
    setIsEditingMode(true);
    setEditingPostId(post.post_id);
    setPostTitle(post.title);
    setPostDescription(post.description);
    setPostDateTime(post.scheduled_at);
    setPostImage(post.image_file);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    // handleResetFields();
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
      // created_at: new Date().toLocaleDateString(),
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
  // const handleDeletePost = (id) => {
  //   setPosts((prevPost) => prevPost.filter((post) => post.post_id !== id));
  // };
  const handleDeletePost = async (id) => {
    try {
      await deleteSchedule(id); // ❌ delete from Supabase
      setPosts((prevPosts) => prevPosts.filter((post) => post.post_id !== id)); // ✅ update UI
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
    setPosts,
    setPostTitle,
    setPostDescription,
    setPostDateTime,
    setPostImage,
    setIsDarkMode,
    handleSidebar,
    handleSystemTheme,
    handleOpenPopup,
    handleClosePopup,
    handleCreatePost,
    handleUpdatePost,
    handleDeletePost,
    handleEditPost,
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
