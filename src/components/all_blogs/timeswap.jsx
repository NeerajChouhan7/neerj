import React from 'react';
import { Link } from 'react-router-dom';
function timeswap(){
    return (
        <div className='container mx-auto text-start mt-5'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li className="breadcrumb-item" aria-current="page"><Link to='/essays'>Essays</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Timeswap</li>
                </ol>
            </nav>
            <div className='content-div'>
                <span className="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-placement="right" data-bs-trigger="hover focus" data-bs-content="02 Dec 2020">
                    <h1 className='heading'>Deep Dive: Timeswap</h1>
                </span>
                <p>
                World of web3 and especially Defi is constantly evolving and moving. 1 day here feels like 1 month. Taking a two-week vacation means missing out on 15 airdrops, 7 NFT collections, and 3 Defi protocols with dope, new technology.
                <br /><br />
If you are completely new to the world of web3, start here.
<br /><br />
If you are completely new to Defi, start here or check out the first half of this article.
<br /><br />
If you have a decent idea of Defi and protocols, we can get started my fren!
<br /><br />
Before getting into the introduction, let’s have a quick look at the background of the protocol and understand why was even there a need for Timeswap?

As of this writing, the total value locked (TVL) in Defi is more than 100 Billion US dollars. With around half of it, locked in lending protocols like AAVE, Compound, etc. These protocols have become strong pillars for lending and borrowing in Defi with their groundbreaking innovation in the past few years. For example Uniswap’s defining moment in the Defi in 2018 with the first Automated Market Maker(AMM). Built upon the concept of liquidity pools. They enabled permissionless exchange between any ERC-20 tokens which opened up liquidity for long-tail assets. Or in June 2020, when Compound introduced liquidity mining through their governance token. 

In spite of all these innovations, they have their inefficiency and shortcomings.

Oracle attacks have drained millions from the Defi ecosystem. It remains a significant roadblock for scaling and securing protocols. Timeswap aims to build an oracle-less, fully decentralized AMM-based money market protocol, with the vision of becoming the on-chain source of truth in Defi. With other promising features in the roadmap and in development, I am super excited to dive deeper into Timeswap and its vision. Let’s go:
<br /><br />
<h5>Introduction</h5>
<br /><br />
Defi protocols aim to replace banks. Having no centralized entity to come around the user’s assets is the ethos of Defi. And Timeswap is a protocol built strongly around that ethos.
<br /><br />
Let’s go back to the future, to the genesis of the name: Timeswap. Timeswap name implies users swapping tokens through time. They allow users to decide the future price of the asset vs collateral while deciding their risk vs return too. But how exactly? Let’s see:
<br /><br />
Timeswap is a decentralized AMM-based market maker protocol that is self-sufficient and works without the need for oracles or liquidators. It allows anyone to do fixed maturity lending & borrowing of any ERC20 token with any other ERC20 token as collateral. The protocol was created with the vision to create a fully permissionless, oracle-less lending & borrowing just like Uniswap is for decentralized exchanges. Do not worry if you don’t understand any of the words mentioned here, I’m going to come back to each of them. Starting with AMM.
<br /><br />
<h5>What is AMM</h5>
<br /><br />
Automated market maker, also known as AMM, is an algorithm that allows digital assets to be traded in a permissionless and automated way. Instead of traditional order books, we use liquidity pools in the market.
<br /><br />
Liquidity pools are collections of funds locked digitally in a smart contract. People supply the tokens they hold in liquidity pools. All the providers of tokens are called liquidity providers. When they deposit their tokens, they receive liquidity provider tokens, also called LP Token.
<br /><br />
The main difference between oracle-less and oracles-including AMMs is that in the oracles less one, the interest rates & collateral factors of pools are determined by unique 3 variable constant product AMM rather than based on any price oracle. Instead of the protocol, the market participants normalize the interest rates and collateral requirements based on the prevailing market conditions.
<br /><br />
Coming back to AMMs, different protocols use AMM in their own ways. Balancer uses constant mean formula, by which they include up to 8 tokens into pools. On top of that, it allows adaptive fees structure too, that can react to market forces like volatility or demand. Uniswap which is an oracle-less decentralized exchange uses constant product AMM with their equation X*Y = K. Timeswap’s AMM is very similar to Uniswap’s, let’s see how:
<br /><br />
<h6>Timeswap AMM</h6>
<br /><br />
Timeswap’s AMM is a constant product automated market maker. There is constant K which is the sum of the value of three X, Y & Z tokens that we are using in this particular automated market. 
<br /><br />
It works on the basis of these 3 variables: X (Principal Pool), Y (Interest Rate Pool), and Z (Collateral Factor Pool). These three variables determine the interest rate and collateral factor required to interact with the pools.
<br /><br />
XYZ = K<br /><br />

X = Principal Pool. It is where lenders & liquidity providers deposit their assets.
<br /><br />
Y = Interest Rate Pool. This pool decides the interest rate on the maturity of that pool such that Y/X is equal to the max. interest / second.
<br /><br />
Z = Collateral factor pool. A collateral factor is a predefined number that defines the amount of collateral you can borrow against your asset. Z/X ratio decides the minimum collateralized debt position (CDP) of a pool.
<br /><br />
Before understanding these variables further, let’s first see what are APR and CDP mentioned above.
<br /><br />
APR i.e. annual percentage rate is the expected yearly interest rate to be paid by the borrower. Also, the expected yearly yield received by the lender.
<br /><br />
CDP is a collateralized debt position. Which is the amount of collateral locked per unit of asset borrowed for the borrower. It means, what is the value of the collateral given by borrower with respect to the asset that they have borrowed, in simplest units.
<br /><br />
For lenders, it is the collateral coverage per unit of asset lent. This also basically means, how much the collateral would cover if they lent it to the borrowers.
<br /><br />
Let’s understand this relationship with an example:
<br /><br />
Tanmay wants to create a DAI-ETH pool with a maturity of 6 months. He wants to lock 10,000 DAI, expecting an annual return of 15% and a CDP of 167%.
<br /><br />
X will be 10000 DAI.
<br /><br />
Y will be expected annual interest i.e. 15% upon the number of seconds in a year i.e. 31556926s.
<br /><br />
Y/X = 0.0000475, this is our max interest/second of that pool.
<br /><br />
Z = value of ETH in DAI. Let’s say the price of ETH at the time of pool creation was 4000DAI, the value of Z would be 10000 * 1.67/4000 = 4.175 ETH
<br /><br />
So, now the pool is initialized by Tanmay with duration of 6 months with constant K = 1.98, X = 10,000, Y = 0.0000475, Z = 4.16
<br /><br />
For now, hang on to this relation, we will simplify it even further in lending and borrowing. Even if you didn’t get much here, don’t worry, it’ll be piece of cake for you in the lending and borrowing section.
<br /><br />
<h5>Timeswap features:</h5>
<br /><br />
Timeswap protocol is bringing lots of benefits and features to users, which has not been possible before on any Defi protocol. We will dive deeper into each of those features and understand how as a user you can leverage those features for the best. Before jumping into them, it’s important to understand the native tokens Timeswap allows for both their lenders and borrowers.
<br /><br />
Timeswap Native tokens
<br /><br />
Timeswap has its native token which is given to both borrowers and lenders: Bond and Insurance tokens. 
<br /><br />
Bond tokens or BTs are issued to the lender who deposits their assets. They are ERC20 tokens representing the yield claim on that asset. They account for the principal plus interest owed after maturity to the lenders. After maturity of the pool, BT can be redeemed for the exact amount of underlying assets in the asset pool. 
<br /><br />
Insurance one represents the insurance coverage with the time decaying properties. They are issued to lenders to hedge against the unavailability of the assets that are redeemable for BT. Basically, If the BTs fail to retrieve the equivalent amount lent out to the pool, the ITs issued will make up for this. They do it by allowing the lender to claim insurance coverage on the collateral defaulted by the borrowers.
<br /><br />
<h5>
Permission-less fixed maturity lending & borrowing
</h5>
But why fixed-term maturity?
<br /><br />
With the factor of their AMM interest rates, pools have a fixed maturity. They are designed such that for borrowers who have not repaid their loans after maturity, their collateral gets proportionately distributed amongst lenders based on their insurance token holding. It de-risks the pool and lenders’ assets.
<br /><br />
In several lending and borrowing protocols, which do not have fixed maturity, the collateral gets liquidated if the borrower does not pay the debt before the debt’s value goes below the collateral’s value. As a result, lenders get the token at a discount called a liquidation discount.
<br /><br />
Messari researcher John argues that right now fixed-rate lending is important primitives underpinning the global financial system. It provides certainty for both lenders and borrowers to accurately forecast their returns.
<br /><br />
John also mentioned a yield curve inversion. Which happens when investors are willing to lock in low long-term rates as they expect a more severe downturn. In traditional finance, this leads to central banks lowering interest rates and another indicator can be used to predict recessions. At the moment, we lack that in the Defi ecosystem.
<br /><br />
In order to understand long-term investor sentiments, it’s important to have stable and predictable financial markets. MakerDAO has proposed a protocol Pairwyse to do this in Defi space. As this is under MakerDAO, they achieve this by facilitating fixed-rate agreements between DAI borrowers and lenders in a decentralized manner.
<br /><br />
Timeswap achieves this by using the constant product AMM. That begs the question of how they prevent the time decay of the asset. We will see around the end of this piece how that is taken care of. For now, let’s jump into how does understand permission-less fixed maturity lending and borrowing further:
<br /><br />
<h5>Lending</h5>
<br /><br />
In the world today, lending works something like this: We go to an institution to borrow against collateral.  Based on your banking history, the interest rate will be decided upon that loan. Bank takes their cut in between and gives us the loan.
<br /><br />
Now let’s see how does lending works in the Defi world. We go to a platform with our digital assets. That public decentralized platform connects lenders and borrowers. You borrow against your digital assets. Based on mathematics, the algorithm, the interest rate is decided on your loan. All transactions are transparent and permissionless.
<br /><br />
Now we come to how lending works in Timeswap. As usual Defi protocol, lenders add liquidity/assets to the pool. As a result, it increases the X variable in our XYZ = K equation. To maintain the constant K, Y & Z decreases in value. Which reduces the next lender’s interest rates and also collateralized debt position. In easiest languages, the interest rate (Y) & collateralized debt position (CDP, also Z) are inversely proportional to the principal pool (X). As more assets are provided into the pool, interest rate and CDP decrease.
<br /><br />
After the pool is initialized, other users can lend their assets to that pool. Things get interesting because even though they are not the ones who created the pool, they can still decide their own risk and reward by that pool. They have the ability to customize interest rates on that pool. Let’s understand this with an example:
<br /><br />
Tanmay wants to deposit 1000 DAI to the pool one month before the pool maturity. With the help of an algorithm, the protocol comes up with an APR ranging from 0.84% to 13.41%. Tanmay chooses 10% APR with some insurance while initiating the transaction. 
<br /><br />
As a result, he receives 1008.19 Bond tokens and 0.474 Insurance tokens. At the end of 1 month, he receives 1008.19 DAI by burning his Bond tokens. 
<br /><br />
However if his bond tokens are not able to give him exact same amount of DAI, his insurance tokens will be burned in order to provide him a proportional percentage of coverage on insurance value. Which is in line with the percentage of unrealized assets from bond tokens.
<br /><br />
Interesting trivia: we know that the maturity of the pool is totally decided by the user. But by code, the maximum time duration for a pool is about 136 years which is exactly the max of uint32 in seconds. Let’s understand how can you borrow within that period of 136 years:
<br /><br />
<h5>Borrowing</h5>
<br /><br />
After the lenders have provided the liquidity resulting in an increase in X. Borrowers will borrow from that liquidity, which will decrease X. As we discussed earlier X is inversely proportional to Y & Z. So, if X decrease, interest rate, and CDP will increase. Continuing the ritual, let’s understand with an example:
<br /><br />
Tanmay borrowed 1000 DAI from the pool that had 1 month remaining in maturity. He deposited 0.654 ETH as collateral. When Tanmay repays 1008.2 DAI before the maturity of the pool, he will receive his collateral back. But if he defaults on the borrowing, his locked collateral of 0.654 ETH will be proportionately distributed to the lenders based on the insurance tokens lenders hold.
<br /><br />
So, in a typical Defi borrowing setup, the collateral gets liquidated if the borrower does not pay the debt in time. As a result, lenders get the token at a discount called a liquidation discount. But in Timeswap, if borrowers do not pay the debt before the maturity time, their collateral gets distributed to the lenders instead of being liquidated.
<br /><br />
With the typical borrowing, Timeswap allows lots of opportunities to the users like shorting the tokens without risk of getting liquidated, leveraging any ERC20 token, borrowing against the LP tokens to borrow more LP tokens aka LP farming, and several more. Let’s dive deeper into one of those features which is arbitrage trading:
<br /><br />
<h5>What is Arbitrage?</h5>
<br /><br />
In the easiest language, it means buying at a low price and selling high. Except, it is the result of market inefficiencies. It’s a bug more than a feature. It both exploits and addresses such inefficiencies. All crypto exchanges do not have one source of truth. Their methods to determine the value of the blockchain asset differ. As a result of that, there are differences in their prices too. Arbitrage trading refers to earning profit from this variance at prices among exchanges.
<br /><br />
In Timeswap pools, they expect arbitrageurs (people who do arbitrage trading) to normalize the interest rates & CDP to the market values. It is also the mechanism by which Uniswap maintains its exchange prices as close to market prices, as possible.
<br /><br />
You can leverage Timeswap pools using arbitrage techniques by taking advantage of other Defi protocols such as Aave, Compound, or Yield Protocol. If the lending rates on Timeswap are higher compared to other protocols, you can borrow from the external market and lend to Timeswap pools. Profiting from the difference in the lending rates and earning the interest rate. Similarly, on the borrowing side, you can profit from the imbalance between markets.
<br /><br />
Similarly, you can arbitrage between two Timeswap pools too. Consider the above DAI-MATIC pools. You can borrow from the pool with a lower interest rate and lend into the pool with the higher interest rate to get~5% profit on this trade. Given that both pools have similar maturity, the users stand to make a profit. However, if the pools have wider maturities, then users have to take into account the time preference as well while arbitraging.
<br /><br />
<h6>Oracle-less</h6>

<br /><br />
Timeswap is an oracle-less Defi protocol. Now let’s see what an oracle is:
<br /><br />
Oracle is a bridge between on-chain and off-chain worlds. They act as a tool to obtain external off-chain data into blockchains or smart contracts. External data could be TVL, token prices, interest rates, etc. Ideally, they should be decentralized. But in several protocols, centralized oracles are in work too.
<br /><br />
Timeswap gives the reason that they are not fully decentralized and if so they are susceptible to manipulation. There have been oracles attacks on Defi protocols like Compound and Harvest, where they have lost $90 Million and $24 million, respectively.
<br /><br />
Now other Defi protocols use the external information given by the exchanges for their interest rates and APYs. But Timeswap uses constant product AMM to determine the interest rates and collateral factor.
<br /><br />
With the factor of their AMM interest rates, pools have a fixed maturity. They are designed such that for borrowers who have not repaid their loans after maturity, their collateral gets proportionately distributed amongst lenders based on their insurance token holding.
<br /><br />
In near future, Timeswap aims to become a source of truth i.e. an on-chain decentralized oracle. Uniswap has been a proof that one can design efficient systems without needing external price oracles.
<br /><br />
<h6>Non-liquidatable loans
</h6><br /><br />
The loans taken by the borrower on Timeswap do not get liquidated by the protocol. So, in a typical Defi borrowing setup, the collateral gets liquidated if the borrower does not pay the debt in time. As a result, lenders get the token at a discount called a liquidation discount. But in Timeswap, if borrowers do not pay the debt before the maturity time, their collateral gets distributed to the lenders instead of being liquidated.
<br /><br />
<h6>Market-driven interest & collateral</h6>
<br /><br />
As the users interact with protocol, with the help of the equation, the interest rates, and collateral required to keep changing for each transaction. This dynamic behavior of the protocol ensures risk management and capital efficiency on the oracle-less technology as compared to other protocols.
<br /><br />
<h6>Undercollateralization</h6>
<br /><br />
Another way users can leverage the arbitrage opportunity is by under collateralization. Right now, because of the collateral factor, loans in Defi are over collateralized. You can only borrow a certain amount on your collateral based on that asset’s collateral factor. Timeswap goes against that norm by allowing undercollateralized loans. As a borrower, you can borrow from one of the markets which are under collateralized and lend that asset to another market that is enough collateralized.
<br /><br />
Under collateralization is a situation when a borrower is able to take a loan with a position such that the amount of collateral value locked is less than the amount of loan value you take from the protocol. This situation arises when CDP is low in a certain pool. Hence, their insurance coverage is also low. As a result, the lender is at high default risk. On other hand, borrowers can arbitrage this by taking out loans till the CDP maintains itself by the constant product algorithm we discussed earlier.
<br /><br />
For eg for a DAI-ETH pool on Timeswap if the CDP value is 7000 DAI per ETH it’s an undercollateralized loan position for a borrower and hence a clear arbitrage.
<br /><br />
Well, if the CDP is low then at some point it has to be back to normal too, right. So once the borrower takes out a loan, X decreases, and as a result of that Z increase (remember Z & X are inversely proportional) hence the CDP shifts to meet the prevailing market rates. Again, the algorithm taking care of itself.
<br /><br />
<h6>Customize Risk/Reward</h6>
<br /><br />
You can customize your risk and reward. The protocol provides you with the functionality to customize your own risk for each transaction of lending or borrowing.
<br /><br />
The risk gets reflected into reward i.e. Annual percentage rate (APR).
<br /><br />
For lenders, low APR means higher insurance on their collateral. And vice-versa.
<br /><br />
For borrowers, low APR means higher collateral amount locked. And vice-versa.


<br /><br />
<h6>Time Decay</h6>
<br /><br />
In a constant product design like Timeswap’s, there is a risk of impermanent loss in the time decaying assets. Even though, markets have fixed maturity. It usually occurs when the prices of tokens in constant product AMM diverge. The greater the divergence, the greater the impermanent loss. Timeswap’s AMM, however, follows a linearly decreasing time decay.
<br /><br />
As a result, the impermanent loss occurred by the time variance to the liquidity providers, they use their Y or Interest Rate Pool parameter as time-invariant.
<br /><br />
In the calculation of collateral to be locked by the borrower and the insurance value that can be claimed by a lender, the algorithm adjusts with time as d making Z or the collateral factor pool parameter as Time-Invariant.
<br /><br />

<h5>Community</h5>
<br /><br />
Timeswap has been following the community-first principle. Before launching on mainnet, they have built a sustaining, well-managed, and moderated community on Discord. They are growing strong with more than 28000 members.
<br /><br />
The community managers are helpful and responsive. Even the members of the community come forward to help each other out. 
<br /><br />
The channels are curated in a way to help new members get every information about Timeswap at first glance. Regular AMAs hosted in the community with team members have been super helpful to understanding their vision and goal too.  They have a fairly active and large community on Twitter too, with more than 21 thousand members.
<br /><br />
<h5>Conclusion</h5>
<br /><br />
Timeswap took a different approach to solve problems and their innovations are novel in the Defi ecosystem. Their vision with the promising team and community grows confidence in their innovation even further.
<br /><br />
The oracle-less design enables them to become the first fully decentralized AMM-based money market protocol. With other market makers being multi-chain, their vision also seems to be aligning with the ecosystem.
<br /><br />
In the future, their roadmap includes some exciting development on top of the current product. Ideally benefitting both the Defi ecosystem and the protocol. With the oracle-less technology, we could soon witness them being an on-chain source of truth for Defi. As per their whitepaper, there are some powerful use-cases in the future like reputation-based financing. They will allow reputation tokens like a Social token to be taken as collateral. The only obstacle right now is a good and fair mechanism to show reputation on-chain.
<br /><br />
Overall the protocol aims to overcome the current shortcomings of the Defi ecosystem and promises to continue doing so in the future. It would be interesting to see how they come around solving inefficiencies in their protocol and what lies ahead in their journey. Super exciting times ahead will definitely be exhilarating to w
                </p>
                <br />
            <br />
            <br />
            <p style={{color : "rgba(204, 238, 253, 0.884)"}}>Jan 2022</p>
            </div>
        </div>
    )
}

export default timeswap;
