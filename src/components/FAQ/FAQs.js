import React from "react";
import ReactDOM from "react-dom";
import "./FAQs.scss";
class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
    };
  }

  componentDidMount() {
    window.setTimeout(() => {
      const el = ReactDOM.findDOMNode(this);
      const height = el.querySelector(".panel__inner").scrollHeight;
      this.setState({
        height,
      });
    }, 333);
  }

  render() {
    const { label, content, activeTab, index, activateTab } = this.props;
    const { height } = this.state;
    const isActive = activeTab === index;
    const innerStyle = {
      height: `${isActive ? height : 0}px`,
    };

    return (
      <div className="panel" role="tabpanel" aria-expanded={isActive}>
        <button className="panel__label" role="tab" onClick={activateTab}>
          {label}
        </button>
        <div
          className="panel__inner"
          style={innerStyle}
          aria-hidden={!isActive}
        >
          <p className="panel__content">{content}</p>
        </div>
      </div>
    );
  }
}

const panels = [
  {
    label: "How will the vault get funds?",
    content:
      "Users will stake ETH into vaults to earn rewards. Staked ETH will be used to provide funds for BNPL.",
  },
  {
    label: "What happens to my down payment?",
    content:
      "Down Payment + Borrowed funds from the vault are directly used to buy the NFT from the Seller. The seller might be on the GearFi marketplace or on any other marketplace.",
  },
  {
    label: "As a buyer, I don't see the NFT purchased in my wallet, why?",
    content:
      "The NFT is reserved in the escrow contract. You can claim the NFT after successful repayment.",
  },
  {
    label: "What rewards do stakers get?",
    content:
      "1.Stakers earn through the interest paid by the buyers using BNPL. 2.Stakers will be allocated GearFi Tokens. 3.Stakers will earn from the liquidation of defaulted NFTs.",
  },
  {
    label: "How are the Terms decided (Down payment + Interest)?",
    content:
      "Down Payment and Interest rates are decided by GearFi’s algorithms which measure NFTs.",
  },
  {
    label: "What happens in the case of default? ",
    content:
      "In case of default, NFTs will be liquidated by the Vault and the down payment will be forfeited.",
  },
  {
    label:
      "What happens when the NFT price goes down? (Risks on the Buyer and Vault staker's end)",
    content:
      "When NFT’s price falls, the health factor falls as well. After the health factor crosses the threshold value, NFT will be automatically liquidated. Buyer can use the margin trading protocol to sell the NFT early (before it crosses the threshold) to mitigate the loss.",
  },
  {
    label: "What exactly is Margin Trading?",
    content:
      "Even while the loan is still active and NFT is in the vault, using our Margin Trading Protocol users can trade their NFTs for a higher price and get a profitable exit. Traders can now flip NFTs by just paying the down payment.",
  },
];
class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
    };

    this.activateTab = this.activateTab.bind(this);
  }

  activateTab(index) {
    this.setState((prev) => ({
      activeTab: prev.activeTab === index ? -1 : index,
    }));
  }

  render() {
    // const { panels } = this.props;
    const { activeTab } = this.state;
    return (
      <div className="faqs-body">
        <h2
          className="h2 m-5"
          style={{
            fontFamily: "Inter, Arial",
            fontWeight: "500",
            letterSpacing: "0.2rem",
            fontSize: "2rem",
          }}
        >
          FAQs
        </h2>
        <div className="accordion" role="tablist">
          {panels.map((panel, index) => {
            return (
              <Panel
                key={index}
                activeTab={activeTab}
                index={index}
                {...panel}
                activateTab={this.activateTab.bind(null, index)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Accordion;
