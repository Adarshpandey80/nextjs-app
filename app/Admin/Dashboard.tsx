import React from 'react'

function Dashboard() {
  const userActivity = [
    { id: 1, name: 'User 1', activity: 'Logged in' },
    { id: 2, name: 'User 2', activity: 'Viewed Dashboard' },
    { id: 3, name: 'User 3', activity: 'Updated Profile' },
    
  ];  
  return (
  <>
    <div className='w-full h-screen bg-blue-950 text-white flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold mb-4'>Admin Dashboard</h1>
        <p className='text-lg'>Welcome to the Admin Dashboard. Here you can manage your application.</p>

        <div className='mt-8 w-3/4'>
            <h2 className='text-2xl font-semibold mb-4'>User Activity</h2>
            <ul className='space-y-2'>
                {userActivity.map((user) => (
                    <li key={user.id} className='bg-blue-800 p-4 rounded-lg shadow-md'>
                        <span className='font-semibold'>{user.name}</span> - {user.activity}
                    </li>
                ))}
            </ul>
        </div>
    </div>
  

  </>
  );
};

export default Dashboard;