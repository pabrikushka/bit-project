import { ReactElement, ReactNode } from "react";
import {
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  RedditShareButton,
  TwitterIcon,
  FacebookIcon,
  WhatsappIcon,
  RedditIcon,
  EmailShareButton,
  EmailIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";

const iconSize = 76;

const chooseShareButton = (socialName: string, shareUrl: string): ReactNode | ReactElement => {
  switch (socialName) {
    case "Twitter":
      return (
        <TwitterShareButton url={shareUrl}>
          <TwitterIcon size={iconSize} round={true} />
        </TwitterShareButton>
      );
    case "Whatsapp":
      return (
        <WhatsappShareButton url={shareUrl}>
          <WhatsappIcon size={iconSize} round={true} />
        </WhatsappShareButton>
      );
    case "Facebook":
      return (
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon size={iconSize} round={true} />
        </FacebookShareButton>
      );
    case "Reddit":
      return (
        <RedditShareButton url={shareUrl}>
          <RedditIcon size={iconSize} round={true} />
        </RedditShareButton>
      );
    case "Email":
      return (
        <EmailShareButton url={shareUrl}>
          <EmailIcon size={iconSize} round={true} />
        </EmailShareButton>
      );
    case "Telegram":
      return (
        <TelegramShareButton url={shareUrl}>
          <TelegramIcon size={iconSize} round={true} />
        </TelegramShareButton>
      );
    default:
      return <></>;
  }
};

export { chooseShareButton };
