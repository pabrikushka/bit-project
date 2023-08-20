import { SignupResponse, SignupResult, SignupStatus } from "./types";
import jsonp from "jsonp";

const emailHost =
  "https://kisslabs.us4.list-manage.com/subscribe/post-json?u=c1a5e982447e163b13590c489&amp;id=2c95acdcdd";

const startSignup = (email: string, callback: any) => {
  const url = `${emailHost}&email=${encodeURIComponent(email)}`;
  jsonp(url, { param: "c" }, (err, data: SignupResponse) => {
    const result: SignupResult = {
      status: SignupStatus.error,
      message: null,
    };
    if (data.msg.includes("already subscribed")) {
      result.status = SignupStatus.duplicate;
      result.message = data.msg;
      console.warn(data.msg);
    } else if (err) {
      console.error(err);
    } else if (data.result !== "success") {
      console.error(data.msg);
      result.message = data.msg;
    } else {
      result.status = SignupStatus.success;
    }
    callback(result);
  });
};

export { startSignup };
