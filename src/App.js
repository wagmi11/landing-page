import React from "react";
import "./App.css";
import Logo from "./assets/wgmi_LOGO.svg";
import Icon from "./assets/icon.svg";
import Close from "./assets/close.svg";
import Menu from "./assets/menu.svg";
import WGMIhome from "./assets/images/wgmi-home.png";
import Apple from "./assets/apple.svg";
import IOSTrade from "./assets/images/ios-trade.png";
import IOSFilled from "./assets/images/ios-filled.png";
import IOSNotification from "./assets/images/ios-notifications.png";
import IOSWallet from "./assets/images/ios-wallets.png";
import IOSProfile from "./assets/images/ios-profile.png";
import IOSCompetition from "./assets/images/ios-competition.png";
import Telegram from "./assets/telegram.svg";
import Twitter from "./assets/twitter.svg";
import Discord from "./assets/discord.svg";
import Youtube from "./assets/youtube.svg";
import Reddit from "./assets/reddit.svg";
import LinkedIn from "./assets/linkedin.svg";
import Wechat from "./assets/wechat.svg";
import WGMIGIF from "./assets/video/WGMI_GIF.gif";
import Mockup from "./assets/images/Mockup.png";
import TonLogo from "./assets/ton_symbol.svg";

const App = () => {
  return (
    <div id="__next">
      <div className="Page__Background-bkvm2a-5 jjKDxp">
        <div className="Header__Container-vbeldz-19 jYpTSR">
          <div className="Header__LogoAndLanguageSelector-vbeldz-2 iapQks">
            <a href="/" className="Header__StyledIcon-vbeldz-3 bqPIwS">
              <img
                width="150"
                src={Logo}
                className="Header__Desktop-vbeldz-0 kJENb"
                alt=""
              />
              <div className="Header__Mobile-vbeldz-1 bhcNRs">
                <img
                  width="120"
                  src={Logo}
                  alt=""
                  className="Header__Image-vbeldz-5 Header___StyledImage-vbeldz-9 dZHMiD jFUKIu"
                />
                <img
                  width="120"
                  src={Logo}
                  alt=""
                  className="Header__Image-vbeldz-5 Header___StyledImage2-vbeldz-8 dZHMiD"
                />
              </div>
            </a>
          </div>
          {/* <div className="Header__MenuToggle-vbeldz-10 dftUlZ">
            <img
              src={Close}
              alt=""
              className="Header__Image-vbeldz-5 Header___StyledImage3-vbeldz-7 dZHMiD dtidhn"
            />
            <img
              src={Menu}
              alt=""
              className="Header__Image-vbeldz-5 Header___StyledImage4-vbeldz-6 dZHMiD dhTUxZ"
            />
          </div> */}
          {/*}
          <div className="Header__MobileNav-vbeldz-17 ktFGgt">
            <nav className="Header__Navigation-vbeldz-4 fJieYI">
              <button tabIndex="0" className="Menu__StyledMenu-zw4hm3-2 iCmekd">
                <span className="Menu__StyledMenuTitle-zw4hm3-5 jvHKhU">
                  <p className="Menu__MenuTitle-zw4hm3-11 gHEKJG">About</p>
                </span>
              </button>
              <button tabIndex="0" className="Menu__StyledMenu-zw4hm3-2 iCmekd">
                <span className="Menu__StyledMenuTitle-zw4hm3-5 jvHKhU">
                  <p className="Menu__MenuTitle-zw4hm3-11 gHEKJG">Company</p>
                </span>
              </button>
              <button tabIndex="0" className="Menu__StyledMenu-zw4hm3-2 iCmekd">
                <span className="Menu__StyledMenuTitle-zw4hm3-5 jvHKhU">
                  <p className="Menu__MenuTitle-zw4hm3-11 gHEKJG">Products</p>
                </span>
              </button>
              <button tabIndex="0" className="Menu__StyledMenu-zw4hm3-2 iCmekd">
                <span className="Menu__StyledMenuTitle-zw4hm3-5 jvHKhU">
                  <p className="Menu__MenuTitle-zw4hm3-11 gHEKJG">Governance</p>
                </span>
              </button>
              <button tabIndex="0" className="Menu__StyledMenu-zw4hm3-2 iCmekd">
                <span className="Menu__StyledMenuTitle-zw4hm3-5 jvHKhU">
                  <p className="Menu__MenuTitle-zw4hm3-11 gHEKJG">Developers</p>
                </span>
              </button>
              <button tabIndex="0" className="Menu__StyledMenu-zw4hm3-2 iCmekd">
                <span className="Menu__StyledMenuTitle-zw4hm3-5 jvHKhU">
                  <p className="Menu__MenuTitle-zw4hm3-11 gHEKJG">Community</p>
                </span>
              </button>
              <div className="Header__TradeButtonWrapper-vbeldz-11 bFdFHj">
                <button className="Button-sc-6c6tfi-0 Header__TradeButton-vbeldz-12 gRviOS">
                  Trade
                </button>
              </div>
            </nav>
            <p className="Header__Message-vbeldz-18 irgbIz">
              Scroll to view more →
            </p>
            <div className="Header__TradeButtonWrapper-vbeldz-11 dByIVb">
              <button className="Button-sc-6c6tfi-0 Header__TradeButton-vbeldz-12 gRviOS">
                Trade
              </button>
            </div>
          </div>*/}
        </div>
        <div className="Page__Content-bkvm2a-0 fAMnyO">
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <main className="mobile__Container-yq44pr-0 gbbvCo">
            <section>
              <img src={Mockup} alt="WAGMI GIF" />

              <div>
                <p>
                  Introducing <b>WAGMI11</b>
                  <img src={Logo} alt="WAGMI11 logo" className="logo" />
                </p>
                <h2>Play, Predict & Win!</h2>
                <h3 style={{ display: "flex" }}>
                  Powered by{" "}
                  <img
                    src={TonLogo}
                    alt="TonLogo"
                    width={75}
                    height={75}
                    style={{ marginLeft: 8 }}
                  />
                </h3>
                <h3>
                  Discover the power of decentralized prediction and sports
                  fantasy platform via WAGMI11.
                </h3>

                <p className="buttons">
                  <a href="https://t.me/wagmi11">
                    <button className="Button-sc-6c6tfi-0 gRviOS">
                      <span className="mobile-only">Join Telegram</span>
                      <span className="not-mobile-only">Join Telegram</span>
                    </button>
                  </a>

                  <a href="https://discord.gg/EUKwQy4P96">
                    <button className="Button-sc-6c6tfi-0 lmqBTG">
                      <span className="mobile-only">Join Discord</span>
                      <span className="not-mobile-only">Join Discord</span>
                    </button>
                  </a>
                </p>
                <p>Coming soon early this year!</p>
              </div>
            </section>
            {/*
            <section className="card">
              <img className="align-top" src={IOSTrade} alt="" />
              <img className="align-bottom" src={IOSFilled} alt="" />
              <div>
                <h2>Precision-first</h2>
                <p>
                  With advanced order types and deep liquidity, you can trade
                  how you want.
                </p>
              </div>
            </section>
            <section className="card">
              <img className="align-top" src={IOSNotification} alt="" />
              <div>
                <h2>Tune into your trades</h2>
                <p>Get notified instantly about trades &amp; more.</p>
              </div>
            </section>
            <section className="card">
              <img className="align-bottom" src={IOSWallet} alt="" />
              <div>
                <h2>Bring your own wallet</h2>
                <p>Stay in control of your funds on Ethereum</p>
              </div>
            </section>
            <section className="card">
              <img className="align-top" src={IOSProfile} alt="" />
              <img className="align-bottom" src={IOSCompetition} alt="" />
              <div>
                <h2>Compete &amp; earn</h2>
                <p>
                  With Profiles and Trading Leagues, you can prove yourself as
                  the top trader.
                </p>
              </div>
            </section>
            <div id="video" className="mobile__VideoContainer-yq44pr-1 hPFVOF">
              <iframe
                src="https://www.youtube.com/embed/7BOA6cZdzHU?color=white&amp;modestbranding=1&amp;loop=1&amp;controls=0&amp;rel=0"
                title="Introducing the dYdX iOS App"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
              ></iframe>
            </div>*/}
          </main>
        </div>

        <div className="Footer__StyledFooter-s5pvwq-1 Footer___StyledStyledFooter-s5pvwq-2 cwqkbJ HCBBq">
          <div className="Footer__Container-s5pvwq-3 jPowfa">
            Join us:
            <a
              target={"_blank"}
              href="https://t.me/wagmi11"
              className="Footer__StyledLink-s5pvwq-0 ePtDxx"
              rel="noreferrer"
            >
              <img
                src={Telegram}
                width="24"
                height="24"
                className="Footer__StyledIcon-s5pvwq-4 dQDYqT"
                alt=""
              />
            </a>
            <a
              target={"_blank"}
              href="https://twitter.com/wagmi_11"
              className="Footer__StyledLink-s5pvwq-0 ePtDxx"
              rel="noreferrer"
            >
              <img
                src={Twitter}
                width="24"
                height="24"
                className="Footer__StyledIcon-s5pvwq-4 dQDYqT"
                alt=""
              />
            </a>
            <a
              href="https://discord.gg/EUKwQy4P96"
              className="Footer__StyledLink-s5pvwq-0 ePtDxx"
            >
              <img
                target={"_blank"}
                src={Discord}
                width="24"
                height="24"
                className="Footer__StyledIcon-s5pvwq-4 dQDYqT"
                alt=""
              />
            </a>
            {/*            
            <a
              href="https://www.youtube.com/c/dYdXprotocol"
              className="Footer__StyledLink-s5pvwq-0 ePtDxx"
            >
              <img
                src={Youtube}
                width="30"
                height="30"
                className="Footer__StyledIcon-s5pvwq-4 dQDYqT"
                alt=""
              />
            </a>
            <a
              href="https://www.reddit.com/r/dydxprotocol"
              className="Footer__StyledLink-s5pvwq-0 ePtDxx"
            >
              <img
                src={Reddit}
                width="24"
                height="24"
                className="Footer__StyledIcon-s5pvwq-4 dQDYqT"
                alt=""
              />
            </a>
            <a
              href="https://linkedin.com/company/dydx"
              className="Footer__StyledLink-s5pvwq-0 ePtDxx"
            >
              <img
                src={LinkedIn}
                width="24"
                height="24"
                className="Footer__StyledIcon-s5pvwq-4 dQDYqT"
                alt=""
              />
            </a>
            <img
              src={Wechat}
              width="30"
              height="25"
              className="Footer__StyledIcon-s5pvwq-4 dQDYqT"
              alt=""
          />*/}
          </div>
        </div>
        {/* 
        <div className="Sitemap__Container-uyke27-1 bivGZz">
          <span className="Sitemap__StyledMenuTitle-uyke27-5 ejFDfc">
            <div className="Sitemap__Section-uyke27-4 hSEIzQ">
              <p className="Sitemap__MenuTitle-uyke27-11 lNUsO"></p>
              <span className="Sitemap__StyledMenuItem-uyke27-6 dRVauW">
                <a
                  href="/blog"
                  className="Sitemap__StyledExternalLink-uyke27-7 gstBRU"
                >
                  <div className="Sitemap__ItemRow-uyke27-2 dyYQVc">
                    <div className="Sitemap__StyledTitle-uyke27-9 eweuze">
                      Blog
                    </div>
                  </div>
                  <p className="Sitemap__StyledDescription-uyke27-10 djYPAF">
                    Read the latest updates
                  </p>
                </a>
              </span>
              <span className="Sitemap__StyledMenuItem-uyke27-6 dRVauW">
                <a
                  href="/faq"
                  className="Sitemap__StyledExternalLink-uyke27-7 gstBRU"
                >
                  <div className="Sitemap__ItemRow-uyke27-2 dyYQVc">
                    <div className="Sitemap__StyledTitle-uyke27-9 eweuze">
                      FAQs
                    </div>
                  </div>
                  <p className="Sitemap__StyledDescription-uyke27-10 djYPAF">
                    Frequently asked questions
                  </p>
                </a>{" "}
              </span>
              <span className="Sitemap__StyledMenuItem-uyke27-6 dRVauW">
                <a
                  href="https://www.youtube.com/c/dYdXprotocol"
                  className="Sitemap__StyledExternalLink-uyke27-7 gstBRU"
                >
                  <div className="Sitemap__ItemRow-uyke27-2 dyYQVc">
                    <div className="Sitemap__StyledTitle-uyke27-9 eweuze">
                      Tutorials
                    </div>
                  </div>
                  <p className="Sitemap__StyledDescription-uyke27-10 djYPAF">
                    Watch others use dYdX
                  </p>
                </a>
              </span>
              <span className="Sitemap__StyledMenuItem-uyke27-6 dRVauW">
                <a
                  href="https://help.dydx.exchange/en/"
                  className="Sitemap__StyledExternalLink-uyke27-7 gstBRU"
                >
                  <div className="Sitemap__ItemRow-uyke27-2 dyYQVc">
                    <div className="Sitemap__StyledTitle-uyke27-9 eweuze">
                      Help Center
                    </div>
                  </div>
                  <p className="Sitemap__StyledDescription-uyke27-10 djYPAF">
                    Tips &amp; tricks for using dYdX
                  </p>
                </a>{" "}
              </span>
              <span className="Sitemap__StyledMenuItem-uyke27-6 dRVauW">
                <a
                  href="/terms"
                  className="Sitemap__StyledExternalLink-uyke27-7 gstBRU"
                >
                  <div className="Sitemap__ItemRow-uyke27-2 dyYQVc">
                    <div className="Sitemap__StyledTitle-uyke27-9 eweuze">
                      Terms of Use
                    </div>
                  </div>
                  <p className="Sitemap__StyledDescription-uyke27-10 djYPAF">
                    Rules for using the platform
                  </p>
                </a>
              </span>
              <span className="Sitemap__StyledMenuItem-uyke27-6 dRVauW">
                <a
                  href="/privacy"
                  className="Sitemap__StyledExternalLink-uyke27-7 gstBRU"
                >
                  <div className="Sitemap__ItemRow-uyke27-2 dyYQVc">
                    <div className="Sitemap__StyledTitle-uyke27-9 eweuze">
                      Privacy Policy
                    </div>
                  </div>
                  <p className="Sitemap__StyledDescription-uyke27-10 djYPAF">
                    Our policies around data
                  </p>
                </a>{" "}
              </span>
              <span className="Sitemap__StyledMenuItem-uyke27-6 dRVauW">
                <a
                  href="/promotional-terms"
                  className="Sitemap__StyledExternalLink-uyke27-7 gstBRU"
                >
                  <div className="Sitemap__ItemRow-uyke27-2 dyYQVc">
                    <div className="Sitemap__StyledTitle-uyke27-9 eweuze">
                      Promotional Terms
                    </div>
                  </div>
                  <p className="Sitemap__StyledDescription-uyke27-10 djYPAF">
                    Our terms for promotions
                  </p>
                </a>
              </span>
              <span className="Sitemap__StyledMenuItem-uyke27-6 dRVauW">
                <a
                  href="/gasless-deposit-rules"
                  className="Sitemap__StyledExternalLink-uyke27-7 gstBRU"
                >
                  <div className="Sitemap__ItemRow-uyke27-2 dyYQVc">
                    <div className="Sitemap__StyledTitle-uyke27-9 eweuze">
                      Gasless Deposits
                    </div>
                  </div>
                  <p className="Sitemap__StyledDescription-uyke27-10 djYPAF">
                    Gasless deposit promo rules
                  </p>
                </a>{" "}
              </span>
              <span className="Sitemap__StyledMenuItem-uyke27-6 dRVauW">
                <a
                  href="/trading-competition-terms"
                  className="Sitemap__StyledExternalLink-uyke27-7 gstBRU"
                >
                  <div className="Sitemap__ItemRow-uyke27-2 dyYQVc">
                    <div className="Sitemap__StyledTitle-uyke27-9 eweuze">
                      Competition Terms
                    </div>
                  </div>
                  <p className="Sitemap__StyledDescription-uyke27-10 djYPAF">
                    Trading competition terms
                  </p>
                </a>
              </span>
              <span className="Sitemap__StyledMenuItem-uyke27-6 dRVauW">
                <a
                  href="/hedgies-license-agreement"
                  className="Sitemap__StyledExternalLink-uyke27-7 gstBRU"
                >
                  <div className="Sitemap__ItemRow-uyke27-2 dyYQVc">
                    <div className="Sitemap__StyledTitle-uyke27-9 eweuze">
                      Hedgies License
                    </div>
                  </div>
                  <p className="Sitemap__StyledDescription-uyke27-10 djYPAF">
                    License for Hedgies
                  </p>
                </a>
              </span>
            </div>{" "}
          </span>
          <span className="Sitemap__StyledMenuTitle-uyke27-5 ejFDfc">
            <div className="Sitemap__Section-uyke27-4 hSEIzQ">
              <p className="Sitemap__MenuTitle-uyke27-11 lNUsO"></p>
              <span className="Sitemap__StyledMenuItem-uyke27-6 dRVauW">
                <a
                  href="/about"
                  className="Sitemap__StyledExternalLink-uyke27-7 gstBRU"
                >
                  <div className="Sitemap__ItemRow-uyke27-2 dyYQVc">
                    <div className="Sitemap__StyledTitle-uyke27-9 eweuze">
                      Mission
                    </div>
                  </div>
                  <p className="Sitemap__StyledDescription-uyke27-10 djYPAF">
                    What are we building &amp; why?
                  </p>
                </a>
              </span>
              <span className="Sitemap__StyledMenuItem-uyke27-6 dRVauW">
                <a
                  href="/careers"
                  className="Sitemap__StyledExternalLink-uyke27-7 gstBRU"
                >
                  <div className="Sitemap__ItemRow-uyke27-2 dyYQVc">
                    <div className="Sitemap__StyledTitle-uyke27-9 eweuze">
                      Careers
                    </div>
                    <div className="Sitemap__Badge-uyke27-3 iVamGv">New</div>
                  </div>
                  <p className="Sitemap__StyledDescription-uyke27-10 djYPAF">
                    We are actively hiring!
                  </p>
                </a>{" "}
              </span>
              <span className="Sitemap__StyledMenuItem-uyke27-6 dRVauW">
                <a
                  href="/brand"
                  className="Sitemap__StyledExternalLink-uyke27-7 gstBRU"
                >
                  <div className="Sitemap__ItemRow-uyke27-2 dyYQVc">
                    <div className="Sitemap__StyledTitle-uyke27-9 eweuze">
                      Brand
                    </div>
                  </div>
                  <p className="Sitemap__StyledDescription-uyke27-10 djYPAF">
                    Download logo &amp; assets
                  </p>
                </a>
              </span>
            </div>{" "}
          </span>
          <span className="Sitemap__StyledMenuTitle-uyke27-5 ejFDfc">
            <div className="Sitemap__Section-uyke27-4 hSEIzQ">
              <p className="Sitemap__MenuTitle-uyke27-11 lNUsO"></p>
              <span className="Sitemap__StyledMenuItem-uyke27-6 dRVauW">
                <a
                  href="https://trade.dydx.exchange"
                  className="Sitemap__StyledExternalLink-uyke27-7 gstBRU"
                >
                  <div className="Sitemap__ItemRow-uyke27-2 dyYQVc">
                    <div className="Sitemap__StyledTitle-uyke27-9 eweuze">
                      Web
                    </div>
                  </div>
                  <p className="Sitemap__StyledDescription-uyke27-10 djYPAF">
                    Enjoy instant Layer 2 trading on our robust web app
                  </p>
                </a>
              </span>
              <span className="Sitemap__StyledMenuItem-uyke27-6 dRVauW">
                <a
                  href="/mobile"
                  className="Sitemap__StyledExternalLink-uyke27-7 gstBRU"
                >
                  <div className="Sitemap__ItemRow-uyke27-2 dyYQVc">
                    <div className="Sitemap__StyledTitle-uyke27-9 eweuze">
                      Mobile
                    </div>
                  </div>
                  <p className="Sitemap__StyledDescription-uyke27-10 djYPAF">
                    Full-featured Layer 2 perpetuals, on the go
                  </p>
                </a>{" "}
              </span>
              <span className="Sitemap__StyledMenuItem-uyke27-6 dRVauW">
                <a
                  href="https://trade.stage.dydx.exchange"
                  className="Sitemap__StyledExternalLink-uyke27-7 gstBRU"
                >
                  <div className="Sitemap__ItemRow-uyke27-2 dyYQVc">
                    <div className="Sitemap__StyledTitle-uyke27-9 eweuze">
                      Testnet
                    </div>
                  </div>
                  <p className="Sitemap__StyledDescription-uyke27-10 djYPAF">
                    Risk-free test environment on Ropsten
                  </p>
                </a>
              </span>
              <span className="Sitemap__StyledMenuItem-uyke27-6 dRVauW">
                <a
                  href="https://hedgies.wtf"
                  className="Sitemap__StyledExternalLink-uyke27-7 gstBRU"
                >
                  <div className="Sitemap__ItemRow-uyke27-2 dyYQVc">
                    <div className="Sitemap__StyledTitle-uyke27-9 eweuze">
                      Hedgies
                    </div>
                  </div>
                  <p className="Sitemap__StyledDescription-uyke27-10 djYPAF">
                    Our collection of 4,200 unique avatars represented as NFTs
                  </p>
                </a>{" "}
              </span>
              <span className="Sitemap__StyledMenuItem-uyke27-6 dRVauW">
                <a
                  href="https://margin.dydx.exchange"
                  className="Sitemap__StyledExternalLink-uyke27-7 gstBRU"
                >
                  <div className="Sitemap__ItemRow-uyke27-2 dyYQVc">
                    <div className="Sitemap__StyledTitle-uyke27-9 eweuze">
                      Margin
                    </div>
                  </div>
                  <p className="Sitemap__StyledDescription-uyke27-10 djYPAF">
                    Spot &amp; Margin on Layer 1 of Ethereum
                  </p>
                </a>
              </span>
            </div>{" "}
          </span>
          <span className="Sitemap__StyledMenuTitle-uyke27-5 ejFDfc">
            <div className="Sitemap__Section-uyke27-4 hSEIzQ">
              <p className="Sitemap__MenuTitle-uyke27-11 lNUsO"></p>
              <span className="Sitemap__StyledMenuItem-uyke27-6 dRVauW">
                <a
                  href="/"
                  className="Sitemap__StyledExternalLink-uyke27-7 gstBRU"
                >
                  <div className="Sitemap__ItemRow-uyke27-2 dyYQVc">
                    <div className="Sitemap__StyledTitle-uyke27-9 eweuze">
                      Dashboard
                    </div>
                  </div>
                  <p className="Sitemap__StyledDescription-uyke27-10 djYPAF">
                    Stake, vote, claim
                  </p>
                </a>
              </span>
              <span className="Sitemap__StyledMenuItem-uyke27-6 dRVauW">
                <a
                  href="https://forums.dydx.community"
                  className="Sitemap__StyledExternalLink-uyke27-7 gstBRU"
                >
                  <div className="Sitemap__ItemRow-uyke27-2 dyYQVc">
                    <div className="Sitemap__StyledTitle-uyke27-9 eweuze">
                      Forums
                    </div>
                  </div>
                  <p className="Sitemap__StyledDescription-uyke27-10 djYPAF">
                    Discuss &amp; propose topics
                  </p>
                </a>
              </span>
            </div>{" "}
          </span>
          <span className="Sitemap__StyledMenuTitle-uyke27-5 ejFDfc">
            <div className="Sitemap__Section-uyke27-4 hSEIzQ">
              <p className="Sitemap__MenuTitle-uyke27-11 lNUsO"></p>
              <span className="Sitemap__StyledMenuItem-uyke27-6 dRVauW">
                <a
                  href="https://docs.dydx.exchange"
                  className="Sitemap__StyledExternalLink-uyke27-7 gstBRU"
                >
                  <div className="Sitemap__ItemRow-uyke27-2 dyYQVc">
                    <div className="Sitemap__StyledTitle-uyke27-9 eweuze">
                      Documentation
                    </div>
                  </div>
                  <p className="Sitemap__StyledDescription-uyke27-10 djYPAF">
                    Trade with our API
                  </p>
                </a>
              </span>
              <span className="Sitemap__StyledMenuItem-uyke27-6 dRVauW">
                <a
                  href="https://github.com/dydxprotocol/"
                  className="Sitemap__StyledExternalLink-uyke27-7 gstBRU"
                >
                  <div className="Sitemap__ItemRow-uyke27-2 dyYQVc">
                    <div className="Sitemap__StyledTitle-uyke27-9 eweuze">
                      GitHub
                    </div>
                  </div>
                  <p className="Sitemap__StyledDescription-uyke27-10 djYPAF">
                    View our smart contracts, developer tools, and more
                  </p>
                </a>{" "}
              </span>
              <span className="Sitemap__StyledMenuItem-uyke27-6 dRVauW">
                <a
                  href="https://status.dydx.exchange/"
                  className="Sitemap__StyledExternalLink-uyke27-7 gstBRU"
                >
                  <div className="Sitemap__ItemRow-uyke27-2 dyYQVc">
                    <div className="Sitemap__StyledTitle-uyke27-9 eweuze">
                      Status
                    </div>
                  </div>
                  <p className="Sitemap__StyledDescription-uyke27-10 djYPAF">
                    Monitor exchange reliability
                  </p>
                </a>
              </span>
            </div>{" "}
          </span>
          <span className="Sitemap__StyledMenuTitle-uyke27-5 ejFDfc">
            <div className="Sitemap__Section-uyke27-4 hSEIzQ">
              <p className="Sitemap__MenuTitle-uyke27-11 lNUsO"></p>
              <span className="Sitemap__StyledMenuItem-uyke27-6 dRVauW">
                <a
                  href="https://twitter.com/dydx"
                  className="Sitemap__StyledExternalLink-uyke27-7 gstBRU"
                >
                  <div className="Sitemap__ItemRow-uyke27-2 dyYQVc">
                    <img
                      src={Twitter}
                      width="20"
                      className="Sitemap__StyledIcon-uyke27-8 drcgmZ"
                      alt=""
                    />
                    <div className="Sitemap__StyledTitle-uyke27-9 eweuze">
                      Twitter
                    </div>
                  </div>
                  <p className="Sitemap__StyledDescription-uyke27-10 djYPAF">
                    Stay in the pulse
                  </p>
                </a>
              </span>
              <span className="Sitemap__StyledMenuItem-uyke27-6 dRVauW">
                <a
                  href="https://discord.gg/Tuze6tY"
                  className="Sitemap__StyledExternalLink-uyke27-7 gstBRU"
                >
                  <div className="Sitemap__ItemRow-uyke27-2 dyYQVc">
                    <img
                      src={Discord}
                      width="20"
                      className="Sitemap__StyledIcon-uyke27-8 drcgmZ"
                      alt=""
                    />
                    <div className="Sitemap__StyledTitle-uyke27-9 eweuze">
                      Discord
                    </div>
                  </div>
                  <p className="Sitemap__StyledDescription-uyke27-10 djYPAF">
                    Chat with other traders
                  </p>
                </a>{" "}
              </span>
              <span className="Sitemap__StyledMenuItem-uyke27-6 dRVauW">
                <a
                  href="https://www.youtube.com/c/dYdXprotocol"
                  className="Sitemap__StyledExternalLink-uyke27-7 gstBRU"
                >
                  <div className="Sitemap__ItemRow-uyke27-2 dyYQVc">
                    <img
                      src={Youtube}
                      width="20"
                      className="Sitemap__StyledIcon-uyke27-8 drcgmZ"
                      alt=""
                    />
                    <div className="Sitemap__StyledTitle-uyke27-9 eweuze">
                      YouTube
                    </div>
                  </div>
                  <p className="Sitemap__StyledDescription-uyke27-10 djYPAF">
                    Subscribe for tutorials
                  </p>
                </a>
              </span>
              <span className="Sitemap__StyledMenuItem-uyke27-6 dRVauW">
                <a
                  href="https://www.reddit.com/r/dydxprotocol"
                  className="Sitemap__StyledExternalLink-uyke27-7 gstBRU"
                >
                  <div className="Sitemap__ItemRow-uyke27-2 dyYQVc">
                    <img
                      src={Reddit}
                      width="20"
                      className="Sitemap__StyledIcon-uyke27-8 drcgmZ"
                      alt=""
                    />
                    <div className="Sitemap__StyledTitle-uyke27-9 eweuze">
                      Reddit
                    </div>
                  </div>
                  <p className="Sitemap__StyledDescription-uyke27-10 djYPAF">
                    Post on our forums
                  </p>
                </a>{" "}
              </span>
              <span className="Sitemap__StyledMenuItem-uyke27-6 dRVauW">
                <a
                  href="https://linkedin.com/company/dydx"
                  className="Sitemap__StyledExternalLink-uyke27-7 gstBRU"
                >
                  <div className="Sitemap__ItemRow-uyke27-2 dyYQVc">
                    <img
                      src={LinkedIn}
                      width="20"
                      className="Sitemap__StyledIcon-uyke27-8 drcgmZ"
                      alt=""
                    />
                    <div className="Sitemap__StyledTitle-uyke27-9 eweuze">
                      LinkedIn
                    </div>
                  </div>
                  <p className="Sitemap__StyledDescription-uyke27-10 djYPAF">
                    View our open roles
                  </p>
                </a>
              </span>
            </div>{" "}
          </span>
          <span className="Sitemap__StyledMenuTitle-uyke27-5 ejFDfc"></span>
        </div>
        */}
      </div>
    </div>
  );
};

export default App;
