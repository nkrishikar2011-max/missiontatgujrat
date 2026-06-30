import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import DailyQuiz from "./pages/DailyQuiz";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MockTest from "./pages/MockTest";
import TestScreen from "./pages/TestScreen";
import ResultScreen from "./pages/ResultScreen";
import ReviewScreen from "./pages/ReviewScreen";
import Leaderboard from "./pages/Leaderboard";
import Performance from "./pages/Performance";
import PdfLibrary from "./pages/PdfLibrary";
import Notes from "./pages/Notes";
import AITeacher from "./pages/AITeacher";
import PreviousPapers from "./pages/PreviousPapers";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import AdminDashboard from "./pages/AdminDashboard";
import UploadQuestions from "./pages/UploadQuestions";
import ManageQuestions from "./pages/ManageQuestions";
import CreateMockTest from "./pages/CreateMockTest";
import ManageMockTests from "./pages/ManageMockTests";
import EditMockTest from "./pages/EditMockTest";
import AdminResults from "./pages/AdminResults";
import AdminStudents from "./pages/AdminStudents";
import AdminAnalytics from "./pages/AdminAnalytics";
import SubscriptionPlans from "./pages/SubscriptionPlans";
import Payment from "./pages/Payment";
import Bookmarks from "./pages/Bookmarks";
import Certificate from "./pages/Certificate";
import StudentAnalytics from "./pages/StudentAnalytics";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/ai-teacher"
          element={
            <ProtectedRoute>
              <AITeacher />
            </ProtectedRoute>
          }
        />

        <Route
          path="/notes"
          element={
            <ProtectedRoute>
              <Notes />
            </ProtectedRoute>
          }
        />

        <Route
          path="/previous-papers"
          element={
            <ProtectedRoute>
              <PreviousPapers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/performance"
          element={
            <ProtectedRoute>
              <Performance />
            </ProtectedRoute>
          }
        />

        <Route
          path="/pdf-library"
          element={
            <ProtectedRoute>
              <PdfLibrary />
            </ProtectedRoute>
          }
        />

        <Route
          path="/daily-quiz"
          element={
            <ProtectedRoute>
              <DailyQuiz />
            </ProtectedRoute>
          }
        />

        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <StudentAnalytics />
            </ProtectedRoute>
          }
        />
                <Route
          path="/bookmarks"
          element={
            <ProtectedRoute>
              <Bookmarks />
            </ProtectedRoute>
          }
        />

        <Route
          path="/certificate"
          element={
            <ProtectedRoute>
              <Certificate />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        <Route
          path="/mock-test"
          element={
            <ProtectedRoute>
              <MockTest />
            </ProtectedRoute>
          }
        />

        <Route
          path="/mock-test/:id"
          element={
            <ProtectedRoute>
              <TestScreen />
            </ProtectedRoute>
          }
        />

        <Route
          path="/result"
          element={
            <ProtectedRoute>
              <ResultScreen />
            </ProtectedRoute>
          }
        />

        <Route
          path="/review"
          element={
            <ProtectedRoute>
              <ReviewScreen />
            </ProtectedRoute>
          }
        />

        <Route
          path="/leaderboard"
          element={
            <ProtectedRoute>
              <Leaderboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />

        {/* ADMIN */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/upload"
          element={
            <ProtectedRoute>
              <UploadQuestions />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/questions"
          element={
            <ProtectedRoute>
              <ManageQuestions />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/create-test"
          element={
            <ProtectedRoute>
              <CreateMockTest />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/tests"
          element={
            <ProtectedRoute>
              <ManageMockTests />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/edit-test/:id"
          element={
            <ProtectedRoute>
              <EditMockTest />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/results"
          element={
            <ProtectedRoute>
              <AdminResults />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/students"
          element={
            <ProtectedRoute>
              <AdminStudents />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/analytics"
          element={
            <ProtectedRoute>
              <AdminAnalytics />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/plans"
          element={
            <ProtectedRoute>
              <SubscriptionPlans />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;