
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import AboutPage from './pages/AboutUsPage';
import AdminDashboard from './pages/AdminDashboard';
import AdminPerformanceMetrics from './pages/AdminPerformanceMetrics';
import ChatView from './pages/ChatView';
import ContactUs from './pages/ContactUs';
import EditCourses from './pages/EditCourses';
import EditUser from './pages/EditUser';
import ForgotPassword from './pages/ForgotPassword';
import HomePage from './pages/HomePage';
import InstructorAddCourse from './pages/InstructorAddCourse';
import InstructorDashboard from './pages/InstructorDashboard';
import InstructorProfile from './pages/InstructorProfile';
import InstructorScheduleExam from './pages/InstructorScheduleExam';
import Login from './pages/Login';
import ManageCourses from './pages/ManageCourses';
import ManageExams from './pages/ManageExams';
import ManageUsers from './pages/ManageUsers';
import MessagesDashboard from './pages/MessagesDashboard';
import Profile from './pages/Profile';
import ProgramCoordinatorDashboard from './pages/ProgramCoordinatorDashboard';
import ProgramCoordinatorProgramReview from './pages/ProgramCoordinatorProgramReview';
import ProgramCoordinatorStrategicDecisions from './pages/ProgramCoordinatorStrategicDecisions';
import QAAudit from './pages/QAAudit';
import QACourseReview from './pages/QACourseReview';
import QADashboard from './pages/QADashboard';
import QAPerformanceData from './pages/QAPerformanceData';
import QAQualityProcesses from './pages/QAQualityProcesses';
import Register from './pages/Register';
import Services from './pages/Services';
import StudentCourseAccess from './pages/StudentCourseAccess';
import StudentCourses from './pages/StudentCourses';
import StudentDashboard from './pages/StudentDashboard';
import StudentExamFeedback from './pages/StudentExamFeedback';
import StudentExamManagement from './pages/StudentExamManagement';
import StudentExamResources from './pages/StudentExamResources';
import StudentPastExams from './pages/StudentPastExams';
import StudentPerformance from './pages/StudentPerformance';
import StudentPerformanceTracking from './pages/StudentPerformanceTracking';
import StudentProfile from './pages/StudentProfile';
import StudentQueries from './pages/StudentQueries';
import StudentUpcomingExams from './pages/StudentUpcomingExams';
import AdminGraphs from './pages/AdminGraphs';
import AIInsightsPage from './pages/ai-insights';


function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/" component={HomePage} /> */}

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/about" component={AboutPage} />
        <Route path="/admin_dashboard" component={AdminDashboard} />
        <Route path="/admin_performance_metrics" component={AdminPerformanceMetrics} />
        <Route path="/chat_view" component={ChatView} />
        <Route path="/contact_us" component={ContactUs} />
        <Route path="/edit_courses" component={EditCourses} />
        <Route path="/edit_user" component={EditUser} />
        <Route path="/forgot_password" component={ForgotPassword} />
        <Route path="/home" component={HomePage} />
        <Route path="/instructor_add_course" component={InstructorAddCourse} />
        <Route path="/instructor_dashboard" component={InstructorDashboard} />
        <Route path="/instructor_profile" component={InstructorProfile} />
        <Route path="/instructor_schedule_exam" component={InstructorScheduleExam} />
        <Route path="/login" component={Login} />
        <Route path="/manage_courses" component={ManageCourses} />
        <Route path="/manage_exams" component={ManageExams} />
        <Route path="/manage_users" component={ManageUsers} />
        <Route path="/messages_dashboard" component={MessagesDashboard} />
        <Route path="/profile" component={Profile} />
        <Route path="/program_coordinator_dashboard" component={ProgramCoordinatorDashboard} />
        <Route path="/program_coordinator_program_review" component={ProgramCoordinatorProgramReview} />
        <Route path="/program_coordinator_strategic_decisions" component={ProgramCoordinatorStrategicDecisions} />
        <Route path="/qa_audit" component={QAAudit} />
        <Route path="/qa_course_review" component={QACourseReview} />
        <Route path="/qa_dashboard" component={QADashboard} />
        <Route path="/qa_performance_data" component={QAPerformanceData} />
        <Route path="/qa_quality_processes" component={QAQualityProcesses} />
        <Route path="/register" component={Register} />
        <Route path="/services" component={Services} />
        <Route path="/student_course_access" component={StudentCourseAccess} />
        <Route path="/student_courses" component={StudentCourses} />
        <Route path="/student_dashboard" component={StudentDashboard} />
        <Route path="/student_exam_feedback" component={StudentExamFeedback} />
        <Route path="/student_exam_management" component={StudentExamManagement} />
        <Route path="/student_exam_resources" component={StudentExamResources} />
        <Route path="/student_past_exams" component={StudentPastExams} />
        <Route path="/student_performance" component={StudentPerformance} />
        <Route path="/student_performance_tracking" component={StudentPerformanceTracking} />
        <Route path="/student_profile" component={StudentProfile} />
        <Route path="/student_queries" component={StudentQueries} />
        <Route path="/student_upcoming_exams" component={StudentUpcomingExams} />
        <Route path="/admin_graphs" component={AdminGraphs} />
        <Route path="/ai-insights" component={AIInsightsPage} />

      </Switch>
    </Router>
  );
}

export default App;
