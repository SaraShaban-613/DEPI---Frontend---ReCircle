import RoleSelector from './Dashboard/RoleSelector';
import VolunteerStatCard from './Dashboard/VolunteerStatCard';
import PickupRequests from './Dashboard/PickupRequests';

function VolunteerDashboard() {
    return (
        <main className="container my-5 text-center">
            {/* <RoleSelector /> */}
            <VolunteerStatCard />
            <PickupRequests />
        </main>
    );
}

export default VolunteerDashboard;