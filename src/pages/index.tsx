import { SEO } from "../components/SEO";
const Home = () => {
  return (
    <>
      <SEO
        title="Home"
        siteTitle="deepkush97"
        description="Deepanshu Kushwaha Portfolio"
        image="./logo.png"
        siteUrl="https://deepkush97.github.io/"
      />{" "}
      <div
        style={{ backgroundImage: 'url("./backdrop.svg")' }}
        className="h-100 w-100 p-sm-5 p-3 d-flex align-items-start flex-column"
      >
        <div className="display-3">Hi there, I'm</div>
        <div className="display-1">Deepanshu Kushwaha</div>
        <div className="display-5 mt-2 mt-sm-1">I'm a Software Engineer</div>
        <div className="display-6 mt-3 mt-sm-2 ">
          My world revolves around NodeJS and React.
        </div>
        <div className="display-6">
          I have an experience in NodeJS, React and .NET Core, ASP.NET Core and
          many more things.
        </div>
      </div>
    </>
  );
};

export default Home;
