import React from "react";

const Ipogmp = () => {
  return (
    <div className="min-h-screen bg-black p-8">
      <h1 className="text-3xl font-bold text-center text-white mb-8">IPO GMP</h1>
      <p className="text-center text-purple-300 mb-8">Grey market premium updates.</p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-purple-800 text-white rounded-md shadow-md">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-purple-700">IPO Name</th>
              <th className="px-4 py-2 border border-purple-700">Price</th>
              <th className="px-4 py-2 border border-purple-700">GMP(%)</th>
              <th className="px-4 py-2 border border-purple-700">IPO Size</th>
              <th className="px-4 py-2 border border-purple-700">Open Date</th>
              <th className="px-4 py-2 border border-purple-700">Closing Date</th>
              <th className="px-4 py-2 border border-purple-700">Listing Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-purple-700">Sample IPO 1</td>
              <td className="px-4 py-2 border border-purple-700">$100</td>
              <td className="px-4 py-2 border border-purple-700">10%</td>
              <td className="px-4 py-2 border border-purple-700">$1B</td>
              <td className="px-4 py-2 border border-purple-700">2024-07-01</td>
              <td className="px-4 py-2 border border-purple-700">2024-07-05</td>
              <td className="px-4 py-2 border border-purple-700">2024-07-10</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-purple-700">Sample IPO 2</td>
              <td className="px-4 py-2 border border-purple-700">$150</td>
              <td className="px-4 py-2 border border-purple-700">15%</td>
              <td className="px-4 py-2 border border-purple-700">$500M</td>
              <td className="px-4 py-2 border border-purple-700">2024-07-11</td>
              <td className="px-4 py-2 border border-purple-700">2024-07-15</td>
              <td className="px-4 py-2 border border-purple-700">2024-07-20</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-purple-700">Sample IPO 3</td>
              <td className="px-4 py-2 border border-purple-700">$200</td>
              <td className="px-4 py-2 border border-purple-700">20%</td>
              <td className="px-4 py-2 border border-purple-700">$2B</td>
              <td className="px-4 py-2 border border-purple-700">2024-07-21</td>
              <td className="px-4 py-2 border border-purple-700">2024-07-25</td>
              <td className="px-4 py-2 border border-purple-700">2024-07-30</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-purple-700">Sample IPO 4</td>
              <td className="px-4 py-2 border border-purple-700">$250</td>
              <td className="px-4 py-2 border border-purple-700">25%</td>
              <td className="px-4 py-2 border border-purple-700">$750M</td>
              <td className="px-4 py-2 border border-purple-700">2024-08-01</td>
              <td className="px-4 py-2 border border-purple-700">2024-08-05</td>
              <td className="px-4 py-2 border border-purple-700">2024-08-10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ipogmp;
