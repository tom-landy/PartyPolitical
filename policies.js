// Policy summaries from the five GB-wide parties' manifestos for the
// UK general election of 4 July 2024. Each bullet is a short, plain-English
// paraphrase of a pledge. Slogans and brand names that would give the party
// away have been replaced with a description of what the policy does.
// Health, education and housing are devolved, so those pledges mostly apply
// to England.

window.PARTIES = {
  con: { name: "Conservative", manifesto: "Clear Plan. Bold Action. Secure Future.", colour: "#0087DC" },
  lab: { name: "Labour", manifesto: "Change", colour: "#E4003B" },
  ld:  { name: "Liberal Democrats", manifesto: "For a Fair Deal", colour: "#FAA61A" },
  ref: { name: "Reform UK", manifesto: "Our Contract with You", colour: "#12B6CF" },
  grn: { name: "Green Party", manifesto: "Real Hope. Real Change.", colour: "#02A95B" }
};

window.TOPICS = [
  {
    id: "economy",
    name: "Economy & tax",
    intro: "How the government raises money and what it does with taxes.",
    sets: {
      con: [
        "Cut National Insurance (a tax on wages) for employees by another 2p, from 8% to 6%, by April 2027.",
        "Scrap the main rate of National Insurance for self-employed people altogether.",
        "No rise in the rates of income tax, National Insurance or VAT.",
        "Shrink the civil service back to the size it was before the pandemic to save money."
      ],
      lab: [
        "No rise in the rates of income tax, National Insurance or VAT for working people.",
        "Cap corporation tax (tax on company profits) at its current 25% for the whole parliament.",
        "Close tax loopholes for people who live in the UK but say their permanent home is abroad.",
        "Set up a national fund, backed by public money, to invest in new industries such as green steel and ports."
      ],
      ld: [
        "Reverse recent tax cuts for big banks.",
        "Reform capital gains tax (tax on profits from selling assets like shares) so the very richest pay more.",
        "Put a one-off extra tax on the 'super-profits' of oil and gas companies.",
        "Raise the amount you can earn before paying income tax once the public finances allow it."
      ],
      ref: [
        "Raise the amount you can earn before paying any income tax from £12,570 to £20,000.",
        "Cut corporation tax (tax on company profits) from 25% to 20%, then to 15%.",
        "Scrap inheritance tax on estates worth under £2 million.",
        "Stop the Bank of England paying interest to commercial banks on certain reserves, saving tens of billions a year."
      ],
      grn: [
        "Bring in a wealth tax: 1% a year on wealth over £10 million and 2% on wealth over £1 billion.",
        "Tax money made from selling shares and property at the same rates as income from work.",
        "Make people earning over £50,270 pay the full rate of National Insurance on all their earnings.",
        "Invest an extra £40 billion a year in the green economy, paid for by higher taxes on the wealthy."
      ]
    }
  },
  {
    id: "health",
    name: "Health & social care",
    intro: "The NHS, waiting lists, GPs, dentists and care for older people.",
    sets: {
      con: [
        "Increase NHS spending by more than inflation every year.",
        "Recruit 92,000 more nurses and 28,000 more doctors over the parliament.",
        "Build or modernise 250 GP surgeries and let pharmacies treat more common illnesses.",
        "Bring in a law so that anyone born on or after 1 January 2009 can never legally be sold cigarettes."
      ],
      lab: [
        "Provide 40,000 extra NHS appointments every week by opening evenings and weekends.",
        "Double the number of CT and MRI scanners so cancer is spotted sooner.",
        "Recruit 8,500 extra mental health staff and provide 700,000 more urgent dental appointments.",
        "Ban junk food adverts aimed at children and ban selling high-caffeine energy drinks to under-16s."
      ],
      ld: [
        "Give everyone the right to see a GP within 7 days, or within 24 hours if it is urgent.",
        "Recruit 8,000 more GPs.",
        "Make personal care (help with washing, dressing and eating) free for older and disabled people in England.",
        "Pay care workers at least £2 an hour above the minimum wage."
      ],
      ref: [
        "Aim to get NHS waiting lists down to zero within two years, using private hospitals where needed.",
        "Give people 20% tax relief on private health care and health insurance.",
        "Give patients a voucher for private treatment if they cannot see a GP within 3 days or a specialist within 3 weeks.",
        "Let frontline NHS and social care staff pay no basic-rate income tax for three years."
      ],
      grn: [
        "Increase day-to-day NHS spending by £8 billion in the first year.",
        "Bring services run by private companies back into the NHS.",
        "Make personal care free for older and disabled people.",
        "Restore NHS dentistry so everyone can get an NHS dentist."
      ]
    }
  },
  {
    id: "education",
    name: "Education",
    intro: "Schools, exams, universities and apprenticeships.",
    sets: {
      con: [
        "Replace A-levels and T-levels with a new qualification where students study more subjects, including maths and English, to 18.",
        "Make the rules banning mobile phones in schools legally binding.",
        "Close the worst-performing university courses and use the money to fund 100,000 more apprenticeships a year.",
        "Give parents the right to see what their children are taught in sex education lessons."
      ],
      lab: [
        "Recruit 6,500 new teachers, paid for by charging VAT on private school fees.",
        "Offer free breakfast clubs in every primary school.",
        "Replace one-word Ofsted grades (like 'Outstanding') with a fuller report card for each school.",
        "Give every school access to specialist mental health support."
      ],
      ld: [
        "Put a qualified mental health professional in every school.",
        "Guarantee extra tutoring for every disadvantaged pupil who needs it.",
        "Give free school meals to every child living in poverty.",
        "Replace Ofsted with a new independent school inspection body."
      ],
      ref: [
        "Ban the teaching of 'transgender ideology' in primary and secondary schools.",
        "Scrap interest on student loans and spread repayments over a longer period.",
        "Not charge VAT on private school fees.",
        "Write off student debt for doctors, nurses and medical staff who work in the NHS for 10 years."
      ],
      grn: [
        "Scrap university tuition fees in England and bring back grants for living costs.",
        "Put an extra £8 billion into schools.",
        "Bring academies and free schools back under local council control.",
        "Replace Ofsted inspections with a more supportive system run with schools and councils."
      ]
    }
  },
  {
    id: "immigration",
    name: "Immigration & asylum",
    intro: "Who can come to live and work in the UK, and how asylum claims are handled.",
    sets: {
      con: [
        "Send people who arrive illegally to Rwanda, with regular flights until small boat crossings stop.",
        "Set a legal cap on work and family visas that goes down every year.",
        "Leave the European Convention on Human Rights if it blocks removing people who arrive illegally.",
        "Raise the minimum salary needed for a skilled worker visa."
      ],
      lab: [
        "Set up a new border security command with counter-terror powers to go after people-smuggling gangs.",
        "Scrap the scheme to send asylum seekers to Rwanda and spend the money on border security.",
        "Hire more caseworkers to clear the backlog of asylum claims.",
        "Bring net migration down by training more UK workers, so businesses rely less on overseas staff."
      ],
      ld: [
        "Scrap the scheme to send asylum seekers to Rwanda.",
        "Create safe and legal routes for refugees to reach the UK.",
        "Let asylum seekers work if they have waited more than three months for a decision.",
        "Take work visa decisions away from the Home Office and give them to a new specialist unit."
      ],
      ref: [
        "Freeze all non-essential immigration.",
        "Leave the European Convention on Human Rights.",
        "Pick up people crossing the Channel in small boats and take them back to France.",
        "Charge employers a higher National Insurance rate of 20% for staff recruited from abroad."
      ],
      grn: [
        "Scrap the scheme to send asylum seekers to Rwanda.",
        "Create safe and legal routes for refugees.",
        "Let asylum seekers work while they wait for a decision.",
        "Cut the cost of visas and end rules that stop many migrants getting any benefits."
      ]
    }
  },
  {
    id: "housing",
    name: "Housing",
    intro: "Building homes, buying a first home and renting.",
    sets: {
      con: [
        "Build 1.6 million homes in England over the parliament, while protecting the green belt.",
        "Scrap stamp duty (a tax on buying a home) for first-time buyers on homes up to £425,000.",
        "Bring in a new scheme to help first-time buyers with a deposit for a new-build home.",
        "Ban 'no-fault' evictions, once the courts have been reformed."
      ],
      lab: [
        "Build 1.5 million homes over the parliament, including a new generation of new towns.",
        "Change planning rules so more homes can be built, including on poor-quality green belt land.",
        "Ban 'no-fault' evictions straight away.",
        "Bring in a permanent mortgage guarantee to help first-time buyers with small deposits."
      ],
      ld: [
        "Build 380,000 homes a year, including 150,000 social homes for rent.",
        "Ban 'no-fault' evictions straight away.",
        "Build ten new 'garden cities' with green spaces and good transport.",
        "Bring in a 'rent to own' scheme so rent payments help people own their home."
      ],
      ref: [
        "Scrap stamp duty (a tax on buying a home) on homes worth under £750,000.",
        "Cut planning red tape and give tax breaks to build on brownfield (previously used) land.",
        "Give social housing priority to local people and those who have paid into the system.",
        "Reduce demand for housing by cutting immigration."
      ],
      grn: [
        "Build 150,000 new social homes for rent every year.",
        "Give councils the power to control how much rents can go up.",
        "End the 'Right to Buy' scheme that lets council tenants buy their homes.",
        "Ban 'no-fault' evictions."
      ]
    }
  },
  {
    id: "environment",
    name: "Environment & energy",
    intro: "Climate change, energy supply and pollution.",
    sets: {
      con: [
        "Reach net zero (no extra greenhouse gases) by 2050, without adding new green taxes on families.",
        "Hold a round of new North Sea oil and gas licences every year.",
        "Build new gas power stations and new nuclear power, alongside more offshore wind.",
        "Rule out pay-per-mile road charges and stop new low-traffic schemes being forced on communities."
      ],
      lab: [
        "Set up a publicly owned clean energy company, funded with £8.3 billion.",
        "Make the UK's electricity clean (no fossil fuels) by 2030.",
        "Issue no new North Sea oil and gas licences, but keep existing ones running.",
        "Put failing water companies under special measures and ban bonuses for bosses who pollute rivers."
      ],
      ld: [
        "Make 90% of the UK's electricity renewable by 2030 and reach net zero by 2045.",
        "Give free insulation and heat pumps to low-income households.",
        "Replace the water industry regulator and ban bonuses for water bosses until sewage dumping ends.",
        "Turn water companies into public benefit companies that must put the environment first."
      ],
      ref: [
        "Scrap net zero targets and the subsidies that go with them, saving money on energy bills.",
        "Fast-track new licences for North Sea oil and gas.",
        "Fast-track new nuclear power, including small modular reactors.",
        "Plant more trees and cut single-use plastics."
      ],
      grn: [
        "Reach net zero by 2040.",
        "Ban all new oil and gas projects and cancel recently approved ones.",
        "Get 70% of electricity from wind by 2030 and spend £29 billion insulating homes.",
        "Bring water companies into public ownership."
      ]
    }
  },
  {
    id: "crime",
    name: "Crime & justice",
    intro: "Policing, prisons, knife crime and drugs.",
    sets: {
      con: [
        "Recruit 8,000 more police officers dedicated to local neighbourhoods.",
        "Build more prison places and make the worst murderers spend their whole life in prison.",
        "Make it easier to deport foreign criminals.",
        "Expand police use of live facial recognition technology."
      ],
      lab: [
        "Put 13,000 more police officers and community support officers on local streets.",
        "Aim to halve knife crime and violence against women and girls within ten years.",
        "Ban ninja swords and other dangerous blades.",
        "Bring in 'Respect Orders' to ban repeat anti-social behaviour offenders from town centres."
      ],
      ld: [
        "Bring back proper community policing, with officers who are visible and trusted locally.",
        "Scrap elected Police and Crime Commissioners and spend the money on policing.",
        "Treat drug use as a health issue, moving drugs policy to the Department of Health.",
        "Make tackling violence against women and girls a national priority."
      ],
      ref: [
        "Recruit 40,000 more police officers within five years.",
        "Bring in zero-tolerance policing of all crime, including anti-social behaviour.",
        "Build 10,000 new prison places.",
        "Deport foreign criminals."
      ],
      grn: [
        "Stop treating possession of drugs for personal use as a crime, and create a legal, regulated market for cannabis.",
        "Invest in community policing and youth services to stop crime before it happens.",
        "Focus on rehabilitation and use fewer short prison sentences.",
        "Make tackling violence against women and girls a priority."
      ]
    }
  },
  {
    id: "welfare",
    name: "Cost of living & welfare",
    intro: "Wages, benefits, pensions and help with bills.",
    sets: {
      con: [
        "Cut £12 billion from the welfare bill by tightening the rules on sickness and disability benefits.",
        "Keep raising the State Pension by the highest of prices, wages or 2.5%, and raise pensioners' tax-free allowance too.",
        "Raise the household income at which families start losing Child Benefit to £120,000.",
        "Extend 30 hours of free childcare to working parents of children from nine months old."
      ],
      lab: [
        "Ban exploitative zero-hours contracts and 'fire and rehire' practices.",
        "Pay all adults the same minimum wage, removing the lower rates for younger workers.",
        "Keep raising the State Pension by the highest of prices, wages or 2.5%.",
        "Review Universal Credit so it does more to make work pay and cut reliance on food banks."
      ],
      ld: [
        "Scrap the two-child limit, which stops families getting benefits for a third child.",
        "Scrap the cap on the total benefits a household can get.",
        "Raise Carer's Allowance and support unpaid carers.",
        "End the five-week wait for a first Universal Credit payment."
      ],
      ref: [
        "Scrap VAT on energy bills.",
        "Lift the income tax threshold to £20,000 so low earners pay less tax.",
        "Require people who can work to take up job offers or lose benefits.",
        "Scrap green levies on energy bills."
      ],
      grn: [
        "Raise the minimum wage to £15 an hour for everyone, whatever their age.",
        "Scrap the two-child limit on benefits.",
        "Increase Universal Credit by £40 a week.",
        "Move towards a Universal Basic Income, a regular payment to every adult."
      ]
    }
  },
  {
    id: "defence",
    name: "Defence & foreign policy",
    intro: "The armed forces, Europe, aid and the UK's place in the world.",
    sets: {
      con: [
        "Raise defence spending to 2.5% of national income by 2030.",
        "Give Ukraine £3 billion of military support every year for as long as it is needed.",
        "Keep the UK's nuclear weapons.",
        "Bring in compulsory National Service for 18-year-olds: a year in the armed forces, or volunteering one weekend a month."
      ],
      lab: [
        "Raise defence spending to 2.5% of national income as soon as money allows.",
        "Improve the UK's relationship with the EU, but not rejoin the EU, its single market or freedom of movement.",
        "Recognise a Palestinian state as part of a peace process.",
        "Keep the UK's nuclear weapons and keep supporting Ukraine."
      ],
      ld: [
        "Rebuild ties with the EU and, in the long run, rejoin the EU single market.",
        "Agree a youth mobility scheme so young people can live and work in EU countries.",
        "Seize frozen Russian assets and use them to help rebuild Ukraine.",
        "Restore overseas aid spending to 0.7% of national income."
      ],
      ref: [
        "Raise defence spending to 2.5% of national income within three years, then 3% within six years.",
        "Cut overseas aid spending in half.",
        "Scrap the remaining EU-made laws still in force in the UK.",
        "Leave the European Convention on Human Rights."
      ],
      grn: [
        "Rejoin the EU when the conditions are right.",
        "Scrap the UK's nuclear weapons.",
        "Call for an immediate ceasefire in Gaza and end UK arms sales to Israel.",
        "Restore overseas aid spending to 0.7% of national income."
      ]
    }
  },
  {
    id: "democracy",
    name: "Democracy",
    intro: "How we vote, who can vote, and how Parliament works.",
    sets: {
      con: [
        "Keep 'first past the post', where the candidate with the most votes in each area wins.",
        "Keep the voting age at 18.",
        "Keep the rule that voters must show photo ID at polling stations.",
        "Change equality law to make clear that 'sex' means biological sex."
      ],
      lab: [
        "Lower the voting age to 16 for all elections.",
        "Remove the remaining hereditary peers from the House of Lords and bring in a retirement age of 80.",
        "Stop MPs taking paid jobs as consultants or lobbyists.",
        "Tighten the rules on political donations to stop foreign interference."
      ],
      ld: [
        "Bring in proportional representation, so seats in Parliament match the share of votes each party gets.",
        "Lower the voting age to 16.",
        "Replace the House of Lords with an elected chamber.",
        "Cap how much money any person or company can give to a political party."
      ],
      ref: [
        "Replace 'first past the post' with proportional representation.",
        "Replace the House of Lords with a smaller elected second chamber.",
        "Scrap the BBC licence fee.",
        "Scrap the Equality Act, which it says limits free speech."
      ],
      grn: [
        "Bring in proportional representation for all elections.",
        "Lower the voting age to 16.",
        "Replace the House of Lords with an elected chamber.",
        "Give all long-term UK residents the right to vote."
      ]
    }
  }
];
