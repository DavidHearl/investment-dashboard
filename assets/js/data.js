var core = [
    {
        name:"Realty Income",
        code:"O",
        sharePrice:"",
        shares:"1.966",
        value:"104.91",
        difference:"1.82",
        percent:"45.2%",
        target:"45.0%",
        annualDividend:"$2.95",
        dividendDate:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    },
    {
        name:"Vanguard",
        code:"Vusa",
        sharePrice:"",
        shares:"1.553",
        value:"104.14",
        difference:"1.63",
        percent:"44.9%",
        target:"45.0%",
        annualDividend:"$0.93",
        dividendDate:[2, 5, 8, 11]
    },
    {
        name:"Apple",
        code:"AAPL",
        sharePrice:"",
        shares:"0.171",
        value:"22.94",
        difference:"2.17",
        percent:"9.9%",
        target:"10.0%",
        annualDividend:"$0.88",
        dividendDate:[1, 4, 7, 11]
    }
]

var general = [
    {
        name:"Microsoft",
        code:"MSFT",
        sharePrice:"",
        shares:"0.501",
        value:"121.88",
        difference:"42.74",
        percent:"10.5%",
        target:"10.0%",
        annualDividend:"$2.48",
        dividendDate:[2, 5, 8, 11]
    },
    {
        name:"Amazon",
        code:"AMZN",
        sharePrice:"",
        shares:"0.013",
        value:"53.66",
        difference:"-3.26",
        percent:"4.6%",
        target:"10.0%",
        annualDividend:"---",
        dividendDate:[]
    },
    {
        name:"Coca-Cola",
        code:"KO",
        sharePrice:"",
        shares:"3.554",
        value:"158.22",
        difference:"15.52",
        percent:"13.7%",
        target:"10.0%",
        annualDividend:"$1.68",
        dividendDate:[3, 6, 9, 11]
    },
    {
        name:"3M",
        code:"MMM",
        sharePrice:"",
        shares:"0.044",
        value:"38.54",
        difference:"0.28",
        percent:"3.3%",
        target:"10.0%",
        annualDividend:"$5.92",
        dividendDate:[2, 5, 8, 11]
    },
    {
        name:"Google",
        code:"GOOGL",
        sharePrice:"",
        shares:"0.062",
        value:"132.28",
        difference:"54.34",
        percent:"11.5%",
        target:"10.0%",
        annualDividend:"---",
        dividendDate:[]
    },
    {
        name:"AT&T",
        code:"T",
        sharePrice:"",
        shares:"10.642",
        value:"201.45",
        difference:"-70.83",
        percent:"17.4%",
        target:"10.0%",
        annualDividend:"$2.08",
        dividendDate:[1, 4, 7, 10]
    },
    {
        name:"Nvidia",
        code:"NVDA",
        sharePrice:"",
        shares:"0.802",
        value:"173.49",
        difference:"88.226",
        percent:"15.0%",
        target:"10.0%",
        annualDividend:"$0.16",
        dividendDate:[2, 5, 8, 11]
    },
    {
        name:"Texas Instruments",
        code:"TXN",
        sharePrice:"",
        shares:"0.701",
        value:"98.77",
        difference:"27.01",
        percent:"8.6%",
        target:"10.0%",
        annualDividend:"$4.60",
        dividendDate:[1, 4, 7, 10]
    },
    {
        name:"Cisco Systems",
        code:"CSCO",
        sharePrice:"",
        shares:"2.729",
        value:"123.33",
        difference:"29.85",
        percent:"10.7%",
        target:"10.0%",
        annualDividend:"$1.48",
        dividendDate:[0, 3, 6, 9]
    },
    {
        name:"AMD",
        code:"AMD",
        sharePrice:"",
        shares:"0.025",
        value:"24.91",
        difference:"-2.22",
        percent:"2.2%",
        target:"5.0%",
        annualDividend:"",
        dividendDate:[]
    },
    {
        name:"Intel",
        code:"INTC",
        sharePrice:"",
        shares:"0.080",
        value:"28.70",
        difference:"1.58",
        percent:"2.5%",
        target:"5.0%",
        annualDividend:"$1.39",
        dividendDate:[2, 5, 8, 11]
    }
]

