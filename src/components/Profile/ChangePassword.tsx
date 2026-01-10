import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {useChangePasswordMutation, useFetchUserQuery} from "../../features/api/accountApi.ts";
import {createToken} from "../../utils/constants.ts";
import {setToken} from "../../features/token/tokenSlice.ts";

type ChangePasswordProps = {
    close: () => void;
}

const ChangePassword = ({close}: ChangePasswordProps) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useAppDispatch();

    const token = useAppSelector(state => state.token);
    const [changePassword] = useChangePasswordMutation();
    const {data: userData} = useFetchUserQuery(token);

    const handleClickSave = async() => {

        if (newPassword === confirmPassword) {
            const token = createToken(userData!.login , oldPassword);
            try {
                const {error} = await changePassword({token, newPassword});
                if (error) {
                    console.error('update error', error);
                } else {
                    dispatch(setToken(createToken(userData!.login, newPassword)));
                }
            } catch (e) {
                console.log('unknown error', e);
            }
            close();
        } else {
            alert('Passwords do not match!');
        }

    }

    const handleClickClear = () => {
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
    }

    return (
        <>
            <label>Old password:
                <input
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    type="password"/>
            </label>
            <label>New password:
                <input
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    type="password"/>
            </label>
            <label>Confirm password:
                <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"/>
            </label>
            <button onClick={handleClickSave}>Save and close</button>
            <button onClick={close}>Close without Save</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    )
}

export default ChangePassword;