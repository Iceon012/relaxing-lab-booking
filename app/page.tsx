import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PerformanceChart } from "@/components/performance-chart";
import { TimeWorkedChart } from "@/components/time-worked-chart";
import { EmploymentStatus } from "@/components/employment-status";
import { Calendar } from "@/components/calendar";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Employee
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">218</div>
            <p className="text-xs text-green-500">+15% vs last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Employee</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48</div>
            <p className="text-xs text-green-500">+8% vs last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Resigned Employee
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">16</div>
            <p className="text-xs text-green-500">+2% vs last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              KPI Performance
            </CardTitle>
            <Button variant="outline" size="sm">
              Last Year
            </Button>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">91.72%</div>
            <p className="text-xs text-green-500">+24% vs last month</p>
            <div className="h-[200px] mt-4">
              <PerformanceChart />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Employment Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <EmploymentStatus />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Time Worked
          </CardTitle>
          <Button variant="outline" size="sm">
            Weekly View
          </Button>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12hr 32min</div>
          <p className="text-xs text-green-500">+12% vs last month</p>
          <div className="h-[200px] mt-4">
            <TimeWorkedChart />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
