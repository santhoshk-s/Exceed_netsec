import React from 'react'
import DashboardCard01 from '../partials/dashboard/DashboardCard01'
import DashboardCard02 from '../partials/dashboard/DashboardCard02'
import DashboardCard03 from '../partials/dashboard/DashboardCard03'
function StatusCard() {
  return (
    <>
    
     {/* Cards */}
     <div className="grid grid-cols-12 gap-6">
              {/* Line chart (Acme Plus) */}
              <DashboardCard01 />
              {/* Line chart (Acme Advanced) */}
              <DashboardCard02 />
              {/* Line chart (Acme Professional) */}
              <DashboardCard03 />
            </div>
    
    </>
  )
}

export default StatusCard