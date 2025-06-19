
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import ProtectedRoute from "@/components/Layout/ProtectedRoute";

// Public Pages
import Home from "./pages/Home";
import Languages from "./pages/Languages";
import Sessions from "./pages/Sessions";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";

// Auth Pages
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

// Student Pages
import StudentDashboard from "./pages/Student/Dashboard";
import StudentPrograms from "./pages/Student/Programs";
import StudentSessions from "./pages/Student/Sessions";
import StudentQuizzes from "./pages/Student/Quizzes";
import StudentProfile from "./pages/Student/Profile";

// Teacher Pages
import TeacherDashboard from "./pages/Teacher/Dashboard";
import TeacherPrograms from "./pages/Teacher/Programs";
import TeacherSchedule from "./pages/Teacher/Schedule";
import TeacherQuizCreate from "./pages/Teacher/QuizCreate";
import TeacherResults from "./pages/Teacher/Results";

// Admin Pages
import AdminDashboard from "./pages/Admin/Dashboard";
import AdminUsers from "./pages/Admin/Users";
import AdminPrograms from "./pages/Admin/Programs";
import AdminSessions from "./pages/Admin/Sessions";
import AdminQuizzes from "./pages/Admin/Quizzes";
import AdminLanguages from "./pages/Admin/Languages";
import AdminSettings from "./pages/Admin/Settings";
import AdminReports from "./pages/Admin/Reports";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/languages" element={<Languages />} />
                <Route path="/sessions" element={<Sessions />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faqs" element={<FAQs />} />
                
                {/* Auth Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                {/* Student Routes */}
                <Route path="/student/dashboard" element={
                  <ProtectedRoute allowedRoles={['student']}>
                    <StudentDashboard />
                  </ProtectedRoute>
                } />
                <Route path="/student/programs" element={
                  <ProtectedRoute allowedRoles={['student']}>
                    <StudentPrograms />
                  </ProtectedRoute>
                } />
                <Route path="/student/sessions" element={
                  <ProtectedRoute allowedRoles={['student']}>
                    <StudentSessions />
                  </ProtectedRoute>
                } />
                <Route path="/student/quizzes" element={
                  <ProtectedRoute allowedRoles={['student']}>
                    <StudentQuizzes />
                  </ProtectedRoute>
                } />
                <Route path="/student/profile" element={
                  <ProtectedRoute allowedRoles={['student']}>
                    <StudentProfile />
                  </ProtectedRoute>
                } />
                
                {/* Teacher Routes */}
                <Route path="/teacher/dashboard" element={
                  <ProtectedRoute allowedRoles={['teacher']}>
                    <TeacherDashboard />
                  </ProtectedRoute>
                } />
                <Route path="/teacher/programs" element={
                  <ProtectedRoute allowedRoles={['teacher']}>
                    <TeacherPrograms />
                  </ProtectedRoute>
                } />
                <Route path="/teacher/schedule" element={
                  <ProtectedRoute allowedRoles={['teacher']}>
                    <TeacherSchedule />
                  </ProtectedRoute>
                } />
                <Route path="/teacher/quiz-create" element={
                  <ProtectedRoute allowedRoles={['teacher']}>
                    <TeacherQuizCreate />
                  </ProtectedRoute>
                } />
                <Route path="/teacher/results" element={
                  <ProtectedRoute allowedRoles={['teacher']}>
                    <TeacherResults />
                  </ProtectedRoute>
                } />
                
                {/* Admin Routes */}
                <Route path="/admin/dashboard" element={
                  <ProtectedRoute allowedRoles={['admin']}>
                    <AdminDashboard />
                  </ProtectedRoute>
                } />
                <Route path="/admin/users" element={
                  <ProtectedRoute allowedRoles={['admin']}>
                    <AdminUsers />
                  </ProtectedRoute>
                } />
                <Route path="/admin/programs" element={
                  <ProtectedRoute allowedRoles={['admin']}>
                    <AdminPrograms />
                  </ProtectedRoute>
                } />
                <Route path="/admin/sessions" element={
                  <ProtectedRoute allowedRoles={['admin']}>
                    <AdminSessions />
                  </ProtectedRoute>
                } />
                <Route path="/admin/quizzes" element={
                  <ProtectedRoute allowedRoles={['admin']}>
                    <AdminQuizzes />
                  </ProtectedRoute>
                } />
                <Route path="/admin/languages" element={
                  <ProtectedRoute allowedRoles={['admin']}>
                    <AdminLanguages />
                  </ProtectedRoute>
                } />
                <Route path="/admin/settings" element={
                  <ProtectedRoute allowedRoles={['admin']}>
                    <AdminSettings />
                  </ProtectedRoute>
                } />
                <Route path="/admin/reports" element={
                  <ProtectedRoute allowedRoles={['admin']}>
                    <AdminReports />
                  </ProtectedRoute>
                } />
                
                {/* Catch-all route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
