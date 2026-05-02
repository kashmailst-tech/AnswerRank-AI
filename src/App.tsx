/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Home from './pages/Home';
import PublicLayout from './components/PublicLayout';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Integrations from './pages/Integrations';
import Api from './pages/Api';
import Blog from './pages/Blog';
import Documentation from './pages/Documentation';
import CaseStudies from './pages/CaseStudies';
import GeoGuide from './pages/GeoGuide';
import About from './pages/About';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import DashboardLayout from './components/DashboardLayout';
import Dashboard from './pages/Dashboard';
import AICitations from './pages/AICitations';
import PromptTracker from './pages/PromptTracker';
import ContentOptimizer from './pages/ContentOptimizer';
import Competitors from './pages/Competitors';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PublicLayout />}>
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/api" element={<Api />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/geo-guide" element={<GeoGuide />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="citations" element={<AICitations />} />
              <Route path="prompts" element={<PromptTracker />} />
              <Route path="optimizer" element={<ContentOptimizer />} />
              <Route path="competitors" element={<Competitors />} />
              <Route path="reports" element={<Reports />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
