import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AnalyticsPage() {
  return (
    <div className="p-4 sm:p-6 space-y-6">
      <h1 className="text-2xl sm:text-3xl font-bold">Analytics</h1>
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Page Views</CardTitle>
            <CardDescription>Total page views this week</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">127,543</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Bounce Rate</CardTitle>
            <CardDescription>Average bounce rate</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">42.3%</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

