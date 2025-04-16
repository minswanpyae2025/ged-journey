
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';

export default function DashboardLayout() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // User data (would come from auth provider in a real app)
  const userData = {
    name: 'Alex Johnson',
    subscription: 'Smart Learner' as const // OR 'Basic Learner' or 'Guided Genius'
  };
  
  // Check if user is authenticated
  useEffect(() => {
    const token = localStorage.getItem('gedAuth');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  // Close sidebar when clicking outside on mobile
  const handleContentClick = () => {
    if (sidebarOpen && window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };
  
  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardSidebar isOpen={sidebarOpen} userSubscription={userData.subscription} />
      
      <div className="flex-1 md:ml-64">
        <DashboardHeader 
          toggleSidebar={toggleSidebar} 
          userName={userData.name}
          userSubscription={userData.subscription}
        />
        
        <main className="p-4 md:p-6" onClick={handleContentClick}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
