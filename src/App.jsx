import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router'
import AppLayout from './layout/App.layout'
import Error404 from './pages/Error404'
import ParticipantDashboard from './pages/participant/ParticipantDashboard'
import FindWork from './pages/participant/FindWork'
import SavedWorker from './pages/participant/SavedWorker'
import Message from './pages/participant/Message'
import MyRequest from './pages/participant/Myrequest'
import MyProfile from './pages/participant/MyProfile'
import Setting from './pages/participant/Setting'
import Help from './pages/participant/Help'
import WorkerDashboard from './pages/worker/WorkerDashboard'
import CalendarPage from './pages/worker/calendar'
import Participant from './pages/worker/participant'
import Resource from './pages/worker/Resource'
import LearningHub from './pages/worker/LearningHub'
import WorkerSettings from './pages/worker/WorkerSettings'
import HelpCenter from './pages/worker/HelpCenter'
import SignIn from './pages/auth/SignIn'
import AuthLayout from './layout/Auth.layout'
import CheckEmail from './pages/auth/CheckEmail'
import ForgotPassword from './pages/auth/ForgotPassword'
import ResetPassword from './pages/auth/ResetPassword'
import CreateAccount from './pages/auth/CreateAccount'
import AccountDetails from './pages/auth/accountSetup/AccountDetails_step1'
import ChooseWorkspace from './pages/auth/ChooseWorkspace'


const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='auth' element={<AuthLayout />} >
        <Route path='sign-in' element={<SignIn />} />
        <Route path='forgot-password' element={<ForgotPassword />} />
        <Route path='check-email' element={<CheckEmail />} />
        <Route path='reset-password' element={<ResetPassword />} />

        <Route path='create-account' element={<CreateAccount />} />
        <Route path='account-details' element={<AccountDetails />} />
        <Route path='choose-workspace' element={<ChooseWorkspace />} />
      </Route>

      <Route path="/" element={<AppLayout />}>
        {/* <Route index element={<Navigate to={"/auth/sign-in"} replace />} /> */}


        <Route path="participent">
          <Route path="dashboard" element={<ParticipantDashboard />} />
          <Route path="find-worker" element={<FindWork />} />
          <Route path="saved-worker" element={<SavedWorker />} />
          <Route path="message" element={<Message />} />
          <Route path="request" element={<MyRequest />} />

          <Route path="profile" element={<MyProfile />} />
          <Route path="setting" element={<Setting />} />
          <Route path="help" element={<Help />} />
        </Route>

        <Route path="worker">
          <Route path="dashboard" element={<WorkerDashboard />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="participant" element={<Participant />} />
          <Route path="resource" element={<Resource />} />
          <Route path="learning-hub" element={<LearningHub />} />
          <Route path="settings" element={<WorkerSettings />} />
          <Route path="help-center" element={<HelpCenter />} />
        </Route>


      </Route>

      {/* <Route path="test" element={<CreateAccountPage />} /> */}

      <Route path="*" element={<Error404 />} />
    </>
  )
)


function App() {
  return (
    <RouterProvider router={routes} />
  )
}

export default App
