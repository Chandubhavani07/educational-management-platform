import React, { useEffect, useState } from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import '../style.css';

const AdminGraphs = () => {
    const [userData, setUserData] = useState([]);
    const [roleCounts, setRoleCounts] = useState([]);

    useEffect(() => {
        fetch('https://jxg2714.uta.cloud/backend/admin.php')
            .then((response) => response.json())
            .then((data) => {
                setUserData(data.users);
                setRoleCounts(data.roleCounts.map(roleCount => ({
                    ...roleCount,
                    total: parseInt(roleCount.total, 10) // Parse total as a number
                })));
            })
            .catch((error) => {
                console.error('Error fetching data from the API:', error);
            });
    }, []);

    const renderRoleCountsChart = () => {
        return (
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={roleCounts}>
                    <XAxis dataKey="role" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        );
    };

    const renderUserRolePieChart = () => {
        const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#FF00FF'];

        return (
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={roleCounts}
                        dataKey="total"
                        nameKey="role"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label={(entry) => entry.role}
                    >
                        {roleCounts.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        );
    };

    return (
        <div>
            <header>
                {/* Include your navigation menu here */}
            </header>

            <main>
                <section className="admin-section">
                    <h2>Admin Graphs</h2>
                    <div className="admin-graphs">
                        <div className="admin-graph">
                            <h3>Role Counts</h3>
                            {renderRoleCountsChart()}
                        </div>
                        <div className="admin-graph">
                            <h3>User Role Distribution</h3>
                            {renderUserRolePieChart()}
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <p>© 2023 Educational Management Platform</p>
            </footer>
        </div>
    );
};

export default AdminGraphs;
