
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Stats = () => {
  const salesData = [
    { month: 'Jan', sales: 4000, users: 2400 },
    { month: 'Feb', sales: 3000, users: 1398 },
    { month: 'Mar', sales: 2000, users: 9800 },
    { month: 'Apr', sales: 2780, users: 3908 },
    { month: 'May', sales: 1890, users: 4800 },
    { month: 'Jun', sales: 2390, users: 3800 }
  ];

  const pieData = [
    { name: 'Software', value: 400, color: '#8B5CF6' },
    { name: 'Hardware', value: 300, color: '#06B6D4' },
    { name: 'Services', value: 200, color: '#10B981' },
    { name: 'Support', value: 100, color: '#F59E0B' }
  ];

  const chartConfig = {
    sales: { label: "Sales", color: "#8B5CF6" },
    users: { label: "Users", color: "#06B6D4" }
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Analytics & Statistics</h1>
          <p className="text-xl text-gray-600">Real-time insights into our performance and growth</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">$2.4M</div>
            <div className="text-gray-600">Total Revenue</div>
            <div className="text-green-500 text-sm mt-1">+12% from last month</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">15,420</div>
            <div className="text-gray-600">Active Users</div>
            <div className="text-green-500 text-sm mt-1">+8% from last month</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">1,248</div>
            <div className="text-gray-600">New Customers</div>
            <div className="text-green-500 text-sm mt-1">+15% from last month</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">98.5%</div>
            <div className="text-gray-600">Uptime</div>
            <div className="text-green-500 text-sm mt-1">+0.2% from last month</div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Bar Chart */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Monthly Sales & Users</h3>
            <ChartContainer config={chartConfig} className="h-80">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="sales" fill="var(--color-sales)" />
                <Bar dataKey="users" fill="var(--color-users)" />
              </BarChart>
            </ChartContainer>
          </div>

          {/* Line Chart */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Growth Trend</h3>
            <ChartContainer config={chartConfig} className="h-80">
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="sales" stroke="var(--color-sales)" strokeWidth={3} />
                <Line type="monotone" dataKey="users" stroke="var(--color-users)" strokeWidth={3} />
              </LineChart>
            </ChartContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Revenue Distribution</h3>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
