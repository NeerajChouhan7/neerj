import React from 'react';
import { Link } from 'react-router-dom';

function solend(){
    return (
        <div className='container mx-auto text-start mt-5'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li className="breadcrumb-item" aria-current="page"><Link to='/essays'>Essays</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Solend</li>
                </ol>
            </nav>
            <div className='content-div'>
                <span className="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-placement="right"data-bs-trigger="hover focus" data-bs-content="10 Jan 2022">
                    <h1 className='heading strong bold'>Deep Dive: Solend</h1>
                </span>
                <p>
<br /><br />
                <h5>Introduction</h5>
Let's begin from somewhere you never expected us to...2017.
<br /><br />
Rooter, the founder of Solend, read the Compound whitepaper. Unlike me, who did not understand it on the first read. He got super excited about it. 
<br /><br />
To quote him, “I remember reading the Compound whitepaper in 2017 and got super excited about it. Then when it came out it was like magic and I showed it to all my friends and coworkers. I probably did demos for a hundred people!” 
<br /><br />
He did further research. On working of the protocol, risks involved and whatnot. He wished to run one himself since many assets he wanted to borrow weren't available. Sadly, he thought there is no point in starting a fork on Ethereum, given how Aave and Compound were already behemoths, alas!
<br /><br />
Cut to early 2021, he was talking to the founders of Raydium and Orca, who sold him the idea of Solana. Noticing that there were no established lending markets yet, he saw it as an opportunity to go make one. LFG!
<br /><br />
In June 2021, Solend finished in first place at the Solana Season hackathon. At that time, they had only built a prototype of its lending protocol. After two months, in August, the open-source project officially launched on the Solana mainnet. It had over $100 million in user deposits and $40 million in borrowings.
<br /><br />
But what the heck do they do? Solend is a decentralized protocol for lending and borrowing on Solana. Built upon the Solana blockchain, it inherits all its qualities, both good and bad. Currently,  Defi products are slow and expensive. Which are usually built on Ethereum and have high transaction fees. On Solana, Solend aims to be 100x faster and 100x cheaper. Various strategies provided by the protocol are: 
<br /><br />
<ul>
<li>Earning interest</li>
<li>Borrowing</li>
<li>Leveraging long 
</li>
<li>Shorting </li>
</ul>
In Defi protocols too, these terms hold the same meaning as in the conventional sense. You can leverage long or short assets in any Defi protocol. The only difference would be in borrowing. Since the only identity on the blockchain is a string of alphabetic codes, you can't borrow on credit. In other words, Defi borrowing is usually completely collateralized. 
<br /><br />
Solend is the biggest Defi lending-borrowing protocol on Solana. As of this writing, with a TVL of $800 million. Let me take you through their product:
<br /><br />
<h5>Product walkthrough</h5>

The first step is obviously, the holy signature of the web3 wallet. After you connect your wallet (only Solana supporting wallets), you will have to deposit the funds into it. Then approve your transaction in your wallet (otherwise ngmi).
<br /><br />

Once you have deposited the funds into Solend, you can use that as collateral for your loan. After entering how much you want to borrow, again approve the transaction in your wallet.

<br /><br />
After you, borrow some funds and play around with it. Your account is going to look something like this :


<br /><br />
Let’s understand this further:
<br /><br />
Supply balance refers to the total value of your deposits.
<br /><br />
Borrow balance is the total value of your borrowings. The green bar in the image represents this. It turns red when your borrow balance grows past your borrow limit.
<br /><br />
Borrow limit is the maximum value of assets that you can borrow, represented by the white bar. This is calculated based on your deposits and their loan-to-value ratios. Also, this could increase if the value of your borrowed assets drops below your supplied asset. In that case, you can borrow more than you already have.
<br /><br />
Liquidation threshold is the maximum value of your borrow balance before your account will be eligible for liquidation. This is a costly event and gets avoided by lowering your borrow utilization. This means that once your borrowed value exceeds your collateral value, it gets liquidated. This limit is calculated based on your deposits and their respective liquidation ratio.
<br /><br />
Similarly, repaying and withdrawing is done by clicking on the table and it will take you to the wallet. Which is followed by quite an intuitive process similar to borrowing one.
<br /><br />
<h6>Network effects</h6>
Solend contributes to the protocol network effect as a Defi primitive. By which all protocols on Solana become better.
<br /><br />
Suddenly, the tokens integrated into Solana are more useful. They can be used to earn interest or as collateral for a loan. Similarly, liquidity provider or LP tokens, which are tokens issued to liquidity providers, will unlock a huge amount of collateral. This will also enable users to go leverage long with recursive borrows. Meaning, on a large gain users will be able to borrow numerous times on the same asset. They can short another token too.
<br /><br />
<h6>Fundraise and Tokenomics</h6>

In October, Solend raised $6.5M from investors like Coinbase Ventures, Solana Ventures, Balaji Srinivasan.
<br /><br />
There are 100M SLND tokens. SLND’s distribution is as follows:
<br /><br />

60% of SLND is allocated to the community. Breaking it down, half of that is allocated for the liquidity mining program. The other half is allocated to the Solend Treasury, owned and governed by the Solend DAO. 25% to the core team and 15% to investors. 5% of SLND is allocated to the IDO, coming from the treasury. The Solend Treasury will own the IDO funds and LP position (details in IDO section.)  Only 10% was distributed in the seed round, but an additional 5% is set aside for a potential future raise in case it’s needed.
<br /><br />
<h6>IDO</h6>
Initial Dex Offering (IDO) is a new type of decentralized and permissionless crowdfunding platform. A project launches their coins or token via a decentralized liquidity exchange if they are launching an IDO.
<br /><br />
A total of 5% of the SLND total supply were set aside for the IDO: 4% for the IDO itself and 1% for LP SLND-USDC after the IDO had ended. (A quarter of the IDO proceeds were used to LP.)
<br /><br />
All proceeds from the IDO are going to the Solend Treasury. Which is owned and governed by the Solend DAO via SLND tokens. The treasury funds will be used for various purposes. Insurance, grants, and user acquisition are some of them. It also diversifies the Solend Treasury, making it more resilient to uncertain events.
<br /><br />
<h5>Programs in Solen</h5>
<br /><br />
There are several programs in the Solend ecosystem. Let's explore them one by one:
<br /><br />
<h6>Liquidity Mining</h6>
Currently, there are 100M SLND tokens in total. Out of which, 60% are reserved for the community. Half of that is set aside for distribution to the community via liquidity mining over 3 years. Now, you might say what is liquidity mining? For that first understand what liquidity pool is:
<br /><br />
Liquidity pools are collections of funds locked digitally in a smart contract. People supply the tokens they hold in liquidity pools. All the providers of tokens are called liquidity providers. When they deposit their tokens, they receive liquidity provider tokens, also called LP Token.
<br /><br />
Now liquidity mining: It is basically the process of staking your LP tokens, tokens that you received from supplying liquidity on a decentralized exchange, to earn a reward proportional to your stake. Protocols run liquidity mining programs to incentivize liquidity for their tokens.

<br /><br />
Solend wants to ensure fair play in mining from their end. In order to do that, they have had user deposit limits (on the frontend) and global deposit limits (on the smart contracts) forever. Putting these limits helped them limit the value-at-risk when Solend was new. But it also served the purpose of preventing whales from dominating pool ownership.
<br /><br />
Also, rewards are linearly determined by the percent ownership of a pool. Hence creating multiple accounts to use Solend from does not give outsized rewards.
<br /><br />
Solend has recently upgraded its liquidity mining program. Calling it the 2.0 version. In the previous version i.e. 1.0, the rewards were given at the end of each month to the liquidity providers. But in this one, Solend is rewarding farmers with call options rather than tokens. This means that instead of receiving SLND liquidity mining rewards, you'd get rewards in the form of call options on SLND. e.g. if the price is currently $8, you'd get options with a strike price of $10, expiring in 3 years.
<br /><br />
This will grow the Solend treasury (insurance fund) when options are exercised. It also aligns incentives with farmers since they gain less from farming and dumping.
<br /><br />
<h6>Bug bounty programs</h6>
If money is present, the risk is inevitable. That risk increases more when borrowing is involved.
<br /><br />
Defi protocols have to achieve what banks had done with just...code. Which is also at the end of the day written by humans. There will obviously be mistakes and bugs. Therefore each Defi protocol has insurance funds and bug bounty programs.
<br /><br />
Just like every Defi protocol, Solend also has a bug bounty program. The bug bounty program covers the Solend smart contracts (no UI bugs). 
<br /><br />
It focuses on preventing thefts and freezing of funds. There are many ways hackers could breach the protocol. Either by listing a shady token on Solend or by listing a token at a large number. This could literally happen in the blink of an eye, with Solana’s 400ms block times. While Solend mentions only these two cases, there are many other cases too. That is also the main reason for having an insurance fund as a Defi protocol.
<br /><br />
The reward for the bounty depends upon the severity of the bug. The rewards range from $5000 to $1,000,000 USD in either USDC or SOL.
<br /><br />
<h6>Insurance funds</h6>
Insurance funds ensure that users will be refunded in case there's a bug or issue with the platform. It builds trust in the community and each user about the protocol.
<br /><br />
There are many risks in a lending protocol. Smart contract risk, liquidation risk, market risk, etc. Even every asset listed exposes Solend to more risk. The biggest risk for any Defi protocol is a hack. While protocols like Aave and Compound have not been through such exploits. It is one of the biggest risks in running a Defi protocol. Currently, Solend has a $26M insurance fund. Protocol fees, as well as Liquidity Mining 2.0, will help in growing that further.
<br /><br />
Solend says:
<br /><br />
Solend takes risk extremely seriously and does extensive diligence on each asset that’s listed, also tuning risk parameters accordingly. Unfortunately, no amount of diligence can completely mitigate all risks, which is why it’s important to build up a sizable insurance fund.
<br /><br />
<h6>Comparison with AAVE and Compound</h6>
Defi was a novel idea when Aave and Compound came into existence. Those two projects came up at a time when asset prices were persisting through the bear market. Following the initial coin offering boom and the regulatory crackdown that followed.
<br /><br />
Aave, previously known as EthLend, is another money market and currently the largest Defi protocol on Ethereum. It first broke $60M in May 2020, five months into its existence. But several years into the operation of the company behind it.
<br /><br />
In September 2021, Solend did $100 million in deposits without liquidity mining opportunities. It took Compound and Aave longer to hit similar levels. The oldest record for Compound on Defi Pulse shows it at $93,000 in total value locked (TVL) as of Sept. 2018 It didn’t break $60M until seven months later.
<br /><br />
<h6>Community</h6>
Solend community is in its early days, even from the web3 perspective. Due to the protocol's rapid growth in such a short period of time, it has attracted a lot of Defi enthusiasts. They are yet to cut wheat from the chaff. In other words, they are yet to get rid of “moonboys” who are there for quick bucks and be left with long-term people. Which is going to happen automatically with time. Right now, they have more than 11,000 members. Which is huge! Contradicting my opinion about the community still being in early days but we will come to that. The way it is built is pretty neat.
<br /><br />
All channels are quite self-explanatory and like any other Defi community. Here are some things about interesting ones:
<br /><br />
<strong>#links:</strong> A curated section for all the official links. Related to publications, media, and community announcements by Solend. Perfect for a newbie to go down Solend's rabbit hole and deep dive.
<br /><br />
<strong>#nope-finance-faqs:</strong> In June, Solend acquired Nope Finance. Merging their team, and also bringing over 20k community members through Discord. Nope Finance is a yield aggregator that aims to be the go-to place on Solana to get the best yield. There are 10B NOPE tokens in total, with 34.6M distributed through an airdrop. Rest were burnt.
<br /><br />
<strong>#solend-rates:</strong> It is an interesting one. Because one of the community members created a bot. It monitors and uploads the assets and returns charts at a regular interval in the server. Rooter gave a developer shoutout in a Reddit AMA.
<br /><br />
In the same AMA, I asked Rooter about the Solend community. He said, "Right now, there are lots of "moonboys" who are just here for quick bucks. Since they are short-term focused, they will leave at some point and we will be left with long-term community members.
<br /><br />
We have lots of very supportive community members which is awesome! We also have some really enthusiastic devs, one that stands out is hypermanu who created the Solend APY Bot. "
<br /><br />
I have been in the community for the last few weeks to get the vibe of it. There were lots of meaningful discussions happening all the time in the community. No discussion gets cut in between. The way the server is designed is clean, simple, and not clustered (unlike Discord UI :p). 
<br /><br />
With abundant communities and scarce quality engagement, the Solend community feels like an exception. It is early because only the future can tell if it's sustainable, once it becomes big enough with more active members. Maybe after a marketing campaign or if they get a sudden burst of members in the community. 
<br /><br />
Anyways, just like every other crypto community, everyone is super helpful and considerate on the server. Big-time WAGMI vibe!
<br /><br />
<h6>Conclusion</h6>
For the future, Solend has promising plans like adding governance in early 2022, listing more assets, and isolated pools. All of their near-future plans revolve around making the protocol better for liquidity providers and users. There isn’t anything for the community. Which I believe, they think would be achieved automatically by making the protocol better.
<br /><br />
Solana's cheap transaction fees and high throughput make it a preferred destination for Defi. Solend will most likely benefit as an early mover and leader in the Solana ecosystem. 
<br /><br />
Key aspects of the bullish thesis on Solana are its high throughput (up to 710k transactions per second (TPS) and low transaction costs ($0.00025 per transaction). Making it an attractive blockchain for Defi applications.
<br />
            <br />
Ciao.

                </p>
                <br />
            <br />
            <br />
            <p style={{color : "rgba(204, 238, 253, 0.884)"}}>Dec 2021</p>
            </div>
        </div>
    )
}

export default solend;
