import React from 'react';
import { BsBook, BsPeopleFill, BsClipboardCheck, BsFillBellFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

function Home() {
  const data = [
    { name: 'Week 1', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Week 2', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Week 3', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Week 4', uv: 2780, pv: 3908, amt: 2000 },
  ];

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>
      
      <div className='welcome-message'>
        <h2>Welcome back, Himanshu!</h2>
        {/* <p>Here is your learning progress and statistics</p> */}
      </div>

      <div className='courses-container'>
        <div className='course-card'>
          <div className='course-title'>Course 1</div>
          <div className='progress-container'>
            <div className='progress-bar' style={{ width: '70%' }}></div>
          </div>
          <div className='progress-text'>70% Complete</div>
        </div>
        <div className='course-card'>
          <div className='course-title'>Course 2</div>
          <div className='progress-container'>
            <div className='progress-bar' style={{ width: '45%' }}></div>
          </div>
          <div className='progress-text'>45% Complete</div>
        </div>
        <div className='course-card'>
          <div className='course-title'>Course 3</div>
          <div className='progress-container'>
            <div className='progress-bar' style={{ width: '30%' }}></div>
          </div>
          <div className='progress-text'>30% Complete</div>
        </div>
        <div className='course-card'>
          <div className='course-title'>Course 4</div>
          <div className='progress-container'>
            <div className='progress-bar' style={{ width: '85%' }}></div>
          </div>
          <div className='progress-text'>85% Complete</div>
        </div>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>COURSES</h3>
            <BsBook className='card_icon'/>
          </div>
          <h1>10+</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>ACTIVE STUDENTS</h3>
            <BsPeopleFill className='card_icon'/>
          </div>
          <h1>120+</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>COMPLETED LESSONS</h3>
            <BsClipboardCheck className='card_icon'/>
          </div>
          <h1>50</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>ALERTS</h3>
            <BsFillBellFill className='card_icon'/>
          </div>
          <h1>5</h1>
        </div>
      </div>

      <div className='charts'>
        <div className='chart-container'>
          <h4>Your Monthly Learning Report</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className='chart-container'>
          <h4>Your Weekly Test Reports</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}

export default Home;
