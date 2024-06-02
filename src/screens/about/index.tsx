'use client'

import { Divider } from '@/components'

export const sectionData = [
  {
    type: '80C',
    investments: [
      {
        title: 'Provident Fund (PF) & Voluntary Provident Fund (VPF)',
        description:
          'Contributions to PF, including voluntary contributions, are eligible for deductions.',
      },
      {
        title: 'Public Provident Fund (PPF)',
        description:
          'Long-term savings scheme with contributions ranging from ₹500 to ₹1,50,000, offering tax-free interest.',
      },
      {
        title: 'Life Insurance Premiums',
        description:
          'Premiums for life insurance policies for self, spouse, or children are deductible.',
      },
      {
        title: 'Equity Linked Savings Scheme (ELSS)',
        description:
          'Investments in ELSS mutual funds are eligible for tax deductions.',
      },
      {
        title: 'Home Loan Principal Repayment',
        description: 'The principal portion of home loan EMIs is deductible.',
      },
      {
        title: 'Stamp Duty and Registration Charges',
        description: 'Deductible in the year of home purchase.',
      },
      {
        title: 'National Savings Certificates (NSC)',
        description: 'Five-year investments eligible for deductions.',
      },
      {
        title: '5-Year Bank Fixed Deposits (FDs)',
        description: 'Eligible for tax deductions.',
      },
      {
        title: 'NABARD Rural Bonds',
        description: 'Qualify for deductions when available.',
      },
      {
        title: 'Unit Linked Insurance Plans (ULIPs)',
        description:
          'Combine life insurance with equity investments for tax benefits.',
      },
      {
        title: 'Education/Tuition Fees',
        description: 'Deductible for up to two children’s tuition fees.',
      },
      {
        title: 'Sukanya Samriddhi Account',
        description: 'Contributions for a girl child’s account are deductible.',
      },
    ],
  },
  {
    type: '80CCC',
    investments: [
      {
        title: 'Pension Plans',
        description:
          'Investments in certain pension plans are eligible for deductions.',
      },
    ],
  },
  {
    type: '80CCD',
    investments: [
      {
        title: 'National Pension Scheme (NPS)',
        description:
          'Contributions to NPS are eligible for deductions. An additional ₹50,000 can be claimed under Section 80CCD(1B) along with (80C + 80CCC).',
      },
    ],
  },
  {
    type: '80D',
    investments: [
      {
        title: 'Health Insurance Premiums',
        description:
          'Premiums for health insurance policies are deductible. Maximum deduction ofRs. 25000 for self or family and can claim a deduction of maximum Rs. 50000 for senior citizens.',
      },
    ],
  },
  {
    type: '80DDB',
    investments: [
      {
        title: 'Medical Treatment',
        description: 'Deductions for medical treatment of specific diseases.',
      },
    ],
  },
  {
    type: '80E',
    investments: [
      {
        title: 'Education Loan Interest',
        description:
          'Deductions for interest on education loans for self, spouse or children or student for whom the taxpayer is the legal guardian can be claimed as deduction.',
      },
    ],
  },
  {
    type: '80G',
    investments: [
      {
        title: 'Donations',
        description:
          'Donations to specified funds and charitable institutions are eligible for deductions.',
      },
    ],
  },
  {
    type: '80GGA',
    investments: [
      {
        title: 'Donations',
        description:
          'Donations to approved organizations for scientific research or rural development are deductible.',
      },
    ],
  },
  {
    type: '24',
    investments: [
      {
        title: 'Home Loan Interest',
        description: 'Deductions for interest on home loans upto Rs. 2lakh.',
      },
    ],
  },
  {
    type: '80EE',
    investments: [
      {
        title: 'First-Time Homebuyers',
        description: 'Additional deduction for first-time homebuyers.',
      },
    ],
  },
  {
    type: '10',
    investments: [
      {
        title: 'House Rent Allowance (HRA)',
        description: 'Deductions for HRA.',
      },
    ],
  },
  {
    type: '16',
    investments: [
      {
        title: 'Standard Deduction',
        description: 'Standard deduction from taxable salary.',
      },
    ],
  },
]

const AboutScreen = () => {
  return (
    <div>
      <h1 className="text-4xl font-extrabold mb-4">
        Tax Benefits and Deductions under the Income Tax Act
      </h1>

      {sectionData.map((section) => (
        <>
          <h2 className="text-red-800 text-2xl mb-4">
            Section {section.type}: Qualifying Investments
          </h2>
          <Divider />
          {section.type === '80C' && (
            <div className="pl-3">
              <p className="font-bold mb-4">
                Maximum deductions under section 80C + 80CCC + 80CCD(1) = Rs.
                1.5 lakh
              </p>
              <p className="mb-4">
                {' '}
                An extra Rs. 50000 can be claimed under Section 80CCD(1B). This
                can be done through contribution to National Pension Scheme
              </p>
              <p className="mb-4">
                <span className="font-bold text-red-600">
                  This means you can claim upto Rs. 2 Lakh
                </span>{' '}
                from:{' '}
              </p>
              <ul className="list-disc pl-10 mb-4">
                <li className="mb-4">
                  Section 80C + 80CCC + 80CCD(1): Up to Rs. 1.5 lakh
                </li>
                <li>Section 80CCD(1B): Up to Rs. 50,000</li>
              </ul>
            </div>
          )}
          <ul className="list-disc pl-6">
            {section.investments.map((investment) => (
              <li className=" mb-4">
                <strong>{investment.title}:</strong> {investment.description}
              </li>
            ))}
          </ul>
        </>
      ))}
    </div>
  )
}

export default AboutScreen
