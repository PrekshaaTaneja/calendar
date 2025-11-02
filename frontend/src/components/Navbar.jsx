import React from "react";
import { UserCircle } from "lucide-react"; // person icon

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white shadow px-6 py-3">
      {/* Left side - Logo and Title */}
      <div className="flex items-center gap-2">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAwFBMVEVChfT///80qFP7vAQZZ9IYgDgac+jqQzVFh/Tw9f7/+ev7vSXv+PE4qVYPcOg7g+sAaOfptR8/heWpwfRGoFEoaM/5sgkAa+f1rqrqOyvoIgHZ4/Y8gvQAYObH1/j2uLW+0vd7pvdSj/Uuc9Zlkd2kvOrj6/tzofYufPMFYdEAW8+jv/mux/V+pe+KrfFSjuzpLBfpMyEwi0tkoXMCey2nx6wAeCHZ59yYvqGQrubw8Oxnlu2WtfTh7vDw89/5tihhJEpYAAAESElEQVR4nO3ca3eTMBgHcFAWh5cQi5q1QMe2jm4rl825i1L1+38ruYRbCaQ70iQe87zYdOsOv/N/QhLSc6rpZTn22bnGpYyBulhdOgSjFV+D9fGVy8c0iDKub4yV06A23ERjqML1vUJtrviRxlGGUag03iYGqlBpesDXxEIZN06GWnMcT/ugrle65hzzNTFRhuFoNufusVE3l9oZ5+6xUdcrjdM8/gKUccGbtA/KUCiFUiiFUiiFUiiFUiiFUiiFkg/lToQ6nrQ+s2sfU2BOWD8+smsflKlPWG/fvWaWQimUQimUQimUQv3bqHwjIhfKj9PEss7TyA4kQTmxhzAsC3mWPygwUwgAmPFAhQCDVkGcODq1llZBtzig1gjsFMQ2LaatB4vfckBFPVN2XRT2TEFC8uSAapkgbLGWuz2uf3t4lF+ZMHQty82+kSu73dZFuBYfHGVakIyiuBjczsYlTeo0cOm2enxw1Ka8GAR1t0wydGDaelW7sYdHRRjl10OtEVSFB6p5IUi7t8Lhx5QZaxjiqH2ZsIyqgi7rWYzf3ZchUtxZWswyKUwGVeCS5FC8xdxQ2XW7/wUdFLlBIfB1G3FE7VSZDKqXwHUWEMqXHoGogLSvHvxZA+E2/4dAlF2i3KapIS5TE4dyyoEN162fkb8Qhgqs8s73KNsXMSgz2JLJuzt1CUKZURzHUQrI5I0T2ou4o7xiM1zN3Qk1SO6o9vqGtvQOi0ThmEoSnBQ+pz/QCEUB6NFuPgEDHWeFUDXWcUp5Efd5Kv+hGfhxvR2mZCVuRq8eb3B/XAlckMnOE0KZUHqMdjZUMqDIo0N/+ROJ0uNy89Jb/4SibPKAIBAV9qakkKB2z894oZxYQ7393EYoapnkJxpwd0Sn5ZiaiWlfdW7QPfdxyKFHr618UNU8qXUyIYcJeCMGpVc78lkzfOoTO693TswJZZOFDgJyVB3YYHifwAllJtW2HIE03sb1kwNojoK4o/QANceG2YaqORxDlANibpOn3zmla0xnfRPHGd3pHu2XoaEtxcRzmQlSrxsWxJB2uM95QfYTjFspafHAkm17KK/OafYBdwnLCHv5FT3PS8LB97ECf1kUJ1RWpuOH/vKFb6z9n++MKpRCKZRCKZRC/T3KFYCasevn+wnr1+8vzNKO2PVhwnr16Q2r5qf7oF5NWUzU4lSXDjU/0aVDZTlJh8pzkg1V5CQZal6apEItTnTpUFVOMqHqnCRCNTnJg7ptcpIG1c5JFlQnJ0lQd52c5EDddXOSArWbkwyoXk4SoPo5iUdRchKOuqXkJBo1p+UkGEXPSSxqIKcM9VUYajGQU4a6/yYINZhThnp4FIMazilDPYlp30hO+efksft3ANRYTjnqidm/6VHzUVP+MYfPLNXkqMVY70oUUzU1ipET+ejM58fRcTUxipVT9SGjT/dHI65pUcycKlTGergfnNunRbFN+h8/UwAUBK9EIwAAAABJRU5ErkJggg=="
          alt="Logo"
          className="w-8 h-8"
        />
        <h1 className="text-xl font-semibold text-gray-700">Google Calendar Clone</h1>
      </div>

      {/* Right side - Person icon */}
      <div>
        <UserCircle className="w-8 h-8 text-gray-600 cursor-pointer hover:text-gray-800" />
      </div>
    </nav>
  );
};

export default Navbar;
