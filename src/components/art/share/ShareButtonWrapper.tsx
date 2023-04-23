import { chooseShareButton } from "./ShareButtonHelpers";

interface ShareButtonWrapperProps {
  socialName: string;
  shareUrl: string;
}

const ShareButtonWrapper = (props: ShareButtonWrapperProps) => {
  const { socialName, shareUrl } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
      {chooseShareButton(socialName, shareUrl)}
      <span>{socialName}</span>
    </div>
  );
};

export default ShareButtonWrapper;
