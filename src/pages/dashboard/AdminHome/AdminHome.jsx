/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const AdminHome = () => {
    const axiosSecure = useAxiosSecure()
    const {data: stats = []} = useQuery({
        queryKey: ['admin-state'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/admin-state')
            return res.data;
        }
    })

    const {data: chartData = []} = useQuery({
        queryKey: ['order-state'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/order-state')
            return res.data
        }
    })

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  
    
    const getPath = (x, y, width, height) => {
      return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
      Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };

      //! for pieChart
      const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );

  }
    // piechartData
    const piechartData = chartData.map( data => {
        return {name: data.category, value: data.revenue}
    })    
    return ( 
        <div>
            <h3 className="text-3xl font-semibold">Hi, Welcome Back</h3>
            <div className="grid grid-cols-4 gap-5 px-10 mt-5">
                <div >
                    <h2>total Revineue <br /> $ {stats?.revenue}</h2>
                </div>
                <div >
                    <h2>Customar <br /> {stats?.user}</h2>
                </div>
                <div >
                    <h2>total Products <br /> {stats?.menuItems}</h2>
                </div>
                <div >
                    <h2>total order <br /> {stats?.orders}</h2>
                </div>
            </div>

          <div className="w-full flex item-center mt-10">

            <div className="w-1/2">
            <BarChart
      width={500}
      height={300}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 6]} />
        ))}
      </Bar>
      <Legend/>
    </BarChart>
            </div>

            <div className="w-1/2">
        <PieChart width={400} height={400}>
          <Pie
            data={piechartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {piechartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend/>
        </PieChart>
            </div>

          </div>

        </div>
     );
}

export default AdminHome;