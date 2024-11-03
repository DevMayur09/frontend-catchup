const UserCard = ({ user }) => {
  const { _id, firstName, lastName, photoUrl, gender, age, about, hobbies } = user;

  const hanleInterested = async () => {
    try {
    } catch (error) {}
  };
  const handleIgnore = async () => {};

  return (
    <div className="card bg-base-200 w-96 shadow-xl mx-auto my-10">
      <figure>
        <img
          className="my-5"
          width={"250px"}
          src={photoUrl} // Provide a fallback image
          alt={`${firstName} ${lastName}`} // More descriptive alt text
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{`${firstName} ${lastName}`}</h2>
        <small>
          {age}, {gender === "male" ? "M" : "F"}
        </small>
        <p>{about || "No information available."}</p>

        <div className="card-actions justify-center my-2">
          <button className="btn btn-secondary" onClick={handleIgnore}>
            Ignore
          </button>
          <button className="btn btn-primary" onClick={hanleInterested}>
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
