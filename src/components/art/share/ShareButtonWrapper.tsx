import { chooseShareButton } from "./ShareButtonHelpers";

interface ShareButtonWrapperProps {
  socialName: string;
  shareUrl: string;
}

const ShareButtonWrapper = (props: ShareButtonWrapperProps) => {
  const { socialName, shareUrl } = props;
  return (
    <div className="share-grid-item">
      {chooseShareButton(socialName, shareUrl)}
    </div>
  );
};

export default ShareButtonWrapper;
