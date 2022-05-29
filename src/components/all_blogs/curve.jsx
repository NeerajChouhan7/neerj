import React from 'react';
import { Link } from 'react-router-dom';

function curve(){
    return (
        <div className='container mx-auto text-start mt-5'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li className="breadcrumb-item" aria-current="page"><Link to='/essays'>Essays</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Curve Finance</li>
                </ol>
            </nav>
            <div className='content-div'>
                <span className="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-placement="right"data-bs-trigger="hover focus" data-bs-content="18 May 2022">
                    <h1 className='heading strong bold'>Curve finance</h1>
                </span>
                <p>
                Curve is a decentralized exchange powered by automated market maker (AMM) to maximize monetary efficiency for users and protocol.
                <br /><br/>
It is a prominent name in AMMs in Defi. Evidently, one of the most profitable and growing stablecoin DEX. It has more than $10 Billion in TVL, as of this writing.
<br /><br/>
Curve is using liquidity pools for instant transactions with low slippage and transaction fees. It achieves this efficiency by focusing on stablecoins and also implementing the StableSwap variant to create a cross-market for stablecoins. Which we will learn more about later on.
<br /><br/>
<h1>A little backstory</h1><br />
Michael Egorov had been an active Defi user since late 2018. While he was working on his previous venture NuCypher, a cryptographic infrastructure company. He understood the pain of not being able to swap stablecoins. Which, inspired by liquid staking, led to Curve’s algorithm and eventually launching of the protocol.
<br /><br/>
In November 2019, Michael released the StableSwap whitepaper. Which became the foundation of the Curve protocol that was launched just two months after that in January 2020. Afterward, with the launch of AMM with the dynamic peg on June 9, 2021, Curve released the v2.
<br /><br/>
<h1>Curve v1</h1>
<br />
On its launch, Curve had the sole purpose of efficient stablecoin swapping. In this case, the stablecoins we are referring to are the tokens that are a stable representation of each other. That increases the total addressable market for Curve since the protocol will not be bound to only USD-pegged stablecoins. And that was the goal of the team since its inception.
<br /><br/>
It uses the mechanism involving a liquidity pool to achieve the desired outcomes. 
<br /><br/>
Liquidity pools are stores of tokens in a smart contract that can be traded and withdrawn based on the preset rules without any human intervention.
<br /><br/>
Liquidity providers or LPs provide funds to the pools for a reward in return. The reward is based on the trades happening in that particular pool. Each trade on Curve has a requisite protocol fee. 
<br /><br/>
However, withdrawals and deposits are charged somewhere between 0% and 0.02%. Users can also depository USDC and withdraw DAI, If the fee is 0%. Balanced deposits or withdrawals are free. Also, the swap fees are 0.04%.
<br /><br/>
Each liquidity provider gets split from fees earned by the protocol. Hence the return for LPs on every pool is based on the volume of trade facilitated in a certain amount of time.
<br /><br/>
<h1>Curve v2</h1>
<br />
With v2, Curve went on to challenge the historical and well-established AMMs in the Defi. By releasing the AMM for volatile assets with dynamic peg. 
<br /><br/>
After Uniswap’s famous algorithm invariant, Curve released the v1 which had the prerequisite of keeping the pricing of assets close to 1.0 or basically, constantly tending towards the same price. Which was only for the pegged assets.
<br /><br/>
In the v2 whitepaper, Curve mentions the method for creating liquidity for unpegged assets which is more efficient than the typical “constant product” method. It creates 5-10 times higher liquidity with higher profits for LPs. They are achieving this at the moment by concentrating liquidity given by the current “internal oracle” price but only moving that price when the loss is smaller than part of the profit which the system makes.
<br /><br/>
To make it simpler, the algorithm identifies an internal price peg based on trading on the platform. Then it concentrates the liquidity around that peg. The peg is dynamic. But it will only move if moving doesn’t cause liquidity providers to incur too much loss.
<br /><br/>
Tricrypto (WETH/WBTC/USDT) is the first pool launched on Ethereum and on the Polygon network; the first pool has AAVE tokens and can handle swaps with DAI/USDC/USDT/ETH/WBTC tokens.
<br /><br/>
<h1>Governance & Curve DAO</h1>
<br />
In August 2020, Curve launched CurveDAO with CRV token consisting of multiple smart contracts connected by Aragon. A major goal in mind is to incentivize liquidity providers on the protocol to get users involved in the governance. In the DAO voting, the vote is both amount and time-weighted. 
<br /><br/>
There is a total of 3.03B $CRV in circulation. $CRV had quite an exciting launch. Right before the launch, somebody with the anonymous name “‘0xc4ad” released the token because the code was available on Curve GitHub repo.
<br /><br/>
Right now, $CRV serves three main purposes: voting, staking, and boosting. All of them will need you to vote, lock your CRV, and acquire veCRV. Which basically stands for vote-escrowed CRV.
<br /><br/>
It can be staked to receive trading fees from the protocol. After vote-locking their veCRV, $CRV holders can start voting on DAO proposals and pool parameters. Boosting refers to basically boosting your rewards on provided liquidity up to 2.5x.
<br /><br/>
Curve v2 & Uniswap v3 were some of the mainstream innovations happening at the edge of Defi. It is no doubt that these serve as Lego building blocks for upcoming and updated versions of Defi protocols. Hence, it becomes more important and necessary for these protocols to keep innovating and even more important to make sure of interoperability of their new launches. 
<br /><br/>

                </p>           
<br />
<br/>
            <p style={{color : "rgba(204, 238, 253, 0.884)"}}>May 2022</p>
        </div>
        </div>
    )
}
 
export default curve;