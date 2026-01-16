import React from "react";
import {
  Package,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const Overview = () => {
  const stats = [
    {
      title: "Total Products",
      value: "2,345",
      change: "+12.5%",
      isPositive: true,
      icon: Package,
      color: "text-blue-600",
    },
    {
      title: "Total Orders",
      value: "1,428",
      change: "+8.2%",
      isPositive: true,
      icon: ShoppingCart,
      color: "text-green-600",
    },
    {
      title: "Revenue",
      value: "$48,352",
      change: "+23.1%",
      isPositive: true,
      icon: DollarSign,
      color: "text-purple-600",
    },
  ];

  const recentOrders = [
    {
      id: "#ORD-001",
      customer: "John Doe",
      amount: "$245.00",
      status: "Completed",
      date: "2 hours ago",
    },
    {
      id: "#ORD-002",
      customer: "Sarah Smith",
      amount: "$189.50",
      status: "Processing",
      date: "4 hours ago",
    },
    {
      id: "#ORD-003",
      customer: "Mike Johnson",
      amount: "$432.00",
      status: "Completed",
      date: "6 hours ago",
    },
    {
      id: "#ORD-004",
      customer: "Emma Wilson",
      amount: "$156.75",
      status: "Pending",
      date: "8 hours ago",
    },
    {
      id: "#ORD-005",
      customer: "David Brown",
      amount: "$298.20",
      status: "Completed",
      date: "12 hours ago",
    },
  ];

  const topProducts = [
    { name: "Wireless Headphones", sales: 234, revenue: "$12,450" },
    { name: "Smart Watch", sales: 189, revenue: "$9,876" },
    { name: "Laptop Stand", sales: 156, revenue: "$4,680" },
    { name: "USB-C Cable", sales: 145, revenue: "$2,175" },
  ];

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500 mt-1">
          Welcome back! Here's what's happening with your store today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-3 flex-1">
                  <p className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <div className="flex items-center gap-1">
                    {stat.isPositive ? (
                      <ArrowUpRight className="w-4 h-4 text-green-600" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-red-600" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        stat.isPositive ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500">vs last month</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Orders & Top Products */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Orders */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentOrders.map((order, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{order.id}</p>
                  <p className="text-sm text-gray-500">{order.customer}</p>
                </div>
                <div className="text-right mr-4">
                  <p className="font-semibold text-gray-900">{order.amount}</p>
                  <p className="text-xs text-gray-500">{order.date}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    order.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : order.status === "Processing"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Top Products</h2>
            <TrendingUp className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {product.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {product.sales} sales
                    </p>
                  </div>
                </div>
                <p className="font-bold text-gray-900">{product.revenue}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sales Chart Placeholder */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Sales Overview</h2>
            <p className="text-sm text-gray-500 mt-1">Monthly revenue trend</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              Month
            </button>
            <button className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg">
              Year
            </button>
          </div>
        </div>
        <div className="h-64 flex items-end justify-between gap-2">
          {[40, 65, 45, 80, 55, 70, 60, 85, 75, 90, 68, 95].map(
            (height, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col items-center gap-2"
              >
                <div
                  className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg hover:from-blue-700 hover:to-blue-500 transition-all cursor-pointer"
                  style={{ height: `${height}%` }}
                ></div>
                <span className="text-xs text-gray-500 font-medium">
                  {
                    [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ][index]
                  }
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Overview;
