const AdminHomeSection = () => {
  return (
    <div className="flex flex-col space-y-6 justify-center items-center">
      <h1 className="text-4xl font-bold text-center text-lime-950">
        Tammy <br />
        <span className="text-2xl">
          GenMate B - Spicy Cobra <br />
          32
        </span>
      </h1>
      <img
        src="https://ca.slack-edge.com/T08AK72NJM6-U08B3JV38GZ-c0e6710cbefe-512"
        className="rounded-full w-40 h-40 border-4 border-lime-900 shadow-xl"
      ></img>
      <p className="w-[60%] text-justify">
        I'm now trying to be a software developer with a design mindset and a
        passion for HCI. Driven by curiosity, I explore technology through DIY
        projects and appreciate language and culture. A stray animal adopter, a
        Civilization game addict, with CIV7 still on the backlog.
      </p>
    </div>
  );
};

export default AdminHomeSection;
