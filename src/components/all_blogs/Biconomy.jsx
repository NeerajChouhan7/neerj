import React from 'react';
import { Link } from 'react-router-dom';

function biconomy(){
    return (
        <div className='container mx-auto text-start mt-5'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li className="breadcrumb-item" aria-current="page"><Link to='/essays'>Essays</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Biconomy</li>
                </ol>
            </nav>
            <div className='content-div'>
                <span className="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-placement="right"data-bs-trigger="hover focus" data-bs-content="10 Jan 2022">
                    <h1 className='heading strong bold'>Deep Dive: Biconomy</h1>
                </span>
                <p>
                If you are new to the world of web3.0, I recommend you to go through <a target='_blank' href='https://docs.google.com/document/d/1SWJw_NTyUvgdB_asRzsnVyKjciW8dZbeqQeUeWsEiQc/edit'>this document</a>, which goes on to explain each of the blockchain concepts in short blurbs with providing resources to deep dive further into them.
<br /><br />
We will start with the background of the founders and team. How they jumped from crypto in China in 2016-17 to coming back to build in India. We will go through why there is even a need for Biconomy, the impact of the problem they are solving, how they are solving it, what are the products of Biconomy, their amazing community, and their tokenomics with $BICO token. 
<br /><br />
Before we jump into all of it, let’s understand a few terms:
<br /><br />
<ul>
<li>
<strong>dApp</strong>: This is a short form of decentralized application, is software that runs on a distributed network. This means, it’s not on a centralized server (ex. AWS, Google Cloud) but a peer-to-peer decentralized network (ex. Ethereum). 

</li>
<li>
<strong>SDK</strong>: Again, short form of the software development kit. It is a set of tools and programs to be used by developers to create applications on/for specific platforms.

</li>
<li>
<strong>Blockchain bridges</strong>: “Currency exchange service but between blockchains” It allows blockchains to communicate with each other. Hence, enable you to move your assets or data across different blockchain networks. 

</li>
</ul>
<br /><br />
<h5>Background</h5>

COO & Co-founder of Biconomy Aniket, got into crypto in 2016-17 in China. In Chinese, the word bi means token. Hence, the word Biconomy. 
<br /><br />
After working with Binance alongside CZ, he came back to India with a vision to work in blockchain in India. He met one of his co-founders & CTO Sachin at a crypto conference. Sachin has just left his job at Samsung to go all-in into crypto. He was friends with Ahmed, another co-founder, and CEO of Biconomy, who also just came back from Dubai to work on blockchain.
<br /><br />
They started Biconomy as a side project for some time. In May 2019, they started working on it full-time.
<br /><br />
For the first year, the team bootstrapped with personal capital and few grants to build products and find product-market fit. In May 2020 they did a soft launch of Biconomy.
<br /><br />
They knew this was a hard problem to solve at the moment in the blockchain space.
<br /><br />
<h5>Introduction</h5>

With the significant adoption of web3.0, Ethereum blockchain has been congested, so to say. Activity is outperforming the efficiency of the chain. On top of that, Web3.0 space is craving for someone to come up and solve the problems of user experience (UX) and gas fees. These are, most probably, the two biggest pain points at the moment to make blockchain mainstream. Apple made computers mainstream by reducing the need for technical manuals to operate computers. They made the design, with hardware, super intuitive for an average person. 
<br /><br />
Now everybody can operate the most complex machines without any help. We need the intuitiveness of web2.0 products in web3.0. That’s where Biconomy enters the game:
<br /><br />
Biconomy is making smart relayer infrastructure for blockchain transactions that reduce the friction between applications built on blockchain and users. 
<br /><br />
They accomplish this with a set of SDKs and APIs that work together to simplify the dApp development for the developers. Biconomy abstracts the complexity of blockchain and dApps for an average user with the help of their wonderful technology.
<br /><br />
Biconomy observed some of the biggest bottlenecks and set out to solve them for the ecosystem. The first one was, of course, the gas fees. Imagine paying a fee every time you post a tweet on Twitter or watch a YouTube video. It's a real pain right now.
<br /><br />
The second one was mandatory spending ETH to interact with dApps. Most widely-used, trusted applications are run on the Ethereum blockchain. Users may not want to spend their ETH. There could be many reasons that users may not want to spend their ETH holdings while interacting with dApps. Holding a particular token should not prevent users from leveraging blockchain products.
<br /><br />
The third one was onboarding. For non-crypto folks, the number of steps to finally be able to use blockchain products is way too much friction. In the world of ~5% drop-off rate per second, these painful steps were not looking good in making blockchain products mainstream.
<br /><br />
Also, as more and more dApps move to chains other than Ethereum, multi-chain dApp users need infrastructure to navigate the protocols. We are already seeing a bunch of bridge solutions that help move information and funds between various chains.
<br /><br />
On top of all these problems, high volumes of transactions on chains get stuck, pending, or often failed. That happens because if there is a problem with one transaction on-chain then the next transaction cannot take place. For example, if 3 transactions are taking place on a chain, the 3rd and 2nd transactions won’t take place unless and until the 1st one is resolved i.e. cleared or failed. It is a crucial problem to solve.
<br /><br />
Creating solutions for all these problems in-house is a resource, time, and effort heavy for any team. Even though there are projects like Argent, Nuo, and Monolith who are working with the in-house solution for all these problems. Biconomy proposes to save months of development time with a simple SDK so that developers can focus on building their core products.
<br /><br />
Enough for the problems, let’s understand how Biconomy is paving the way for both developers and end-users to bring blockchain into the industry:
<br /><br />
Biconomy wants to solve blockchain complexities under the hood in order to make the experience frictionless for developers and users. They achieve this by a concept called meta transactions.
<br /><br />
<h5>Meta-transaction</h5>

It enables users to use blockchain without a wallet or cryptocurrencies from an exchange. By removing the need to pay gas fees for the user!
<br /><br />
Believe it or not, it’s true. It works in a way where the user is able to perform transactions on blockchain with 0 balance in wallet or dApp. Layer1 wouldn’t be very happy with that, right. So, any third party pays the transaction fees for the user. You can think of it as a customer acquisition cost (CAC) that is paid by the developers to onboard the user into their dApp.
<br /><br />
On top of that, there are several benefits of using meta-transaction technology. Starting with transaction management. Because managing transactions is a huge bottleneck for developers to focus on core products in Defi. 
<br /><br />
In easy language, the reason behind it is that when the number of transactions in the verifying queue exceeds the capacity of new blocks, the network suffers. Because transactions with lower gas fees get lost and stuck in the verification queue a.k.a mempool. As a result, the developer suffers. Meta transaction provides the infrastructure to solve this problem in the quickest time possible with relayer.
<br /><br />
In the near future, meta transactions would reduce on-chain load with the help of batching process. Multiple queries from a dApp can be processed as one on-chain transaction. In order to decrease the response time and gas fees.
<br /><br />
Even though Ethereum blockchain is the largest blockchain in terms of dApps. Its volatility in fee per transaction makes it less reliable for adoption. As industry leaders would prefer to choose a network with a fixed fee to maintain their budget and finances. 
<br /><br />
Businesses who aim to use blockchain will most probably go with private blockchain because of their constant fee structure. But the private blockchains are not as secure as public ones. Meta transactions on the public blockchain will allow businesses to provide subscription-based services for the ecosystem through fiat/stable coins.
<br /><br />
There are lots and lots of use cases that meta-transactions unlock for the whole ecosystem. For example, an ad model where a company like Chipotle can become a sponsor of user gas fees. (Ah, advertisements will never leave you, no). Opportunities are, quite literally, endless.
<br /><br />
<h5>Cross-chain transaction</h5>

As the name suggests, refers to the transfer of assets between different blockchain networks.
<br /><br />
Every blockchain works independently from the other. Solana is not compatible with Ethereum and vice-versa. To perform transactions between these blockchains we have bridges. Cross-chain bridges empower users and projects by unifying these ecosystems.
<br /><br />
Whether or not you believe in the (inevitable) multi-chain future, you’d agree that being able to transfer assets between chains would greatly increase the value of assets. As it will increase their use-cases and provide more yield. Most Defi protocols today are multi-chain because they understand this.
<br /><br />
While most protocols don’t plan to leave the base layer of Ethereum completely, various protocols have applied various scaling solutions. Mostly Layer2 solutions. But as we move to various scaling solutions, they bring new problems. 
<br /><br />
Currently, all solutions have their own fragmented ecosystems. Interacting between L1 and various L2s, sidechains, etc. is slow, expensive, and complicated. Because of friction between these solutions and users, each layer2 solution will start acting as its own close economy. Hence, reducing the potential benefits and network effect for the ecosystem.
<br /><br />
Moving the whole ecosystem to one of the L2 scaling solutions is not sensible. The same problems will follow as the L1 solution. Right now, you can only interact with the L2 solution you are part of. Because transfer between different L2 solutions is not efficient. The solution to solve this becomes existing as a separate community with weak network effects. 
<br /><br />
As a result, more and more scaling solutions will be present in the ecosystem and they all will co-exist. Each of them will cater to its specific use case. Hence, ensuring scalability.
<br /><br />
Now, if the co-existence of multiple scaling solutions across networks is inevitable. Then we need an infrastructure to connect these fragmented solutions for the end-user. Biconomy enables the flow of assets & information across different chains in an easy, affordable, secure, and decentralized way. Building a foundation for a seamless multi-chain infrastructure for web3.0.
<br /><br />
The meta-transactions, cross-chain transfers, and communication are possible by Biconomy’s decentralized multi-chain relayer network. A distributed set of node operators on every supported chain will power the Biconomy network. 
<br /><br />
As a result of that, Biconomy has been able to launch some of the most revolutionizing products in the blockchain infrastructure space. As of this writing, there are three primary products under the umbrella of Biconomy:
<br /><br />


<h5>MEXA</h5>

Mexa or Magical Experiences Anywhere, Anytime.
<br /><br />
It is also known as Gasless. As the name suggests, it enables gasless transactions for end users. With the help of meta transactions, Mexa offers an SDK to developers to build seamless user experiences for their dApp. 
<br /><br />
Biconomy requires developers to connect their smart contracts to their dashboard. Afterward, these are some of the ways they can integrate Mexa into the dApp:
<br /><br />
<ul>
    <li>
To enable native meta transactions in your contract, you can just inherit a simple contract BaseRelayRecipient.sol and set the trusted forwarder address.

    </li>
    <li>
For the custom meta transaction implementation, you have to register your smart contract with Biconomy.

    </li>
    <li>
Biconomy also allows developers to register external wallet contracts on the Dashboard. Developers can use Biconomy as a relayer service to relay their transactions without failing. 

    </li>

</ul>
<br /><br />
For Mexa, they have some promising features in the roadmap. New chain integrations like Solana, Fantom, and Abritrum. Also, more decentralization and wallet address whitelisting for dApp partners.
<br /><br />
<h5>Forward</h5>

Forward enables users to cover their gas fees in ERC20 tokens other than ETH. 
<br /><br />
With a focus on payments and Defi, Forward is designed to work on any dApp on Ethereum. At the moment, Forward supports payment using stable coins such as Dai, USDC & USDT. With more tokens support in the pipeline. 
<br /><br />
Forward unlocks huge opportunities for developers to experiment and build different use cases with their products. Defi protocols no more have to bind their users to hold ETH in order to interact with their product. Many applications can encourage new users with their tokens. Play-to-earn and other blockchain games can allow players to play games by paying fees in their own tokens. Forward unlocks endless opportunities for the whole ecosystem.
<br /><br />
Forward enables dApps to improve on their UX for the end-users in majorly two ways:
<br /><br />
Allowing end-users to save their ETH with their relayers, by allowing them to pay in other tokens.
<br /><br />
No transactions getting stuck for dApps.
<br /><br />
Of course, Gasless != Free. It is evident that a Layer 1 dApp cannot cover the gas fees for its users. Gas fees on Ethereum are just painfully high. Meta transactions eliminate a pain point in Defi use cases that already involve tokens in some way. Also, 90% of the time these transactions or transfers are more than $1000 in value.
<br /><br />
<h5>Hyphen</h5>

Hyphen provides simple APIs that let you offer instant transactions between various L2 solutions, EVM chains, and other sidechains. It acts as a bridge between these chains to enable transactions cheaply, securely, and quickly. Currently, transfer from Layer2 native bridges to Layer1 sometimes takes 40minutes to 7 days! 
<br /><br />
We discussed in the cross-chain transaction section about the importance of a product such as Hyphen for the web3.0 future. This is the infrastructure that will be bridging the gap between different fragmented L2 solutions with high compatibility and interoperability.
<br /><br />
As we tend towards a multi-chain future, cheap, secure, and scalable inter-chain transfers will play an important role. Biconomy aims to decentralize the infrastructure across all the supported networks. 
<br /><br />
As they work towards decentralizing the product, anyone will be able to provide liquidity, act as a node, and contribute to the protocol, as per their roadmap. In return, LPs, node operators, and other stakeholders will earn a percentage network revenue. 
<br /><br />
They launched with USDC & USDT and supporting chains are Ethereum & Polygon. There are going to be new chain integrations for Hyphen. In the roadmap, they have BSC, Moonbeam, Arbitrum, and Optimism. 
<br /><br />
Another promising feature in Biconomy’s Q1 roadmap is that anyone will be able to add liquidity to Hyphen Liquidity Pools and earn LP fees.
<br /><br />
<h5>Tokenomics</h5>

Biconomy has recently released its $BICO token. It is a native governance token. It will surely play an important role in decentralizing the network by incentivizing all the stakeholders to secure and maintain the network.
<br /><br />
The Biconomy blockchain acts as a verification layer for activities on the Biconomy network across all the chains. Node operators on the chain pay a fee of $BICO to add any info to the chain and proportionally earn $BICO.
<br /><br />
There are other incentives for validators and executors: 
<br /><br />
They can stake their $BICO to start their contribution to the network. 
<br /><br />
They can also stake their $BICO to secure the network. 
<br /><br />
Liquidity providers can provide the protocol active liquidity in different tokens across different chains. 
<br /><br />
In all of these contributions, users will earn a proportionate amount of rewards, mostly in $BICO.
<br /><br />
Other than contributions by the community, governance will allow $BICO holders to propose and vote upon protocol decisions.
<br /><br />
There are in total of 1 Billion BICO tokens and here’s how the distribution is going to look like:
<br /><br />

As of now, you can’t buy $BICO. The token generation event (TGE) happened on 23rd November 2021. 
<br /><br />
<h5>Community</h5>

As a company, their values are reflected in their products. Making blockchain technology accessible to everyone with simplicity.
<br />
            <br />
They started with building one product but after feedback and suggestions from the community, they have three products today. From the initial days, Biconomy has shown good consideration to feedback from the community. The community has reciprocated that too.
<br />
            <br />
They have a strong community of over 100,000 members (107,600, as of this writing) on Discord. With over 63,000 followers on Twitter. That shows the impact of the product, collaborations, and engagement across all platforms.
<br />
            <br />
Biconomy’s initiatives for the community are inspirational for other protocols. They have community participation contests such as the content of the week, where they reward community members with $BICO for their work. Several other initiatives by Biconomy like bug bounties, biconaut ambassador program, token community calls, etc. 
<br />
            <br />
After governance, they have been more involving the community members further. Participating in proposals, community discussions, and their recently launched forum. 
<br />
            <br />
Governance process is also transparent and simple. The biconomy team initiates forum topics and discussions. After sufficient interest from the community, they will create a proposal to formalize the discussion. Community governance calls will take place to discuss the proposals. Then the team will move the proposal to Snapshot for voting. If it is passed, then the Biconomy team will execute the decision.
<br />
            <br />
<h5>Conclusion</h5>

Biconomy has been in the industry before the Defi summer of 2020, they knew from the first day that this is a very important and albeit hard problem to solve. They are now a common integration for the development of any new app. 
<br />
            <br />
The company which builds the infrastructure that makes it easy for other players to enter the industry inevitably wins in the long term.  Stripe and AWS are examples of successes of such products in web2.0. Patrick Collison has this analogy for Stripe that “Stripe is building roads while tech companies are building cars.” The same applies to Biconomy.
<br />
            <br />
Similarly, Biconomy is going to be a giant player in the industry. With their ethos of decentralization, it would be exhilarating to see how they go about building products and the community around them. In the 2022 roadmap, Biconomy aims to make Gasless and Hyphen more decentralized with a mainnet launch on Relayer protocol, a growing network of node operators, delegators & liquidity providers, supporting more chains and governance.
<br />
            <br />
They are still in the early days of revolutionizing the blockchain experience for the end-users. But it is of no doubt, right now, that they are solving a huge pain point for everyone in the ecosystem. Hence, their success is inevitable. As Ahmed, co-founder of Biconomy, himself puts it:
<br />
            <br />
In Web2, payments and transfers happen within the app with minimal clicks. For Web3 to reach mass adoption, cross-chain transfers must be in-dApp as well. This year will be the year of frictionless Web3 experiences that finally make it mainstream.
<br /><br />
Super excited to see Biconomy making dApps accessible to everyone with their under the hood products!
            </p>
                <br />
            <br />
            <br />
            <p style={{color : "rgba(204, 238, 253, 0.884)"}}>Jan 2022</p>
            </div>
        </div>
    )
}

export default biconomy;
