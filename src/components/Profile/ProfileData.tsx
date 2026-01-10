import {useAppSelector} from "../../app/hooks.ts";
import {useFetchUserQuery} from "../../features/api/accountApi.ts";

const ProfileData = () => {
    const token = useAppSelector(state => state.token);
    const {data: user, isLoading} = useFetchUserQuery(token);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (!user) {
        return <div>No data available</div>;
    }
    return (
        <>
            <p>First name: {user.firstName}</p>
            <p>Last name: {user.lastName}</p>
            <p>Login: {user.login}</p>
            <ul>
                {user.roles.map(role => <li key={role}>{role}</li>)}
            </ul>
        </>
    )
}

export default ProfileData;