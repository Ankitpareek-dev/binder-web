function UserCard({ user }) {
  if (!user) return;
  const { firstName, lastName, bio, age, gender } = user;
  //   console.log(user);
  return (
    <div>
      <div className="card bg-base-300 w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {firstName} {lastName}
          </h2>
          <a>{age}</a>
          <a>{gender}</a>
          <p>{bio}</p>
          <div className="card-actions justify-center my-4">
            <button className="btn btn-secondary">Interested</button>
            <button className="btn btn-primary">Ignore</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
