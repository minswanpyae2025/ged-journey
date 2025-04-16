
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { useAuth } from '@/contexts/AuthContext';

export default function DashboardLayout() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, profile } = useAuth();
  
  // Check if user is authenticated
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  // Close sidebar when clicking outside on mobile
  const handleContentClick = () => {
    if (sidebarOpen && window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };
  
  if (!user || !profile) {
    return null; // Or a loading spinner
  }

  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardSidebar 
        isOpen={sidebarOpen} 
        userSubscription={profile.subscription_type} 
      />
      
      <div className="flex-1 md:ml-64">
        <DashboardHeader 
          toggleSidebar={toggleSidebar} 
          userName={profile.full_name}
          userSubscription={profile.subscription_type}
        />
        
        <main className="p-4 md:p-6" onClick={handleContentClick}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
