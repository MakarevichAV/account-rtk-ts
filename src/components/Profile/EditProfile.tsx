import {useState} from "react";

const EditProfile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleClickSave = () => {
        // TODO: Implement edit profile save logic
        alert('Profile updated');
    }

    const handleClickCancel = () => {
        // TODO: Implement edit profile cancel logic
        alert('Edit Profile closed');
    }

    const handleClickClear  = () => {
        setFirstName('');
        setLastName('');
    }

    return (
        <>
            <label>
                First Name:
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <label>
                Last Name:
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <button onClick={handleClickSave}>Save</button>
            <button onClick={handleClickCancel}>Cancel</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    );
};

export default EditProfile;