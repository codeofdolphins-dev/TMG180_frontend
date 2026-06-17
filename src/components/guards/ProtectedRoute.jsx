import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

// Maps each userType to their home dashboard
const DASHBOARD_BY_TYPE = {
    participant: "/participant/dashboard",
    worker: "/worker/dashboard",
    admin: "/admin/dashboard",
};

/**
 * ProtectedRoute
 *
 * @param {string|null} allowedType  - The userType allowed on this route group.
 *                                     Pass null to allow ANY authenticated user (e.g. shared pages).
 * @param {boolean}     authOnly     - If true, this route only requires being logged in (no role check).
 * @param {boolean}     guestOnly    - If true, redirect AWAY when the user IS logged in (e.g. /auth pages).
 */
const ProtectedRoute = ({ allowedType = null, guestOnly = false }) => {
    const isAuthenticated = useSelector((state) => state.auth.status);
    const userType = useSelector((state) => state.auth.userType);

    const userDashboard = DASHBOARD_BY_TYPE[userType] || "/auth/sign-in";

    // ── Guest-only routes (e.g. /auth/sign-in, /auth/forgot-password) ──────────
    // If the user is already logged in, kick them to their dashboard
    if (guestOnly) {
        return isAuthenticated
            ? <Navigate to={userDashboard} replace />
            : <Outlet />;
    }

    // ── Protected routes ─────────────────────────────────────────────────────────
    // Step 1: Not logged in → send to login
    if (!isAuthenticated) {
        return <Navigate to="/auth/sign-in" replace />;
    }

    // Step 2: Logged in but wrong userType → redirect to their own dashboard
    if (allowedType && userType !== allowedType) {
        return <Navigate to={userDashboard} replace />;
    }

    // Step 3: All checks passed → render the child routes
    return <Outlet />;
};

export default ProtectedRoute;
