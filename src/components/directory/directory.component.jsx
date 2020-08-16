import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "Purse",
          imageUrl: "https://i.ibb.co/Jq1MpN4/Whats-App-Image-2020-07-31-at-19-12-30.jpg",
          id: 1,
          linkUrl: "shop/purses"
        },
        {
          title: "Earrings",
          imageUrl: "https://i.ibb.co/M8j7083/Whats-App-Image-2020-08-09-at-16-14-24.jpg",
          id: 2,
          linkUrl: "shop/earrings"
        },
        {
          title: "Necklaces",
          imageUrl: "https://i.ibb.co/4T9tGTb/Whats-App-Image-2020-08-09-at-17-15-51.jpg",
          id: 3,
          linkUrl: "shop/necklaces"
        },
        {
          title: "Envelopes",
          imageUrl: "https://i.ibb.co/HCTWNhP/Whats-App-Image-2020-08-09-at-16-28-49.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/envelopes"
        },
        {
          title: "Miscellanious",
          imageUrl: "https://i.ibb.co/kSHY4ty/Whats-App-Image-2020-08-09-at-15-42-47.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/misc"
        }
      ]
    };
  }

  render () {
      return (
        <div className='directory-menu'>
            {
                this.state.sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps}/>
                ))
            }
        </div>
      )
  }
}

export default Directory;
