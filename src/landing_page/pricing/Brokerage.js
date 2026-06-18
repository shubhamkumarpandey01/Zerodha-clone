import React from 'react';

function Brokerage() {
    return ( 
        <div className="container">
            
            
                <div className="row p-5 mt-5 text-center border-top">
                <div className="col-6 p-5">
                    <h4>Charges Explained</h4>
                    <p>Securities/Commodities transaction tax</p>
                    <h15><p>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>

<p>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>

<h6>Transaction/Turnover Charges</h6>

<p>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>

<p>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>

<p>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>

<p>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>

<p>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>

<h6>Call & trade</h6>

<p>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>

<h6>Stamp charges</h6>

<p>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>

<h6>NRI brokerage charges</h6>

<p>For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).
For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).
₹500 + GST as yearly account maintenance charges (AMC) charges.</p>
<h6>Account with debit balance</h6>

<p>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>

<p>Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>

<p>Equity and Futures - ₹10 per crore + GST of the traded value.</p>
<p>Options - ₹50 per crore + GST traded value (premium value).
Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</p>
<h6>Margin Trading Facility (MTF)</h6>

<p>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.
MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.
MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</p></h15>
                </div>
                 <div className="col-6 p-5">
                    <h3>GST</h3>
                    <h15><p>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>

<h7>SEBI Charges</h7>

<p>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>

<h7>DP (Depository participant) charges</h7>

<p>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>

<p>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.

Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>

<h7>Pledging charges

₹30 + GST per pledge request per ISIN.</h7>

A<p>MC (Account maintenance charges)

For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, Click here

For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, Click here</p>

<p>Corporate action order charges

₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.

Off-market transfer charges

₹25 per transaction.</p>

<p>Physical CMR request

First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.

Payment gateway charges</p>

₹9 + GST (Not levied on transfers done via UPI)

Delayed Payment Charges

<p>Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. Learn more.</p>

<p>Trading using 3-in-1 account with block functionality</p>

<p>Delivery & MTF Brokerage: 0.5% per executed order.
Intraday Brokerage: 0.05% per executed order.</p></h15></div> 
            </div>
        </div> 
     );
}

export default Brokerage;