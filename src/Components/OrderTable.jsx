import React from "react";

const OrderTable = () => {
  const data = [
    {
      customer: "John Doe",
      orderNo: "4512345",
      amount: "$150.00",
      status: "Delivered",
    },
    {
      customer: "Jane Smith",
      orderNo: "3512346",
      amount: "$200.00",
      status: "Cancelled",
    },
    {
      customer: "Alice Johnson",
      orderNo: "6712347",
      amount: "$120.00",
      status: "Delivered",
    },
    {
      customer: "Bob Brown",
      orderNo: "9312348",
      amount: "$300.00",
      status: "Cancelled",
    },
    {
      customer: "Charlie Davis",
      orderNo: "1312349",
      amount: "$450.00",
      status: "Delivered",
    },
  ];
  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-800 shadow-sm rounded-xl w-full ">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-bold text-2xl text-gray-800 dark:text-gray-100">
          Recent Orders
        </h2>
      </header>
      <div className="p-3">
        <div className="overflow-x-hidden">
          <table className="table-auto w-full dark:text-gray-300">
            <thead className="text-xs  text-gray-400 dark:text-white bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Customer</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Order No</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Amount</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Status</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm font-normal divide-y divide-gray-100 dark:divide-gray-700/60">
              {data.map((row, index) => (
                <tr key={index}>
                  <td className="p-2">
                    <div className="text-gray-800 dark:text-gray-100">
                      {row.customer}
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">{row.orderNo}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">{row.amount}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          row.status === "Delivered"
                            ? "bg-green-100 text-green-900"
                            : "bg-red-100 text-red-900"
                        }`}
                      >
                        {row.status}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
