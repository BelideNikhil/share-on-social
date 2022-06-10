import { v4 as uuid } from "uuid";

import {
    FacebookShareButton,
    LinkedinShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";
import {
    FacebookIcon,
    LinkedinIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";

export const obj = {
    linkedIn: {
        id: uuid(),
        isSelected: true,
        media: [LinkedinShareButton, LinkedinIcon],
        customIconUrl: "https://icon-library.com/images/linked-in-icon/linked-in-icon-2.jpg",
    },
    twitter: {
        id: uuid(),
        isSelected: true,
        media: [TwitterShareButton, TwitterIcon],
        customIconUrl:
            "https://static.vecteezy.com/system/resources/previews/002/534/045/original/social-media-twitter-logo-blue-isolated-free-vector.jpg",
    },
    facebook: {
        id: uuid(),
        isSelected: true,
        media: [FacebookShareButton, FacebookIcon],
        customIconUrl:
            "https://icons-for-free.com/download-icon-facebook+logo+logo+website+icon-1320190502625926346_512.png",
    },
    whatapp: {
        id: uuid(),
        isSelected: true,
        media: [WhatsappShareButton, WhatsappIcon],
    },
    telegram: {
        id: uuid(),
        isSelected: false,
        media: [TelegramShareButton, TelegramIcon],
    },
    reddit: {
        id: uuid(),
        isSelected: false,
        media: [RedditShareButton, RedditIcon],
    },
    pocket: {
        id: uuid(),
        isSelected: false,
        media: [PocketShareButton, PocketIcon],
    },
};
