import { Layout } from "@/components/layout/Layout";
import { HealthScoreCard } from "@/components/dashboard/HealthScoreCard";
import { VitalsGrid } from "@/components/dashboard/VitalsGrid";
import { UpcomingAppointments } from "@/components/dashboard/UpcomingAppointments";
import { HealthTips } from "@/components/dashboard/HealthTips";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { MetricsChart } from "@/components/dashboard/MetricsChart";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Welcome section */}
        <div className="animate-fade-in">
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
            Good morning, Sarah! 👋
          </h1>
          <p className="text-muted-foreground mt-1">
            Here's your health overview for today
          </p>
        </div>

        {/* Top row - Health Score and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <HealthScoreCard />
          </div>
          <QuickActions />
        </div>

        {/* Vitals Grid */}
        <VitalsGrid />

        {/* Charts and Appointments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MetricsChart />
          <UpcomingAppointments />
        </div>

        {/* Tips and Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <HealthTips />
          <RecentActivity />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
