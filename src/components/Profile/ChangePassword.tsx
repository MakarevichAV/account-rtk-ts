import {useState} from "react";

interface ChangePasswordProps {
    close: () => void;
}


const ChangePassword = ({close}: ChangePasswordProps) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleClickSave = () => {
        if (newPassword === confirmPassword) {
            // TODO: Implement change password save logic
            alert('Profile changed');
            close();
        } else {
            alert('Password do not match!');
        }
    }

    const handleClickClear = () => {
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
    }
    return (
        <>
            <label>
                Old Password:
                <input
                    value={oldPassword}
                    type="password"
                    onChange={(e) => setOldPassword(e.target.value)}
                />
            </label>
            <label>
                New Password:
                <input
                    value={newPassword}
                    type="password"
                    onChange={(e) => setNewPassword(e.target.value)}
                />
            </label>
            <label>
                Confirm Password:
                <input
                    value={confirmPassword}
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </label>
            <button onClick={handleClickSave}>Save</button>
            <button onClick={close}>Cancel</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    );
};

export default ChangePassword;