import {useState} from "react";

interface EditProfileProps {
    close: () => void;
}

const EditProfile = ({close}: EditProfileProps) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleClickSave = () => {
        // TODO: Implement edit profile save logic
        alert('Profile updated');
        close()
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
            <button onClick={close}>Cancel</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    );
};

export default EditProfile;