import ProfileData from "./ProfileData.tsx";
import UpdateUser from "./UpdateUser.tsx";
import {useAppDispatch} from "../../app/hooks.ts";
import {clearToken} from "../../features/token/tokenSlice.tsx";
import {clearUser} from "../../features/user/userSlice.tsx";

const Index = () => {

    const dispatch = useAppDispatch();

    const handleClickLogout = () => {
        dispatch(clearToken())
        dispatch(clearUser())
        localStorage.removeItem("token")
        localStorage.removeItem("userData");
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