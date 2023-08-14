export const getGoogleUrl = (from: string) => {
    //const rootUrl = `https://accounts.google.com/o/oauth2/v2/auth`;
    const rootUrl = `http://localhost:8000/oauth2/authorization/google`;
  
    const options = {
      // redirect_uri: import.meta.env.VITE_GOOGLE_OA UTH_REDIRECT as string,
      // client_id: import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID as string,
      access_type: "offline",
      response_type: "code",
      prompt: "consent",
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ].join(" "),
      state: from,
    };
  
    const qs = new URLSearchParams(options);
  
    return `${rootUrl}?${qs.toString()}`;
  };