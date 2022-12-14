app.controller("flashController", [
  "$scope",
  "$rootScope",
  "$timeout",
  function ($scope, $rootScope, $timeout) {
    var self = $scope;

    const options = {
      effect: "cards",
      grabCursor: true,
      centeredSlides: true,
      slideActiveClass: "swiper-slide-active",
      rewind: true,
      navigation: {
        nextEl: ".next-button",
        prevEl: ".prev-button",
      },
      cardsEffect: {
        perSlideOffset: 4,
        perSlideRotate: 2,
        slideShadows: true,
      },
    };
    var swiper = new Swiper(".mySwiper", options);
    self.demoData = [
      {
        title: "Demo Title",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aperiam perspiciatis aut excepturi odio accusantium ex iusto vitae, repellendus nesciunt alias veniam nemo ut quia ipsum vero assumenda? Cupiditate, laboriosam.",
      },
      {
        title: "Demo Title",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aperiam perspiciatis aut excepturi odio accusantium ex iusto vitae, repellendus nesciunt alias veniam nemo ut quia ipsum vero assumenda? Cupiditate, laboriosam.",
      },
      {
        title: "Demo Title",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aperiam perspiciatis aut excepturi odio accusantium ex iusto vitae, repellendus nesciunt alias veniam nemo ut quia ipsum vero assumenda? Cupiditate, laboriosam.",
      },
    ];
    self.cardContent = [
      {
        title: "Simple Agreement for Future Equity (SAFE)",
        description:
          "SAFE is usually termed as an equity derivative contract that converts the initial capital invested into the future stock of the company, based on contractual terms and conditions. Start-ups may prefer SAFE notes because, unlike convertible notes, they are not debt and therefore do not accrue interest (though for Indian legal compliance purposes, SAFE notes carry a non-cumulative dividend @ 0.0001% and are shown as CCPS).",
      },
      {
        title: "Convertible Notes (CN)",
        description:
          "CNs are issued as a ???debt instrument??? in the form of a loan. It can be issued only by a DPIIT-registered and recognized start-up company. These are issued initially as a debt, which is repayable at the option of the CN-holder. This instrument has proved to be less broad and user-friendly owing to the lack of numerous compliance requirements.",
      },
      {
        title: "Compulsorily Convertible Debentures (CCDs)",
        description:
          "CCDs are hybrid securities as they are issued as debts but are compulsorily converted to equity shares of the issuing companies. Unlike Convertible Notes, CCDs can be issued by any private limited company. Section 71(1) of the Companies Act, 2013 authorizes a company to issue CCDs. According to the RBI Guidelines, they are treated as equity for all financial statements and records but not as Share Capital of the Company.",
      },
      {
        title: "Compulsory Convertible Preference Shares (CCPS)",
        description:
          "CCPS offers fixed dividends in priority and compulsorily converted into equity shares at a predetermined event, not more than 20 years. These are the preferred choice and most favoured amongst investors mainly for two reasons, i.e., the dividend is first paid to preference shareholders, senior to equity or common shareholders and they are also given priority in the event of liquidation.",
      },
      {
        title: "Community Stock Option Pool (CSOP)",
        description:
          "CSOPs are options that have the same financial rights as equity shares but no voting rights. It is purely a contractual agreement entered into between the startup and the investor for benefitting the investor from the financial benefits linked to the equity issued by the company.",
      },
      {
        title: "Stock Appreciation Rights (SARs)",
        description:
          "A SAR or Phantom Shares is generally defined as the right to receive the benefit of the increase or appreciation in the value of company stock and it has been specifically defined by SEBI under Regulation 2 (1) (zf) of SEBI (Share Based Employee Benefits) Regulations, 2014. A SAR is normally paid in cash, although it could also be settled in the equivalent value of a stock",
      },
      {
        title: "What is anti-dilution protection?",
        description:
          "Ensure investors' share values are protected against a 'down round.' This could be a deal maker or a deal breaker depending on how the founder raises money in the future.Protection can be altered by a future investor.",
      },
      {
        title: "What is B2B?",
        description:
          "A company whose business model involves selling products or services directly to businesses. RazorPay offers a payment gateway to small businesses.",
      },
      {
        title: "What is B2C?",
        description:
          "A company whose business model involves selling products or services directly to individual consumers. Swiggy sells its delivery services directly to consumers and charges a fee.",
      },
      {
        title: "What is a benchmark?",
        description:
          "A standard or point of reference in measuring or judging the current value or success of your company in order to determine your future business plans. You could compare the Phone Pe and GPay; such as transactions they serve or customers they onboard.",
      },
      {
        title: "What is burn rate?",
        description:
          "The monthly rate at which a new company spends its initial capital to finance overheads before generating positive cash flow. For example, if a company is said to have a burn rate of ???10 Lacs, it means the company is spending ???10 Lacs per month.",
      },
      {
        title: "What is a runway?",
        description:
          "The months remaining that the company can afford to operate given the burn rate, revenue per month and money in the bank to cover operational costs.",
      },
      {
        title: "What is churn rate?",
        description:
          "<ul><li>The annual percentage rate at which customers stop subscribing to a service.</li><li>Customer Churn Rate = (Customers beginning of month ??? Customers end of month) / Customers beginning of month.</li>",
      },
      {
        title: "What is Net-burn?",
        description:
          "The burn rate of a company that also takes positive cash flows (revenues) into account is called net-burn. Example: If a company burns ???50L a month in expenses and has ???5L in revenue, the net-burn is (???50L-???5L) = ???45L a month.",
      },
      {
        title: "What is Margin (in business)?",
        description:
          "The difference between the seller???s cost of goods sold (COGS) and the sales price (revenue), expressed as a percentage. Example: If selling a single item costs the seller ???40, and they sell it for ???100, the profit is ???60, which is a 60% margin (margin = profit / revenue).",
      },
      {
        title: "What is drag along?",
        description:
          "A drag-along right is a provision that enables a majority shareholder to force a minority shareholder to join in the sale of a company.",
      },
      {
        title: "What is dilution?",
        description:
          "This occurs when a company issues additional shares to new investors and as a result the earnings per share and the book value per share decline.",
      },
      {
        title: "What is due diligence?",
        description:
          "A comprehensive review of a business undertaken by a prospective buyer or investor. When assessing startup pitch decks, investors review the problem, founding team and key metrics among other things.",
      },
      {
        title: "What is an MVP?",
        description:
          "Minimal Viable Product (MVP) is a version of a product with just enough features to satisfy early customers.",
      },
      {
        title: "What is a post-money valuation?",
        description:
          "<ul><li>The value of a company after receiving external funding or the latest round of funding.</li><li>Example: A company is raising ???10L at a ??? 40L pre-money valuation. ???40L is the pre-money valuation, and ???50L would be the post-money valuation (???10L+???4L).</li></ul>",
      },
      {
        title: "What is a pre-money valuation?",
        description:
          "<ul><li>The value of a company prior to receiving external funding or the latest round of funding.</li><li>An early-stage valuation can vary depending on factors such as a company's performance, comparable exits in the market, and its founding team.</li><li>Generally, this determines the share price of a startup and the share ownership investors will receive.</li></ul>",
      },
      {
        title: "What is pre-seed?",
        description:
          "<ul><li>Often treated as the first round of funding from family and friends and/ or angel investors.</li><li>Investing at pre-seed is usually high risk as the startup hasn???t found product/market fit and there is a high risk of failure in the first 2 years of starting a business.</li></ul>",
      },
      {
        title: "What is SAFE?",
        description:
          "<ul><li>YC developed a convertible note called a SAFE (simple agreement for future equity) that provides rights to the investor for future equity in the company.</li><li>For early-stage deals, SAFEs ease the funding process</li></ul>",
      },
      {
        title: "What is an exit?",
        description:
          "A liquidation event (sometimes an option, sometimes an obligation) where an investor can cash out on their investment which could be initial public offerings (IPO), merger and acquisitions (M&A), private equity (PE) buyouts, and dividend, royalty, or buybacks.",
      },
      {
        title: "What is Traction?",
        description:
          "<ul><li>Traction is proof, often via paying customers and users, that a given business solution meets a particular customer???s needs by solving a problem.</li><li>Example: Company may have 10 registered users in its first month, but by the end of its sixth month, that number may reach 100, indicating growth by 10X traction.</li></ul>",
      },
      {
        title: "What is CAP TABLE",
        description:
          "<ul><li>Capitalization tables show the equity ownership percentages of founders, owners, and other investors.</li><li>Cap table helps companies' founders and investors make better business decisions. </li></ul>",
      },
      {
        title: "What is Customer Acquisition Cost (CAC)?",
        description:
          "<ul><li>The Customer Acquisition Cost (CAC) is the per-user cost for the company to market and attract a new customer. It is the total marketing and acquisition budget spent, divided by the number of new customers gained, over a specified time period</li><li>Example: If the company spends ???1L and resulted in 1000 new paying customers in the past month, the CAC would be ???100000/1000 = ???100.</li></ul>",
      },
      {
        title: "What is BRIDGE ROUND",
        description:
          "<ul><li>An interim funding round occurs between two larger funding rounds.</li><li>Bridge rounds can be indicative of startup difficulties.</li><li>Typically, they are structured as convertible debt.</li></ul>",
      },
    ];
  },
]);
