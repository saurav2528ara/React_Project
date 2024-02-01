const User = ({name,email,phone,Address}) => {
    return (
        <div className="user-card">
        <h1>{name}</h1>
        <h2>{email}</h2>
        <h3>{phone}</h3>
        <h4>{Address}</h4>
        </div>
    );
};
export default User;