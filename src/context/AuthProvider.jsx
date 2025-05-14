// AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabase";

const AuthContext = createContext();

// Utility function to clear all auth-related data from localStorage
const clearAuthData = () => {
  Object.keys(localStorage).forEach(key => {
    if (key.startsWith('sb-') || key.startsWith('supabase-')) {
      localStorage.removeItem(key);
    }
  });
  localStorage.removeItem('userSettings');
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sessionChecked, setSessionChecked] = useState(false);

  // Initial session check and setup auth state listener
  useEffect(() => {
    let mounted = true;

    const checkSession = async () => {
      try {
        // Get current session
        const { data: { session } } = await supabase.auth.getSession();
        
        // If session exists but has expired, clear it
        if (session) {
          const currentTime = Math.floor(Date.now() / 1000);
          
          if (session.expires_at && currentTime >= session.expires_at) {
            console.log("Session expired, signing out");
            await supabase.auth.signOut();
            clearAuthData();
            if (mounted) {
              setUser(null);
            }
          } else {
            console.log("Valid session found");
            if (mounted) {
              setUser(session.user);
            }
          }
        } else {
          console.log("No session found");
          clearAuthData(); // Make sure localStorage is clear
          if (mounted) {
            setUser(null);
          }
        }
      } catch (error) {
        console.error("Session check error:", error);
        clearAuthData();
        if (mounted) {
          setUser(null);
        }
      } finally {
        if (mounted) {
          setLoading(false);
          setSessionChecked(true);
        }
      }
    };

    checkSession();

    // Set up auth state change listener
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log("Auth state changed:", event);
        
        if (event === 'SIGNED_OUT' || event === 'USER_DELETED') {
          clearAuthData();
          if (mounted) {
            setUser(null);
          }
        } else if (event === 'SIGNED_IN' && session) {
          if (mounted) {
            setUser(session.user);
          }
        } else if (event === 'TOKEN_REFRESHED' && session) {
          if (mounted) {
            setUser(session.user);
          }
        }
      }
    );

    return () => {
      mounted = false;
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  // Force re-check session on page reload/navigation
  useEffect(() => {
    const handleVisibilityChange = async () => {
      if (document.visibilityState === 'visible' && sessionChecked) {
        // Re-check session when tab becomes visible
        setLoading(true);
        try {
          const { data: { session } } = await supabase.auth.getSession();
          if (!session) {
            clearAuthData();
            setUser(null);
          } else {
            const currentTime = Math.floor(Date.now() / 1000);
            if (session.expires_at && currentTime >= session.expires_at) {
              await supabase.auth.signOut();
              clearAuthData();
              setUser(null);
            } else {
              setUser(session.user);
            }
          }
        } catch (error) {
          console.error("Session refresh error:", error);
          clearAuthData();
          setUser(null);
        } finally {
          setLoading(false);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [sessionChecked]);

  const value = {
    user,
    loading,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
