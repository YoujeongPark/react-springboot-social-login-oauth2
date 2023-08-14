import { useLocation } from "react-router-dom";
import GitHubLogo from "../assets/github.svg";
import GoogleLogo from "../assets/google.svg";
import { getGitHubUrl } from "../utils/getGithubUrl";
import { getGoogleUrl } from "../utils/getGoogleUrl";

const LoginPage = () => {
  const location = useLocation();
  const from = ((location.state as any)?.from.pathname as string) || "/profile";

  return (
    <section className="bg-ct-blue-600 min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12 h-full flex justify-center items-center">
        <div className="md:w-8/12 lg:w-5/12 bg-white px-8 py-10">
          <a
            className="px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
            style={{ backgroundColor: "#3b5998" }}
            href={getGoogleUrl(from)}
            role="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <img
              className="pr-2"
              src={GoogleLogo}
              alt=""
              style={{ height: "2rem" }}
            />
            Continue with Google
          </a>
          <a
            className="px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
            style={{ backgroundColor: "#55acee" }}
            href={getGitHubUrl(from)}
            role="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <img
              className="pr-2"
              src={GitHubLogo}
              alt=""
              style={{ height: "2.2rem" }}
            />
            Continue with GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;