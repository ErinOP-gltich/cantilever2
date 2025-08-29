
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Card } from '@/components/ui/card';
import { TrendingUp, DollarSign, Eye, Download } from 'lucide-react';

const monthlyData = [
  { month: 'Jan', earnings: 1200, views: 2400, downloads: 120 },
  { month: 'Feb', earnings: 1900, views: 3800, downloads: 190 },
  { month: 'Mar', earnings: 2800, views: 5200, downloads: 280 },
  { month: 'Apr', earnings: 3200, views: 6100, downloads: 320 },
  { month: 'May', earnings: 2600, views: 4900, downloads: 260 },
  { month: 'Jun', earnings: 4100, views: 7200, downloads: 410 },
];

const EarningsChart = () => {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { icon: DollarSign, label: 'Total Earnings', value: '$15,830', change: '+12.5%', color: 'text-green-500' },
          { icon: TrendingUp, label: 'Monthly Growth', value: '+58%', change: 'vs last month', color: 'text-primary' },
          { icon: Eye, label: 'Total Views', value: '29.6K', change: '+8.2%', color: 'text-blue-500' },
          { icon: Download, label: 'Downloads', value: '1,580', change: '+15.3%', color: 'text-purple-500' },
        ].map((stat, i) => (
          <Card key={i} className="card-elevated p-6 animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className={`text-sm ${stat.color}`}>{stat.change}</p>
              </div>
              <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center`}>
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="card-elevated p-6">
          <h3 className="text-lg font-semibold mb-4">Earnings Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="earnings" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: 'hsl(var(--primary))', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="card-elevated p-6">
          <h3 className="text-lg font-semibold mb-4">Downloads by Month</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Bar 
                dataKey="downloads" 
                fill="hsl(var(--primary))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="card-elevated p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { action: 'Design purchased', design: 'Minimalist Logo Pack', amount: '$45', time: '2 hours ago' },
            { action: 'New follower', design: 'Portfolio viewed', amount: '+1', time: '4 hours ago' },
            { action: 'Design downloaded', design: 'Business Card Template', amount: '$12', time: '6 hours ago' },
            { action: 'Review received', design: 'Brand Identity Kit', amount: '★★★★★', time: '1 day ago' },
          ].map((activity, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-surface-elevated rounded-lg hover-lift">
              <div className="space-y-1">
                <p className="font-medium">{activity.action}</p>
                <p className="text-sm text-muted-foreground">{activity.design}</p>
              </div>
              <div className="text-right space-y-1">
                <p className="font-semibold text-primary">{activity.amount}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default EarningsChart;
