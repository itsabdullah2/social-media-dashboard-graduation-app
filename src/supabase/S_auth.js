import { supabase } from './supabase';

// Helper function to clear auth data from localStorage
const clearLocalAuthData = () => {
  console.log("Clearing local auth data");
  // Clear all Supabase-related items from localStorage
  Object.keys(localStorage).forEach(key => {
    if (key.startsWith('sb-') || key.startsWith('supabase-')) {
      localStorage.removeItem(key);
    }
  });
  
  // Clear any other auth-related items
  localStorage.removeItem('userSettings');
};

export const signUpWithEmail = async (email, password, username) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username: username,
      },
    },
  });
  if (error) throw error;
  return data;
};

export const signInWithEmail = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
};

export const signOut = async () => {
  try {
    console.log("Signing out user");
    // Force clear the session from all tabs and windows
    const { error } = await supabase.auth.signOut({ scope: 'global' });
    if (error) throw error;
    
    // Clear localStorage manually to make sure everything is gone
    clearLocalAuthData();
    
    // Force page reload to clear any in-memory state
    window.location.href = '/signin';
  } catch (error) {
    console.error('Error during sign out:', error);
    // Still try to clean local storage even if the API call fails
    clearLocalAuthData();
    throw error;
  }
};

export const signInWithOAuth = async () => {
  const { user, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  });
  if (error) throw error;
  return user;
};