var dividend = [
    {
        name:"Pepsi",
        code:"PEP",
        sharePrice:"",
        shares:"0.039",
        value:"7.23",
        difference:"0.23",
        percent:"6.2%",
        target:"6.3%",
        annualDividend:"$4.30",
        dividendDate:[0, 2, 5, 8]
    },
    {
        name:"McDonalds",
        code:"MCD",
        sharePrice:"",
        shares:"0.025",
        value:"7.19",
        difference:"0.20",
        percent:"6.2%",
        target:"6.3%",
        annualDividend:"$5.52",
        dividendDate:[2, 5, 8, 11]
    },
    {
        name:"Caterpillar",
        code:"CAT",
        sharePrice:"",
        shares:"0.031",
        value:"7.60",
        difference:"0.42",
        percent:"6.5%",
        target:"6.3%",
        annualDividend:"$4.44",
        dividendDate:[1, 4, 7, 10]
    },
    {
        name:"International Business Machines",
        code:"IBM",
        sharePrice:"",
        shares:"0.062",
        value:"7.50",
        difference:"0.83",
        percent:"6.4%",
        target:"6.3%",
        annualDividend:"$6.56",
        dividendDate:[2, 5, 8, 11]
    },
    {
        name:"Walmart",
        code:"WMT",
        sharePrice:"",
        shares:"0.051",
        value:"7.19",
        difference:"0.24",
        percent:"6.2%",
        target:"6.3%",
        annualDividend:"$2.20",
        dividendDate:[0, 3, 5, 8]
    },
    {
        name:"Costco",
        code:"COST",
        sharePrice:"",
        shares:"0.011",
        value:"7.19",
        difference:"0.03",
        percent:"6.2%",
        target:"6.3%",
        annualDividend:"$3.16",
        dividendDate:[1, 4, 7, 10]
    },
    {
        name:"Bank of America",
        code:"BAC",
        sharePrice:"",
        shares:"0.138",
        value:"7.73",
        difference:"0.27",
        percent:"6.6%",
        target:"6.3%",
        annualDividend:"$0.84",
        dividendDate:[2, 5, 8, 11]
    },
    {
        name:"FedEx",
        code:"FDX",
        sharePrice:"",
        shares:"0.030",
        value:"6.40",
        difference:"0.50",
        percent:"6.4%",
        target:"6.3%",
        annualDividend:"$3.00",
        dividendDate:[3, 6, 9, 11]
    },
    {
        name:"Johnson & Johnson",
        code:"JNJ",
        sharePrice:"",
        shares:"0.039",
        value:"7.12",
        difference:"0.24",
        percent:"6.1%",
        target:"6.2%",
        annualDividend:"$4.24",
        dividendDate:[2, 5, 8, 11]
    },
    {
        name:"JP Morgan Chase",
        code:"JPM",
        sharePrice:"",
        shares:"0.038",
        value:"4.71",
        difference:"0.15",
        percent:"6.4%",
        target:"6.2%",
        annualDividend:"$4.00",
        dividendDate:[0, 3, 6, 9]
    },
    {
        name:"Lowe's",
        code:"LOW",
        sharePrice:"",
        shares:"0.025",
        value:"7.27",
        difference:"0.12",
        percent:"6.2%",
        target:"6.2%",
        annualDividend:"$3.20",
        dividendDate:[1, 4, 7, 10]
    },
    {
        name:"Automatic Data Processing",
        code:"ADP",
        sharePrice:"",
        shares:"0.027",
        value:"7.07",
        difference:"0.16",
        percent:"6.1%",
        target:"6.2%",
        annualDividend:"$3.72",
        dividendDate:[0, 3, 6, 9]
    },
    {
        name:"Home Depot",
        code:"HD",
        sharePrice:"",
        shares:"0.015",
        value:"7.22",
        difference:"-0.02",
        percent:"6.2%",
        target:"6.2%",
        annualDividend:"$6.60",
        dividendDate:[2, 5, 8, 11]
    },
    {
        name:"Starbucks",
        code:"SBUX",
        sharePrice:"",
        shares:"0.057",
        value:"7.01",
        difference:"-0.01",
        percent:"6.0%",
        target:"6.2%",
        annualDividend:"$1.96",
        dividendDate:[1, 4, 7, 10]
    },
    {
        name:"Nike",
        code:"NKE",
        sharePrice:"",
        shares:"0.037",
        value:"7.06",
        difference:"-0.23",
        percent:"6.0%",
        target:"6.2%",
        annualDividend:"$1.22",
        dividendDate:[0, 3, 6, 9]
    },
    {
        name:"Chevron",
        code:"CVX",
        sharePrice:"",
        shares:"0.063",
        value:"7.29",
        difference:"0.15",
        percent:"6.3%",
        target:"6.2%",
        annualDividend:"$5.36",
        dividendDate:[2, 5, 8, 11]
    }
]
