import ProfileData from "./ProfileData.tsx";
import UpdateUser from "./UpdateUser.tsx";

const Index = () => {

    const handleClickLogout = () => {
        // TODO: Implement logout functionality
        alert("Logout successfully")
    }

    return (
        <div>
            <ProfileData />
            <button onClick={handleClickLogout}>Logout</button>
            <UpdateUser />
        </div>
    );
};

export default Index;